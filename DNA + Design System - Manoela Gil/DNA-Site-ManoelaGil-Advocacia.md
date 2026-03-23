# SITE DNA — MANOELA GIL ADVOCACIA

**Nicho:** Advocacia — Direito Médico e da Saúde (Judicialização de planos de saúde, medicamentos de alto custo, autismo/TEA, cirurgias, home care)
**Posicionamento:** Escritório de alta especialização técnica com acolhimento humano. A interface transmite autoridade silenciosa, sofisticação editorial e urgência emocional — como um escritório de moda de luxo que advoga pela vida. Impacto imediato de credibilidade premium sem ostentação.
**Data de criação:** 2026-03-23

---

## IDENTIDADE VISUAL

### Paleta de Cores

| Variável CSS | Hex | Função Específica no Layout |
|---|---|---|
| `--color-primary` | `#3D4A3A` | Verde floresta escuro — fundo hero, navbar, drawer, CTA section, hover fill de cards. Base cromática dominante |
| `--color-secondary` | `#F5F1E8` | Creme quente — background padrão do body, seção de serviços, FAQ |
| `--color-accent` | `#C9A87C` | Dourado envelhecido — todos os CTAs primários, section-tag, ícones, underlining, contadores, pontos de marquee |
| `--color-text` | `#2C3531` | Verde-carvão — texto corrido de alta legibilidade |
| `--color-muted` | `#6B7B73` | Verde médio acinzentado — parágrafos secundários, labels, subtextos |
| `--color-white` | `#FFFFFF` | Puro — cards de serviço, fundo do form, solution card |
| `--color-cream` | `#FAF9F6` | Off-white levíssimo — pain section, about section, location section |
| Footer BG | `#141C14` | Verde quase-preto — contraste máximo no rodapé, separação profunda |
| WhatsApp Float | `#25D366` | Verde WhatsApp padrão — único uso de cor externa ao sistema |

### Tipografia

| Elemento | Família | Peso | Tamanho Exato | Observações |
|---|---|---|---|---|
| H1 Hero `.hero-title` | Cormorant Garamond | 400 (Regular) | `clamp(3rem, 8vw, 6rem)` / `line-height: 1` | Animação clip-path por linha. Estilo italic na palavra-chave "acesso real" |
| H2 `.section-title` | Cormorant Garamond | 400 | `clamp(2.5rem, 5vw, 4rem)` / `line-height: 1.1` | Cor `#3D4A3A`; branco nas seções escuras |
| H2 Enchantment | Cormorant Garamond | 400 | `clamp(2.5rem, 6vw, 5rem)` / `line-height: 1.1` | Centralizado, branco, com `<span class="accent">` italic dourado |
| H2 Testimonial Quote | Cormorant Garamond | 300 (Light) | `clamp(1.2rem, 3.5vw, 2.2rem)` / `line-height: 1.4` | Peso 300 — intencional para ar literário e elegante |
| H3 Service Card | Cormorant Garamond | 400 | `1.75rem` | Muda para branco no hover fill |
| H3 FAQ | Cormorant Garamond | 400 | `1.1rem` | Cor `#3D4A3A` |
| `.section-tag` | Outfit | 500 | `0.75rem` | `text-transform: uppercase`, `letter-spacing: 0.2em`, com `::before` linha dourada 2rem |
| `.tagline` hero | Outfit | 400 | `0.875rem` | `letter-spacing: 0.2em`, uppercase, branco 70% |
| `.btn` | Outfit | 500 | `0.875rem` | `text-transform: uppercase`, `letter-spacing: 0.1em` |
| `.nav-link` navbar | Outfit | 500 | `0.75rem` | `uppercase`, `letter-spacing: 0.1em` |
| `.nav-link` drawer | Cormorant Garamond | 400 | `1.5rem` | Troca para serif no drawer — contraste tipográfico intencional |
| `.footer-col-title` | Outfit | 600 | `0.7rem` | `uppercase`, `letter-spacing: 0.2em`, dourado |
| Body / `p` corrido | Outfit | 400 | `1rem` / `line-height: 1.6–1.8` | |
| Preloader chars | Cormorant Garamond | 400 | `4rem` | `letter-spacing: 0.5em`, dourado |
| Marquee items | Cormorant Garamond | 500 | `1.1rem` | `letter-spacing: 0.15em`, uppercase, verde |
| Stat/Counter numbers | Cormorant Garamond | 400 | `2.5rem` | `line-height: 1` |
| `.logo-name` | Cormorant Garamond | 400 | `1rem` | `letter-spacing: 0.15em`, branco |
| `.logo-sub` | Outfit | 500 | `0.55rem` | `letter-spacing: 0.25em`, branco 65% |

### Estilo Geral

Interface **Editorial Jurídica de Luxo** — arquitetura visual baseada no contraste deliberado entre dois mundos: a sobriedade da Serif clássica (Cormorant Garamond como voz da autoridade jurídica) e a clareza geométrica da Sans-Serif moderna (Outfit como voz da acessibilidade). A paleta de verde-musgo + dourado envelhecido recusa o azul corporativo da advocacia convencional em favor de uma identidade que lembra galerias de arte e editoriais de alta-costura. O layout usa espaço em branco como elemento construtivo, linhas finas (`1px`) como ornamento único, números de série em itálico como assinatura editorial, e transições de fill invertido (branco → verde-primário) nos cards como o único momento de dramaticidade controlada — tudo calculado para comunicar domínio técnico com calor humano.

---

## LAYOUT — SEÇÃO POR SEÇÃO

### SEÇÃO 1 — Preloader

**Estrutura:** `position: fixed; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 9999`
**Fundo:** `background: #3D4A3A` (sólido, sem gradiente)
**Elementos Restritos:** Duas letras "M" e "G" centralizadas em Cormorant Garamond 4rem / `letter-spacing: 0.5em` / dourado. Linha horizontal de 0→100px abaixo das letras.
**Animação:** Cada letra: `translateY(100%) → translateY(0)`, `opacity: 0 → 1`, `0.8s cubic-bezier(0.77, 0, 0.18, 1)`. Letra G com `animation-delay: 0.2s`. Linha: `width: 0 → 100px` em `1s cubic-bezier(0.77, 0, 0.18, 1) delay 0.5s`. Saída: `opacity: 0; visibility: hidden` em `0.8s ease` (timeout 800ms).
**Micro-interações:** Nenhuma — é uma tela de loading, não tem interação.
**Diferenciador Visual:** Monograma ao invés de logo — intimidade de ateliê de luxo. Linha dourada crescendo como assinatura.

---

### SEÇÃO 2 — Navbar

**Estrutura:** `position: fixed; top: 0; height: 80px; width: 100%`. Flex row, `justify-content: space-between; align-items: center`. Container `max-width: 1400px` com `padding: 0 2rem`.
**Fundo:** Default: `rgba(61, 74, 58, 0.2)` + `backdrop-filter: blur(8px)`. Scrolled: `rgba(61, 74, 58, 0.95)` + `blur(12px)` + `box-shadow: 0 4px 30px rgba(0,0,0,0.1)`.
**Elementos Restritos:** Logo (ícone 48px + nome/sub empilhados) à esquerda. Links de navegação centralizados. Botão "Consulta" (`.nav-cta`) à direita com fundo dourado. Hambúrguer 44×44px visível apenas ≤768px.
**Animação:** `transform: translateY(-100%)` ao scrollar para baixo (scroll > lastScroll && > 100px). `transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1)`.
**Micro-interações:** Nav-link hover: `::after` linha dourada `width: 0 → 100%` em `0.3s ease`. Drawer close button hover: `transform: rotate(90deg)`. Nav drawer: `translateX(100%) → translateX(0)` em `0.5s cubic-bezier(0.77, 0, 0.18, 1)`. Overlay: `opacity: 0 → 1` + `backdrop-filter: blur(4px)`.
**Diferenciador Visual:** Glassmorphism verde (não cinza/branco convencional). Drawer com links em Serif 1.5rem que muda tipografia ao abrir — como se a navegação fosse um outro estado do site.

---

### SEÇÃO 3 — Hero

**Estrutura:** `min-height: 100vh; display: flex; align-items: stretch`. Grid interno: `grid-template-columns: 1fr 42%; gap: 0; width: 100%; padding: 0`. Coluna esquerda com `padding-top: calc(80px + 8rem)`.
**Fundo:** `background: #3D4A3A` (sólido). Texto fantasma de fundo: "10 ANOS" em `font-size: 20vw; color: rgba(255,255,255,0.03); font-weight: 300`. Coluna direita: imagem full-height com `::after` gradient `linear-gradient(to right, rgba(61,74,58,0.45) 0%, transparent 40%)`.
**Elementos Restritos:** Coluna esquerda: tagline-wrapper (linha 3rem + texto uppercase). H1 em 3 linhas (`<span class="title-line">`). Parágrafo descrição. Dois botões (primário dourado + outline branco). Coluna direita: foto `object-fit: cover; object-position: center top; min-height: 100vh`. Scroll indicator: linha 60px gradiente dourado→transparente, `position: absolute; bottom: 2rem; left: 50%`.
**Animação:** Tagline: `translateX(-100%) → translateX(0) + opacity` em `0.8s cubic-bezier(0.77,0,0.18,1) delay 0.3s`. Cada title-line: `clip-path: inset(0 100% 0 0) → inset(0 0% 0 0)` em `1s` com delays `0.5s / 0.7s / 0.9s`. Descrição: `translateY(20px) + opacity` em `0.8s ease delay 1.1s`. Botões: `translateY(20px) + opacity delay 1.3s`. Foto: `opacity: 0 → 1` em `1.2s cubic-bezier(0.25,0.46,0.45,0.94) delay 0.4s`. Foto hover: `scale(1.03)` em `6s ease`.
**Micro-interações:** Botão primário: `::before` fill `translateX(-100%) → translateX(0)` em `0.4s cubic-bezier(0.77,0,0.18,1)` — cor muda de dourado para verde, texto de verde para dourado. Botão outline hover: `background: rgba(255,255,255,0.1)`.
**Diferenciador Visual:** Coluna direita é a foto full-bleed sem moldura, sangra até a borda do viewport — sem padding, sem card, sem sombra. A imagem É a coluna. Grid assimétrico 58/42.

---

### SEÇÃO 4 — Marquee

**Estrutura:** `background: #FFFFFF; padding: 1.2rem 0; overflow: hidden; white-space: nowrap`. `border-top: 1.5px solid #3D4A3A; box-shadow: inset 0 3px 0 0 rgba(201,168,124,0.4)`.
**Fundo:** Branco puro com ornamento de sombra inset dourada no topo.
**Elementos Restritos:** `display: inline-flex; animation: marquee 30s linear infinite`. Itens em Cormorant Garamond 1.1rem uppercase + separadores circulares dourados 6×6px.
**Animação:** `@keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }` — conteúdo duplicado para loop perfeito.
**Micro-interações:** Nenhuma.
**Diferenciador Visual:** Fundo branco isolado entre o verde do hero e o creme da seção seguinte — transição cromática agressiva que usa a barra como respiro visual e divisor editorial.

---

### SEÇÃO 5 — Pain Section (Dor e Solução)

**Estrutura:** `padding: 8rem 0; background: #FAF9F6`. Grid: `grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center`.
**Fundo:** `#FAF9F6` — creme suavíssimo.
**Elementos Restritos:** Coluna esquerda: section-tag + H2 + parágrafo + lista de dores com checkmarks dourados. Coluna direita: Solution card centralizado `max-width: 400px; background: #FFFFFF; padding: 4rem; box-shadow: 0 20px 60px rgba(0,0,0,0.08)`. Card tem `::before: height: 3px; background: #C9A87C` no topo (sem border-radius).
**Animação:** Cards com `.reveal` — `opacity: 0; transform: translateY(30px)` → ativo via IntersectionObserver threshold 0.1.
**Micro-interações:** FAQ item border: `rgba(61,74,58,0.1) → #C9A87C` no hover em `0.3s`.
**Diferenciador Visual:** Solution card sem border-radius (sharp corners) com única linha dourada de 3px no topo — minimalismo severo que comunica precisão jurídica.

---

### SEÇÃO 6 — Serviços (Editorial Grid Split)

**Estrutura:** `padding: 8rem 0; background: #F5F1E8`. Container: `grid-template-columns: 380px 1fr; gap: 8rem; align-items: flex-start`. Coluna esquerda: `position: sticky; top: 120px`. Grid de cards: `grid-template-columns: repeat(3, 1fr); border-top: 1px solid rgba(61,74,58,0.1); border-left: 1px solid rgba(61,74,58,0.1)`.
**Fundo:** `#F5F1E8` — creme padrão. Cards brancos com bordas `rgba(61,74,58,0.1)`.
**Elementos Restritos:** Cada card: número em itálico Serif dourado (01–16) + ícone SVG 32px + H3 1.75rem + descrição + link "Consultar Caso" uppercase 0.75rem. Cards `min-height: 420px`. Cards 1 e 12 ocupam `grid-column: span 2` no desktop. Cada 4º card tem `background: #FAF9F6`.
**Animação:** Cards com `.reveal` + `transitionDelay: (index % 4) * 0.05s` (stagger de 50ms). Card fill: `::before translateY(101%) → translateY(0)` em `0.6s cubic-bezier(0.77,0,0.175,1)`.
**Micro-interações:** Card hover: fill verde de baixo para cima (`translateY`). Título → branco. Descrição → `rgba(255,255,255,0.88)`. Ícone: `scale(1.1) rotate(-5deg)` em `0.5s`. Link: `translateX(10px)` em `0.3s`. Cabeçalho sticky acompanha o scroll da grid.
**Diferenciador Visual:** Sticky sidebar com CTA fixo enquanto a grid de 16 cards scrolla. Grid com bordas compartilhadas (efeito tabela editorial). Número de série em itálico como assinatura. Fill-from-bottom no hover — não é um simples background-color change.

---

### SEÇÃO 7 — Enchantment (Fullscreen Image)

**Estrutura:** `height: 100vh; min-height: 700px; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative`.
**Fundo:** Imagem fullscreen `object-fit: cover; filter: grayscale(30%) contrast(1.1)`. Overlay: `background: rgba(61,74,58,0.7); mix-blend-mode: multiply`.
**Elementos Restritos:** Conteúdo centralizado: H2 `clamp(2.5rem,6vw,5rem)` branco com `<span class="accent">` em itálico dourado. Parágrafo em Serif itálico 1.25rem, opacidade 0.8.
**Animação:** Nenhuma — seção estática intencional como respiro dramático.
**Micro-interações:** Nenhuma.
**Diferenciador Visual:** `mix-blend-mode: multiply` no overlay — não é um simples rgba. Isso tonaliza a imagem com a cor primária criando uma identidade cromática que nenhum overlay rgba puro consegue. Frase curta e direta no centro de 100vh.

---

### SEÇÃO 8 — Sobre

**Estrutura:** `padding: 8rem 0 4rem; background: #FAF9F6`. Grid: `grid-template-columns: 1fr 1.1fr; gap: clamp(3rem,6vw,7rem); align-items: start`.
**Fundo:** `#FAF9F6`. Ornamento: `::before` na `.about-gallery` — linha vertical `width: 2px; background: #C9A87C; top: 8%; bottom: 8%; left: -24px`.
**Elementos Restritos:** Coluna esquerda: foto única `aspect-ratio: 3/4; object-fit: cover; filter: grayscale(8%)`. Coluna direita: section-tag + H2 + subtítulo Serif italic 1.25rem dourado + 3 parágrafos + contadores. Contadores: `display: flex; gap: 4rem; border-top: 1px solid rgba(61,74,58,0.1)`. Números em Serif 2.5rem verde + label uppercase 0.75rem.
**Animação:** Imagem: `clip-path: inset(0 100% 0 0) → inset(0 0 0 0)` em `1.2s cubic-bezier(0.77,0,0.18,1)` via IntersectionObserver threshold 0.2. Contadores: `animateCounter()` com easing `1 - Math.pow(2, -10 * progress)` (ease-out-expo) em 2000ms.
**Micro-interações:** Foto hover: `scale(1.03); filter: grayscale(0%)` em `1s cubic-bezier(0.25,0.46,0.45,0.94)`.
**Diferenciador Visual:** Linha dourada vertical à esquerda da foto como único frame — sem moldura, sem sombra, sem card. A ornamentação é a linha.

---

### SEÇÃO 9 — Photo Strip (Galeria)

**Estrutura:** `width: 100%; overflow: hidden`. Grid interno: `grid-template-columns: repeat(3, 1fr); gap: 3px`.
**Fundo:** As próprias fotos preenchem 100% da largura.
**Elementos Restritos:** 3 imagens `height: 400px; object-fit: cover; object-position: center 35%; filter: grayscale(15%)`.
**Animação:** `.reveal` padrão.
**Micro-interações:** Hover: `scale(1.04); filter: grayscale(0%)` em `1s cubic-bezier(0.25,0.46,0.45,0.94)` + `filter: 0.6s ease`.
**Diferenciador Visual:** `gap: 3px` — fissura milimétrica entre fotos como septos editoriais. Fullbleed sem container/padding lateral.

---

### SEÇÃO 10 — Depoimentos

**Estrutura:** `height: 100vh; min-height: 600px; background: #3D4A3A; display: flex; align-items: center; justify-content: center`. Conteúdo: `max-width: 1000px; text-align: center; padding: 0 2rem`.
**Fundo:** `#3D4A3A` sólido. Texto fantasma: "DEPOIMENTOS" em `font-size: 15vw; color: rgba(255,255,255,0.03)` centralizado absoluto.
**Elementos Restritos:** Logo Google com SVG inline colorido. Quote Serif 300 branca. Autor uppercase dourado `letter-spacing: 0.2em`. Dots de navegação: `12×12px; border-radius: 50%; border: 1px solid #C9A87C; background: transparent → #C9A87C active`.
**Animação:** Slider manual + `setInterval 6000ms`. Transição: `opacity: 0 → 1` em `0.8s ease`. Pause no `mouseenter`.
**Micro-interações:** Dot hover/active: fill dourado. Pause automático ao focar.
**Diferenciador Visual:** 100vh com fundo verde e texto fantasma gigante em background. Logo Google inline (SVG multicolorido) inserido diretamente no H2 como elemento visual — não como imagem separada.

---

### SEÇÃO 11 — FAQ

**Estrutura:** `padding: 8rem 0; background: #F5F1E8`. Container: `max-width: 1000px`. Grid: `display: grid; gap: 1rem`.
**Fundo:** `#F5F1E8`. Items: `background: #FFFFFF; border: 1px solid rgba(61,74,58,0.1)`.
**Elementos Restritos:** Header centralizado (section-tag + H2). Cada item: H3 400 + ícone "+" à direita. Answer: `max-height: 0 → 300px; overflow: hidden`.
**Animação:** Accordion: `max-height: 0.5s ease`. Ícone: `transform: rotate(45deg)` em `0.3s ease`.
**Micro-interações:** Item border: `rgba(61,74,58,0.1) → #C9A87C` no hover. Um item aberto por vez (fecha o anterior).
**Diferenciador Visual:** Border-color dourada no hover — o dourado aparece como indicador de foco antes mesmo de clicar.

---

### SEÇÃO 12 — Localização

**Estrutura:** `padding: 8rem 0; background: #FAF9F6`. Grid: `grid-template-columns: 1fr 1.5fr; gap: 4rem; align-items: center`.
**Fundo:** `#FAF9F6`. Mapa: `height: 500px; filter: grayscale(20%) contrast(1.1)`.
**Elementos Restritos:** Coluna info: section-tag + H2 + lista de items (endereço, telefone, horário) com ícones SVG 24px dourados. Link "Como chegar" (btn-primary). Coluna mapa: iframe 100%×500px.
**Animação:** `.reveal` padrão.
**Micro-interações:** Links hover: `color: #C9A87C`.
**Diferenciador Visual:** Mapa com `filter: grayscale(20%) contrast(1.1)` — não é o mapa colorido padrão do Google, está tonalizado na identidade visual.

---

### SEÇÃO 13 — CTA / Formulário

**Estrutura:** `padding: 8rem 0; background: #3D4A3A`. Grid: `grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center`.
**Fundo:** `#3D4A3A` sólido.
**Elementos Restritos:** Coluna esquerda: section-tag + H2 branco + texto + lista de 3 features (checkmarks dourados). Coluna direita: form wrapper `background: #FFFFFF; padding: 4rem`. Inputs: `border: 1px solid rgba(61,74,58,0.2); padding: 1rem; background: transparent; border-radius: 0`. Select com seta SVG customizada inline. Form row: `grid-template-columns: 1fr 1fr; gap: 2rem`.
**Animação:** Nenhuma — form estático, foco direto.
**Micro-interações:** Input/select/textarea focus: `border-color: #C9A87C; outline: none`. Botão submit: mesmo fill-from-left do btn-primary. Sem border-radius em nenhum input.
**Diferenciador Visual:** Form branco flutuando sobre fundo verde — contraste máximo. Nenhum `border-radius` nos inputs — consistência do estilo arquitetônico sharp corners do projeto.

---

### SEÇÃO 14 — Footer

**Estrutura:** `background: #141C14; padding: 4rem 0 0`. Grid: `grid-template-columns: 1.6fr 1fr 1fr 1.2fr; gap: clamp(1.5rem,3vw,3.5rem)`. Bottom bar: flex row, `justify-content: space-between`.
**Fundo:** `#141C14` — verde escuríssimo, distinto do `--color-primary`.
**Elementos Restritos:** Col 1 (brand): logo + texto descritivo `max-width: 280px; font-size: 0.875rem` + ícones sociais. Cols 2-3: listas de links com títulos `0.7rem uppercase letter-spacing: 0.2em` dourados. Col 4: contatos com ícones SVG. Bottom bar: copyright + toggle de cookies customizado + links legais.
**Animação:** Social icons hover: `translateY(-2px)` em `0.3s`.
**Micro-interações:** Links hover: `color: #C9A87C`. Social icon hover: translateY(-2px) + cor dourada.
**Diferenciador Visual:** Toggle de cookies customizado inline (HTML puro, sem biblioteca) no bottom bar — componente de design próprio com visual de switch dourado/verde.

---

### COMPONENTE FLUTUANTE — WhatsApp Float

**Estrutura:** `position: fixed; bottom: 30px; right: 30px; width: 60px; height: 60px; border-radius: 50%; background: #25D366; z-index: 999`.
**Animação:** `@keyframes pulse` — `box-shadow: 0 0 0 0 rgba(37,211,102,0.4) → 0 0 0 20px rgba(37,211,102,0)` em `2s infinite`.
**Micro-interações:** Hover: `scale(1.1); box-shadow: 0 6px 30px rgba(37,211,102,0.4)`.

---

## COMPONENTES REUTILIZÁVEIS

### Botão Primário `.btn-primary`

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-family: 'Outfit', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: #C9A87C;
  color: #3D4A3A;
  border: none;
  border-radius: 0; /* sharp corners — regra absoluta */
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: color 0.3s cubic-bezier(0.4,0,0.2,1);
}

/* Fill de esquerda para direita no hover */
.btn-primary::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: #3D4A3A;
  transition: left 0.4s cubic-bezier(0.77, 0, 0.18, 1);
  z-index: 0;
}
.btn-primary:hover::before { left: 0; }
.btn-primary:hover { color: #C9A87C; }
.btn-primary span, .btn-primary svg { position: relative; z-index: 1; }
```

### Botão Outline `.btn-outline`

```css
.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255,255,255,0.5);
  border-radius: 0;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
}
.btn-outline:hover {
  background: rgba(255,255,255,0.1);
  border-color: #ffffff;
}
```

### Section Tag `.section-tag`

```css
.section-tag {
  display: inline-block;
  font-family: 'Outfit', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #C9A87C;
  margin-bottom: 1rem;
  padding-left: 3rem;
  position: relative;
}
.section-tag::before {
  content: '';
  position: absolute;
  left: 0; top: 50%;
  width: 2rem; height: 1px;
  background: #C9A87C;
  transform: translateY(-50%);
}
```

### Service Card `.service-card`

```css
.service-card {
  position: relative;
  padding: 4rem 2rem;
  background: #FFFFFF;
  border-right: 1px solid rgba(61,74,58,0.1);
  border-bottom: 1px solid rgba(61,74,58,0.1);
  min-height: 420px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.77,0,0.18,1);
}
/* Fill de baixo para cima */
.service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #3D4A3A;
  transform: translateY(101%);
  transition: transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 0;
}
.service-card:hover::before { transform: translateY(0); }
/* Todo conteúdo interno tem z-index: 1 e transitions de cor */
```

### Input / Form Field

```css
input, textarea, select {
  padding: 1rem;
  border: 1px solid rgba(61,74,58,0.2);
  border-radius: 0;           /* sharp — sem arredondamento */
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  background: transparent;
  color: #2C3531;
  transition: border-color 0.3s cubic-bezier(0.4,0,0.2,1);
  appearance: none;
}
input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: #C9A87C;      /* único indicador de foco: dourado */
}
```

### FAQ Item

```css
.faq-item {
  background: #FFFFFF;
  border: 1px solid rgba(61,74,58,0.1);
  overflow: hidden;
  transition: border-color 0.3s ease;
}
.faq-item:hover { border-color: #C9A87C; }
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease;
}
.faq-item.active .faq-answer { max-height: 300px; }
.faq-icon { transition: transform 0.3s ease; }
.faq-item.active .faq-icon { transform: rotate(45deg); }
```

### Scroll Reveal `.reveal`

```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
/* Stagger nos service cards: (index % 4) * 0.05s via JS */
```

### Curvas de Bezier do Projeto

| Nome | Valor | Uso |
|---|---|---|
| `--transition-fast` | `0.3s cubic-bezier(0.4, 0, 0.2, 1)` | Navbar, links, borders, inputs |
| `--transition-smooth` | `0.5s cubic-bezier(0.77, 0, 0.18, 1)` | Drawer, card fills, clippath reveals |
| `--transition-slow` | `0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Fotos, scale effects |
| Easing dramático | `cubic-bezier(0.77, 0, 0.175, 1)` | Service card fill-from-bottom |

---

## ANTI-PADRÕES REGISTRADOS

❌ **1. Botões com border-radius arredondado** — O projeto usa `border-radius: 0` em absolutamente todos os botões, cards, inputs e formulários. O canto vivo é uma escolha filosófica: comunica precisão, não "amigabilidade genérica". Nenhum pill-button, nenhum border-radius: 8px do Tailwind padrão.

❌ **2. Paleta azul/vinho para advocacia** — O clichê do "advogado sério = azul escuro" foi inteiramente descartado. Verde-musgo `#3D4A3A` + dourado envelhecido `#C9A87C` cria uma identidade visual que se diferencia de 99% dos sites jurídicos brasileiros e compete esteticamente com escritórios internacionais.

❌ **3. Hero com fundo branco ou gradiente azul + foto de algema/balança** — Hero fullbleed verde-escuro com grid assimétrico `1fr / 42%` e foto da advogada como coluna inteira do layout — sem moldura, sem card, sem sombra. A foto não é um "elemento" dentro do layout; ela É metade do layout.

❌ **4. Seção de serviços em lista vertical ou carrossel horizontal** — Grid editorial de 16 cards com bordas compartilhadas (estilo planilha editorial), sidebar sticky com CTA fixo, cards dinamicamente `span 2` para quebra de ritmo, fill-from-bottom no hover e numeração em série itálica. Nenhum accordion simples, nenhum slider de serviços.

❌ **5. Depoimentos em cards brancos com foto de avatar e 5 estrelas fixas no topo** — Seção fullscreen 100vh verde-escuro com um único depoimento centralizado em Serif light 300, texto fantasma "DEPOIMENTOS" em 15vw de fundo, e logo Google inline SVG integrado ao H2. A grandiosidade do espaço valida o depoimento.

❌ **6. Formulário de contato genérico com reCAPTCHA e confirmação por e-mail** — O formulário redireciona para WhatsApp com todos os dados pré-formatados na mensagem, eliminando fricção de conversão e garantindo atendimento imediato — estratégia jurídica de urgência refletida na UX.

❌ **7. Overlay de imagem com `background: rgba(0,0,0,0.5)`** — O overlay da seção Enchantment usa `mix-blend-mode: multiply` com `rgba(61,74,58,0.7)`, tonalizando a imagem com a cor primária do projeto em vez de simplesmente escurecê-la. Resultado: imagem integrada à paleta, não apenas "escurecida para legibilidade".
