import React from "react";
import "./styleStores.css";
import Footer from "../../Componentes/Footer/footer";
import Navbar from "../../Componentes/Navbar/navbar";
import backgroundImageStores from "../../Componentes/Navbar/imgStores.svg";
import cartShopping from "./cartShoppingSolid.png"
import Card from "../../Componentes/Card/card";

const Stores = () => {
  return (
    <div>
      <div className="hero-section">
        <Navbar backgroundImage={backgroundImageStores} />
        <div className="conteiner-palavra">
          <div className="static-stores">Market</div>
          <div className="static2-stores">Place</div>
        </div>
        <div>
          <span className="frase">
            Descubra o prazer <br /> Cuide do seu bem-estar{" "} <br /> Tudo em um só lugar{" "}
          </span>
        </div>
      </div>
      <div>
        <div class="saude-container">
          <button class="btn-filtrar">FILTRAR</button>
        </div>
        <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
          <Card
            imagem={""}
            nome="Drª Luiza"
            especialidade="Ginecologista"
            endereco="Rua mil oitavas, Bela Vista"
            cidadeEstado="Diamantina - MG"
            link="https://wa.me/5531999999999"
            icone={cartShopping}
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Stores;
