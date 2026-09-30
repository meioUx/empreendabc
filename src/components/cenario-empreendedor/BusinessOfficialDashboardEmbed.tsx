import { businessConfig } from '../../config/business';
export function BusinessOfficialDashboardEmbed() {
  if (!businessConfig.enableDashboardEmbed) return null;
  return <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white" aria-labelledby="business-map-title">
    <div className="px-5 py-5 sm:px-6">
      <h2 id="business-map-title" className="text-xl font-bold text-navy">Mapa de concentração empresarial</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">Explore a distribuição dos negócios em Balneário Camboriú no mapa interativo.</p>
    </div>
    <iframe src={businessConfig.dashboardUrl} title="Mapa de concentração empresarial de Balneário Camboriú — ArcGIS" loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" className="block h-[75vh] min-h-[500px] w-full border-0 border-t border-slate-200 bg-slate-50" />
    <p className="px-5 py-3 text-xs leading-5 text-slate-500">Se o mapa não carregar, <a href={businessConfig.dashboardUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy underline underline-offset-2">abra o mapa em uma nova aba</a>.</p>
  </section>;
}
