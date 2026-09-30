import { LinkCard } from '../components/Cards';
import { PageHero } from '../components/PageHero';
import { invoiceLinks } from '../data/content';

export function NotaFiscal() {
  return (
    <>
      <PageHero title="Nota Fiscal" eyebrow="Serviços e manuais" description="A NFS-e normalmente se aplica a serviços. A NF-e costuma se relacionar à circulação de produtos. Esta página orienta o acesso aos emissores e materiais de apoio, sem substituir análise fiscal." />
      <section className="section">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {invoiceLinks.map((item) => <LinkCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
