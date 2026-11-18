'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Ico } from './Ico';

/** Carrossel de expedições (mobile): contador e botões anterior/próximo. */
export function Carrossel({ total, children }: { total: number; children: ReactNode }) {
  const trilho = useRef<HTMLUListElement>(null);
  const [contador, setContador] = useState(`1 / ${total}`);
  const [antOff, setAntOff] = useState(false);
  const [proxOff, setProxOff] = useState(false);

  const passo = () => {
    const t = trilho.current;
    const primeiro = t?.children[0];
    return primeiro ? primeiro.getBoundingClientRect().width + 14 : 0;
  };

  useEffect(() => {
    const t = trilho.current;
    if (!t) return;
    const itens = t.children;
    const atualizar = () => {
      const i = Math.min(Math.round(t.scrollLeft / passo()), itens.length - 1);
      setContador(`${i + 1} / ${itens.length}`);
      setAntOff(t.scrollLeft <= 4);
      setProxOff(t.scrollLeft + t.clientWidth >= t.scrollWidth - 4);
    };
    let agendado = false;
    const onScroll = () => {
      if (agendado) return;
      agendado = true;
      requestAnimationFrame(() => { agendado = false; atualizar(); });
    };
    t.addEventListener('scroll', onScroll, { passive: true });
    atualizar();
    return () => t.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="carrossel" data-carrossel="">
      <ul className="cards" data-trilho="" tabIndex={0} aria-label="Expedições, deslize para ver mais" ref={trilho}>
        {children}
      </ul>
      <div className="carrossel__ctrl" aria-hidden="true">
        <button className="carrossel__btn" type="button" data-ant="" tabIndex={-1} disabled={antOff}
          onClick={() => trilho.current?.scrollBy({ left: -passo(), behavior: 'smooth' })}>
          <Ico nome="anterior" />
        </button>
        <span className="carrossel__contador" data-contador="">{contador}</span>
        <button className="carrossel__btn" type="button" data-prox="" tabIndex={-1} disabled={proxOff}
          onClick={() => trilho.current?.scrollBy({ left: passo(), behavior: 'smooth' })}>
          <Ico nome="proximo" />
        </button>
      </div>
    </div>
  );
}
