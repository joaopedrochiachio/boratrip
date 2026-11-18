import { Carrossel } from '@/components/Carrossel';
import { Flutuante } from '@/components/Flutuante';
import { Foto, HeroFundo } from '@/components/Foto';
import { Ico } from '@/components/Ico';
import { IcsLink, PdfLink, InstaLink, WhatsLink } from '@/components/Links';
import { Logo } from '@/components/Logo';
import { CREDITOS } from '@/lib/creditos';
import { Metricas } from '@/components/Metricas';
import { Sprite } from '@/components/Sprite';
import { DEPOIMENTOS, FAQ, INCLUSO, PASSOS, PILARES } from '@/lib/conteudo';
import { EXP, datasLongas, iso, mesLinha, msg, p2 } from '@/lib/expedicoes';

export default function Home() {
  return (
    <>
      <Sprite />
      <a className="pular" href="#conteudo">Pular para o conteúdo</a>

      <header className="topo" data-topo="">
        <div className="topo__in">
          <Logo tom="escuro" />
          <nav className="topo__nav" aria-label="Seções">
            <a href="#expedicoes">Expedições</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#quem-guia">Quem guia</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <WhatsLink className="btn btn--primario btn--peq" msg="Oi Lucas, vim pelo site e quero saber das expedições da BoraTrip" origem="menu">
            <span><span className="so-desktop">Falar no </span>WhatsApp</span> <Ico nome="whats" />
          </WhatsLink>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" aria-labelledby="hero-titulo">
          <HeroFundo />
          <div className="hero__in">
            <p className="selo selo--escuro"><Ico nome="pin" className="ico ico--sm" />Expedições em grupo pelo Brasil</p>
            <h1 id="hero-titulo">Você não precisa de companhia para viajar. Precisa dar o primeiro passo.</h1>
            <p className="hero__sub">Expedições autorais em grupos pequenos, guiadas pelo geógrafo Lucas. Chegue sozinho, volte com amigos e histórias para a vida inteira.</p>
            <div className="hero__botoes" data-hero-ctas="">
              <WhatsLink className="btn btn--primario" msg="Oi Lucas, vim pelo site e quero garantir minha vaga numa expedição" origem="hero">
                Garantir minha vaga <Ico nome="whats" />
              </WhatsLink>
              <a className="btn btn--contorno-claro" href="#expedicoes">Ver calendário 2027 <Ico nome="calendario" /></a>
            </div>
          </div>
        </section>

        <section className="provas" aria-label="Em números">
          <ul className="provas__in">
            <li><strong>21</strong><span>estados explorados pelo Lucas</span></li>
            <li><strong>11</strong><span>expedições até dez/2027</span></li>
            <li><strong>7,3 mil</strong><span>viajantes no Instagram</span></li>
          </ul>
        </section>

        <section className="secao secao--areia" aria-labelledby="sozinho-titulo">
          <div className="wrap">
            <div className="duas-col duas-col--centro">
              <div className="pilha">
                <p className="selo selo--claro">Viajar sozinho, sem ficar sozinho</p>
                <h2 id="sozinho-titulo">Aqui, desconhecidos viram amigos.</h2>
                <p className="lead">Muita gente deixa de viajar esperando alguém ter tempo. Na BoraTrip, o grupo é a sua companhia: você chega sozinho e volta com novas amizades, experiências e memórias.</p>
              </div>
              <Foto slug="grupo" alt="Lucas com amigos e viajantes da BoraTrip: no barco, com um cacique na Amazônia e nas dunas" legenda="Foto: viajantes da BoraTrip" className="foto--grande foto--grupo" w={1024} h={1280} />
            </div>
            <ul className="pilares">
              {PILARES.map((p) => (
                <li className="pilar" key={p.titulo}>
                  <span className="pilar__ico"><Ico nome={p.ico} /></span>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="secao secao--agua" id="expedicoes" aria-labelledby="exp-titulo">
          <div className="wrap">
            <div className="cabecalho">
              <div className="pilha">
                <p className="selo selo--escuro"><Ico nome="pin" className="ico ico--sm" />Dez/2026 — Dez/2027 · 11 saídas</p>
                <h2 id="exp-titulo">Escolha sua próxima história.</h2>
              </div>
              <p className="lead lead--claro">Todas as expedições têm 6 dias. Toque em “Quero essa” e receba o roteiro no WhatsApp com a mensagem pronta.</p>
            </div>
          </div>
          <Carrossel total={EXP.length + 1}>
            {EXP.map((x, i) => (
              <li className="card" id={`exp-${i + 1}`} key={i}>
                <div className="card__foto">
                  <Foto slug={`exp-${x.slug}`} alt={`Paisagem de ${x.nome}`} legenda={`Foto: ${x.nome}`} />
                  <span className="selo selo--escuro card__coord"><Ico nome="pin" className="ico ico--sm" />{x.coord}</span>
                  <span className="selo selo--areia card__dias">6 dias</span>
                </div>
                <div className="card__corpo">
                  <p className="etq etq--terra"><time dateTime={iso(x.inicio)}>{datasLongas(x.inicio, x.fim)}</time></p>
                  <h3 className="card__nome">{x.nome}</h3>
                  <p className="card__destaque">{x.destaque}</p>
                  <div className="card__rodape">
                    <p className="card__preco"><span className="etq">A partir de</span><strong className="pendente">[VALOR]</strong></p>
                    <WhatsLink className="btn btn--primario btn--peq" msg={msg(x)} origem={`card-${x.slug}`}>
                      Quero essa <Ico nome="whats" />
                    </WhatsLink>
                  </div>
                </div>
              </li>
            ))}
            <li className="card card--cta">
              <div className="card--cta__in">
                <Ico nome="calendario" className="ico ico--lg" />
                <h3>Quer a agenda 2027 completa?</h3>
                <p>Baixe o PDF com todas as datas e programe seu ano de viagens com antecedência.</p>
              </div>
              <div className="card--cta__botoes">
                <PdfLink className="btn btn--claro btn--peq" origem="card-calendario">Baixar agenda em PDF <Ico nome="seta" /></PdfLink>
                <IcsLink className="link-claro" origem="card-calendario">Salvar na agenda do celular</IcsLink>
              </div>
            </li>
          </Carrossel>
          <div className="wrap">
            <div className="calendario" id="calendario">
              <div className="calendario__topo">
                <h3>Calendário completo</h3>
                <IcsLink className="link-ics" origem="lista-calendario"><Ico nome="calendario" />Salvar na agenda</IcsLink>
              </div>
              <ol className="calendario__lista">
                {EXP.map((x, i) => (
                  <li key={i}>
                    <WhatsLink className="linha" msg={msg(x)} origem={`calendario-${x.slug}`}>
                      <span className="linha__data">
                        <span className="linha__dias">{`${p2(x.inicio.dia)}—${p2(x.fim.dia)}`}</span>
                        <span className="etq">{mesLinha(x.inicio, x.fim)}</span>
                      </span>
                      <span className="linha__destino"><strong>{x.nome}</strong><span className="etq">{x.coord}</span></span>
                      <Ico nome="whats" className="ico linha__ico" /><span className="sr-only">Falar no WhatsApp sobre esta data</span>
                    </WhatsLink>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="secao secao--branca" id="como-funciona" aria-labelledby="como-titulo">
          <div className="wrap duas-col">
            <div className="pilha">
              <p className="selo selo--claro">Como funciona</p>
              <h2 id="como-titulo">Reservar é simples.</h2>
              <ol className="passos">
                {PASSOS.map((p, i) => (
                  <li className="passo" key={p.titulo}>
                    <span className="passo__n">{p2(i + 1)}</span>
                    <div>
                      <h3>{p.titulo}</h3>
                      <p>{p.texto}{p.pendente && <>{' '}<span className="pendente">{p.pendente}</span></>}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="etq etq--terra pendente">[Confirmar passos com o Lucas]</p>
            </div>
            <div className="incluso">
              <h3>O que está incluso</h3>
              <p>Para você não se preocupar com planejamento.</p>
              <ul>
                {INCLUSO.map((item) => (
                  <li key={item}><Ico nome="check" /><span>{item}</span><span className="etq pendente">[Preencher]</span></li>
                ))}
              </ul>
              <WhatsLink className="btn btn--primario btn--bloco" msg="Oi Lucas, quero receber o roteiro completo e saber o que está incluso" origem="incluso">
                Receber o roteiro completo <Ico nome="whats" />
              </WhatsLink>
            </div>
          </div>
        </section>

        <section className="secao secao--areia" id="quem-guia" aria-labelledby="lucas-titulo">
          <div className="wrap duas-col duas-col--centro duas-col--foto">
            <Foto slug="lucas" alt="Lucas, geógrafo e fundador da BoraTrip" legenda="Foto: Lucas" className="foto--retrato" w={900} h={1100} />
            <div className="pilha">
              <p className="selo selo--claro">Quem guia</p>
              <h2 id="lucas-titulo">Prazer, sou o Lucas.</h2>
              <p className="lead">Sou geógrafo, apaixonado por explorar o Brasil, e já conheci 21 estados. Aprendi que uma viagem extraordinária não depende só de um destino bonito: depende de planejamento, cuidado e pessoas comprometidas com cada detalhe. Foi por isso que nasceu a BoraTrip.</p>
              <figure className="frase">
                <Ico nome="aspas" className="ico ico--aspas" />
                <blockquote>Confiança não se conquista com promessas. Se conquista com atitudes.</blockquote>
                <figcaption className="etq">— Lucas, geógrafo e fundador</figcaption>
              </figure>
              <InstaLink className="btn btn--contorno" origem="quem-guia">Seguir @boratrip.oficial <Ico nome="insta" /></InstaLink>
            </div>
          </div>
        </section>

        <section className="secao secao--mata" aria-labelledby="depo-titulo">
          <div className="wrap">
            <div className="cabecalho">
              <div className="pilha">
                <p className="selo selo--escuro">Depoimentos</p>
                <h2 id="depo-titulo">Quem foi, voltou contando.</h2>
              </div>
              <InstaLink className="link-claro" origem="depoimentos">Ver mais no Instagram <Ico nome="seta" /></InstaLink>
            </div>
          </div>
          <div className="carrossel carrossel--depo">
            <ul className="depos" tabIndex={0} aria-label="Depoimentos, deslize para ver mais">
              {DEPOIMENTOS.map((d, n) => (
                <li className="depo" key={d.expedicao}>
                  <Ico nome="aspas" className="ico ico--aspas" />
                  <blockquote className="depo__texto">{d.texto}</blockquote>
                  <div className="depo__autor">
                    <Foto slug={`depo-${n + 1}`} alt="" legenda="" className="depo__foto" w={96} h={96} />
                    <p><strong className="pendente">{d.nome}</strong><span className="etq">{d.expedicao}</span></p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="secao secao--areia" id="duvidas" aria-labelledby="faq-titulo">
          <div className="wrap duas-col">
            <div className="pilha">
              <p className="selo selo--claro">Antes de reservar</p>
              <h2 id="faq-titulo">Perguntas frequentes</h2>
              <p className="lead">Não achou sua resposta? O Lucas responde pessoalmente no WhatsApp.</p>
              <WhatsLink className="btn btn--contorno js-whats so-desktop-flex" msg="Oi Lucas, tenho uma dúvida sobre as expedições" origem="faq">
                Chamar no WhatsApp <Ico nome="whats" />
              </WhatsLink>
            </div>
            <div className="faqs">
              {FAQ.map((f, i) => (
                <details className="faq" open={i === 0} key={f.pergunta}>
                  <summary>{f.pergunta}<Ico nome="mais" className="ico faq__ico" /></summary>
                  <p className={f.pendente ? 'pendente' : undefined}>{f.resposta}</p>
                </details>
              ))}
              <WhatsLink className="btn btn--contorno btn--bloco js-whats so-mobile-flex" msg="Oi Lucas, tenho uma dúvida sobre as expedições" origem="faq">
                Outra dúvida? Chame no WhatsApp <Ico nome="whats" />
              </WhatsLink>
            </div>
          </div>
        </section>

        <section className="secao secao--agua final" aria-labelledby="final-titulo" data-final="">
          <div className="wrap final__in">
            <p className="selo selo--escuro">Bora!</p>
            <h2 id="final-titulo">A vida acontece agora. Bora?</h2>
            <p className="lead lead--claro">Seus sonhos merecem sair do papel. Escolha uma data e chame a gente.</p>
            <div className="final__botoes">
              <WhatsLink className="btn btn--primario" msg="Oi Lucas, vim pelo site e quero viajar com a BoraTrip" origem="final">
                Falar com o Lucas no WhatsApp <Ico nome="whats" />
              </WhatsLink>
              <PdfLink className="btn btn--contorno-claro" origem="final">Baixar agenda 2027 em PDF <Ico nome="calendario" /></PdfLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="wrap">
          <div className="rodape__grade">
            <div className="pilha pilha--curta">
              <Logo tom="claro" />
              <p>Expedições em grupo pelo Brasil, guiadas pelo geógrafo Lucas. Viva sua próxima história.</p>
            </div>
            <ul className="rodape__links">
              <li><InstaLink origem="rodape"><Ico nome="insta" />@boratrip.oficial</InstaLink></li>
              <li><WhatsLink msg="Oi Lucas, vim pelo site" origem="rodape"><Ico nome="whats" />WhatsApp</WhatsLink></li>
            </ul>
          </div>
          <div className="rodape__legal">
            <p className="etq pendente">CNPJ [Preencher] · Cadastur [Preencher]</p>
            <p><a href="privacidade.html">Política de privacidade</a> · © 2026 BoraTrip</p>
            <details className="creditos">
              <summary>Créditos das fotos de destinos</summary>
              <p>
                Wikimedia Commons:{' '}
                {CREDITOS.map((c, i) => (
                  <span key={c.arquivo}>
                    {i > 0 && ' · '}
                    {c.onde}: <a href={`https://commons.wikimedia.org/wiki/File:${encodeURIComponent(c.arquivo)}`} rel="noopener" target="_blank">{c.autor}</a> ({c.licenca})
                  </span>
                ))}
              </p>
            </details>
          </div>
        </div>
      </footer>

      <Flutuante />
      <Metricas />
    </>
  );
}
