import { Clock, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactInfo, navItems } from '../data/content';
import { ExternalLink } from './ExternalLink';

export function Footer() {
  return (
    <footer className="border-t border-[#c2c6d4] bg-white text-ink">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-6 py-12 lg:grid-cols-3 lg:px-12">
        <div>
          <Link to="/"><img src="/assets/logo_empreenda_mais_bc_transparente.png" alt="Empreenda+ Balneário Camboriú" width="4707" height="1858" loading="lazy" className="h-auto w-56" /></Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
            © {new Date().getFullYear()} Prefeitura de Balneário Camboriú.
            <br />
            Praça do Empreendedor Municipal.
          </p>

        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-navy">Acesso rápido</p>
          <div className="mt-5 grid gap-3">
            {navItems.slice(1, 5).map((item) => (
              <Link key={item.href} to={item.href} className="text-sm text-slate-600 transition hover:text-navy">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-navy">Contato oficial</p>
          <div className="mt-5 space-y-4 text-sm text-slate-600">
            <p className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
              {contactInfo.address}
            </p>
            <ExternalLink href={contactInfo.whatsappHref} className="inline-flex items-center gap-3 text-slate-600 hover:text-navy">
              <MessageCircle aria-hidden="true" className="h-4 w-4 text-ocean" />
              {contactInfo.whatsapp} (Mensagens apenas)
            </ExternalLink>
            <a className="flex items-center gap-3 text-slate-600 hover:text-navy" href={`mailto:${contactInfo.email}`}>
              <Mail aria-hidden="true" className="h-4 w-4 text-navy" />
              {contactInfo.email}
            </a>
            <p className="flex items-center gap-3">
              <Clock aria-hidden="true" className="h-4 w-4 text-[#563d00]" />
              {contactInfo.hours}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
