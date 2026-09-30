import { Search } from 'lucide-react';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { services } from '../data/content';
import { ExternalLink } from './ExternalLink';

export function SearchBar() {
  const [params, setParams] = useSearchParams();
  const query = params.get('q') ?? '';
  const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const results = useMemo(() => {
    const normalized = normalize(query.trim());
    if (!normalized) return services.slice(0, 5);
    return services.filter((service) => normalize(`${service.title} ${service.description}`).includes(normalized)).slice(0, 6);
  }, [query]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-soft">
      <label htmlFor="service-search" className="sr-only">Buscar serviço</label>
      <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3">
        <Search aria-hidden="true" className="h-5 w-5 text-slate-500" />
        <input
          id="service-search"
          value={query}
          onChange={(event: { target: { value: string } }) => setParams((previous) => { const next = new URLSearchParams(previous); if (event.target.value) next.set('q', event.target.value); else next.delete('q'); return next; }, { replace: true })}
          placeholder="Buscar por serviço, exemplo: DAS, nota fiscal, CND..."
          className="w-full bg-transparent text-base text-ink placeholder:text-slate-500 focus:outline-none"
        />
      </div>
      <p role="status" className="px-4 pt-3 text-sm text-slate-600">{results.length ? `${results.length} serviços encontrados` : 'Nenhum serviço encontrado. Tente outro termo ou procure atendimento.'}</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((service) => (
          <ExternalLink key={service.title} href={service.href} showIcon={false} className="rounded-xl px-4 py-3 text-sm font-semibold text-navy hover:bg-mint hover:text-ocean">
            {service.title}
          </ExternalLink>
        ))}
      </div>
    </div>
  );
}
