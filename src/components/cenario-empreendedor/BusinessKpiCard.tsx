import type { LucideIcon } from 'lucide-react';
import { formatMonth } from '../../services/businessRules';

type Props = { title: string; value: string; description: string; detail?: string; competence: string; icon: LucideIcon; highlight?: boolean };
export function BusinessKpiCard({ title, value, description, detail, competence, icon: Icon, highlight }: Props) {
  return <article className={`card flex h-full flex-col ${highlight ? 'border-navy bg-navy text-white' : ''}`}>
    <div className="flex items-center justify-between gap-3">
      <h2 className={`text-sm font-semibold ${highlight ? 'text-white' : 'text-slate-600'}`}>{title}</h2>
      <Icon aria-hidden="true" className={`h-5 w-5 shrink-0 ${highlight ? 'text-white' : 'text-ocean'}`} />
    </div>
    <p className={`mt-6 text-4xl font-extrabold tracking-tight tabular-nums ${highlight ? 'text-white' : 'text-navy'}`}>{value}</p>
    <p className={`mt-3 text-sm leading-6 ${highlight ? 'text-blue-100' : 'text-slate-600'}`}>{description}</p>
    {detail && <p className={`mt-3 text-sm font-semibold ${highlight ? 'text-white' : 'text-ocean'}`}>{detail}</p>}
    <p className={`mt-auto pt-6 text-xs ${highlight ? 'text-blue-100' : 'text-slate-500'}`}>Competência: {formatMonth(competence)}</p>
  </article>;
}
