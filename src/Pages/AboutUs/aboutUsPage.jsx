import "./styleAboutUs.css";
import Footer from "../../Componentes/Footer/footer";
import Navbar from "../../Componentes/Navbar/navbar";
import backgroundImageAboutUs from "../../Componentes/Navbar/imgAboutUs.svg";

const AboutUs = () => {
  return (
    <div>
      <div className="hero-section">
        <Navbar backgroundImage={backgroundImageAboutUs} />
        <div className="conteiner-palavra">
          <div className="estatico3">Oráculo</div>
        </div>
        <div>
          <span className="frase">
            Empoderamento, saúde <br /> e bem-estar{" "}
          </span>
        </div>
      </div>
      <div className="about-container">
        <section className="about-text">
          <p>
            Somos uma <span className="highlight">Femtech</span> voltada para a
            saúde sexual e bem-estar feminino. Visamos o autocuidado ao levar
            informações e conhecimentos sobre a saúde sexual feminina, como
            também produtos e serviços tudo em um só lugar. Buscamos apoiar
            vocês em todos os momentos desde a fertilidade até depois da
            menopausa.
          </p>
        </section>

        <section className="mission">
          <h3 className="title-green">Nossa missão</h3>
          <p className="white-description">
            Empoderar mulheres a tomarem controle de sua saúde sexual e
            bem-estar. Queremos fornecer informações confiáveis, produtos e
            profissionais na área da saúde para que cada mulher possa tomar
            decisões informadas sobre sua saúde e viver uma vida gratificante.
          </p>
        </section>

        <section className="values">
          <h3 className="title-green">O que defendemos</h3>
          <div className="value-cards">
            <div className="card2">
              <h3>Educação</h3>
              <p>
                Acreditamos que o conhecimento é a chave para a autonomia.
                Oferecemos informações precisas e desmistificadas sobre saúde
                sexual, prevenção e educação contínua.
              </p>
            </div>
            <div className="card2">
              <h3>Respeito</h3>
              <p>
                Valorizamos a diversidade e respeitamos as escolhas individuais
                de cada mulher, seja em relação ao seu corpo ou vida sexual.
              </p>
            </div>
            <div className="card2">
              <h3>Apoio</h3>
              <p>
                Oferecemos um espaço seguro e acolhedor onde as mulheres podem
                se conectar, compartilhar experiências, fazer perguntas e
                receber apoio de uma comunidade solidária.
              </p>
            </div>
            <div className="card2">
              <h3>Bem-estar</h3>
              <p>
                Acreditamos que a saúde sexual está intrinsecamente ligada ao
                bem-estar geral. Abordamos a saúde de forma holística,
                promovendo o equilíbrio emocional, físico, e espiritual.
              </p>
            </div>
          </div>
        </section>

        <section className="team">
          <h2 className="title-green">Nosso time</h2>
          <p className="white-description">
            Nosso site é administrado por uma equipe de profissionais de saúde,
            especialistas em sexualidade, escritores e defensores do bem-estar
            feminino. Estamos comprometidos em fornecer informações baseadas em
            evidências, conteúdo informativo e recursos confiáveis.
          </p>
        </section>

        <section>
          <h2 className="title-green">Contatos</h2>
          <p className="about-text">
            É um profissional da saúde e quer juntar-se à oráculo <br />
            envie um e-mail para
          </p>
          <div className="email-box">emailTrabalhoOraculo@email.com</div>

          <p className="about-text">Para ser parceiro e fazer parte da plataforma</p>
          <div className="email-box">emailOraculo@email.com</div>

          <p className="about-text">Para dúvidas, sugestões e suporte</p>
          <div className="email-box">emailSuporteOraculo@email.com</div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
