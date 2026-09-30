import { Database } from 'lucide-react';
import type { BusinessDashboard } from '../../types/business';
import { formatMonth } from '../../services/businessRules';
export function BusinessSourceInfo({ data }: { data: BusinessDashboard }) {
  return <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:px-5 sm:py-4" aria-labelledby="source-title">
    <h2 id="source-title" className="flex items-center gap-2 text-sm font-bold text-navy"><Database aria-hidden="true" className="h-4 w-4" />Fonte e competência</h2>
    <p className="mt-2 text-xs leading-5 text-slate-700">Fonte de referência: <a href={data.metadata.urlFonte} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy underline underline-offset-4">{data.metadata.fonte}</a></p>
    <p className="mt-1 text-xs leading-5 text-slate-600">Indicadores: {formatMonth(data.metadata.competencia)}. Setores: {formatMonth(data.sectors.competencia)}. Dados territoriais: {formatMonth(data.neighborhoods.competencia)}.</p>
    {data.metadata.atualizadoEm && <p className="mt-2 text-xs text-slate-500">Atualização da base: {new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeZone: 'America/Sao_Paulo' }).format(new Date(data.metadata.atualizadoEm))}.</p>}
    {(data.metadata.nota || data.metadata.origem === 'seed') && <p className="mt-2 border-l-2 border-ocean pl-3 text-xs leading-5 text-slate-600">{data.metadata.nota ?? 'Valores de referência fornecidos para implantação. Conferência direta na base primária pendente.'}</p>}
  </section>;
}
