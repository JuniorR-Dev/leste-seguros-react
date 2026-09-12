import { useState } from "react";
import { searchVehicleByPlate } from "../../services/vehicle";

export default function StepVehicle({ data, setData }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const update = (key, value) => setData((old) => ({ ...old, [key]: value }));

  async function lookup() {
    if (!data.plate) {
      setMessage("Informe a placa primeiro.");
      return;
    }

    setLoading(true);
    setMessage("");
    try {
      const vehicle = await searchVehicleByPlate(data.plate);
      if (vehicle) {
        setData((old) => ({ ...old, ...vehicle }));
        setMessage("Dados do veículo consultados.");
      } else {
        setMessage("A consulta não retornou dados. Você pode continuar manualmente.");
      }
    } catch {
      setMessage("Não foi possível consultar a placa agora. Continue manualmente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-step">
      <div className="form-heading">
        <span className="eyebrow">ETAPA 2</span>
        <h2>Dados do veículo</h2>
        <p>Informe a placa para preencher os dados automaticamente quando a API estiver configurada.</p>
      </div>

      <div className="plate-row">
        <label>Placa
          <input
            value={data.plate}
            onChange={(e) => update("plate", e.target.value.toUpperCase())}
            placeholder="ABC1D23"
            maxLength={7}
          />
        </label>
        <button type="button" className="button button-dark lookup-button" onClick={lookup} disabled={loading}>
          {loading ? "Consultando..." : "Consultar"}
        </button>
      </div>

      {message && <div className="form-message">{message}</div>}

      <label>Valor do veículo
        <input value={data.vehicleValue} onChange={(e) => update("vehicleValue", e.target.value)} placeholder="R$ 0,00" />
      </label>

      <label>Categoria do veículo
        <select value={data.category} onChange={(e) => update("category", e.target.value)}>
          <option value="">Selecione</option>
          <option>Carro</option>
          <option>Utilitário</option>
          <option>Pickup</option>
          <option>Outro</option>
        </select>
      </label>
    </div>
  );
}