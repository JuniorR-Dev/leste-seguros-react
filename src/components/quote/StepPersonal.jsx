export default function StepPersonal({ data, setData }) {
  const update = (key, value) => setData((old) => ({ ...old, [key]: value }));

  return (
    <div className="form-step">
      <div className="form-heading">
        <span className="eyebrow">ETAPA 1</span>
        <h2>Vamos começar</h2>
        <p>Informe seus dados para iniciarmos sua cotação.</p>
      </div>

      <label>Nome completo
        <input value={data.name} onChange={(e) => update("name", e.target.value)} placeholder="Seu nome" />
      </label>

      <label>E-mail
        <input type="email" value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="seu@email.com" />
      </label>

      <label>Telefone
        <input value={data.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(00) 00000-0000" />
      </label>
    </div>
  );
}