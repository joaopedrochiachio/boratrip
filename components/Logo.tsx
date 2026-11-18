import { Ico } from './Ico';

export function Logo({ tom }: { tom: 'escuro' | 'claro' }) {
  return (
    <a className={`logo logo--${tom}`} href="#topo" aria-label="BoraTrip, voltar ao início">
      <span className="logo__marca"><Ico nome="bussola" /></span>
      <span className="logo__nome">BoraTrip</span>
    </a>
  );
}
