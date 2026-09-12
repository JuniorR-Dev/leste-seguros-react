import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Zap, BadgeCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">SEGURO VEICULAR</span>
          <h1>
            Seguro para o seu carro,
            <span> do seu jeito.</span>
          </h1>
          <p>
            Faça sua cotação online de forma rápida, segura e sem complicação.
            Encontre uma opção de seguro que combina com você.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" to="/cotacao">
              Cotar 100% online <ArrowRight size={18} />
            </Link>
            <a className="button button-secondary" href="#beneficios">
              Conheça a Leste Seguros
            </a>
          </div>

          <div className="trust-row">
            <div><ShieldCheck size={18} /> Proteção</div>
            <div><Zap size={18} /> Agilidade</div>
            <div><BadgeCheck size={18} /> Segurança</div>
          </div>
        </div>

        <div className="hero-card-wrap">
          <div className="hero-card">
            {/* <div className="hero-card-label">SEGURO AUTO</div>
            <h2>Seu carro protegido.</h2>
            <p>Comece sua cotação em poucos minutos.</p>
            <Link to="/cotacao" className="mini-cta">Começar cotação →</Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}