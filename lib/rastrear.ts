type Dados = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export type Evento = 'whatsapp_click' | 'calendario_download' | 'instagram_click';

export function rastrear(evento: Evento, origem?: string | null, extra?: Dados) {
  const dados = Object.assign({ origem: origem || 'desconhecida' }, extra || {});
  if (window.gtag) window.gtag('event', evento, dados);
  if (window.fbq) {
    if (evento === 'whatsapp_click') window.fbq('track', 'Contact', dados);
    else window.fbq('trackCustom', evento, dados);
  }
}
