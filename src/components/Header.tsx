import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { headerNavItems } from '../data/content';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header onKeyDown={(event: { key: string }) => { if (event.key === 'Escape') setOpen(false); }} className="sticky top-0 z-40 border-b border-[#d8dadc] bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex min-h-[96px] flex-wrap xl:flex-nowrap w-full max-w-[1440px] items-center justify-between gap-x-4 gap-y-0 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="my-4 shrink-0 text-xl font-extrabold tracking-tight text-navy [font-family:Epilogue,Inter,sans-serif]" onClick={() => setOpen(false)}>
          <img src="/assets/logo_empreenda_mais_bc_transparente.png" alt="Empreenda+ Balneário Camboriú — início" width="4707" height="1858" className="h-auto w-[165px] sm:w-[190px]" />
        </Link>

        <nav className="hidden items-center gap-4 xl:flex" aria-label="Principal">
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

        <div className="order-last flex w-full flex-wrap items-center justify-center gap-4 xl:flex-nowrap border-t border-slate-100 py-3 xl:order-none xl:w-auto xl:shrink-0 xl:border-t-0 xl:py-0">
          <Link to="/atendimento" onClick={() => setOpen(false)} className="btn-primary whitespace-nowrap !px-3 !text-xs sm:!px-4 sm:!text-sm">Fale com a gente</Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-navy xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-slate-200 bg-white xl:hidden" aria-label="Menu móvel">
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
