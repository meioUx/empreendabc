import { LinkCard } from '../components/Cards';
import { PageHero } from '../components/PageHero';
import { meiLinks } from '../data/content';

export function Mei() {
  return (
    <>
      <PageHero title="MEI" eyebrow="Serviços oficiais" description="Central de serviços para quem quer ser MEI, já é MEI ou precisa regularizar obrigações. Os botões levam para canais oficiais." />
      <section className="section">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {meiLinks.map((item) => <LinkCard key={item.title} {...item} />)}
        </div>
      </section>
    </>
  );
}
