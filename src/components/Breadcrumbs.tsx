import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-600">
      <Link to="/" className="inline-flex items-center gap-1 font-medium text-navy hover:text-ocean">
        <Home aria-hidden="true" className="h-4 w-4" />
        Início
      </Link>
      <ChevronRight aria-hidden="true" className="h-4 w-4" />
      <span aria-current="page">{current}</span>
    </nav>
  );
}
