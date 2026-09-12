import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const questions = [
  ["Quem Somos?", "Somos a Seguro do Seu Carro, corretora autorizada SUSEP. Trabalhamos com as principais seguradoras do país e com a Loovi, insurtech parceira cujos produtos são emitidos pela LTI Seguros S.A., seguradora autorizada pela SUSEP. Nosso objetivo é tornar o seguro acessível, com valores justos e um processo simples pela tecnologia."],
  ["Quais tipos de veículos são aceitos?", "São aceitos carros (veículos leves) a partir do ano de 1986. Se você usa o carro para trabalhar como taxista ou em apps de transporte, também é aceito, sem cobrança adicional por isso."],
  ["Vocês atendem em todo o Brasil?", "Sim. Atendemos os 27 estados e mais de 4.000 cidades do Brasil, com contratação 100% online."],
  ["É seguro mesmo ou proteção veicular?", "É seguro de verdade, emitido por seguradoras autorizadas pela SUSEP — não é associação nem proteção veicular."],
  ["Qual o valor da franquia?", "As franquias variam conforme Tabela FIPE, categoria, estado e forma de utilização do veículo. Na cotação você recebe o valor exato para o seu caso."],
  ["Quero falar com um consultor.", "Fale com o nosso time pelo WhatsApp (99) 99999-9999. Atendimento humano, sem robôs."],
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-grid">
        <div className="section-heading left">
          <span className="eyebrow">DÚVIDAS</span>
          <h2>Perguntas frequentes</h2>
          <p>Confira algumas das principais dúvidas antes de começar.</p>
        </div>

        <div className="faq-list">
          {questions.map(([question, answer], index) => {
            const isOpen = active === index;
            return (
              <div className={`faq-item ${isOpen ? "active" : ""}`} key={question}>
                <button onClick={() => setActive(isOpen ? -1 : index)}>
                  <span>{question}</span>
                  {isOpen ? <Minus size={19} /> : <Plus size={19} />}
                </button>
                {isOpen && <p>{answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}