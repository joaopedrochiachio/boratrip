'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { whatsHref } from '@/lib/config';
import { rastrear } from '@/lib/rastrear';

type Base = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { origem: string; children: ReactNode };

/** Acrescenta a classe marcadora no fim, a menos que ela já venha posicionada em className. */
const juntar = (className: string | undefined, marcador: string) =>
  className?.split(' ').includes(marcador) ? className : [className, marcador].filter(Boolean).join(' ');

/** Link de WhatsApp com mensagem pronta (se houver número em CONFIG) e evento whatsapp_click. */
export function WhatsLink({ msg, origem, className, ...resto }: Base & { msg?: string }) {
  return (
    <a
      {...resto}
      className={juntar(className, 'js-whats')}
      href={whatsHref(msg)}
      data-msg={msg}
      data-origem={origem}
      target="_blank"
      rel="noopener"
      onClick={() => rastrear('whatsapp_click', origem)}
    />
  );
}

/** Download do calendário .ics com evento calendario_download. */
export function IcsLink({ origem, className, ...resto }: Base) {
  return (
    <a
      {...resto}
      className={juntar(className, 'js-ics')}
      href="boratrip-calendario-2027.ics"
      download
      data-origem={origem}
      onClick={() => rastrear('calendario_download', origem)}
    />
  );
}

/** Link do Instagram com evento instagram_click. */
export function InstaLink({ origem, className, ...resto }: Base) {
  return (
    <a
      {...resto}
      className={juntar(className, 'js-insta')}
      href="https://www.instagram.com/boratrip.oficial/"
      target="_blank"
      rel="noopener"
      data-origem={origem}
      onClick={() => rastrear('instagram_click', origem)}
    />
  );
}

/** Download da agenda em PDF (estilo do pôster) com evento calendario_download. */
export function PdfLink({ origem, className, ...resto }: Base) {
  return (
    <a
      {...resto}
      className={juntar(className, 'js-pdf')}
      href="boratrip-agenda-2027.pdf"
      download
      data-origem={origem}
      onClick={() => rastrear('calendario_download', origem, { formato: 'pdf' })}
    />
  );
}
