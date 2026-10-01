import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { SiteMotion } from './SiteMotion';

export function Layout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Header />
      <SiteMotion />
      <main id="conteudo" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
