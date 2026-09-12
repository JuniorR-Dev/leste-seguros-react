import { apiFetch } from "./api";

export async function searchVehicleByPlate(plate) {
  // Backend esperado:
  // GET /vehicle/:plate
  //
  // Deixe a função abaixo ativa quando sua API estiver pronta.
  // Enquanto isso, o formulário continua funcionando sem autopreenchimento.

  if (!import.meta.env.VITE_API_URL) {
    return null;
  }

  return apiFetch(`/vehicle/${encodeURIComponent(plate)}`);
}