import { SearchBar } from '../components/SearchBar';
import { LinkCard } from '../components/Cards';
import { ExternalLink } from '../components/ExternalLink';
import { PageHero } from '../components/PageHero';
import { certificates, meiLinks, serviceCategories } from '../data/content';

export function Services() {
  const priorityMeiServices = meiLinks.filter((item) =>
    ['Formalize-se', 'Boleto mensal DAS', 'DASN', 'Regularização'].includes(item.title),
  );

  return (
    <>
      <PageHero
        title="Serviços"
        eyebrow="Autoatendimento"
        imageSrc="/assets/hero-praca-empreendedor.png"
        imageAlt="Atendimento e orientação para empreendedores"
        description="Acesse os principais serviços pela necessidade do empreendedor: MEI, nota fiscal, licenças, regularidade, compras públicas, dados e atendimento."
      />
      <section className="section">
        <div className="container-page">
          <div className="mb-12"><SearchBar /></div>
          <h2 className="text-2xl font-bold text-navy">Serviços por jornada</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category) => (
              <div key={category.title} className="card flex h-full flex-col">
                <category.icon aria-hidden="true" className="h-7 w-7 text-ocean" />
                <h3 className="mt-5 text-lg font-bold text-navy">{category.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{category.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {category.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ocean" />
                      {item}
                    </li>
                  ))}
                </ul>
                <ExternalLink href={category.href} className="btn-secondary mt-6">
                  Acessar
                </ExternalLink>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-navy">Serviços mais procurados</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {priorityMeiServices.map((item) => (
              <LinkCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-navy">Regularidade e certidões</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {certificates.slice(0, 4).map((item) => (
              <LinkCard key={item.title} {...item} cta="Acessar" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
