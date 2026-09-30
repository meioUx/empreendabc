import { ArrowRight } from 'lucide-react';
import { LinkCard } from '../components/Cards';
import { ExternalLink } from '../components/ExternalLink';
import { PageHero } from '../components/PageHero';
import { contactInfo, procurementLinks } from '../data/content';

export function Procurement() {
  return (
    <>
      <PageHero title="Compras Públicas" eyebrow="Fornecedores locais" description="MEI, ME e EPP podem se preparar para vender ao município acompanhando oportunidades, mantendo certidões em dia e organizando documentos de cadastro." />
      <section className="section">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {procurementLinks.map((item) => <LinkCard key={item.title} {...item} />)}
          </div>
          <div className="card mt-8 flex flex-col gap-5 bg-navy text-white sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold">Quero ser fornecedor do município</h2>
              <p className="mt-2 text-slate-200">Fale com a Praça para receber orientação inicial sobre preparação e próximos passos.</p>
            </div>
            <ExternalLink href={contactInfo.whatsappHref} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-navy">
              Solicitar orientação <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </ExternalLink>
          </div>
        </div>
      </section>
    </>
  );
}
