import { MapPin } from 'lucide-react';
import type { BusinessDashboard } from '../../types/business';
import { formatMonth, formatNumber } from '../../services/businessRules';
export function BusinessNeighborhoods({ data }: { data: BusinessDashboard['neighborhoods'] }) {
  return <section className="card min-w-0" aria-labelledby="neighborhoods-title">
    <p className="text-xs font-semibold uppercase tracking-widest text-ocean">Distribuição territorial</p>
    <h2 id="neighborhoods-title" className="mt-2 text-2xl font-bold text-navy">Bairros com maior concentração empresarial</h2>
    <p className="mt-4 rounded-xl bg-mint px-4 py-3 text-sm font-semibold leading-6 text-navy">Dados territoriais — competência {formatMonth(data.competencia)}.</p>
    {!data.items.length && <p className="mt-6 text-sm">Dados ainda não disponíveis para esta competência.</p>}
    <ol className="mt-6 divide-y divide-slate-200">
      {data.items.map((item, index) => <li key={item.nome} className="flex items-center gap-3 py-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-navy">{index + 1}º</span>
        <span className="min-w-0 flex-1 text-sm font-semibold text-slate-700">{item.nome}</span>
        <span className="text-right"><strong className="block text-xl tabular-nums text-navy">{formatNumber(item.quantidade)}</strong><span className="text-[11px] text-slate-500">estabelecimentos</span></span>
      </li>)}
    </ol>
    {!data.completa && <p className="mt-5 flex items-start gap-3 text-xs leading-6 text-slate-500"><MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />Recorte dos bairros disponíveis nesta base. Não representa a relação completa de bairros do município.</p>}
  </section>;
}
