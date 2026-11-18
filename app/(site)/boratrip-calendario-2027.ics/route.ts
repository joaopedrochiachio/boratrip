// Calendário .ics gerado a partir de lib/expedicoes.ts (eventos de dia inteiro; DTEND é exclusivo).
import { EXP, compacta, diaSeguinte, iso } from '@/lib/expedicoes';

export const dynamic = 'force-static';

const esc = (t: string) => t.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,');

// RFC 5545: linhas com no máximo 75 bytes, continuação começa com espaço.
function dobrar(linha: string): string {
  const enc = new TextEncoder();
  const dec = new TextDecoder();
  let b = enc.encode(linha);
  const partes: string[] = [];
  while (b.length > 75) {
    let corte = partes.length ? 74 : 75;
    while ((b[corte] & 0xc0) === 0x80) corte--;
    partes.push(dec.decode(b.slice(0, corte)));
    b = b.slice(corte);
  }
  partes.push(dec.decode(b));
  return partes.join('\r\n ');
}

export function GET() {
  const L = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//BoraTrip//Calendario 2027//PT', 'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH', 'X-WR-CALNAME:BoraTrip — Expedições 2026/2027',
  ];
  for (const x of EXP) {
    L.push(
      'BEGIN:VEVENT',
      `UID:boratrip-${iso(x.inicio)}-${x.slug}@boratrip.com.br`,
      'DTSTAMP:20261118T000000Z',
      `DTSTART;VALUE=DATE:${compacta(x.inicio)}`,
      `DTEND;VALUE=DATE:${compacta(diaSeguinte(x.fim))}`,
      `SUMMARY:BoraTrip · ${esc(x.nome)}`,
      `DESCRIPTION:${esc(x.destaque)} Reserve pelo WhatsApp: https://wa.link/ze1z9e`,
      `LOCATION:${x.nome.split(' — ')[0]}`,
      'URL:https://boratrip.com.br/#expedicoes',
      'END:VEVENT',
    );
  }
  L.push('END:VCALENDAR');
  const corpo = L.map(dobrar).join('\r\n') + '\r\n';
  return new Response(corpo, { headers: { 'Content-Type': 'text/calendar; charset=utf-8' } });
}
