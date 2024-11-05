import React from 'react';
import './styleNavbar.css';

const Navbar = ({ backgroundImage }) => {
  return (
    <nav
      className="navbar"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Define a imagem de fundo dinamicamente
      }}
    >
        <div className="cabecalho">
            <ul className="navbar-menu">
                <li className="navbar-item"><a href="/">Página Inicial</a></li>
                <li className="navbar-item"><a href="/professionals">Profissionais</a></li>
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
