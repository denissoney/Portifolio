import "./App.css";
import { FaEnvelope, FaGithub,FaLinkedin, FaWhatsapp } from "react-icons/fa";
function App() {
  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          DENISSONEY<span>.</span>
        </div>
        <nav>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contato">Contato</a>
        </nav>
        <a href="#contato" className="nav-button">
          Vamos conversar
        </a>
      </header>
      {/* HOME */}
      <main>
        <section className="home" id="inicio">
          <div className="home-content">
            <span className="intro">
              OLÁ, EU SOU DENISSONEY
            </span>
            <h1>
              Desenvolvedor
              <span>Web & Software.</span>
            </h1>
            <p>
              Transformo ideias em experiências digitais
              modernas, funcionais e responsivas.
            </p>
            <div className="home-buttons">
              <a href="#projetos" className="button-primary">
                Ver projetos
              </a>
              <a href="#contato" className="button-secondary">
                Entrar em contato
              </a>

            </div>

          </div>
          {/* FOTO */}
          <div className="profile-area">
            <div className="profile-circle">
              <div className="profile-placeholder">
                <img src="/src/assets/DENIZ.jpeg" alt="Denissoney" />
              </div>

            </div>

            <div className="profile-number">
              <span>01</span>
              <p>PORTFÓLIO</p>
            </div>

          </div>

        </section>
        {/* SOBRE */}
        <section className="about" id="sobre">
          <span className="section-label">
             SOBRE
          </span>

          <h2>
            Criando experiências
            <span>digitais que fazem sentido.</span>
          </h2>

          <p>
            Sou desenvolvedor apaixonado por tecnologia,
            design e criação de soluções digitais. Meu objetivo
            é transformar ideias em produtos simples, bonitos
            e funcionais.
          </p>

        </section>
        {/* PROJETOS */}
        <section className="projects" id="projetos">
          <div className="section-header">
            <span className="section-label">
               PROJETOS
            </span>

            <h2>
              Alguns trabalhos.
            </h2>

          </div>
          <div className="project-grid">
            <article className="project-card">
              <div className="project-image">
                <img src="/src/assets/FLOR-ELLY.png" alt="Projeto 01" />
              </div>

              <h3>
                Projeto Web
              </h3>

              <p>
                Website moderno e responsivo.
              </p>
            </article>


            <article className="project-card">
              <div className="project-image">
                PROJETO 02
              </div>

              <h3>
                Aplicação
              </h3>

              <p>
                Aplicação desenvolvida com tecnologia moderna.
              </p>
            </article>


            <article className="project-card">
              <div className="project-image">
                PROJETO 03
              </div>

              <h3>
                Sistema
              </h3>

              <p>
                Sistema focado em praticidade e experiência.
              </p>
            </article>

          </div>

        </section>
        {/* HABILIDADES */}
        <section className="skills" id="habilidades">
          <span className="section-label">
             HABILIDADES
          </span>
          <div className="skills-list">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Git</span>
            <span>GitHub</span>
          </div>
        </section>
        {/* CONTATO */}
        <section className="contact" id="contato">
          <span className="section-label">
             CONTATO
          </span>

          <h2>
            Vamos criar algo
            <span>incrível juntos?</span>
          </h2>
          <div className="contact-links">
          <a href="mailto:denissoneymauriciodasilva@gmail.com">
            <FaEnvelope />
            <span>
              denissoneymauriciodasilva@gmail.com
            </span>
          </a>
          <a href="https://github.com/denissoney" target="_blank" rel="noopener noreferrer">
            <FaGithub />  
            <span>
              GitHub
            </span>
          </a>
          <a href="https://www.linkedin.com/in/denissoney/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            <span>
              LinkedIn
            </span>
          </a>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
            <span>
              WhatsApp
            </span>
          </a>
        </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Denissoney. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}

export default App;
