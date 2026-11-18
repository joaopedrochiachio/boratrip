import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '../style.css';

const titulo = 'BoraTrip — Expedições em grupo pelo Brasil';
const descricao = 'Viaje sozinho sem ficar sozinho. Expedições autorais em grupos pequenos com o geógrafo Lucas.';

export const metadata: Metadata = {
  title: titulo,
  description: descricao,
  alternates: { canonical: 'https://boratrip.com.br/' },
  icons: { icon: { url: '/assets/img/favicon.svg', type: 'image/svg+xml' } },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0F4C45',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'BoraTrip — Expedições pelo Brasil',
  url: 'https://boratrip.com.br/',
  sameAs: ['https://www.instagram.com/boratrip.oficial/'],
  founder: { '@type': 'Person', name: 'Lucas', jobTitle: 'Geógrafo' },
};

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Open Graph escrito à mão: a API de metadata do Next copiaria tudo para tags twitter:* extras. */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:title" content={titulo} />
        <meta property="og:description" content={descricao} />
        <meta property="og:image" content="https://boratrip.com.br/img/og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap" />
        <link rel="preload" as="image" href="img/hero-mobile.webp" media="(max-width: 899px)" />
        <link rel="preload" as="image" href="img/hero.webp" media="(min-width: 900px)" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body id="topo">{children}</body>
    </html>
  );
}
