import { ContactCard } from '../components/ContactCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { PageHero } from '../components/PageHero';
import { faq } from '../data/content';

export function Atendimento() {
  return (
    <>
      <PageHero title="Atendimento" eyebrow="Fale com a Praça" description="Canais oficiais para tirar dúvidas, pedir orientação inicial e encontrar o endereço de atendimento presencial." />
      <section className="section">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <ContactCard />
          <div>
            <h2 className="text-2xl font-bold text-navy">FAQ</h2>
            <div className="mt-6"><FAQAccordion items={faq} /></div>
          </div>
        </div>
      </section>
    </>
  );
}
