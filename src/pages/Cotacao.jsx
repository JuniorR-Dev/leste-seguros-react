import Header from "../components/Header";
import Footer from "../components/Footer";
import QuoteForm from "../components/quote/QuoteForm";

export default function Cotacao() {
  return (
    <>
      <Header />
      <main className="quote-page">
        <div className="container quote-layout">
          <div className="quote-intro">
            <span className="eyebrow">LESTE SEGUROS</span>
            <h1>Faça sua cotação de seguro veicular.</h1>
            <p>
              Preencha as etapas ao lado. O formulário foi separado do WordPress
              para que futuramente possamos conectar consulta de placa e cotação por API.
            </p>

            <div className="quote-points">
              <div>✓ Processo simples</div>
              <div>✓ Cotação online</div>
              <div>✓ Atendimento especializado</div>
            </div>
          </div>

          <QuoteForm />
        </div>
      </main>
      <Footer />
    </>
  );
}