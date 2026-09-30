import { useState } from 'react';
import type { BusinessDashboard } from '../../types/business';
import { formatMonth, formatNumber } from '../../services/businessRules';
export function BusinessSectorsChart({ data }: { data: BusinessDashboard['sectors'] }) {
  const [expanded, setExpanded] = useState(false);
  const maximum = Math.max(1, ...data.items.map(item => item.quantidade ?? 0));
  const visible = expanded ? data.items : data.items.slice(0, 5);
  return <section className="card min-w-0" aria-labelledby="sectors-title">
    <p className="text-xs font-semibold uppercase tracking-widest text-ocean">Atividades econômicas</p>
    <h2 id="sectors-title" className="mt-2 text-2xl font-bold text-navy">Setores em destaque</h2>
    <p className="mt-3 text-sm leading-6 text-slate-600">CNAE principal dos estabelecimentos ativos. Competência: {formatMonth(data.competencia)}.</p>
    {!data.items.length && <p className="mt-6 text-sm">Dados ainda não disponíveis para esta competência.</p>}
    <ol id="business-sector-list" className="mt-7 space-y-6">
      {visible.map((item, index) => <li key={item.codigoCnae ?? item.nome}>
        <div className="flex items-start justify-between gap-3 text-sm"><span className="leading-6 text-slate-700"><span className="mr-2 text-xs font-semibold text-slate-500">{index + 1}º</span>{item.nome}</span><strong className="shrink-0 pt-0.5 tabular-nums text-navy">{formatNumber(item.quantidade)}</strong></div>
        <div className="mt-2 h-2 rounded-full bg-slate-100" aria-hidden="true"><div className="h-full rounded-full bg-gradient-to-r from-navy to-ocean" style={{ width: `${item.quantidade === null ? 0 : item.quantidade / maximum * 100}%` }} /></div>
      </li>)}
    </ol>
    {data.items.length > 5 && <button type="button" className="btn-secondary mt-8 w-full sm:w-auto" aria-expanded={expanded} aria-controls="business-sector-list" onClick={() => setExpanded(value => !value)}>{expanded ? 'Mostrar apenas top 5' : 'Ver todos os setores'}</button>}
  </section>;
}
