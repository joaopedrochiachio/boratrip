'use client';

import { useEffect } from 'react';
import { CONFIG } from '@/lib/config';

let iniciado = false;

/** GA4 e Meta Pixel: só carregam se os IDs estiverem preenchidos em lib/config.ts. */
export function Metricas() {
  useEffect(() => {
    if (iniciado) return;
    iniciado = true;

    if (CONFIG.ga4) {
      const s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=' + CONFIG.ga4;
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        // gtag precisa receber o objeto arguments, não um array
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer!.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', CONFIG.ga4);
    }

    if (CONFIG.metaPixel) {
      /* eslint-disable */
      // @ts-ignore — snippet oficial do Meta Pixel
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
      /* eslint-enable */
      window.fbq!('init', CONFIG.metaPixel);
      window.fbq!('track', 'PageView');
    }
  }, []);

  return null;
}
