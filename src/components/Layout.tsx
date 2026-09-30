import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export function Layout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
