export type IcoNome =
  | 'seta' | 'whats' | 'mais' | 'pessoas' | 'bussola' | 'escudo' | 'calendario'
  | 'pin' | 'insta' | 'check' | 'aspas' | 'anterior' | 'proximo';

export function Ico({ nome, className = 'ico' }: { nome: IcoNome; className?: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`#i-${nome}`} />
    </svg>
  );
}
