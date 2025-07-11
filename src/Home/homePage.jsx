import React from "react";
import "./styleHome.css";

import Navbar from "../Componentes/Navbar/navbar";
import backgroundImagePrincipal from "../Componentes/Navbar/imgPrincipal.svg";
import Card from "../Componentes/Card/card";

const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <Navbar backgroundImage={backgroundImagePrincipal} />
        <div className="conteiner-palavra">
          <div className="estatico">Saúde</div>
          <ul className="dinamico">
            <li>
              <span>Sexual</span>
            </li>
            <li>
              <span>Feminina</span>
            </li>
          </ul>
        </div>
        <div>
          <span className="frase">
            Cuide-se, você é a pessoa mais <br /> importante da sua vida{" "}
          </span>
        </div>
      </div>
      <div>
        <div class="saude-container">
          <button class="btn-filtrar">FILTRAR</button>
          <h2 class="saude-titulo">Profissionais da saúde</h2>
        </div>
        <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
          <Card
            imagem={""}
            nome="Drª Luiza"
            especialidade="Ginecologista"
            endereco="Rua mil oitavas, Bela Vista"
            cidadeEstado="Diamantina - MG"
            whatsappLink="https://wa.me/5531999999999"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
