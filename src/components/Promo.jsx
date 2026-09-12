import { Link } from "react-router-dom";

export default function Promo() {
  return (
    <section className="promo-section">
      <div className="container">
        <div className="promo-card">
          <div className="promo-lines" />
          <div className="promo-content">
            <span className="eyebrow">COTAÇÃO ONLINE</span>
            <h2 className="eyebrowq">Quer saber quanto custa proteger seu carro?</h2>
            <p>Faça uma simulação e veja as opções disponíveis para o seu veículo.</p>
            <Link to="/cotacao" className="button button-light">Calcular agora →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}