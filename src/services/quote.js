import { apiFetch } from "./api";

export async function submitQuote(data) {
  // Backend esperado:
  // POST /quotes
  //
  // Se quiser manter temporariamente o formulário sem backend,
  // defina VITE_API_URL apenas quando a API estiver pronta.

  if (!import.meta.env.VITE_API_URL) {
    console.log("Cotação pronta para envio:", data);
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { success: true };
  }

  return apiFetch("/quotes", {
    method: "POST",
    body: JSON.stringify(data)
  });
}