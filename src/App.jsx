import { Routes, Route } from "react-router-dom";
import './App.css'
import InicioSesion from './views/InicioSesion';
import Perfil from './views/Perfil';
import Calendario from './views/Calendario';
import Social from './views/social';
import Inicio from './views/Inicio';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/social" element={<Social />} />
          <Route path="/inicioSesion" element={<InicioSesion />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
