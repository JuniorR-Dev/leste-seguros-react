import { Link } from "react-router-dom";
import lesteseg from "../imgs/lesteseg.png";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <img src={lesteseg} alt="Leste Seguros" />
          </div>
          <p>Seguro veicular simples, rápido e 100% online.</p>
        </div>

        <div>
          <h4>Links</h4>
          <a href="/#inicio">Início</a>
          <a href="/#beneficios">Benefícios</a>
          <Link to="/cotacao">Cotação</Link>
        </div>

        <div>
          <h4>Atendimento</h4>
          <p>Fale com nossa equipe para tirar dúvidas e iniciar sua cotação.</p>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          © {new Date().getFullYear()} Leste Seguros. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}