import React from "react";
import "./styleHome.css";
import Footer from "../../Componentes/Footer/footer";
import Navbar from "../../Componentes/Navbar/navbar";
import backgroundImagePrincipal from "../../Componentes/Navbar/imgPrincipal.svg";
import whatsappIcon from "./whatsappIcon.png"
import Card from "../../Componentes/Card/card";

const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <Navbar backgroundImage={backgroundImagePrincipal} />
        <div className="word-container">
          <div className="static">Saúde</div>
          <ul className="dynamic">
            <li>
              <span>Sexual</span>
            </li>
            <li>
              <span>Feminina</span>
            </li>
          </ul>
        </div>
        <div>
          <span className="phrase">
            Cuide-se, você é a pessoa mais <br /> importante da sua vida{" "}
          </span>
        </div>
      </div>
      <div>
        <div class="health-container">
          <button class="btn-filter">FILTRAR</button>
          <h2 class="health-title">Profissionais da saúde</h2>
        </div>
        <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
          <Card
            image={""}
            name="Drª Luiza"
            specialty="Ginecologista"
            address="Rua mil oitavas, Bela Vista"
            cityState="Diamantina - MG"
            link="https://wa.me/5531999999999"
            icon={whatsappIcon}
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
