import type { BusinessDashboard, BusinessValue } from '../types/business';

const monthPattern = /^\d{4}-(0[1-9]|1[0-2])$/;
export const formatNumber = (value: BusinessValue): string => value === null ? '—' : new Intl.NumberFormat('pt-BR').format(value);
export const formatPercent = (value: BusinessValue): string => value === null ? '—' : `${new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(value)}%`;
export const balance = (openings: BusinessValue, closures: BusinessValue): BusinessValue => openings === null || closures === null ? null : openings - closures;
export const formatBalance = (value: BusinessValue): string => value !== null && value > 0 ? `+${formatNumber(value)}` : formatNumber(value);
export function formatMonth(value: string, short = false): string {
  if (!monthPattern.test(value)) return '—';
  const [year, month] = value.split('-');
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, 1));
  const label = new Intl.DateTimeFormat('pt-BR', { month: short ? 'short' : 'long', timeZone: 'UTC' }).format(date).replace('.', '');
  return `${label}/${short ? year.slice(-2) : year}`;
}
export function normalizeNeighborhood(value: string): string {
  return value.trim().replace(/\s+/g, ' ').toLocaleUpperCase('pt-BR');
}

// Contrato verificado em runtime: falhas de API nunca viram zeros.
export function parseBusinessData(value: unknown): BusinessDashboard {
  const fail = (): never => { throw new Error('Resposta inválida do Cenário Empreendedor.'); };
  const object = (item: unknown): Record<string, unknown> => {
    if (!item || typeof item !== 'object' || Array.isArray(item)) return fail();
    return item as Record<string, unknown>;
  };
  const text = (item: unknown): item is string => typeof item === 'string' && item.trim().length > 0;
  const month = (item: unknown): boolean => typeof item === 'string' && monthPattern.test(item);
  const count = (item: unknown): boolean => item === null || (typeof item === 'number' && Number.isSafeInteger(item) && item >= 0);
  const data = object(value);
  const meta = object(data.metadata);
  if (!text(meta.fonte) || !text(meta.urlFonte) || !month(meta.competencia) || !['seed', 'receita-federal'].includes(String(meta.origem))) fail();
  if (!String(meta.urlFonte).startsWith('https://')) fail();
  if (meta.nota !== undefined && !text(meta.nota)) fail();
  if (meta.atualizadoEm !== undefined && (!text(meta.atualizadoEm) || !Number.isFinite(Date.parse(meta.atualizadoEm as string)))) fail();
  if (data.overview !== null) {
    const overview = object(data.overview);
    if (!month(overview.competencia) || overview.competencia !== meta.competencia || !text(overview.municipio) || !text(overview.uf)) fail();
    for (const key of ['estabelecimentosAtivos', 'matrizesAtivas', 'meisAtivos', 'aberturasMes', 'baixasMes']) if (!count(overview[key])) fail();
    const percentage = overview.percentualMei;
    if (percentage !== null && !(typeof percentage === 'number' && Number.isFinite(percentage) && percentage >= 0 && percentage <= 100)) fail();
    const total = overview.estabelecimentosAtivos as BusinessValue;
    for (const key of ['matrizesAtivas', 'meisAtivos']) if (total !== null && overview[key] !== null && (overview[key] as number) > total) fail();
  }
  if (!Array.isArray(data.history)) fail();
  const history = data.history as unknown[];
  const seen = new Set<string>();
  for (const row of history) {
    const item = object(row);
    if (!month(item.mes) || seen.has(String(item.mes)) || String(item.mes) > String(meta.competencia) || !['ativos', 'aberturas', 'baixas'].every(key => count(item[key]))) fail();
    seen.add(String(item.mes));
  }
  for (const key of ['sectors', 'neighborhoods']) {
    const series = object(data[key]);
    if (!month(series.competencia) || !Array.isArray(series.items)) fail();
    if (key === 'neighborhoods' && typeof series.completa !== 'boolean') fail();
    for (const row of series.items as unknown[]) {
      const item = object(row);
      if (!text(item.nome) || !count(item.quantidade) || (item.codigoCnae !== undefined && typeof item.codigoCnae !== 'string')) fail();
    }
  }
  const parsed = data as unknown as BusinessDashboard;
  const current = parsed.history.find(item => item.mes === parsed.overview?.competencia);
  if (current && parsed.overview) {
    for (const [historyKey, overviewKey] of [['ativos', 'estabelecimentosAtivos'], ['aberturas', 'aberturasMes'], ['baixas', 'baixasMes']] as const) {
      if (current[historyKey] !== null && parsed.overview[overviewKey] !== null && current[historyKey] !== parsed.overview[overviewKey]) fail();
    }
  }
  return { ...parsed, history: [...parsed.history].sort((a, b) => a.mes.localeCompare(b.mes)),
    sectors: { ...parsed.sectors, items: [...parsed.sectors.items].sort((a, b) => (b.quantidade ?? -1) - (a.quantidade ?? -1)) },
    neighborhoods: { ...parsed.neighborhoods, items: [...parsed.neighborhoods.items].sort((a, b) => (b.quantidade ?? -1) - (a.quantidade ?? -1)) } };
}
