import { useState } from "react";
import { Link } from "react-router-dom";



import {
  Clock3,
  Smartphone,
  Headphones,
  Check,
  ArrowRight,
  ChevronDown,
  Wrench,
} from "lucide-react";

import mediaCariani from "../imgs/media-cariani.webp";
import mediawinderson from "../imgs/media-winderson.webp";
import mediacelso from "../imgs/media-celso.webp";


/* =========================
   BENEFÍCIOS PRINCIPAIS
========================= */
const benefits = [
  {
    icon: Wrench,
    title: "Proteção completa",
    text: "Opções de cobertura para deixar seu veículo mais protegido.",
  },
  {
    icon: Clock3,
    title: "Cotação rápida",
    text: "Preencha seus dados online e avance sem burocracia.",
  },
  {
    icon: Smartphone,
    title: "100% online",
    text: "Faça sua cotação pelo computador ou celular.",
  },
  {
    icon: Headphones,
    title: "Atendimento",
    text: "Conte com nossa equipe para ajudar quando precisar.",
  },
];

/* =========================
   DIFERENCIAIS
========================= */

const showcaseItems = [
  "Pagamento mês a mês, sem comprometer seu limite, igual Netflix",

  "Sem análise de perfil do condutor. Não importa quem vai dirigir ou onde mora, o valor não muda",

  "Aceitamos carros a partir de 1986",

  "100% FIPE para táxi e carro de app em caso de acidente",

  "Aceitamos carros híbridos e elétricos",

  "Aceitamos carros modificados e de leilão",
];

  <div>

  </div>
       

/* =========================
   COBERTURAS
========================= */

const coverageItems = [
  {
    title: "Assistência 24h",

    items: [
      "Reboque",
      "Hotel para até 5 pessoas",
      "Assistência para pane elétrica",
      "Assistência para pane mecânica",
      "Auxílio na falta de combustível",
      "Táxi ou transporte alternativo",
      "Troca de pneus",
      "Recarga de bateria",
      
    ],
  },

  {
    title: "Carro reserva",

    items: [
      "Carro reserva por 7 dias em caso de colisão, incêndio, roubo ou furto.",
  
    ],
  },

  {
    title: "Colisão",

    items: [
      "Pagamento integral ou parcial em caso de colisão",
      "Fenômenos da natureza: Alagamento, Granizo, Queda de árvore e suas consequências",
      "Franquia reduzida: 1) VEÍCULOS DE PASSEIO: 5% (cinco por cento) do valor correspondente à Tabela Fipe do veículo à data do ocorrido, não podendo este ser inferior a R$2.500,00 (dois mil e quinhentos reais);",
      "Colisão: 2) VEÍCULOS DIFERENCIADOS: 8% (oito por cento) do valor correspondente à Tabela Fipe do veículo à data do ocorrido, não podendo este ser inferior a R$3.500,00 (três mil e quinhentos reais); 3) VEÍCULOS IMPORTADOS: 10% (dez por cento) do valor correspondente à Tabela Fipe do veículo à data do ocorrido, não podendo este ser inferior a R$5.000,00 (cinco mil reais);",
      
    ],
  },

  {
    title: " Terceiros",

    items: [
      "Danos materiais",
      "Danos corporais",
      "Reparo ou indenização em até R$100.000,00",
  
    ],
  },

  {
    title: " Vidros Completo",

    items: [
      "Para-brisa",
      "Vidros laterais",
      "Vidro traseiro",
      "Faróis",
      "Lanternas",
      "Retrovisores",
    ],
  },

  {
    title: "APP",

    items: [
      "Seguros Acidentes Pessoais a Passageiros (APP)",
      "Indenização de R$10.000,00 em caso se morte ou invalidez",
      "Reembolso de despesas hospitalares até R$3.000,00ros",
    ],
  },

  {
    title: "Furto e Roubo",

    items: [
      "Furto",
      "Roubo",
    ],
  },

];


/* =========================
   COMPONENTE
========================= */

export default function Benefits() {

  const [openCoverage, setOpenCoverage] = useState(null);


  function toggleCoverage(index) {

    setOpenCoverage((current) =>
      current === index ? null : index
    );

  }


  return (

    <section
      className="section"
      id="beneficios"
    >

      <div className="container">


        {/* =========================
            CABEÇALHO
        ========================= */}

        <div className="section-heading">

          <span className="eyebrow">
            POR QUE A LESTE?
          </span>

          <h2>
            Seguro sem complicação.
          </h2>

          <p>
            Uma experiência simples desde a cotação até a contratação.
          </p>

        </div>



        {/* =========================
            CARDS PRINCIPAIS
        ========================= */}

        <div className="benefits-grid">

          {benefits.map(
            ({
              icon: Icon,
              title,
              text,
            }) => (

              <article
                className="benefit-card"
                key={title}
              >

                <div className="icon-box">

                  <Icon size={23} />

                </div>

                <h3>
                  {title}
                </h3>

                <p>
                  {text}
                </p>

              </article>

            )
          )}

        </div>



       
        {/* =========================
            BLOCO DE DESTAQUE
        ========================= */}

        <div className="benefits-showcase">

          <h2 className="benefits-showcase-title">

            Por que a Loovi está conquistando o Brasil?

          </h2>



          <div className="benefits-showcase-grid">


            {/* DIFERENCIAIS */}

            <div className="benefits-showcase-content">

              <div className="benefits-showcase-list">

                {showcaseItems.map(
                  (item, index) => (

                    <div
                      className="benefits-showcase-item"
                      key={index}
                    >

                      <span
                        className="benefits-showcase-check"
                        aria-hidden="true"
                      >

                        <Check
                          size={14}
                          strokeWidth={3}
                        />

                      </span>

                      <span>
                        {item}
                      </span>

                    </div>

                  )
                )}

              </div>



              <Link
                className="button button-primary benefits-showcase-cta"
                to="/cotacao"
              >

                Cotar agora

                <ArrowRight size={18} />

              </Link>

            </div>



            {/* =========================
                IMAGENS
            ========================= */}

            <div className="benefits-showcase-media">


              <div className="showcase-media-card showcase-media-one">

                <img
                  src={mediaCariani}
                  alt="Renato Cariani"
                />

                <span>
                  Renato Cariani
                </span>

              </div>



              <div className="showcase-media-card showcase-media-two">

                <img
                  src={mediawinderson}
                  alt="Whindersson Nunes"
                />

                <span>
                  Whindersson Nunes
                </span>

              </div>



              <div className="showcase-media-card showcase-media-three">

                <img
                  src={mediacelso}
                  alt="Celso Portiolli"
                />

                <span>
                  Celso Portiolli
                </span>

              </div>



              <div className="benefits-showcase-quote">

                O seguro mais querido dos influencers

              </div>

            </div>

          </div>

        </div>
               {/* =========================
            ACCORDION DE COBERTURAS
        ========================= */}

        <div className="coverage-section">

          <div className="coverage-heading">

            <span className="eyebrowc">
              COBERTURAS
            </span>

            <h2 className="eyebrowp">
              Proteção para diferentes situações.
            </h2>

            <p className="eyebrowp">
              Conheça algumas das coberturas e assistências
              disponíveis para o seu veículo.
            </p>

          </div>


          <div className="coverage-accordion">

            {coverageItems.map(
              (coverage, index) => {

                const isOpen =
                  openCoverage === index;

                return (

                  <div
                    className={
                      `coverage-accordion-item ${
                        isOpen ? "is-open" : ""
                      }`
                    }
                    key={coverage.title}
                  >

                    <button
                      type="button"
                      className="coverage-accordion-button"
                      onClick={() =>
                        toggleCoverage(index)
                      }
                      aria-expanded={isOpen}
                    >

                      <div className="coverage-accordion-title">

                        <span className="coverage-accordion-icon">

                          <Check size={20} />
                          

                        </span>

                        <span>
                          {coverage.title}
                        </span>

                      </div>


                      <ChevronDown
                        className="coverage-chevron"
                        size={22}
                      />

                    </button>



                    <div className="coverage-accordion-content">

                      <div className="coverage-accordion-inner">

                        {coverage.items.map(
                          (item) => (

                            <div
                              className="coverage-option"
                              key={item}
                            >

                              <span className="coverage-option-check">

                                <Check
                                  size={13}
                                  strokeWidth={3}
                                />

                              </span>

                              <span>
                                {item}
                              </span>

                            </div>

                          )
                        )}

                      </div>

                    </div>

                  </div>

                );

              }
            )}

          </div>



          <Link
            className="button button-primary coverage-cta"
            to="/cotacao"
          >

            Fazer minha cotação

            <ArrowRight size={18} />

          </Link>

        </div>
      </div>

    </section>

  );

}