import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../../style.css';
import { url } from '@/lib/base';

export const metadata: Metadata = {
  title: 'Política de privacidade — BoraTrip',
  robots: { index: false },
  icons: { icon: { url: url('assets/img/favicon.svg'), type: 'image/svg+xml' } },
};

const estilo = '.doc{max-width:720px;padding:64px 24px}.doc h1{font-size:44px;margin:24px 0}.doc h2{font-size:24px;margin:32px 0 12px}.doc p{color:var(--cinza);margin-bottom:12px}';

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,800&family=Inter:wght@400;600&display=swap" />
        <style dangerouslySetInnerHTML={{ __html: estilo }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
