import React from "react";
import Footer from "../../Componentes/Footer/footer";
import Navbar from "../../Componentes/Navbar/navbar";
import backgroundImageCollaborators from "../../Componentes/Navbar/imgCollaborators.svg";

const Collaborators = () => {
  return (
    <div>
      <div className="hero-section">
        <Navbar backgroundImage={backgroundImageCollaborators} />
        <div className="conteiner-palavra">
          <div className="static2">Colaboradores</div>
        </div>
        <div>
          <span className="frase">
            Venha colaborar com a nossa <br /> plataforma{" "}
          </span>
        </div>
      </div>
      <div className="planos-container">
        <h2 className="titulo">
          Para ser um colaborador entre em contato pelo <br />
          e-mail e trabalhe conosco
        </h2>

        <div className="email-box">emailOraculo@email.com</div>

        <div className="plano-card">
          <h3 className="title-green">Conteúdo</h3>
          <p className="descricao">
            É profissional da saúde ou estudante da área e quer nos ajudar com
            conteúdo?
          </p>
        </div>

        <div className="plano-card">
          <h3 className="title-green">Dúvidas</h3>
          <p className="descricao">
            É um profissional da saúde? Seja um colaborador na nossa comunidade
            sanando dúvidas dos membros
          </p>
        </div>

        <div className="plano-card">
          <h3 className="title-green">Moderador</h3>
          <p className="descricao">
            Venha ser moderador da nossa comunidade no discord
          </p>
        </div>

        <div className="email-box">emailOraculo@email.com</div>
      </div>
      <Footer />
    </div>
  );
};

export default Collaborators;
