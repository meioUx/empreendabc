import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Atendimento } from './pages/Atendimento';
import { Biblioteca } from './pages/Biblioteca';
import { BusinessStart } from './pages/BusinessStart';
import { Certidoes } from './pages/Certidoes';
import { Courses } from './pages/Courses';
import { DataScenario } from './pages/DataScenario';
import { Home } from './pages/Home';
import { Licenses } from './pages/Licenses';
import { Mei } from './pages/Mei';
import { NotaFiscal } from './pages/NotaFiscal';
import { Procurement } from './pages/Procurement';
import { Services } from './pages/Services';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<About />} />
        <Route path="abrir-meu-negocio" element={<BusinessStart />} />
        <Route path="servicos" element={<Services />} />
        <Route path="mei" element={<Mei />} />
        <Route path="nota-fiscal" element={<NotaFiscal />} />
        <Route path="viabilidade-licencas-alvaras" element={<Licenses />} />
        <Route path="regularidade-certidoes" element={<Certidoes />} />
        <Route path="compras-publicas" element={<Procurement />} />
        <Route path="cursos-consultorias" element={<Courses />} />
        <Route path="cenario-empreendedor-bc" element={<DataScenario />} />
        <Route path="biblioteca" element={<Biblioteca />} />
        <Route path="atendimento" element={<Atendimento />} />
      </Route>
    </Routes>
  );
}
