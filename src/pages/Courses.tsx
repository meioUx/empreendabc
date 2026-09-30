import { MessageCircle } from 'lucide-react';
import { CourseCard, LinkCard } from '../components/Cards';
import { ExternalLink } from '../components/ExternalLink';
import { PageHero } from '../components/PageHero';
import { courses } from '../data/content';

export function Courses() {
  return (
    <>
      <PageHero title="Cursos e Consultorias" eyebrow="Capacitação" description="Agenda editável para oficinas, encontros e consultorias voltadas a empreendedores de Balneário Camboriú." />
      <section id="agenda" className="section scroll-mt-24">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-3">
            {courses.map((course) => <CourseCard key={course.theme} course={course} />)}
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <LinkCard title="Sebrae SC" description="Soluções, consultorias e conteúdos para empreendedores em Santa Catarina." href="https://www.sebrae-sc.com.br/solucoes/" cta="Acessar Sebrae SC" />
            <LinkCard title="Sebrae Nacional" description="Cursos online e conteúdos para diferentes fases do negócio." href="https://sc.loja.sebrae.com.br/cursos/cursos-online" cta="Ver cursos online" />
          </div>
          <ExternalLink href="https://chat.whatsapp.com/GqFstWCVLb6LSyyLclTJom?mode=ems_wa_t" className="btn-primary mt-8">
            <MessageCircle aria-hidden="true" className="h-4 w-4" /> Entrar no grupo WhatsApp
          </ExternalLink>
        </div>
      </section>
    </>
  );
}
