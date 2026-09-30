import { Breadcrumbs } from './Breadcrumbs';

type PageHeroProps = {
  title: string;
  eyebrow?: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function PageHero({ title, eyebrow, description, imageSrc, imageAlt }: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden py-10 sm:py-14 ${imageSrc ? 'bg-slate-100' : 'bg-white'}`}>
      {imageSrc && (
        <div className="absolute inset-0" aria-hidden="true">
          <img src={imageSrc} alt={imageAlt ?? ''} className="h-full w-full object-cover object-center opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/75" />
        </div>
      )}
      <div className="container-page relative">
        <Breadcrumbs current={title} />
        <div className="relative mt-6">
          <div className="max-w-4xl">
            {eyebrow && <p className="text-sm font-semibold uppercase tracking-wide text-ocean">{eyebrow}</p>}
            <h1 className="mt-3 text-3xl font-bold text-navy sm:text-5xl">{title}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-700">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
