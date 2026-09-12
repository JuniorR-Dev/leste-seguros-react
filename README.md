# Leste Seguros — React + Vite

Estrutura inicial para migrar o site WordPress/Elementor para React.

## Instalação

```bash
npm install
npm run dev
```

Abra o endereço mostrado pelo Vite, normalmente:

http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Estrutura

- `src/components/` — componentes reutilizáveis
- `src/pages/` — páginas
- `src/components/quote/` — formulário de cotação em etapas
- `src/services/` — comunicação com API
- `src/styles/` — CSS global

## Imagens do WordPress

Copie as imagens de:

`wp-content/uploads/`

para:

`src/assets/images/`

e depois importe-as nos componentes.

## API

Crie `.env` baseado em `.env.example`.

Exemplo:

```env
VITE_API_URL=http://localhost:3000/api
VITE_WHATSAPP_NUMBER=5533999999999
```

Endpoints esperados:

- `GET /vehicle/:plate`
- `POST /quotes`

A consulta de placa deve ser feita no backend, nunca expondo chave privada de API no React.

## Próxima etapa

Substituir os placeholders visuais do Hero pelas imagens reais do WordPress e conectar a API de placa/cotação.