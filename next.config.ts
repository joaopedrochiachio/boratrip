import type { NextConfig } from 'next';

// STATIC_EXPORT=1 gera o site como arquivos estáticos em out/ (usado no GitHub Pages).
const exportar = process.env.STATIC_EXPORT === '1';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  ...(exportar
    ? { output: 'export', basePath } // privacidade vira out/privacidade.html, então o endereço antigo continua valendo
    : {
        // Mantém o endereço antigo da política de privacidade funcionando.
        async rewrites() {
          return [{ source: '/privacidade.html', destination: '/privacidade' }];
        },
      }),
};

export default nextConfig;
