import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InicioSesion from './views/InicioSesion';
import Perfil from './views/Perfil';
import Calendario from './views/Calendario';
import Inicio from './views/Inicio';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<InicioSesion />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/inicio" element={<Inicio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
