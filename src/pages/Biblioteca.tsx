import { CategoryFilter } from '../components/CategoryFilter';
import { PageHero } from '../components/PageHero';
import { documents } from '../data/content';

export function Biblioteca() {
  return (
    <>
      <PageHero title="Biblioteca" eyebrow="Documentos" description="Área para centralizar PDFs, DOCX, manuais, cartilhas e materiais de apoio por categoria." />
      <section className="section">
        <div className="container-page">
          <CategoryFilter items={documents} />
        </div>
      </section>
    </>
  );
}
