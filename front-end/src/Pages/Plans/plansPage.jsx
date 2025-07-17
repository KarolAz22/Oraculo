import React from "react";
import "./stylePlans.css";
import Footer from "../../Componentes/Footer/footer";
import Navbar from "../../Componentes/Navbar/navbar";
import backgroundImagePlans from "../../Componentes/Navbar/imgPlans.svg";

const Plans = () => {
  return (
    <div>
      <div className="hero-section">
        <Navbar backgroundImage={backgroundImagePlans} />
        <div className="word-container">
          <div className="static2">Parceiros</div>
        </div>
        <div>
          <span className="phrase">
            Venha fazer parte da nossa <br /> plataforma{" "}
          </span>
        </div>
      </div>
      <div className="plans-container">
        <h2 className="title">
          Para ser um parceiro entre em contato conosco pelo <br />
          e-mail e escolha seu plano
        </h2>

        <div className="email-box">emailOraculo@email.com</div>

        <div className="plan-card">
          <h3 className="title-green">Plano mensal</h3>
          <p className="description">
            Com o plano mensal você tem seu anúncio disponível na <br />
            plataforma por 30 dias pelo valor de
          </p>
          <p className="price">R$ 300,00</p>
        </div>

        <div className="plan-card">
          <h3 className="title-green">Plano semestral</h3>
          <p className="description">
            Com o plano semestral você tem seu anúncio disponível na <br />
            plataforma por 6 meses pelo valor de
          </p>
          <p className="price">R$ 1.740,00</p>
        </div>

        <div className="plan-card">
          <h3 className="title-green">Plano anual</h3>
          <p className="description">
            Com o plano anual você tem seu anúncio disponível na <br />
            plataforma por 1 ano pelo valor de
          </p>
          <p className="price">R$ 3.360,00</p>
        </div>

        <div className="email-box">emailOraculo@email.com</div>
      </div>
      <Footer />
    </div>
  );
};

export default Plans;
