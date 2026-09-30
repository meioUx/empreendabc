import { LinkCard } from '../components/Cards';
import { PageHero } from '../components/PageHero';
import { documents, licenseLinks } from '../data/content';

export function Licenses() {
  const norms = documents.filter((item) => ['Licenciamento', 'Sanitária'].includes(item.category ?? ''));

  return (
    <>
      <PageHero title="Viabilidade, Licenças e Alvarás" eyebrow="Antes de funcionar" description="Antes de iniciar a operação, consulte se a atividade pode funcionar no endereço pretendido e quais licenças, normas ou autorizações podem se aplicar." />
      <section className="section">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {licenseLinks.map((item) => <LinkCard key={item.title} {...item} />)}
        </div>
      </section>
      <section className="section bg-white">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-navy">Documentos e normas</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {norms.map((item) => <LinkCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
