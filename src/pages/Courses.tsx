import { MapPin, MessageCircle, MonitorPlay } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { CourseCard } from '../components/Cards';
import { ExternalLink } from '../components/ExternalLink';
import { PageHero } from '../components/PageHero';
import { getUpcomingCourses } from '../data/content';
import { OnlineCourseCatalog } from '../components/OnlineCourseCatalog';

export function Courses() {
  const [params] = useSearchParams();
  const online = params.get('modalidade') === 'online';
  const upcomingCourses = getUpcomingCourses();
  return (
    <>
      <PageHero title="Cursos e Consultorias" eyebrow="Capacitação" description="Encontre encontros presenciais em Balneário Camboriú e conteúdos online para aprender no seu ritmo e desenvolver seu negócio." />
      <section id="agenda" className="section scroll-mt-28">
        <div className="container-page">
          <nav aria-label="Modalidade dos cursos" className="mb-8 grid max-w-md grid-cols-2 gap-2 rounded-2xl border border-slate-200 bg-white p-2">
            <Link to="?modalidade=presencial#agenda" aria-current={!online ? 'page' : undefined} className={`inline-flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold transition ${!online ? 'bg-navy text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`}><MapPin aria-hidden="true" className="h-4 w-4" />Presenciais</Link>
            <Link to="?modalidade=online#agenda" aria-current={online ? 'page' : undefined} className={`inline-flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold transition ${online ? 'bg-navy text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`}><MonitorPlay aria-hidden="true" className="h-4 w-4" />Online</Link>
          </nav>
          {online ? <OnlineCourseCatalog /> : <div aria-labelledby="presencial-title">
            <h2 id="presencial-title" className="text-2xl font-bold text-navy">Cursos e encontros presenciais</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Confira os próximos eventos de 2026 em Balneário Camboriú. Para se inscrever, abra o WhatsApp com a mensagem do evento e envie à equipe da Praça do Empreendedor.</p>
            <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {upcomingCourses.map(course => <CourseCard key={`${course.date}-${course.theme}`} course={course} />)}
            </div>
            {upcomingCourses.length === 0 && <p className="mt-6 rounded-xl bg-slate-50 p-5 text-sm text-slate-600">Novos encontros serão divulgados em breve. Acompanhe as novidades pelo grupo da Praça do Empreendedor.</p>}
            <div data-motion className="relative mt-10 overflow-hidden rounded-3xl bg-navy text-white">
              <div aria-hidden="true" className="absolute -right-16 -top-24 h-80 w-80 rounded-full bg-white/5" />
              <div className="relative grid items-center gap-6 p-6 sm:p-9 lg:grid-cols-[1fr_280px] lg:px-12">
                <div>
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-100"><MessageCircle aria-hidden="true" className="h-4 w-4" />Empreendedores conectados</span>
                  <h3 className="mt-4 max-w-xl text-2xl font-bold leading-tight sm:text-3xl">A próxima oportunidade pode chegar no seu WhatsApp.</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">Faça parte do grupo da Praça do Empreendedor de Balneário Camboriú e acompanhe novidades, cursos, eventos e orientações para o seu negócio.</p>
                  <ExternalLink href="https://chat.whatsapp.com/GqFstWCVLb6LSyyLclTJom?mode=ems_wa_t" className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#ffe061] px-5 py-3 text-sm font-bold text-navy shadow-sm transition hover:bg-[#ffea93] focus-visible:outline-white"><MessageCircle aria-hidden="true" className="h-5 w-5" />Entrar no grupo WhatsApp</ExternalLink>
                  <p className="mt-3 text-xs leading-5 text-blue-100">Conecte-se com as novidades de quem empreende na nossa cidade.</p>
                </div>
                <svg viewBox="0 0 300 260" fill="none" aria-hidden="true" className="mx-auto w-full max-w-[220px] sm:max-w-[280px]">
                  <circle cx="155" cy="129" r="109" fill="white" fillOpacity=".08" />
                  <circle cx="155" cy="129" r="87" stroke="white" strokeOpacity=".16" strokeDasharray="5 7" />
                  <rect x="93" y="25" width="125" height="210" rx="22" fill="#edf4ff" />
                  <rect x="100" y="32" width="111" height="195" rx="16" fill="white" />
                  <path d="M129 32H181L178 42H132L129 32Z" fill="#0033a5" />
                  <rect x="112" y="59" width="87" height="27" rx="9" fill="#e7efff" />
                  <circle cx="126" cy="72" r="7" fill="#223dd6" />
                  <path d="M140 69H184M140 76H168" stroke="#94addc" strokeWidth="3" strokeLinecap="round" />
                  <path d="M114 103H182C188 103 192 107 192 113V141C192 147 188 151 182 151H126L114 159V103Z" fill="#dceaff" />
                  <path d="M127 117H178M127 127H166M127 137H172" stroke="#5782c3" strokeWidth="4" strokeLinecap="round" />
                  <path d="M134 165H199V205L188 198H134C128 198 124 194 124 188V175C124 169 128 165 134 165Z" fill="#bbefd9" />
                  <path d="M138 178H185M138 187H168" stroke="#228362" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="65" cy="155" r="32" fill="#ffe061" />
                  <circle cx="65" cy="145" r="10" fill="#0033a5" />
                  <path d="M46 174C46 152 84 152 84 174" fill="#0033a5" />
                  <circle cx="239" cy="97" r="31" fill="#b9dbff" />
                  <circle cx="239" cy="87" r="10" fill="#0033a5" />
                  <path d="M220 116C220 94 258 94 258 116" fill="#0033a5" />
                  <rect x="45" y="55" width="46" height="32" rx="11" fill="#bbefd9" />
                  <path d="M77 85L85 94V79" fill="#bbefd9" />
                  <circle cx="57" cy="71" r="3" fill="#228362" /><circle cx="68" cy="71" r="3" fill="#228362" /><circle cx="79" cy="71" r="3" fill="#228362" />
                  <path d="M249 177V191M242 184H256M66 213V223M61 218H71" stroke="#ffe061" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="230" cy="36" r="5" fill="#ffe061" />
                </svg>
              </div>
            </div>
            <section data-motion aria-labelledby="sebrae-title" className="sebrae-support relative mt-16 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 sm:mt-20">
              <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_280px] lg:px-12">
                <div>
                  <span className="inline-flex rounded-full border border-blue-100 bg-white px-3 py-2 text-xs font-bold uppercase tracking-wider text-ocean">Apoio para crescer</span>
                  <h3 id="sebrae-title" className="mt-5 max-w-xl text-2xl font-bold leading-tight text-navy sm:text-3xl">Consultorias e apoio do Sebrae SC</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">Dê o próximo passo no seu negócio com soluções, consultorias e conteúdos para empreendedores em Santa Catarina.</p>
                  <ExternalLink href="https://www.sebrae-sc.com.br/solucoes/" className="btn-primary mt-6">Conhecer as soluções do Sebrae</ExternalLink>
                </div>
                <svg viewBox="0 0 280 230" fill="none" aria-hidden="true" className="mx-auto w-full max-w-[240px] lg:max-w-[280px]">
                  <circle cx="140" cy="115" r="100" fill="#dbeafe" />
                  <circle cx="140" cy="115" r="82" stroke="#93b6e0" strokeDasharray="4 7" />
                  <rect x="47" y="51" width="186" height="146" rx="18" fill="white" stroke="#bfdbfe" strokeWidth="2" />
                  <path d="M67 75H117" stroke="#b6d0ef" strokeWidth="6" strokeLinecap="round" />
                  <path d="M67 177H214" stroke="#dbeafe" strokeWidth="2" />
                  <g className="sebrae-chart-bars">
                    <rect x="73" y="139" width="28" height="37" rx="6" fill="#93c5fd" />
                    <rect x="117" y="115" width="28" height="61" rx="6" fill="#4188da" />
                    <rect x="161" y="91" width="28" height="85" rx="6" fill="#0033a5" />
                  </g>
                  <g className="sebrae-chart-badge">
                    <circle cx="222" cy="52" r="28" fill="#ffe061" />
                    <path d="M210 54L218 62L234 44" stroke="#0033a5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <path d="M41 113V127M34 120H48M221 204V216M215 210H227" stroke="#4188da" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </section>
          </div>}
        </div>
      </section>
    </>
  );
}
