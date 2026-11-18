'use client';

import { useEffect, useRef, useState } from 'react';

/** Enquanto o arquivo da foto não existir, a <img> some e fica o fundo de curvas de nível. */
function useSemFoto() {
  const ref = useRef<HTMLImageElement>(null);
  const [semFoto, setSemFoto] = useState(false);
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setSemFoto(true);
  }, []);
  return { ref, semFoto, onError: () => setSemFoto(true) };
}

type FotoProps = {
  slug: string;
  alt: string;
  legenda: string;
  className?: string;
  w?: number;
  h?: number;
  eager?: boolean;
};

export function Foto({ slug, alt, legenda, className = '', w = 900, h = 675, eager = false }: FotoProps) {
  const { ref, semFoto, onError } = useSemFoto();
  return (
    <div className={`foto ${className}`} data-legenda={legenda}>
      {!semFoto && (
        <img
          ref={ref}
          src={`img/${slug}.webp`}
          alt={alt}
          width={w}
          height={h}
          {...(eager ? { fetchPriority: 'high' as const } : { loading: 'lazy' as const })}
          decoding="async"
          onError={onError}
        />
      )}
    </div>
  );
}

export function HeroFundo() {
  const { ref, semFoto, onError } = useSemFoto();
  return (
    <div className="hero__fundo">
      <picture>
        <source media="(min-width: 900px)" srcSet="img/hero.webp" />
        {!semFoto && (
          <img
            ref={ref}
            src="img/hero-mobile.webp"
            alt="Dunas e lagoas dos Lençóis Maranhenses"
            width={800}
            height={1200}
            fetchPriority="high"
            decoding="async"
            onError={onError}
          />
        )}
      </picture>
    </div>
  );
}
