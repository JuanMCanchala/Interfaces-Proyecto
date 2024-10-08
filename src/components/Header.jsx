import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">HO</div>
      
      <div className="search-bar">
        <input type="text" placeholder="Buscar..." />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
      
      <nav className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/calendario">Calendario</Link>
        <Link to="/social">Social</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/inicioSesion">Iniciar sesion</Link>
      </nav>
      
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      
      {isMenuOpen && (
        <div className="dropdown-menu">
          <Link to="/">Inicio</Link>
          <Link to="/calendario">Calendario</Link>
          <Link to="/social">Social</Link>
          <Link to="/perfil">Perfil</Link>
          <Link to="/inicioSesion">Iniciar sesion</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
