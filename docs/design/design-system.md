# Sistema visual

Sistema visual base de TinKode para una presencia premium, moderna y comercial controlada por minimalismo.

## Principios visuales

- Priorizar claridad, confianza y lectura antes que efectos.
- Usar acentos tecnológicos con moderación.
- Mantener una base oscura, sobria y elegante.
- Diseñar mobile-first.
- Evitar apariencia gamer, hacker clandestino o plantilla genérica.
- No usar contenido, métricas, clientes ni casos no confirmados.

## Paleta

| Token | Valor | Uso |
| --- | --- | --- |
| `--color-page` | `#05070b` | Fondo principal profundo. |
| `--color-page-soft` | `#080d14` | Fondo secundario y profundidad. |
| `--color-surface` | `rgba(13, 18, 27, 0.86)` | Tarjetas y superficies base. |
| `--color-surface-raised` | `rgba(17, 24, 36, 0.92)` | Superficies elevadas o interactivas. |
| `--color-surface-muted` | `rgba(255, 255, 255, 0.045)` | Fondos discretos internos. |
| `--color-text` | `#f4f7fb` | Texto principal. |
| `--color-text-secondary` | `#c6d0dc` | Texto secundario. |
| `--color-text-muted` | `#8290a3` | Texto atenuado y metadatos. |
| `--color-accent-primary` | `#18f28a` | Acento principal verde. |
| `--color-accent-secondary` | `#2c9cff` | Acento secundario azul. |
| `--color-border` | `rgba(224, 234, 248, 0.14)` | Bordes suaves. |
| `--color-border-strong` | `rgba(224, 234, 248, 0.24)` | Bordes en hover o énfasis. |
| `--color-focus` | `#6ef5ff` | Foco accesible. |
| `--color-success` | `#45d68b` | Estados positivos discretos. |
| `--color-warning` | `#f0c96a` | Advertencias discretas. |
| `--color-error` | `#ff6b7a` | Errores discretos. |
| `--color-selection-bg` | `rgba(24, 242, 138, 0.32)` | Selección de texto. |

## Uso De Acentos

El verde comunica estado activo, acción principal y precisión tecnológica. El azul comunica soporte, contexto secundario y profundidad visual. No deben dominar grandes superficies ni competir con el contenido. Evitar halos grandes, neones saturados o combinaciones que recuerden interfaces de videojuego.

## Tipografía

Fuente principal:

```css
Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

Fuente monoespaciada:

```css
"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace
```

Pesos definidos:

- Regular: `400`
- Medium: `520`
- Semibold: `650`
- Bold: `760`

## Escala Tipográfica

| Token | Uso |
| --- | --- |
| `--text-xs` | Etiquetas técnicas y metadatos. |
| `--text-sm` | Texto auxiliar. |
| `--text-base` | Cuerpo principal. |
| `--text-lead` | Texto destacado. |
| `--text-subtitle` | Subtítulos y títulos de tarjetas. |
| `--text-section` | Títulos de sección. |
| `--text-title` | Títulos principales. |
| `--text-display` | Display controlado para muestras y primeras vistas. |

La escala usa `clamp()` para crecer sin producir títulos desproporcionados en móvil.

## Espaciado

Tokens:

- `--space-2xs`: `0.25rem`
- `--space-xs`: `0.5rem`
- `--space-sm`: `0.75rem`
- `--space-md`: `1rem`
- `--space-lg`: `1.5rem`
- `--space-xl`: `2rem`
- `--space-2xl`: `3rem`
- `--space-section`: `clamp(4rem, 10vw, 7.5rem)`
- `--page-gutter`: `clamp(1rem, 5vw, 4rem)`

## Contenedores

`.container` limita el ancho a `1120px` y mantiene gutters fluidos. `--text-max` limita bloques largos a `680px` para preservar legibilidad.

`.section` define separación vertical estándar. `.section-header` concentra encabezados de sección con ancho de lectura controlado y deja separación inferior antes del contenido para evitar paneles visualmente pegados.

En demostraciones o primeras vistas temporales, el bloque superior debe evitar alturas mínimas excesivas: el contenido principal debe aparecer pronto en móvil y mantener separación clara entre paneles.

## Radios, Bordes Y Sombras

- Radios: `6px`, `8px`, `12px`, `18px` y `999px` para píldoras.
- Bordes: baja opacidad por defecto, mayor opacidad en interacción.
- Sombras: profundas y sobrias; el acento verde solo se usa en acciones principales.

## Botones

Componente: `src/components/ui/Button.astro`.

Variantes:

- `primary`: acción principal con verde controlado.
- `secondary`: acción secundaria con azul suave.
- `ghost`: acción discreta o auxiliar.

Tamaños:

- `small`
- `medium`
- `large`

El componente funciona como `<a>` cuando recibe `href` y como `<button>` cuando no lo recibe. Incluye props tipadas para `href`, `type`, `variant`, `size`, `external`, `class` y `ariaLabel`.

## Badges

Componente: `src/components/ui/Badge.astro`.

Sirve para etiquetas breves como “Sistema activo”, “Solución personalizada” o “Ingeniería aplicada”. Usa texto monoespaciado pequeño, borde sutil y variantes sobrias.

## Tarjetas

Componente: `src/components/ui/SurfaceCard.astro`.

Superficie reutilizable con fondo oscuro, borde, radio y padding configurable. La prop `interactive` habilita un hover discreto. La prop `as` permite elegir un elemento semántico entre `article`, `section`, `div` y `aside`.

## Secciones De Diagnóstico Y Soluciones

Las secciones de contenido deben mantener encabezado claro, texto introductorio breve y tarjetas con separación generosa. La lectura debe sentirse comercial y humana, no como dashboard ni documentación técnica.

Cada tarjeta debe comunicar una sola idea: título breve, una frase directa y, como máximo, una línea discreta de ejemplos o capacidades. Evitar listas extensas, exceso de pills y explicaciones que repitan el título.

Las tarjetas de problemas pueden usar numeración discreta. Las etiquetas técnicas superiores deben evitarse cuando agreguen ruido visual.

Las tarjetas de soluciones deben sentirse más constructivas: códigos cortos, acentos moderados y capacidades agrupadas en una línea breve. El beneficio debe aparecer antes que la capacidad técnica.

La transición hacia futuras secciones puede usar una tarjeta o franja discreta, siempre sin inventar proyectos, métricas ni resultados.

La navegación interna usa offset mediante `scroll-padding-top` y `scroll-margin-top` para que los títulos no queden ocultos bajo el header sticky.

## Fondo Y Grid

El fondo global combina:

- Fondo oscuro principal.
- Grid tecnológico muy sutil mediante `linear-gradient`.
- Dos gradientes radiales discretos para profundidad.

No usa imágenes externas, canvas ni animaciones permanentes.

## Header Y Navegación

El header debe ser compacto, sticky y ligero. Usa fondo oscuro translúcido, borde inferior de baja opacidad y blur sutil. En escritorio muestra navegación horizontal y CTA; en móvil usa un botón de menú con `aria-expanded`, `aria-controls` y cierre al seleccionar enlaces.

La navegación no debe sentirse como barra de administración ni ocupar demasiado espacio vertical. Los enlaces internos deben apuntar a IDs existentes o preparados.

## Hero

El hero debe aparecer pronto debajo de la navegación, especialmente en móvil. Usa una composición de una columna en móvil y dos columnas en escritorio. El mensaje y CTA mantienen prioridad visual; el panel tecnológico es decorativo y debe marcarse con `aria-hidden` cuando corresponda.

Los paneles abstractos deben tener gaps claros, borde sutil y uso moderado de acentos. No incluir métricas, números, textos técnicos falsos ni animaciones agresivas.

## Accesibilidad

- Foco visible con `--color-focus`.
- Área interactiva mínima de `44px`.
- Clase `.sr-only`.
- Contraste suficiente sobre fondos oscuros.
- Selección de texto definida.
- Estados no comunicados solo por color: se acompañan con texto o jerarquía.
- Soporte de teclado mediante elementos nativos.

## Responsive

La base es mobile-first. Usa `clamp()`, `min()`, `max()`, CSS Grid y pocos breakpoints. La demo está pensada para funcionar desde 320px hasta escritorios amplios sin overflow horizontal.

## Movimiento

Las transiciones son breves y discretas. `prefers-reduced-motion: reduce` elimina animaciones y desplazamientos de hover.

## Evitar

- Neón dominante.
- Resplandores exagerados.
- Fondos saturados.
- Efectos que reduzcan legibilidad.
- Estética gamer o hacker clandestina.
- Componentes genéricos de agencia.
- Animaciones complejas sin necesidad.
- Recursos remotos para esta fase.
