import { ArrowRight, Building2, CircleDollarSign, FileText, Lightbulb, MessageSquare, Search, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ExternalLink } from '../components/ExternalLink';
import { contactInfo } from '../data/content';

const heroCards = [
  { label: 'Abrir negócio', description: 'Roteiro guiado', href: '/abrir-meu-negocio', icon: Building2, bg: 'from-[#d7e2ff] to-white', color: 'text-navy' },
  { label: 'Sou MEI', description: 'Serviços oficiais', href: '/mei', icon: UserRound, bg: 'from-[#e2e6f0] to-white', color: 'text-ocean' },
  { label: 'Nota fiscal', description: 'Emissão e manuais', href: '/nota-fiscal', icon: FileText, bg: 'from-[#ffdea5] to-white', color: 'text-[#563d00]' },
  { label: 'WhatsApp', description: 'Atendimento escrito', href: contactInfo.whatsappHref, icon: MessageSquare, bg: 'from-[#e0ebff] to-white', color: 'text-ocean' },
];

const serviceCards = [
  {
    title: 'Empresas e MEI',
    description: 'Abertura, alteração, baixa e consultas de regularidade para todos os portes.',
    icon: Building2,
    href: '/mei',
    bg: 'bg-[#e8eef8]',
    color: 'text-navy',
    items: ['Consultar viabilidade', 'Portal do Empreendedor', 'Alvarás online'],
  },
  {
    title: 'Tributos e Impostos',
    description: 'Gestão fiscal, emissão de guias e declarações de faturamento anuais.',
    icon: CircleDollarSign,
    href: '/regularidade-certidoes',
    bg: 'bg-[#eef2ff]',
    color: 'text-ocean',
    items: ['Emissão de NFS-e', 'Parcelamento de débitos', 'Certidões negativas'],
  },
  {
    title: 'Capacitação e Apoio',
    description: 'Cursos, consultorias e orientações para fortalecer o negócio local.',
    icon: Lightbulb,
    href: '/cursos-consultorias',
    bg: 'bg-[#f4efe8]',
    color: 'text-[#563d00]',
    items: ['Oficinas e cursos', 'Consultorias', 'Oportunidades de apoio'],
  },
];

const eventCards = [
  { day: '15', month: 'JUL', title: 'Comunicação assertiva para os negócios', meta: 'Casa dos Conselhos - 19h', bg: 'bg-navy', href: '/cursos-consultorias#agenda' },
  { day: '22', month: 'JUL', title: 'Praça do Empreendedor', meta: 'Vila Real - 9h às 12h e 13h às 17h', bg: 'bg-ocean', href: '/cursos-consultorias#agenda' },
];

export function Home() {
  return (
    <>
      <section className="relative min-h-[720px] overflow-hidden bg-[#f7f9fb] lg:min-h-[820px]">
        <div className="absolute inset-0">
          <img
            src="/assets/banner1.jpg"
            alt="Espaço de trabalho moderno em Balneário Camboriú"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f9fb] via-[#f7f9fb]/95 to-[#f7f9fb]/80 lg:to-transparent" />
          <div className="absolute inset-0 bg-white/25" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[720px] w-full max-w-[1440px] items-center px-6 py-14 lg:min-h-[820px] lg:px-12">
          <div className="w-full min-w-0 max-w-[640px]">
            <span className="inline-flex rounded-full bg-[#e2e6f0] px-5 py-2 text-xs font-medium uppercase tracking-wide text-navy">
              Praça do Empreendedor
            </span>

            <h1 className="mt-8 text-[36px] font-extrabold leading-[1.08] tracking-tight text-navy [font-family:Epilogue,Inter,sans-serif] sm:text-[60px] lg:text-[60px]">
              Empreenda em
              <br />
              <span className="text-ocean">Balneário Camboriú</span>
              <br />
              com simplicidade
            </h1>

            <p className="mt-8 max-w-[600px] text-base leading-8 text-[#424752]">
              Transformamos a burocracia em oportunidade. Tenha acesso rápido a serviços, suporte técnico e eventos que impulsionam o seu negócio.
            </p>

            <form action="/servicos" role="search" className="mt-9 flex max-w-[640px] items-center rounded-xl border border-[#c2c6d4] bg-white p-2 shadow-[0_12px_28px_rgba(0,63,135,0.12)]">
              <Search aria-hidden="true" className="ml-4 h-5 w-5 shrink-0 text-navy" />
              <label htmlFor="home-search" className="sr-only">Buscar serviços ou manuais</label>
              <input
                id="home-search"
                name="q"
                type="search"
                className="h-12 min-w-0 flex-1 border-none bg-transparent px-3 sm:px-6 text-base text-ink placeholder:text-slate-500 focus:outline-none"
                placeholder="Encontre serviços ou manuais..."
              />
              <button type="submit" className="rounded-lg bg-navy px-4 sm:px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#0056b3]">
                Buscar
              </button>
            </form>

            <div className="mt-12 grid max-w-[680px] gap-4 sm:grid-cols-2">
              {heroCards.map((card) => {
                const Icon = card.icon;
                const content = (
                  <>
                    <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${card.bg} ${card.color} shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_10px_20px_rgba(0,63,135,0.10)]`}>
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold text-ink">{card.label}</span>
                      <span className="mt-1 block text-xs font-medium text-slate-600">{card.description}</span>
                    </span>
                    <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-navy/55 transition group-hover:translate-x-1 group-hover:text-ocean" />
                  </>
                );

                const className =
                  'group flex min-h-[92px] items-center gap-4 rounded-2xl border border-white/80 bg-white/90 px-5 py-4 text-left shadow-[0_12px_30px_rgba(0,63,135,0.12)] backdrop-blur-md transition hover:-translate-y-1 hover:border-white hover:bg-white/95 hover:shadow-[0_18px_36px_rgba(0,63,135,0.16)]';

                return card.href.startsWith('http') ? (
                  <ExternalLink key={card.label} href={card.href} showIcon={false} className={className}>
                    {content}
                  </ExternalLink>
                ) : (
                  <Link key={card.label} to={card.href} className={className}>
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-b from-transparent via-[#f7f9fb]/75 to-[#f4f5f6] sm:h-48" />
      </section>

      <section className="bg-gradient-to-b from-[#f4f5f6] via-[#eceef0] to-[#eceef0] py-12 lg:py-16">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-ink">Serviços por categoria</h2>
              <p className="mt-3 text-sm text-[#424752]">Tudo o que o seu negócio precisa, organizado de forma simples.</p>
            </div>
            <Link to="/servicos" className="hidden items-center gap-2 text-sm font-semibold text-navy hover:underline sm:inline-flex">
              Ver todos os serviços <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {serviceCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.title}
                  to={card.href}
                  className="group min-h-[370px] rounded-2xl border border-[#e0e3e5] bg-white p-6 lg:p-8 shadow-[0_8px_20px_rgba(0,63,135,0.05)] transition hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(0,63,135,0.12)]"
                >
                  <span className={`flex h-16 w-16 items-center justify-center rounded-2xl ${card.bg} ${card.color}`}>
                    <Icon aria-hidden="true" className="h-8 w-8" />
                  </span>
                  <h3 className="mt-10 text-2xl font-bold text-ink">{card.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-[#424752]">{card.description}</p>
                  <ul className="mt-8 space-y-4 text-sm text-ink">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span aria-hidden="true" className={`h-2 w-2 rounded-full ${card.color === 'text-navy' ? 'bg-navy' : card.color === 'text-ocean' ? 'bg-ocean' : 'bg-[#563d00]'}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Link>
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
              {eventCards.map((event) => (
                <Link key={event.title} to={event.href} className="group flex items-center gap-5 rounded-xl border border-[#c2c6d4] bg-[#f7f9fb] p-5 transition hover:-translate-y-0.5 hover:border-navy hover:bg-white">
                  <div className={`${event.bg} flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg text-white`}>
                    <span className="text-sm font-bold leading-none">{event.day}</span>
                    <span className="mt-1 text-[10px] font-bold uppercase">{event.month}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-ink">{event.title}</h3>
                    <p className="mt-1 text-sm text-[#424752]">{event.meta}</p>
                  </div>
                  <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-navy/50 transition group-hover:translate-x-1 group-hover:text-ocean" />
                </Link>
              ))}
            </div>

            <Link to="/cursos-consultorias" className="mt-9 inline-flex rounded-full border-2 border-navy px-9 py-4 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white">
              Ver calendário completo
            </Link>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-[32px] shadow-[0_28px_60px_rgba(0,63,135,0.18)]">
            <img src="/assets/hub-eventos-stitch.jpg" alt="Empreendedores em ambiente de orientação e capacitação" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-navy/10" />
            <Link
              to="/cenario-empreendedor-bc"
              aria-label="Abrir cenário empreendedor"
              className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-navy shadow-xl transition hover:scale-105"
            >
              <ArrowRight aria-hidden="true" className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
