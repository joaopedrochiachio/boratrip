// Gera public/boratrip-agenda-2027.pdf a partir da página /agenda.
// Uso: com o site rodando (npm run dev ou npm start), execute `npm run agenda:pdf`.
// Endereço diferente: AGENDA_URL=http://localhost:3001/agenda npm run agenda:pdf
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const url = process.env.AGENDA_URL || 'http://localhost:3000/agenda';
  const saida = path.join(__dirname, '..', 'public', 'boratrip-agenda-2027.pdf');
  const navegador = await chromium.launch();
  const pagina = await navegador.newPage();
  await pagina.goto(url, { waitUntil: 'networkidle' });
  await pagina.evaluate(() => document.fonts.ready);
  await pagina.pdf({ path: saida, format: 'A4', printBackground: true, preferCSSPageSize: true });
  await navegador.close();
  console.log('PDF gerado em', saida);
})().catch((e) => { console.error(e); process.exit(1); });
