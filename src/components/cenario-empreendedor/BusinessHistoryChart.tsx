import { useState } from 'react';
import type { BusinessHistory } from '../../types/business';
import { balance, formatBalance, formatMonth, formatNumber } from '../../services/businessRules';

export function BusinessHistoryChart({ history, movement = false }: { history: BusinessHistory[]; movement?: boolean }) {
  const [chosen, setChosen] = useState<string>('');
  const id = movement ? 'movement' : 'evolution';
  const selected = history.find(row => row.mes === chosen) ?? history[history.length - 1];
  const numbers = history.flatMap(row => movement ? [row.aberturas, row.baixas] : [row.ativos]).filter((value): value is number => value !== null);
  const min = movement || !numbers.length ? 0 : Math.floor((Math.min(...numbers) - 200) / 1000) * 1000;
  const max = Math.max(min + 1000, Math.ceil(Math.max(0, ...numbers) / (movement ? 400 : 1000)) * (movement ? 400 : 1000));
  const lower = Math.max(0, min);
  const step = 900 / Math.max(1, history.length);
  const x = (index: number) => step * (index + .5);
  const y = (value: number) => 224 - (value - lower) / (max - lower) * 208;
  const path = history.map((row, index) => row.ativos === null ? '' : `${index === 0 || history[index - 1].ativos === null ? 'M' : 'L'} ${x(index)} ${y(row.ativos)}`).join(' ');
  const selectMonth = (month: string) => setChosen(month);
  return <section className="card min-w-0" aria-labelledby={`${id}-title`}>
    <div className="flex flex-wrap items-start justify-between gap-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-ocean">{movement ? 'Fluxo de negócios' : 'Série histórica'}</p>
        <h2 id={`${id}-title`} className="mt-2 text-xl font-bold text-navy sm:text-2xl">{movement ? 'Movimentação empresarial' : 'Evolução de estabelecimentos ativos'}</h2>
        {!!history.length && <p className="mt-2 text-sm text-slate-500">{formatMonth(history[0].mes)} a {formatMonth(history[history.length - 1].mes)}</p>}
      </div>
      {!!history.length && <div>
        <label htmlFor={`${id}-month`} className="mb-1 block text-xs font-semibold text-slate-600">Consultar mês</label>
        <select id={`${id}-month`} value={selected.mes} onChange={(event: { target: { value: string } }) => selectMonth(event.target.value)} className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-navy focus-visible:outline-ocean">
          {history.map(row => <option key={row.mes} value={row.mes}>{formatMonth(row.mes)}</option>)}
        </select>
      </div>}
    </div>
    {!history.length ? <p className="mt-6 text-sm text-slate-600">Dados ainda não disponíveis para esta competência.</p> : <>
      {movement && <div className="mt-5 flex flex-wrap gap-5 text-xs font-semibold text-slate-600"><span className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-navy" />Aberturas (sólido)</span><span className="flex items-center gap-2"><span className="business-hatch h-3 w-3 rounded-sm border border-slate-500" />Baixas (hachurado)</span></div>}
      <div className="mt-6 grid grid-cols-[42px_minmax(0,1fr)] gap-2" aria-label={movement ? 'Gráfico de colunas agrupadas' : 'Gráfico de linha'}>
        <div className="relative h-60 text-right text-[11px] tabular-nums text-slate-500" aria-hidden="true">
          {[0, 1, 2, 3, 4].map(tick => <span key={tick} className="absolute right-0 -translate-y-1/2" style={{ top: `${16 + tick * 52}px` }}>{formatNumber(Math.round(max - (max - lower) * tick / 4))}</span>)}
        </div>
        <div className="min-w-0">
          <svg className="business-plot h-60 w-full overflow-visible" viewBox="0 0 900 240" preserveAspectRatio="none" role="group" aria-label={`${movement ? 'Aberturas e baixas' : 'Estabelecimentos ativos'} por mês; selecione um ponto ou use Consultar mês`}>
            <defs><pattern id="business-closures" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="#e2e6f0" /><path d="M0 7 L7 0" stroke="#64748b" strokeWidth="2" /></pattern></defs>
            {[0, 1, 2, 3, 4].map(tick => <line key={tick} x1="0" x2="900" y1={16 + tick * 52} y2={16 + tick * 52} stroke="#e2e6f0" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />)}
            {!movement && <path d={path} fill="none" stroke="#223dd6" strokeWidth="3" vectorEffect="non-scaling-stroke" />}
            {history.map((row, index) => <g key={row.mes} tabIndex={0} role="button" aria-pressed={row.mes === selected.mes} aria-label={`${formatMonth(row.mes)}: ${movement ? `${formatNumber(row.aberturas)} aberturas, ${formatNumber(row.baixas)} baixas, saldo ${formatBalance(balance(row.aberturas, row.baixas))}` : `${formatNumber(row.ativos)} estabelecimentos ativos`}`} onFocus={() => selectMonth(row.mes)} onMouseEnter={() => selectMonth(row.mes)} onClick={() => selectMonth(row.mes)} onKeyDown={(event: { key: string; preventDefault: () => void }) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectMonth(row.mes); } }}>
              <title>{`${formatMonth(row.mes)}: ${movement ? `${formatNumber(row.aberturas)} aberturas; ${formatNumber(row.baixas)} baixas` : `${formatNumber(row.ativos)} estabelecimentos ativos`}`}</title>
              <rect x={index * step} y="0" width={step} height="240" fill={selected.mes === row.mes ? '#0033a5' : 'transparent'} fillOpacity="0.045" />
              {movement ? <>
                {row.aberturas !== null && <rect x={x(index) - step * .32} y={y(row.aberturas)} width={step * .28} height={224 - y(row.aberturas)} rx="2" fill="#0033a5" />}
                {row.baixas !== null && <rect x={x(index) + step * .04} y={y(row.baixas)} width={step * .28} height={224 - y(row.baixas)} rx="2" fill="url(#business-closures)" stroke="#64748b" vectorEffect="non-scaling-stroke" />}
              </> : row.ativos !== null && <circle cx={x(index)} cy={y(row.ativos)} r={selected.mes === row.mes ? 6 : 4} fill="white" stroke="#223dd6" strokeWidth="2" vectorEffect="non-scaling-stroke" />}
            </g>)}
          </svg>
          <div className="mt-2 flex justify-between gap-2 text-[11px] text-slate-500" aria-hidden="true">
            {[0, Math.floor((history.length - 1) / 2), history.length - 1].filter((value, index, all) => all.indexOf(value) === index).map(index => <span key={index}>{formatMonth(history[index].mes, true)}</span>)}
          </div>
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm" aria-live="polite" aria-atomic="true" data-testid={`${id}-tooltip`}>
        <p className="font-semibold text-navy">Mês: {formatMonth(selected.mes)}</p>
        {movement ? <p className="mt-1 flex flex-wrap gap-x-5 gap-y-1 text-slate-700"><span>Aberturas: {formatNumber(selected.aberturas)}</span><span>Baixas: {formatNumber(selected.baixas)}</span><span className="font-semibold">Saldo: {formatBalance(balance(selected.aberturas, selected.baixas))}</span></p> : <p className="mt-1 text-slate-700">Estabelecimentos ativos: <strong>{formatNumber(selected.ativos)}</strong></p>}
      </div>
      {!movement && <p className="mt-4 text-xs leading-6 text-slate-500">Variações no estoque de estabelecimentos também podem decorrer de alterações de situação cadastral realizadas pela Receita Federal e não representam necessariamente abertura ou fechamento físico de empresas.</p>}
      <details className="mt-5 border-t border-slate-200 pt-4">
        <summary className="cursor-pointer text-sm font-semibold text-navy">Ver dados em tabela</summary>
        <table className="mt-4 w-full table-fixed text-left text-xs sm:text-sm">
          <caption className="sr-only">{movement ? 'Aberturas, baixas e saldo mensal' : 'Estoque de estabelecimentos por mês'}</caption>
          <thead><tr className="border-b border-slate-200"><th scope="col" className="py-3">Mês</th>{movement ? <><th scope="col">Aberturas</th><th scope="col">Baixas</th><th scope="col">Saldo</th></> : <th scope="col">Ativos</th>}</tr></thead>
          <tbody>{history.map(row => <tr key={row.mes} className="border-b border-slate-100"><th scope="row" className="py-3 font-medium">{formatMonth(row.mes, true)}</th>{movement ? <><td>{formatNumber(row.aberturas)}</td><td>{formatNumber(row.baixas)}</td><td>{formatBalance(balance(row.aberturas, row.baixas))}</td></> : <td>{formatNumber(row.ativos)}</td>}</tr>)}</tbody>
        </table>
      </details>
    </>}
  </section>;
}
