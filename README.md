# BoraTrip — landing page

Site em **Next.js 16 (App Router) + React 19 + TypeScript**. Todas as páginas são geradas como estáticas no build e podem ser publicadas na Vercel ou em qualquer hospedagem que rode Next.

## Comandos
```bash
npm install       # instala as dependências
npm run dev       # desenvolvimento em http://localhost:3000
npm run build     # build de produção (inclui checagem de tipos)
npm start         # serve o build de produção
npm run typecheck # só a checagem de tipos
```

## Estrutura
- `lib/expedicoes.ts` — **fonte única** das expedições (datas, nomes, coordenadas, destaques). Alimenta os cards, a lista do calendário e o arquivo `.ics`
- `lib/conteudo.ts` — FAQ, pilares, passos, itens inclusos e depoimentos
- `lib/config.ts` — WhatsApp, métricas e prazo da oferta. **Configuração antes de publicar**
- `app/(site)/page.tsx` — a página principal; `app/(site)/layout.tsx` — `<head>`, SEO e fontes
- `app/(site)/boratrip-calendario-2027.ics/route.ts` — gera o calendário com as 11 saídas no build
- `app/(legal)/privacidade/` — política de privacidade (também responde em `/privacidade.html`)
- `app/style.css` — estilos (cores e fontes no topo, em `:root`)
- `components/` — componentes React. Os interativos (carrossel, botão flutuante, faixa de oferta, fotos, métricas e links rastreados) são componentes de cliente
- `public/img/` — fotos (veja `FOTOS.md`); `public/assets/img/` — favicon e curvas de nível

## Antes de publicar (em `lib/config.ts`)
- `whatsappNumero` — com o número, cada botão abre o WhatsApp com a mensagem pronta do destino
- `ga4` e `metaPixel` — IDs das contas; os eventos `whatsapp_click`, `calendario_download` e `instagram_click` já estão ligados
- `ofertaAte` — data de fim da Black Friday; a faixa some sozinha depois

Os itens entre colchetes `[ASSIM]` aparecem destacados em laranja claro na página para ninguém esquecer de preencher.
