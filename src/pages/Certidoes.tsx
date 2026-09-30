import { LinkCard } from '../components/Cards';
import { PageHero } from '../components/PageHero';
import { certificates } from '../data/content';

export function Certidoes() {
  return (
    <>
      <PageHero title="Regularidade e Certidões" eyebrow="Pendências e comprovações" description="Reúna certidões, comprovantes e canais de regularização para manter o CNPJ em dia e se preparar para contratos, compras públicas e atendimento." />
      <section className="section">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {certificates.map((item) => <LinkCard key={item.title} {...item} cta="Acessar" />)}
        </div>
      </section>
    </>
  );
}
