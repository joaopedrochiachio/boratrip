/** Sol da marca BoraTrip: raios em leque, como no logo oficial. */
export function Sol({ className = '' }: { className?: string }) {
  const raios = [-80, -60, -40, -20, 0, 20, 40, 60, 80];
  return (
    <svg className={className} viewBox="0 0 40 24" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        {raios.map((a, i) => {
          const r = (a * Math.PI) / 180;
          const ini = 9, fim = i % 2 ? 19 : 22;
          const p = (d: number) => [20 + d * Math.sin(r), 24 - d * Math.cos(r)].map((n) => n.toFixed(2));
          const [x1, y1] = p(ini), [x2, y2] = p(fim);
          return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
    </svg>
  );
}

export function Logo({ tom }: { tom: 'escuro' | 'claro' }) {
  return (
    <a className={`logo logo--${tom}`} href="#topo" aria-label="BoraTrip, voltar ao início">
      <span className="logo__bora">bora</span>
      <Sol className="logo__sol" />
      <span className="logo__trip">TRIP</span>
    </a>
  );
}
