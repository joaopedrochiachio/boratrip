import { url } from '@/lib/base';

export default function Privacidade() {
  return (
    <main className="wrap doc">
      <a className="btn btn--contorno btn--peq" href={url('')}>← Voltar ao site</a>
      <h1>Política de privacidade</h1>
      <p className="pendente">[PREENCHER: revisar este texto com o Lucas/contador antes de publicar.]</p>
      <h2>Quem somos</h2>
      <p>BoraTrip — Expedições pelo Brasil. CNPJ <span className="pendente">[PREENCHER]</span>. Cadastur <span className="pendente">[PREENCHER]</span>.</p>
      <h2>Quais dados coletamos</h2>
      <p>Este site não tem formulários. Quando você clica para falar no WhatsApp, a conversa acontece direto no aplicativo do WhatsApp.</p>
      <p>Usamos Google Analytics 4 e Meta Pixel para medir visitas e cliques (por exemplo, quantas pessoas clicaram no botão do WhatsApp). Essas ferramentas usam cookies e coletam dados de navegação de forma agregada.</p>
      <h2>Seus direitos (LGPD)</h2>
      <p>Você pode pedir acesso, correção ou exclusão dos seus dados pelo WhatsApp ou pelo direct do Instagram @boratrip.oficial.</p>
    </main>
  );
}
