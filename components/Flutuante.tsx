'use client';

import { useEffect, useState } from 'react';
import { Ico } from './Ico';
import { WhatsLink } from './Links';

/** Botão flutuante do WhatsApp: aparece depois do hero e some na chamada final. */
export function Flutuante() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const alvos = [document.querySelector('[data-hero-ctas]'), document.querySelector('[data-final]')].filter(
      (x): x is Element => Boolean(x),
    );
    if (!('IntersectionObserver' in window) || !alvos.length) {
      setVisivel(true);
      return;
    }
    const visiveis = new Set<Element>();
    const avaliar = () => setVisivel(alvos[0].getBoundingClientRect().bottom < 0 && visiveis.size === 0);
    const io = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => (e.isIntersecting ? visiveis.add(e.target) : visiveis.delete(e.target)));
      avaliar();
    });
    alvos.forEach((a) => io.observe(a));
    window.addEventListener('scroll', avaliar, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', avaliar);
    };
  }, []);

  return (
    <WhatsLink
      className={visivel ? 'flutuante visivel' : 'flutuante'}
      msg="Oi Lucas, vim pelo site e quero saber das expedições"
      origem="flutuante"
      aria-label="Falar com o Lucas no WhatsApp"
      data-flutuante=""
    >
      <Ico nome="whats" />
    </WhatsLink>
  );
}
