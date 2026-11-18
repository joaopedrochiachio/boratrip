// ===== Configuração: preencha antes de publicar =====
export const CONFIG = {
  // Número do WhatsApp só com dígitos, com DDI e DDD (ex.: '5583999999999').
  // Com o número preenchido, cada botão abre o WhatsApp com a mensagem pronta do destino.
  // Vazio: todos os botões usam o link curto abaixo, sem mensagem pronta.
  whatsappNumero: '',
  whatsappPadrao: 'https://wa.link/ze1z9e',
  ga4: '', // ex.: 'G-XXXXXXXXXX'
  metaPixel: '', // ex.: '123456789012345'
};

export function whatsHref(msg?: string): string {
  const numero = (CONFIG.whatsappNumero || '').replace(/\D/g, '');
  return numero && msg ? 'https://wa.me/' + numero + '?text=' + encodeURIComponent(msg) : CONFIG.whatsappPadrao;
}

// Dados impressos na agenda em PDF (app/(agenda)/agenda). Depois de mudar, rode `npm run agenda:pdf`.
export const AGENDA = {
  telefone: '(35) 99879-2709',
  site: 'boratrip.com.br',
};
