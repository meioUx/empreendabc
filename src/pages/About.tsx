import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { executedServices } from '../data/content';

export function About() {
  return (
    <>
      <PageHero
        title="Sobre a Praça"
        eyebrow="Institucional"
        description="A Praça do Empreendedor de Balneário Camboriú é um ponto de orientação e acesso a serviços para quem empreende, quer formalizar uma atividade ou precisa regularizar a empresa."
      />
      <section className="section">
        <div className="container-page grid items-stretch gap-8 lg:grid-cols-2">
          <figure data-motion className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
            <img src="/assets/sala%20do%20empreendedor.jpg" alt="Interior da Sala do Empreendedor, com balcão de atendimento, sofás de espera e acesso à sala de capacitação" width="547" height="365" className="block h-auto w-full" />
            <figcaption className="px-6 py-4">
              <p className="text-sm font-bold text-navy">Um espaço para acolher quem empreende</p>
              <p className="mt-1 text-sm text-slate-600">Sala do Empreendedor • Balneário Camboriú</p>
            </figcaption>
          </figure>
          <div className="card">
            <h2 className="text-2xl font-bold text-navy">Orientação, simplificação e autoatendimento</h2>
            <div className="mt-5 space-y-4 leading-8 text-slate-700">
              <p>A Praça atua vinculada institucionalmente à Secretaria da Fazenda, apoiando empreendedores com informações claras sobre abertura, regularização, emissão de documentos e acesso aos canais oficiais.</p>
              <p>O objetivo é orientar, facilitar a abertura e a regularização de negócios e estimular o autoatendimento. A linguagem do portal organiza os serviços pela jornada do empreendedor, e não pela estrutura interna dos órgãos.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container-page">
          <div className="grid items-center gap-4 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-6 sm:p-8 lg:grid-cols-[1fr_420px]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-ocean">Apoio em cada etapa</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">Serviços executados</h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">Da primeira ideia à regularização do negócio, conte com orientação para encontrar o caminho e acessar os serviços de que você precisa.</p>
              <p className="mt-4 text-sm font-semibold text-ocean">Orientação • Simplificação • Autoatendimento</p>
            </div>
            <img src="/assets/ilustracao-servicos.svg" alt="Ilustração de atendimento ao empreendedor, com duas pessoas, um computador e documentos conferidos" width="480" height="340" loading="lazy" className="mx-auto w-full max-w-[420px]" />
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {executedServices.map((service) => (
              <Link key={service.title} to={service.href} className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-navy transition hover:border-ocean hover:bg-mint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean">
                <span>{service.title}</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
