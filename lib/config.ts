// ===== Configuração: preencha antes de publicar =====
export const CONFIG = {
  // Número do WhatsApp só com dígitos, com DDI e DDD (ex.: '5583999999999').
  // Com o número preenchido, cada botão abre o WhatsApp com a mensagem pronta do destino.
  // Vazio: todos os botões usam o link curto abaixo, sem mensagem pronta.
  whatsappNumero: '',
  whatsappPadrao: 'https://wa.link/ze1z9e',
  ga4: '', // ex.: 'G-XXXXXXXXXX'
  metaPixel: '', // ex.: '123456789012345'
  ofertaAte: '', // fim da Black Friday, ex.: '2026-11-30T23:59:00-03:00' (vazio = sempre visível)
};

export function whatsHref(msg?: string): string {
  const numero = (CONFIG.whatsappNumero || '').replace(/\D/g, '');
  return numero && msg ? 'https://wa.me/' + numero + '?text=' + encodeURIComponent(msg) : CONFIG.whatsappPadrao;
}
