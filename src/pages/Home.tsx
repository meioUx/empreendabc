import { ArrowRight, Building2, CircleDollarSign, Lightbulb, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { getUpcomingCourses } from '../data/content';

const serviceCards = [
  {
    title: 'Empresas e MEI',
    description: 'Abertura, alteração, baixa e consultas de regularidade para todos os portes.',
    icon: Building2,
    href: '/mei',
    bg: 'bg-[#e8eef8]',
    color: 'text-navy',
    items: [{ title: 'Consultar viabilidade', href: '/viabilidade-licencas-alvaras' }, { title: 'Portal do Empreendedor', href: '/mei' }, { title: 'Alvarás online', href: '/viabilidade-licencas-alvaras' }],
  },
  {
    title: 'Tributos e Impostos',
    description: 'Gestão fiscal, emissão de guias e declarações de faturamento anuais.',
    icon: CircleDollarSign,
    href: '/regularidade-certidoes',
    bg: 'bg-[#eef2ff]',
    color: 'text-ocean',
    items: [{ title: 'Emissão de NFS-e', href: '/nota-fiscal' }, { title: 'Parcelamento de débitos', href: '/regularidade-certidoes' }, { title: 'Certidões negativas', href: '/regularidade-certidoes' }],
  },
  {
    title: 'Capacitação e Apoio',
    description: 'Cursos, consultorias e orientações para fortalecer o negócio local.',
    icon: Lightbulb,
    href: '/cursos-consultorias',
    bg: 'bg-[#f4efe8]',
    color: 'text-[#563d00]',
    items: [{ title: 'Oficinas e cursos', href: '/cursos-consultorias' }, { title: 'Consultorias', href: '/cursos-consultorias' }, { title: 'Oportunidades de apoio', href: '/atendimento' }],
  },
];

export function Home() {
  const navigate = useNavigate();
  const eventCards = getUpcomingCourses().map(event => ({
    ...event,
    day: event.date.split('/')[0],
    month: new Intl.DateTimeFormat('pt-BR', { month: 'short', timeZone: 'America/Sao_Paulo' }).format(new Date(event.endsAt)).replace('.', ''),
  }));
  return (
    <>
      <section className="home-hero relative isolate overflow-hidden bg-[#f5f8ff] pb-12 pt-10 sm:pb-16 sm:pt-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <img src="/assets/banner1.jpg" alt="" fetchPriority="high" className="h-full w-full object-cover object-[65%_center]" />
          <div className="home-hero-wash absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-[#f4f5f6] sm:h-56" />
        </div>
        <div className="container-page relative">
          <div className="flex min-h-[480px] items-center lg:min-h-[510px]">
            <div className="w-full max-w-[620px] py-2 lg:py-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-navy sm:text-xs">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-ocean" />Praça do Empreendedor
              </span>
              <h1 className="mt-6 text-[2.5rem] font-extrabold leading-[1.08] tracking-[-.045em] text-navy sm:text-[3.5rem] xl:text-[3.9rem]">
                Seu próximo passo<br />começa em <span className="text-ocean">Balneário Camboriú.</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-slate-600">Mais facilidade para empreender. Encontre serviços, orientações e oportunidades para abrir ou fortalecer seu negócio.</p>
              <form action="/servicos" onSubmit={(event: { preventDefault: () => void; currentTarget: HTMLFormElement }) => {
                event.preventDefault();
                const query = String(new FormData(event.currentTarget).get('q') ?? '').trim();
                navigate({ pathname: '/servicos', search: query ? `?${new URLSearchParams({ q: query })}` : '' });
              }} role="search" className="mt-8 rounded-2xl border border-blue-100 bg-white p-2 shadow-[0_12px_35px_-15px_rgba(0,51,165,.25)] focus-within:ring-2 focus-within:ring-ocean">
                <label htmlFor="home-search" className="sr-only">Buscar serviços ou manuais</label>
                <div className="flex items-center">
                  <Search aria-hidden="true" className="ml-3 h-5 w-5 shrink-0 text-ocean" />
                  <input id="home-search" name="q" type="search" className="h-12 min-w-0 flex-1 rounded-lg bg-transparent px-3 text-sm text-ink placeholder:text-slate-500 focus:outline-none" placeholder="O que seu negócio precisa?" />
                  <button type="submit" className="btn-primary shrink-0 !rounded-xl !px-4 sm:!px-6">Buscar</button>
                </div>
              </form>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
                <span>Mais procurados:</span>
                <Link to="/viabilidade-licencas-alvaras" className="font-semibold text-navy hover:underline">Alvarás</Link>
                <Link to="/nota-fiscal" className="font-semibold text-navy hover:underline">Nota fiscal</Link>
                <Link to="/cursos-consultorias" className="font-semibold text-navy hover:underline">Cursos</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="categories-title" className="bg-gradient-to-b from-[#f4f5f6] to-[#f5f8fc] py-14 lg:py-20">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[.16em] text-ocean">Como podemos ajudar?</span>
              <h2 id="categories-title" className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">Serviços por categoria</h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">Escolha o que seu negócio precisa e encontre o caminho para o próximo passo.</p>
            </div>
            <Link to="/servicos" className="inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:border-ocean hover:bg-blue-50 sm:self-auto">
              Ver todos os serviços <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-9 grid gap-6 lg:grid-cols-3">
            {serviceCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="category-card group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_12px_35px_-20px_rgba(0,51,165,.2)]">
                  <div className={`relative overflow-hidden px-6 pb-6 pt-7 sm:px-8 ${card.bg}`}>
                    <Icon aria-hidden="true" strokeWidth={1} className={`pointer-events-none absolute -right-5 -top-3 h-40 w-40 -rotate-12 opacity-[.07] ${card.color}`} />
                    <div className="relative flex items-center justify-between">
                      <span className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white bg-white/90 shadow-sm ${card.color}`}><Icon aria-hidden="true" className="h-7 w-7" /></span>
                      <span className={`text-[10px] font-bold uppercase tracking-[.16em] ${card.color}`}>{['Comece e formalize', 'Organize e regularize', 'Aprenda e cresça'][index]}</span>
                    </div>
                    <h3 className="relative mt-6 text-2xl font-bold tracking-tight text-navy"><Link to={card.href} className="rounded focus-visible:outline-offset-4 hover:underline">{card.title}</Link></h3>
                  </div>
                  <div className="flex flex-1 flex-col px-6 pb-6 pt-5 sm:px-8">
                    <p className="min-h-[56px] text-sm leading-7 text-slate-600">{card.description}</p>
                    <ul className="mb-6 mt-5 divide-y divide-slate-100">
                      {card.items.map((item) => (
                        <li key={item.title}>
                          <Link to={item.href} className="group/service flex min-h-12 items-center justify-between gap-3 rounded-lg py-3 text-sm font-medium text-navy transition hover:bg-blue-50 hover:px-3 focus-visible:outline-offset-2">
                            {item.title}<ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-slate-400 transition group-hover/service:text-ocean motion-safe:group-hover/service:translate-x-1" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link to={card.href} aria-label={`Explorar ${card.title}`} className={`mt-auto flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-bold transition hover:brightness-95 ${card.bg} ${card.color}`}>
                      Explorar categoria <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-6 lg:grid-cols-[0.95fr_1fr] lg:px-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-navy">Acompanhe o pulso da cidade</h2>
            <p className="mt-6 max-w-[620px] text-base leading-8 text-[#424752]">
              Participe de cursos, encontros e orientações que fortalecem o empreendedorismo local.
            </p>

            <div className="mt-10 space-y-5">
              {eventCards.length === 0 && <p className="rounded-xl bg-slate-50 p-5 text-sm text-slate-600">Novos encontros serão divulgados em breve. Acompanhe a agenda da Praça do Empreendedor.</p>}
              {eventCards.map((event) => (
                <Link key={`${event.date}-${event.theme}`} to="/cursos-consultorias?modalidade=presencial#agenda" className="group flex items-center gap-5 rounded-xl border border-[#c2c6d4] bg-[#f7f9fb] p-5 transition hover:-translate-y-0.5 hover:border-navy hover:bg-white">
                  <div className={`bg-navy flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg text-white`}>
                    <span className="text-sm font-bold leading-none">{event.day}</span>
                    <span className="mt-1 text-[10px] font-bold uppercase">{event.month}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-ink">{event.theme}</h3>
                    <p className="mt-1 text-sm text-[#424752]">{event.format} • {event.location}</p>
                  </div>
                  <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-navy/50 transition group-hover:translate-x-1 group-hover:text-ocean" />
                </Link>
              ))}
            </div>

            <Link to="/cursos-consultorias" className="mt-9 inline-flex rounded-full border-2 border-navy px-9 py-4 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white">
              Ver calendário completo
            </Link>
          </div>

          <Link
            to="/cenario-empreendedor-bc"
            className="group relative flex min-h-[320px] items-end overflow-hidden rounded-[32px] shadow-[0_28px_60px_rgba(0,63,135,0.18)] sm:aspect-video"
          >
            <img src="/assets/hub-eventos-stitch.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#062553] via-[#062553]/70 to-[#062553]/10" />
            <div className="relative flex w-full items-end gap-4 p-6 sm:p-8">
              <div className="min-w-0 flex-1 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">Balneário Camboriú</p>
                <h3 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">Central de Dados do Empreendedorismo</h3>
                <p className="mt-3 text-sm leading-6 text-blue-50">Explore os indicadores e o cenário dos negócios de BC.</p>
                <span className="mt-4 inline-block text-sm font-bold underline decoration-white/50 underline-offset-4 group-hover:decoration-white">Acessar a central de dados</span>
              </div>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-xl sm:h-16 sm:w-16">
                <ArrowRight aria-hidden="true" className="h-6 w-6 transition-transform motion-safe:group-hover:translate-x-1 sm:h-7 sm:w-7" />
              </span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
