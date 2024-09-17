import { Routes, Route } from "react-router-dom";
import './App.css'
import InicioSesion from './views/InicioSesion';
import Perfil from './views/Perfil';
import Calendario from './views/Calendario';
import Inicio from './views/Inicio';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<InicioSesion />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/inicio" element={<Inicio />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
