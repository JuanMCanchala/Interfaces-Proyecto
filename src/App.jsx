import { Routes, Route } from "react-router-dom";
import './App.css'
import InicioSesion from './views/InicioSesion';
import Perfil from './views/Perfil';
import Calendario from './views/Calendario';
import Inicio from './views/Inicio';
import Social from './views/Social';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/social" element={<Social />} />
        <Route path="/inicioSesion" element={<InicioSesion />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
