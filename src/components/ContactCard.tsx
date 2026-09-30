import { Mail, MapPin, MessageCircle, Navigation } from 'lucide-react';
import { contactInfo } from '../data/content';
import { ExternalLink } from './ExternalLink';

export function ContactCard() {
  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-navy">{contactInfo.name}</h2>
      <div className="mt-6 grid gap-4 text-sm leading-6 text-slate-700">
        <p className="flex gap-3"><MessageCircle aria-hidden="true" className="h-5 w-5 shrink-0 text-ocean" />{contactInfo.whatsapp} - {contactInfo.whatsappNote}</p>
        <p className="flex gap-3"><MapPin aria-hidden="true" className="h-5 w-5 shrink-0 text-ocean" />{contactInfo.address}</p>
        <p><strong className="text-navy">Horário:</strong> {contactInfo.hours}</p>
        <p><strong className="text-navy">E-mail:</strong> {contactInfo.email}</p>
      </div>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <ExternalLink href={contactInfo.whatsappHref} className="btn-primary"><MessageCircle aria-hidden="true" className="h-4 w-4" /> WhatsApp</ExternalLink>
        <a href={`mailto:${contactInfo.email}`} className="btn-secondary"><Mail aria-hidden="true" className="h-4 w-4" /> E-mail</a>
        <ExternalLink href={contactInfo.mapsHref} className="btn-secondary"><Navigation aria-hidden="true" className="h-4 w-4" /> Como chegar</ExternalLink>
      </div>
    </div>
  );
}
