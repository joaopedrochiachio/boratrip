import type { IcoNome } from '@/components/Ico';

export const FAQ: { pergunta: string; resposta: string; pendente: boolean }[] = [
  { pergunta: 'Posso ir sozinho(a)?', resposta: 'Sim, a maioria vai. O grupo vira a sua companhia desde o primeiro dia, e você conhece a turma no grupo do WhatsApp antes da viagem.', pendente: false },
  { pergunta: 'Qual o tamanho do grupo?', resposta: '[PREENCHER]', pendente: true },
  { pergunta: 'O que está incluso?', resposta: '[PREENCHER: hospedagem, transfers, passeios, alimentação]', pendente: true },
  { pergunta: 'Como pago?', resposta: 'Você escolhe: no Pix à vista, com desconto, ou no cartão de crédito, parcelado. O Lucas manda os valores e as condições de cada expedição pelo WhatsApp.', pendente: false },
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
  { titulo: 'Reserve sua vaga', texto: 'Garanta seu lugar no grupo pagando no Pix, com desconto, ou no cartão de crédito, parcelado.' },
  { titulo: 'Entre no grupo', texto: 'Conheça a turma antes da viagem e chegue já entre amigos.' },
];

export const INCLUSO = ['Hospedagem', 'Transfers', 'Passeios', 'Alimentação'];

// Depoimentos de EXEMPLO, para o layout não ficar vazio. Troque pelos depoimentos reais do destaque
// "Depoimentos" do Instagram (com autorização do viajante) antes de divulgar o site: publicar avaliação
// inventada como se fosse de cliente real é propaganda enganosa. O nome fica destacado até ser trocado.
export const DEPOIMENTOS: { texto: string; nome: string; expedicao: string }[] = [
  { texto: 'Fui sozinha e com medo de não me enturmar. No segundo dia já parecia que eu conhecia o grupo há anos. O Lucas cuida de tudo e explica cada lugar de um jeito que você nunca esquece.', nome: '[Nome do viajante]', expedicao: 'Jericoacoara Adventure' },
  { texto: 'Roteiro muito bem pensado: deu tempo de curtir cada praia sem correria. Hospedagem boa, passeios pontuais e uma turma incrível. Já estou escolhendo a próxima.', nome: '[Nome do viajante]', expedicao: 'Maceió + Maragogi' },
  { texto: 'O que mais me marcou foi a segurança. Do transfer no aeroporto ao último passeio, tudo organizado. Voltei com fotos lindas e amigos que levo para a vida.', nome: '[Nome do viajante]', expedicao: 'João Pessoa — Pôr do Sol' },
];
