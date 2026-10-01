import { LinkCard } from '../components/Cards';
import { PageHero } from '../components/PageHero';
import { licenseDocuments, licenseLinks } from '../data/content';

export function Licenses() {
  const norms = licenseDocuments;

  return (
    <>
      <PageHero title="Viabilidade, Licenças e Alvarás" eyebrow="Antes de funcionar" description="Antes de iniciar a operação, consulte se a atividade pode funcionar no endereço pretendido e quais licenças, normas ou autorizações podem se aplicar." />
      <section aria-labelledby="licensing-guide-title" className="bg-white">
        <div className="container-page py-8 sm:py-10">
          <div className="overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-blue-50">
            <div className="grid items-center gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_240px] lg:gap-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-ocean">Balneário Camboriú • Santa Catarina</p>
                <h2 id="licensing-guide-title" className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl">Seu negócio começa com o próximo passo certo.</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">Serviços municipais e orientações estaduais para preparar o funcionamento do seu estabelecimento.</p>
                <ol className="mt-6 grid gap-4 sm:grid-cols-3">
                  {[
                    { title: 'Consulte a viabilidade', text: 'Confira o endereço e a atividade que pretende exercer.' },
                    { title: 'Confira as exigências', text: 'Verifique as orientações dos órgãos responsáveis.' },
                    { title: 'Acompanhe os alvarás', text: 'Consulte as licenças aplicáveis ao seu estabelecimento.' },
                  ].map((step, index) => <li key={step.title} className="border-t border-sky-200 pt-4">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ocean text-xs font-bold text-white">{index + 1}</span>
                    <h3 className="mt-3 text-sm font-bold text-navy">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{step.text}</p>
                  </li>)}
                </ol>
              </div>
              <svg viewBox="0 0 280 260" fill="none" aria-hidden="true" className="mx-auto w-full max-w-[160px] sm:max-w-[240px]">
                <circle cx="140" cy="130" r="112" fill="#e0f2fe" />
                <path d="M25 216H255" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" />
                <path d="M39 161V106H67V161M215 177V83H240V177M222 95H233M222 109H233M46 119H58M46 132H58" stroke="#bae6fd" strokeWidth="5" strokeLinejoin="round" />
                <rect x="64" y="105" width="148" height="109" rx="8" fill="white" stroke="#164e87" strokeWidth="3" />
                <path d="M58 105L76 77H200L218 105H58Z" fill="#176eb4" />
                <path d="M58 105V116C58 133 90 133 90 116V105M90 105V116C90 133 122 133 122 116V105M122 105V116C122 133 154 133 154 116V105M154 105V116C154 133 186 133 186 116V105M186 105V116C186 133 218 133 218 116V105" fill="#38bdf8" stroke="#164e87" strokeWidth="2" />
                <rect x="79" y="146" width="57" height="44" rx="5" fill="#e0f2fe" stroke="#164e87" strokeWidth="3" />
                <path d="M107 147V190M80 168H135" stroke="#93c5fd" strokeWidth="2" />
                <path d="M153 214V148H194V214" fill="#dbeafe" stroke="#164e87" strokeWidth="3" strokeLinejoin="round" />
                <circle cx="184" cy="183" r="3" fill="#176eb4" />
                <rect x="87" y="57" width="102" height="25" rx="8" fill="#164e87" />
                <path d="M111 70H165" stroke="white" strokeWidth="4" strokeLinecap="round" />
                <circle cx="223" cy="63" r="29" fill="#ffe061" />
                <path d="M211 62L220 71L236 54" stroke="#164e87" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M42 213V186M42 199C24 198 24 179 29 175C43 175 48 189 42 199M42 191C59 191 62 178 57 171C44 172 40 182 42 191" fill="#7dd3fc" stroke="#176eb4" strokeWidth="2" strokeLinejoin="round" />
                <path d="M35 215H51L54 201H32L35 215Z" fill="#176eb4" />
                <path d="M74 42V52M69 47H79M247 143V153M242 148H252" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex items-start gap-3 border-t border-sky-100 bg-white/70 px-6 py-4 sm:px-8">
              <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-800">i</span>
              <p className="text-xs leading-5 text-slate-600"><strong className="font-semibold text-navy">Antes de abrir as portas:</strong> a consulta de viabilidade não autoriza, por si só, o funcionamento.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {licenseLinks.map((item) => <LinkCard key={item.title} {...item} />)}
        </div>
      </section>
      <section className="section bg-white">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-navy">Documentos, orientações e normas</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">Materiais de Balneário Camboriú e orientações gerais dos órgãos de Santa Catarina. Os botões levam às fontes oficiais; os documentos disponíveis podem ser consultados no próprio órgão.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {norms.map((item) => <LinkCard key={item.title} {...item} />)}
          </div>
          <p className="mt-8 text-xs leading-5 text-slate-500">Fontes consultadas em 30/09/2026. As exigências dependem da atividade e do imóvel; confira as informações atualizadas nos órgãos indicados.</p>
        </div>
      </section>
    </>
  );
}
