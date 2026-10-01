import type { LucideIcon } from 'lucide-react';
import { ArrowRight, CalendarDays, Clock, MapPin, UsersRound } from 'lucide-react';
import { ExternalLink } from './ExternalLink';

type IntentCardProps = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export function IntentCard({ title, description, href, icon: Icon }: IntentCardProps) {
  return (
    <ExternalLink href={href} showIcon={false} className="card group block transition hover:-translate-y-1 hover:border-ocean">
      <Icon aria-hidden="true" className="h-7 w-7 text-ocean" />
      <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ocean">
        Acessar <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </ExternalLink>
  );
}

type LinkCardProps = {
  title: string;
  description: string;
  href: string;
  cta?: string;
  icon?: LucideIcon;
  placeholder?: boolean;
  source?: string;
};

export function LinkCard({ title, description, href, cta = 'Acessar', icon: Icon, placeholder, source }: LinkCardProps) {
  return (
    <div className="card flex h-full flex-col">
      <div className="flex items-start gap-4">
        {Icon && <Icon aria-hidden="true" className="h-7 w-7 shrink-0 text-ocean" />}
        <div>
          <h3 className="text-lg font-bold text-navy">{title}</h3>
          {placeholder && <span className="mt-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">Placeholder</span>}
        </div>
      </div>
      <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{description}</p>
      {source && <p className="mt-4 text-xs font-semibold leading-5 text-ocean">Fonte: {source}</p>}
      <ExternalLink href={href} className={placeholder ? 'btn-secondary mt-6' : 'btn-primary mt-6'}>
        {cta}
      </ExternalLink>
    </div>
  );
}

export function DataCard({ title, description, icon: Icon }: { title: string; description: string; icon: LucideIcon }) {
  return (
    <div className="card">
      <Icon aria-hidden="true" className="h-7 w-7 text-ocean" />
      <p className="mt-5 text-lg font-bold text-navy">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-5 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-5 text-sm font-semibold text-slate-500">
        Aguardando fonte oficial
      </div>
    </div>
  );
}

export function CourseCard({ course }: { course: { date: string; theme: string; format: string; location: string; audience: string; signup: string } }) {
  return (
    <div className="card flex h-full flex-col">
      <div className="flex items-start justify-between gap-4">
        <div className="rounded-xl bg-[#ffe061] px-3 py-2 text-center shadow-sm">
          <div className="text-lg font-extrabold leading-none text-navy">{course.date}</div>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-mint px-3 py-1 text-xs font-bold uppercase text-ocean">
          <CalendarDays aria-hidden="true" className="h-3.5 w-3.5" />
          Agenda
        </div>
      </div>
      <h3 className="mt-4 text-xl font-bold text-navy">{course.theme}</h3>
      <div className="mt-5 grid flex-1 gap-3 text-sm text-slate-600">
        <p className="flex gap-2 font-semibold text-ocean"><Clock aria-hidden="true" className="h-4 w-4 shrink-0" />{course.format}</p>
        <p className="flex gap-2 leading-6"><MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-ocean" />{course.location}</p>
        <p className="flex gap-2 leading-6"><UsersRound aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-ocean" />{course.audience}</p>
      </div>
      <ExternalLink href={course.signup} className="btn-secondary mt-6">
        Inscrever-se pelo WhatsApp
      </ExternalLink>
    </div>
  );
}
