export const businessConfig = {
  // A API agregada deve retornar o mesmo contrato do JSON local.
  dataUrl: import.meta.env.VITE_BUSINESS_DATA_URL || '/data/business/current.json',
  cacheMs: 12 * 60 * 60 * 1000,
  enableDashboardEmbed: import.meta.env.VITE_ENABLE_BUSINESS_DASHBOARD_EMBED !== 'false',
  dashboardUrl: 'https://gis.emasa.com.br/portal/apps/webappviewer/index.html?id=2eed196a77564b56a71f5e44ea399b47',
};
