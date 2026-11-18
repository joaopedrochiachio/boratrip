# Fotos que o site precisa

## Situação atual (nov/2026)
- **Já no site:** `lucas.webp` e `grupo.webp` (fotos enviadas pela BoraTrip), hero e `og.jpg` (Lençóis), e as 9 fotos de destinos (`exp-*.webp`).
- As fotos de destinos vieram do **Wikimedia Commons** com licença livre. Os créditos exigidos ficam no rodapé (`lib/creditos.ts`). Ao trocar uma delas por foto própria da BoraTrip, apague a linha correspondente em `lib/creditos.ts`.
- **Logo:** `components/Logo.tsx` recria a marca (bora + sol + TRIP) em código. Se tiver o SVG oficial, ele pode substituir.
- **Ainda faltam:** `depo-1.webp` … `depo-3.webp` (depoimentos).

Coloque os arquivos na pasta `public/img/` com **exatamente** estes nomes, em **WebP**.
Enquanto um arquivo não existir, o site mostra o fundo verde com curvas de nível no lugar — nada quebra.

Dica: peça ao Lucas os **originais do celular/câmera** (as fotos do Instagram são comprimidas para 640 px).
Para converter: https://squoosh.app (formato WebP, qualidade ~75).

| Arquivo | Onde aparece | O que mostrar | Tamanho | Fonte sugerida |
|---|---|---|---|---|
| `hero-mobile.webp` | Topo, no celular | Grupo feliz em paisagem icônica, vertical | 800 × 1200 | Reel na praia 17/11 ou post "A vida acontece agora" 26/10 |
| `hero.webp` | Topo, no computador | Mesma cena, horizontal (deixar espaço à esquerda para o texto) | 1920 × 1080 | Idem |
| `grupo.webp` | "Aqui, desconhecidos viram amigos" | Selfie / foto de grupo sorrindo | 1200 × 900 | Selfie em grupo 13/11 |
| `lucas.webp` | "Prazer, sou o Lucas" | Retrato do Lucas em campo, vertical | 900 × 1100 | Posts 30/10 ou 10/11 |
| `exp-joao-pessoa.webp` | 3 cards de João Pessoa | Pôr do sol / piscinas naturais | 900 × 675 | Destaque "João Pessoa" |
| `exp-natal.webp` | Card Natal Dunas | Dunas | 900 × 675 | Destaque "Natal" |
| `exp-jericoacoara.webp` | Card Jericoacoara | Rede na praia / lagoas | 900 × 675 | Post 11/11 ou destaque "Jeri Adventure" |
| `exp-jalapao.webp` | Card Jalapão | Fervedouro | 900 × 675 | Unsplash/Pexels (a BoraTrip ainda não tem foto própria) |
| `exp-lencois.webp` | Card Lençóis | Dunas com lagoas | 900 × 675 | Destaque "Lençóis Maranhenses" |
| `exp-amazonia.webp` | Card Floresta Amazônica | Rio / floresta | 900 × 675 | Destaque "Amazônia" |
| `exp-alter-do-chao.webp` | Card Alter do Chão | Praia de rio do Tapajós | 900 × 675 | Destaque "Alter do Chão" |
| `exp-bahia.webp` | Card Bahia Relax | Trancoso / Caraíva | 900 × 675 | Destaque "Bahia Relax" |
| `exp-maceio.webp` | Card Maceió + Maragogi | Mar de Maragogi / beach club | 900 × 675 | Post 16/11 (Hibiscus) ou reel 17/11 |
| `depo-1.webp` … `depo-3.webp` | Depoimentos | Foto de rosto do viajante (quadrada) | 160 × 160 | Destaque "Depoimentos" — **com autorização** |
| `og.jpg` | Prévia ao compartilhar o link (WhatsApp, Instagram) | Logo + foto de grupo | 1200 × 630, JPG | Montar a partir do hero |

Também falta: **logo oficial** em SVG (hoje o site usa um logo provisório com bússola).

## Depoimentos (texto)
Hoje o site mostra **3 depoimentos de exemplo** (texto genérico, nome destacado como `[Nome do viajante]`). Troque pelos reais antes de divulgar o site.
Para cada um dos 3 a 6 depoimentos do destaque "Depoimentos": **texto**, **nome**, **expedição + mês/ano** e **autorização** do viajante.
Edite em `lib/conteudo.ts` (`DEPOIMENTOS`) e no bloco de depoimentos de `app/(site)/page.tsx` (procure por `[DEPOIMENTO`).
