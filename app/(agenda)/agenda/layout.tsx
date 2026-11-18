import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Agenda de viagens — BoraTrip',
  description: 'Todas as datas das expedições BoraTrip.',
  robots: { index: false },
  icons: { icon: { url: '/assets/img/favicon.svg', type: 'image/svg+xml' } },
};

export default function AgendaLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&family=Dancing+Script:wght@600&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
