import React, { useState } from 'react';
import './styleNavbar.css';

const Navbar = ({ backgroundImage }) => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };
  return (
    <nav
      className="navbar"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Define a imagem de fundo dinamicamente
      }}
    >
        <div className="cabecalho">
            <button className="menu-toggle" onClick={toggleMenu}>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
            </button>
            <ul className={`navbar-menu ${menuAberto ? 'ativo' : ''}`}>
                <li className="navbar-item"><a href="/">Página Inicial</a></li>
                <li className="navbar-item"><a href="/professionais">Profissionais</a></li>
                <li className="navbar-item"><a href="/stores">Lojas</a></li>
                <li className="navbar-item"><a href="/plans">Planos</a></li>
                <li className="navbar-item"><a href="/about">Sobre-nós</a></li>
                <li className="navbar-item"><a href="/contact">Contato</a></li>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;
