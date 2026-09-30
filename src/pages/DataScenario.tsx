import { useEffect, useState } from 'react';
import { CalendarDays } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { BusinessOverview } from '../components/cenario-empreendedor/BusinessOverview';
import { BusinessEvolutionChart } from '../components/cenario-empreendedor/BusinessEvolutionChart';
import { BusinessMovementChart } from '../components/cenario-empreendedor/BusinessMovementChart';
import { BusinessSectorsChart } from '../components/cenario-empreendedor/BusinessSectorsChart';
import { BusinessNeighborhoods } from '../components/cenario-empreendedor/BusinessNeighborhoods';
import { BusinessSourceInfo } from '../components/cenario-empreendedor/BusinessSourceInfo';
import { BusinessOfficialDashboardEmbed } from '../components/cenario-empreendedor/BusinessOfficialDashboardEmbed';
import { loadBusinessData } from '../services/businessDataService';
import { formatMonth } from '../services/businessRules';
import type { BusinessDashboard } from '../types/business';
import './DataScenario.css';

type DataState = { status: 'loading' } | { status: 'error' } | { status: 'ready'; data: BusinessDashboard };
export function DataScenario() {
  const [state, setState] = useState<DataState>({ status: 'loading' });
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let active = true;
    setState({ status: 'loading' });
    loadBusinessData().then(data => { if (active) setState({ status: 'ready', data }); }).catch(() => { if (active) setState({ status: 'error' }); });
    return () => { active = false; };
  }, [attempt]);
  return <>
    <PageHero title="Empreendedorismo em Balneário Camboriú" eyebrow="Cenário Empreendedor" description="Acompanhe a dinâmica empresarial do município por meio de indicadores de empresas ativas, Microempreendedores Individuais, atividades econômicas, distribuição territorial e movimentação mensal." />
    <section className="section business-dashboard">
      <div className="container-page space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
          <p className="inline-flex items-center gap-2 font-semibold text-navy"><CalendarDays aria-hidden="true" className="h-4 w-4" />{state.status === 'ready' ? `Panorama · ${formatMonth(state.data.metadata.competencia)}` : 'Panorama empresarial'}</p>
          <p className="text-slate-500">Periodicidade dos dados: mensal.</p>
        </div>
        {state.status === 'loading' && <div role="status" aria-label="Carregando indicadores" aria-busy="true"><span className="sr-only">Carregando indicadores...</span><div aria-hidden="true" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[1, 2, 3, 4].map(item => <div key={item} className="card h-64 animate-pulse"><div className="h-4 w-2/3 rounded bg-slate-200" /><div className="mt-8 h-10 w-1/2 rounded bg-slate-200" /><div className="mt-6 h-4 rounded bg-slate-100" /></div>)}</div><div aria-hidden="true" className="card mt-8 h-80 animate-pulse bg-slate-100" /></div>}
        {state.status === 'error' && <div className="card" role="alert"><h2 className="text-xl font-bold text-navy">Não foi possível carregar os dados neste momento.</h2><p className="mt-3 text-sm text-slate-600">Tente novamente em alguns instantes.</p><button type="button" className="btn-primary mt-5" onClick={() => setAttempt(value => value + 1)}>Tentar novamente</button></div>}
        {state.status === 'ready' && <>
          <BusinessOverview data={state.data.overview} />
          <BusinessEvolutionChart history={state.data.history} />
          <BusinessMovementChart history={state.data.history} />
          <div className="grid items-start gap-8 lg:grid-cols-2"><BusinessSectorsChart data={state.data.sectors} /><BusinessNeighborhoods data={state.data.neighborhoods} /></div>
          <BusinessSourceInfo data={state.data} />
        </>}
        <BusinessOfficialDashboardEmbed />
      </div>
    </section>
  </>;
}
