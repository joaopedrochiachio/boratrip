'use client';

import { useEffect, useState } from 'react';
import { CONFIG } from '@/lib/config';
import { Ico } from './Ico';
import { WhatsLink } from './Links';

/** Faixa de oferta: some sozinha quando o prazo (CONFIG.ofertaAte) acabar. */
export function Oferta() {
  const [encerrada, setEncerrada] = useState(false);
  useEffect(() => {
    if (CONFIG.ofertaAte && new Date() > new Date(CONFIG.ofertaAte)) setEncerrada(true);
  }, []);

  return (
    <aside className="oferta" aria-label="Oferta Black Friday" data-oferta="" hidden={encerrada}>
      <WhatsLink className="oferta__in" msg="Oi Lucas, quero saber das condições da Black Friday BoraTrip" origem="black-friday">
        <span className="etq">Black Friday BoraTrip</span>
        <span className="oferta__texto">Condições especiais por tempo limitado. Poucas vagas. <span className="pendente">[Confirmar desconto e prazo]</span></span>
        <span className="oferta__cta">Aproveitar <Ico nome="seta" /></span>
      </WhatsLink>
    </aside>
  );
}
