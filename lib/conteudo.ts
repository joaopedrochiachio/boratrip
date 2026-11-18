import type { IcoNome } from '@/components/Ico';

export const FAQ: { pergunta: string; resposta: string; pendente: boolean }[] = [
  { pergunta: 'Posso ir sozinho(a)?', resposta: 'Sim, a maioria vai. O grupo vira a sua companhia desde o primeiro dia, e você conhece a turma no grupo do WhatsApp antes da viagem.', pendente: false },
  { pergunta: 'Qual o tamanho do grupo?', resposta: '[PREENCHER]', pendente: true },
  { pergunta: 'O que está incluso?', resposta: '[PREENCHER: hospedagem, transfers, passeios, alimentação]', pendente: true },
  { pergunta: 'Como pago?', resposta: '[PREENCHER: formas de pagamento e parcelamento]', pendente: true },
  { pergunta: 'Qual a política de cancelamento?', resposta: '[PREENCHER]', pendente: true },
  { pergunta: 'De onde sai a expedição?', resposta: '[PREENCHER: cidade de embarque de cada roteiro]', pendente: true },
];

export const PILARES: { ico: IcoNome; titulo: string; texto: string }[] = [
  { ico: 'bussola', titulo: 'Expedições autorais', texto: 'Roteiros montados por um geógrafo, com o olhar de quem estuda cada lugar.' },
  { ico: 'pessoas', titulo: 'Grupos exclusivos', texto: 'Grupos pequenos e vagas limitadas. Você conhece a turma antes de embarcar.' },
  { ico: 'escudo', titulo: 'Segurança e cuidado', texto: 'Cuidado com cada detalhe, do roteiro à logística. Confiança se conquista com atitudes.' },
];

export const PASSOS: { titulo: string; texto: string; pendente?: string }[] = [
  { titulo: 'Escolha a expedição', texto: 'Veja o calendário e escolha a data que combina com você.' },
  { titulo: 'Chame no WhatsApp', texto: 'Fale com o Lucas e receba o roteiro completo.' },
  { titulo: 'Reserve sua vaga', texto: 'Garanta seu lugar no grupo.', pendente: '[Confirmar forma de pagamento]' },
  { titulo: 'Entre no grupo', texto: 'Conheça a turma antes da viagem e chegue já entre amigos.' },
];

export const INCLUSO = ['Hospedagem', 'Transfers', 'Passeios', 'Alimentação'];

export const DEPOIMENTOS = [1, 2, 3];
