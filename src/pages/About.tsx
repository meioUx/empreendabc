import { PageHero } from '../components/PageHero';
import { executedServices, partners } from '../data/content';

export function About() {
  return (
    <>
      <PageHero
        title="Sobre a Praça"
        eyebrow="Institucional"
        description="A Praça do Empreendedor de Balneário Camboriú é um ponto de orientação e acesso a serviços para quem empreende, quer formalizar uma atividade ou precisa regularizar a empresa."
      />
      <section className="section">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="card">
            <h2 className="text-2xl font-bold text-navy">Orientação, simplificação e autoatendimento</h2>
            <div className="mt-5 space-y-4 leading-8 text-slate-700">
              <p>A Praça atua vinculada institucionalmente à Secretaria da Fazenda, apoiando empreendedores com informações claras sobre abertura, regularização, emissão de documentos e acesso aos canais oficiais.</p>
              <p>O objetivo é orientar, facilitar a abertura e a regularização de negócios e estimular o autoatendimento. A linguagem do portal organiza os serviços pela jornada do empreendedor, e não pela estrutura interna dos órgãos.</p>
            </div>
          </div>
          <div className="card">
            <h2 className="text-2xl font-bold text-navy">Parceiros</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {partners.map((partner) => (
                <span key={partner} className="rounded-full bg-mint px-4 py-2 text-sm font-semibold text-ocean">{partner}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-navy">Serviços executados</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Conteúdo organizado a partir dos documentos institucionais anexados, com foco em orientação e autoatendimento.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {executedServices.map((service) => (
              <div key={service} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-navy">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
