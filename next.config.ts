import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Mantém o endereço antigo da política de privacidade funcionando.
  async rewrites() {
    return [{ source: '/privacidade.html', destination: '/privacidade' }];
  },
};

export default nextConfig;
