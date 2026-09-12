import { useState } from "react";
import Progress from "./Progress";
import StepPersonal from "./StepPersonal";
import StepVehicle from "./StepVehicle";
import StepLocation from "./StepLocation";
import { submitQuote } from "../../services/quote";

const initialData = {
  name: "",
  email: "",
  phone: "",
  plate: "",
  vehicleValue: "",
  category: "",
  state: "",
  city: ""
};

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialData);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  function validate() {
    if (step === 1 && (!data.name || !data.email || !data.phone)) {
      return "Preencha nome, e-mail e telefone.";
    }
    if (step === 2 && !data.plate) {
      return "Informe a placa do veículo.";
    }
    if (step === 3 && (!data.state || !data.city)) {
      return "Informe estado e cidade.";
    }
    return "";
  }

  function next() {
    const error = validate();
    if (error) {
      setStatus({ type: "error", text: error });
      return;
    }
    setStatus({ type: "", text: "" });
    setStep((value) => Math.min(3, value + 1));
  }

  async function submit(event) {
    event.preventDefault();
    const error = validate();
    if (error) {
      setStatus({ type: "error", text: error });
      return;
    }

    setSending(true);
    setStatus({ type: "", text: "" });

    try {
      await submitQuote(data);
      setStatus({ type: "success", text: "Cotação enviada com sucesso! Nossa equipe entrará em contato." });
      setData(initialData);
      setStep(1);
    } catch {
      setStatus({ type: "error", text: "Não foi possível enviar agora. Verifique sua API/backend." });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="quote-form" onSubmit={submit}>
      <Progress step={step} />

      {step === 1 && <StepPersonal data={data} setData={setData} />}
      {step === 2 && <StepVehicle data={data} setData={setData} />}
      {step === 3 && <StepLocation data={data} setData={setData} />}

      {status.text && <div className={`form-message ${status.type}`}>{status.text}</div>}

      <div className="form-actions">
        {step > 1 && (
          <button type="button" className="button button-secondary" onClick={() => setStep((v) => v - 1)}>
            Voltar
          </button>
        )}

        {step < 3 ? (
          <button type="button" className="button button-primary" onClick={next}>
            Avançar
          </button>
        ) : (
          <button type="submit" className="button button-primary" disabled={sending}>
            {sending ? "Enviando..." : "Enviar cotação"}
          </button>
        )}
      </div>
    </form>
  );
}