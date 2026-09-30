import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { headerNavItems } from '../data/content';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header onKeyDown={(event: { key: string }) => { if (event.key === 'Escape') setOpen(false); }} className="sticky top-0 z-40 border-b border-[#d8dadc] bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex min-h-[96px] w-full max-w-[1440px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="shrink-0 text-xl font-extrabold tracking-tight text-navy [font-family:Epilogue,Inter,sans-serif]" onClick={() => setOpen(false)}>
          <img src="/assets/logo_empreenda_mais_bc_transparente.png" alt="Empreenda+ Balneário Camboriú — início" width="4707" height="1858" className="h-auto w-[165px] sm:w-[190px]" />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Principal">
          {headerNavItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }: { isActive: boolean }) =>
                `border-b-2 pb-1 text-sm font-semibold transition ${
                  isActive ? 'border-navy text-navy' : 'border-transparent text-slate-700 hover:border-navy/30 hover:text-navy'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/atendimento" className="btn-primary hidden lg:inline-flex">Fale com a gente</Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-slate-200 bg-white lg:hidden" aria-label="Menu móvel">
          <div className="grid gap-2 px-4 py-4">
            {headerNavItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }: { isActive: boolean }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold ${isActive ? 'bg-mint text-ocean' : 'text-slate-700 hover:bg-slate-100'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
