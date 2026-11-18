// Agenda no estilo do pôster da BoraTrip, em uma folha A4.
// O PDF público (public/boratrip-agenda-2027.pdf) é gerado desta página com `npm run agenda:pdf`.
import { Sol } from '@/components/Logo';
import { EXP, type Dia, type Expedicao } from '@/lib/expedicoes';
import { AGENDA } from '@/lib/config';
import './agenda.css';

const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const dia = (x: Dia) => (x.dia === 1 ? '1º' : String(x.dia).padStart(2, '0'));

function datas(a: Dia, b: Dia) {
  if (a.mes === b.mes) return `${dia(a)} a ${dia(b)} de ${MESES[b.mes - 1]}`;
  return `${dia(a)} de ${MESES[a.mes - 1]} a ${dia(b)} de ${MESES[b.mes - 1]}`;
}

/** "João Pessoa — Pôr do Sol" → ["João Pessoa", "Pôr do Sol"]; "Natal Dunas" → ["Natal", "Dunas"]. */
function linhas(nome: string) {
  const sep = nome.split(/ [—+] /);
  if (sep.length === 2) return sep;
  const i = nome.lastIndexOf(' ');
  return [nome.slice(0, i), nome.slice(i + 1)];
}

function Item({ e }: { e: Expedicao }) {
  const [l1, l2] = linhas(e.nome);
  return (
    <li className="ag-item">
      <span className="ag-data">{datas(e.inicio, e.fim)}</span>
      <strong className="ag-nome">{l1}<br />{l2}</strong>
    </li>
  );
}

function Marca({ className = '' }: { className?: string }) {
  return (
    <div className={`ag-marca ${className}`}>
      <Sol className="ag-marca__sol" />
      <span className="ag-marca__bora">bora</span>
      <span className="ag-marca__trip">TRIP</span>
    </div>
  );
}

export default function Agenda() {
  const anos = [...new Set(EXP.map((e) => e.inicio.ano))];
  const [primeiro, ...resto] = anos;
  const coluna = (ano: number) => (
    <div className="ag-col" key={ano}>
      <h2 className="ag-ano">{ano}</h2>
      <ol className="ag-lista">{EXP.filter((e) => e.inicio.ano === ano).map((e) => <Item e={e} key={`${e.slug}-${e.inicio.ano}-${e.inicio.mes}`} />)}</ol>
    </div>
  );

  return (
    <main className="ag-folha">
      <div className="ag-praia ag-praia--esq" aria-hidden="true" />
      <div className="ag-praia ag-praia--dir" aria-hidden="true" />

      <header className="ag-topo">
        <div className="ag-titulo">
          <span className="ag-selo">Viagem</span>
          <h1>AGENDA</h1>
          <p className="ag-frase">seu próximo destino te espera</p>
        </div>
        <Marca className="ag-marca--topo" />
      </header>

      <div className="ag-colunas">
        <div className="ag-esq">
          {coluna(primeiro)}
          <footer className="ag-rodape">
            <div className="ag-marca--linha">
              <span className="ag-marca__bora">bora</span>
              <Sol className="ag-marca__sol" />
              <span className="ag-marca__trip">TRIP</span>
            </div>
            <p className="ag-contato">
              <span><b>WhatsApp</b> {AGENDA.telefone}</span>
              <span><b>Instagram</b> @boratrip.oficial</span>
            </p>
            <p className="ag-site">{AGENDA.site}</p>
          </footer>
        </div>
        <span className="ag-divisor" aria-hidden="true" />
        {resto.map(coluna)}
      </div>
    </main>
  );
}
