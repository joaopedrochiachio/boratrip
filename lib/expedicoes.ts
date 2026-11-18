// Fonte única das expedições: alimenta os cards, a lista do calendário e o arquivo .ics.
export type Dia = { ano: number; mes: number; dia: number };

export type Expedicao = {
  inicio: Dia;
  fim: Dia;
  nome: string;
  slug: string; // foto em public/img/exp-<slug>.webp
  coord: string;
  destaque: string;
};

const d = (ano: number, mes: number, dia: number): Dia => ({ ano, mes, dia });

export const EXP: Expedicao[] = [
  { inicio: d(2026, 12, 8), fim: d(2026, 12, 13), nome: 'João Pessoa — Pôr do Sol', slug: 'joao-pessoa', coord: '07°07′S 34°52′W', destaque: 'João Pessoa, Cabedelo, Costa do Conde e piscinas naturais.' },
  { inicio: d(2027, 1, 25), fim: d(2027, 1, 30), nome: 'João Pessoa — Pôr do Sol', slug: 'joao-pessoa', coord: '07°07′S 34°52′W', destaque: 'A primeira expedição de 2027: Cabedelo, Costa do Conde e piscinas naturais.' },
  { inicio: d(2027, 3, 23), fim: d(2027, 3, 28), nome: 'Natal Dunas', slug: 'natal', coord: '05°47′S 35°12′W', destaque: 'Dunas e litoral potiguar.' },
  { inicio: d(2027, 4, 20), fim: d(2027, 4, 25), nome: 'Jericoacoara Adventure', slug: 'jericoacoara', coord: '02°47′S 40°30′W', destaque: 'Águas cristalinas, lagoas, dunas e pôr do sol. O Caribe sem sair do Brasil.' },
  { inicio: d(2027, 5, 25), fim: d(2027, 5, 30), nome: 'Jalapão Fervedouros', slug: 'jalapao', coord: '10°33′S 46°25′W', destaque: 'Os fervedouros do Jalapão, no Tocantins.' },
  { inicio: d(2027, 7, 27), fim: d(2027, 8, 1), nome: 'Lençóis Paradise', slug: 'lencois', coord: '02°45′S 42°49′W', destaque: 'Dunas e lagoas dos Lençóis Maranhenses.' },
  { inicio: d(2027, 8, 10), fim: d(2027, 8, 15), nome: 'Floresta Amazônica', slug: 'amazonia', coord: '03°07′S 60°01′W', destaque: 'A Amazônia de perto, no Amazonas.' },
  { inicio: d(2027, 9, 7), fim: d(2027, 9, 12), nome: 'Alter do Chão Ecotur', slug: 'alter-do-chao', coord: '02°30′S 54°57′W', destaque: 'Praias de rio do Tapajós, no Pará.' },
  { inicio: d(2027, 10, 19), fim: d(2027, 10, 24), nome: 'Bahia Relax', slug: 'bahia', coord: '16°27′S 39°04′W', destaque: 'Arraial d’Ajuda, Caraíva, Trancoso e Porto Seguro.' },
  { inicio: d(2027, 11, 10), fim: d(2027, 11, 15), nome: 'Maceió + Maragogi', slug: 'maceio', coord: '09°39′S 35°44′W', destaque: 'Maragogi, Gunga, São Miguel, Paripueira e Hibiscus Beach Club.' },
  { inicio: d(2027, 12, 7), fim: d(2027, 12, 12), nome: 'João Pessoa — Pôr do Sol', slug: 'joao-pessoa', coord: '07°07′S 34°52′W', destaque: 'João Pessoa, Cabedelo, Costa do Conde e piscinas naturais.' },
];

export const MES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

export const p2 = (n: number) => String(n).padStart(2, '0');

export const iso = (x: Dia) => `${x.ano}-${p2(x.mes)}-${p2(x.dia)}`;
export const compacta = (x: Dia) => `${x.ano}${p2(x.mes)}${p2(x.dia)}`;

export function diaSeguinte(x: Dia): Dia {
  const t = new Date(Date.UTC(x.ano, x.mes - 1, x.dia + 1));
  return d(t.getUTCFullYear(), t.getUTCMonth() + 1, t.getUTCDate());
}

export function datasLongas(a: Dia, b: Dia) {
  if (a.mes === b.mes) return `${p2(a.dia)}—${p2(b.dia)} ${MES[a.mes - 1]} ${a.ano}`;
  return `${p2(a.dia)} ${MES[a.mes - 1]}—${p2(b.dia)} ${MES[b.mes - 1]} ${b.ano}`;
}

export const datasCurtas = (a: Dia, b: Dia) => `${p2(a.dia)}/${p2(a.mes)} a ${p2(b.dia)}/${p2(b.mes)}/${b.ano}`;

export const msg = (e: Expedicao) => `Oi Lucas, quero saber da expedição ${e.nome} de ${datasCurtas(e.inicio, e.fim)}`;

export const mesLinha = (a: Dia, b: Dia) =>
  `${a.mes === b.mes ? MES[a.mes - 1] : MES[a.mes - 1] + '/' + MES[b.mes - 1]} ${b.ano}`;
