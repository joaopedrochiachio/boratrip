// Prefixo dos caminhos do site. Vazio quando o site fica na raiz do domínio (Vercel, domínio próprio);
// '/boratrip' no GitHub Pages (definido no workflow .github/workflows/pages.yml).
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Endereço público completo, usado no link canônico e na prévia de compartilhamento (og:image).
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://boratrip.com.br').replace(/\/$/, '');

/** Caminho de um arquivo de public/ com o prefixo certo: url('img/hero.webp') → '/boratrip/img/hero.webp'. */
export const url = (caminho: string) => `${BASE}/${caminho.replace(/^\//, '')}`;
