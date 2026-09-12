export default function StepLocation({ data, setData }) {
  const update = (key, value) => setData((old) => ({ ...old, [key]: value }));

  return (
    <div className="form-step">
      <div className="form-heading">
        <span className="eyebrow">ETAPA 3</span>
        <h2>Onde você está?</h2>
        <p>Informe o local de utilização do veículo.</p>
      </div>

      <label>Estado
        <select value={data.state} onChange={(e) => update("state", e.target.value)}>
          <option value="">Selecione o estado</option>
          <option value="MG">Minas Gerais</option>
          <option value="ES">Espírito Santo</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="SP">São Paulo</option>
          <option value="BA">Bahia</option>
          <option value="Outro">Outro</option>
        </select>
      </label>

      <label>Cidade
        <input value={data.city} onChange={(e) => update("city", e.target.value)} placeholder="Sua cidade" />
      </label>
    </div>
  );
}