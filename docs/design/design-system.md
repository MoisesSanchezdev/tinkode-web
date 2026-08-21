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

## Iconos

Componente: `src/components/ui/InlineIcon.astro`.

El repertorio se limita a los símbolos que tienen un consumidor real. Los iconos acompañan acciones o categorías y no sustituyen títulos, precios ni nombres accesibles.

## Tarjetas

Solo se mantienen dos familias visuales de tarjeta: proyectos y planes. Se implementan en sus secciones porque sus estructuras son distintas y no necesitan una abstracción genérica. Las demás agrupaciones usan divisores, espacio y fondos continuos.

## Secciones De Diagnóstico Y Soluciones

Las capacidades se organizan en tres categorías editoriales con una frase directa y divisores sutiles. El diagnóstico detallado no ocupa una sección propia en el Home y las soluciones no usan una tarjeta por problema, beneficio o tecnología.

La lectura debe sentirse comercial y humana, no como dashboard ni documentación técnica. Las etiquetas superiores son excepcionales y cada bloque conserva una sola idea principal.

La navegación interna usa offset mediante `scroll-padding-top` y `scroll-margin-top` para que los títulos no queden ocultos bajo el header sticky.

## Proceso Secuencial

La sección de forma de trabajo presenta cuatro pasos en un recorrido ligero. Usa números visibles, conectores discretos y bloques compactos con una sola idea por paso.

En móvil, el proceso se ordena verticalmente con una línea lateral de avance, separación suficiente entre pasos y textos cortos. En escritorio, los cuatro pasos pueden organizarse de forma horizontal con conectores suaves y anchuras controladas para evitar que el bloque parezca una tabla o dashboard.

La densidad debe ser menor que en las secciones de problemas y soluciones. Los conectores no deben competir con el contenido, los pasos no deben quedar pegados y el cierre debe funcionar como una invitación breve, no como una promesa comercial.

## Proyectos Editoriales

La sección de proyectos usa un patrón editorial con proyectos separados, jerarquía clara y alternancia de contenido y visual en escritorio. No debe parecer dashboard, tabla ni listado uniforme de tarjetas.

Cada proyecto muestra estado, categoría, nombre, descripción breve, qué se construyó, qué demuestra y una nota contextual cuando aporta claridad. Los estados se expresan en texto y no dependen únicamente del color.

Los visuales deben ser honestos. No se usan placeholders grandes cuando no existe contenido real; las zonas de evidencia se ocultan o se reducen a notas breves hasta tener capturas autorizadas. No se simulan pantallas reales ni se descargan imágenes externas.

La separación entre proyectos debe ser amplia y consistente. Las notas de código privado, documentación técnica privada y evidencia no pública se integran de forma discreta, sin sonar defensivas ni revelar arquitectura sensible.

La página de proyectos debe cerrar con un CTA comercial organizado. El cierre puede invitar a solicitar asesoría, conocer trabajos relacionados durante una conversación y recibir orientación, cotización o presentación de planes según la necesidad. No debe haber frases flotantes ni CTAs compitiendo.

Cuando se agreguen imágenes futuras, deben estar autorizadas, optimizadas, almacenadas en `public/images/projects/` y acompañadas por texto alternativo descriptivo. No se deben incluir repositorios, URLs privadas, credenciales, datos personales ni información interna.

## Imágenes Conceptuales

Las imágenes conceptuales autorizadas se almacenan como activos locales y optimizados. El bloque de conexiones del negocio usa `public/images/home/business-connections.webp`; la presentación NFC usa `public/images/projects/nfc/nfc-experience.webp`.

Las imágenes deben publicarse en WebP cuando sea viable, conservar proporción, no deformarse y no depender de URLs externas. Deben usarse con `<img>`, dimensiones explícitas, `decoding="async"` y texto alternativo descriptivo.

No se deben crear galerías, carruseles ni duplicar imágenes sin necesidad. Una imagen solo se muestra cuando ayuda a comprender el contenido y no aumenta el scroll de forma relevante.

Las ilustraciones conceptuales no deben presentarse como casos reales, productos activos, implementaciones comerciales, clientes confirmados ni resultados obtenidos.

## Perfiles Sin Fotografía

La página `/nosotros` usa un patrón compacto para perfiles sin fotografía. Mientras no existan fotos autorizadas, se permiten iniciales discretas como `VL` y `MS`, marcadas como decorativas cuando el nombre aparece junto al perfil.

No se deben usar fotos de stock, rostros generados, avatares humanos falsos ni espacios grandes reservados para imágenes futuras. La estructura debe permitir reemplazar las iniciales por fotos reales más adelante sin rediseñar toda la página.

La página Nosotros debe ser breve: encabezado, dos perfiles, razones de confianza, una frase de enfoque y un CTA final. No debe parecer un currículo académico, una página universitaria ni una agencia con equipo inventado.

El home no debe conservar mockups decorativos sin contenido cuando ya existe una imagen conceptual autorizada para la misma idea. Una sola imagen conceptual debe comunicar cada concepto para evitar duplicación, scroll extra y recuadros huérfanos.

## Arquitectura Multipágina

El sitio usa una arquitectura multipágina para evitar que el inicio se convierta en una landing extensa. El home debe resumir qué hace TinKode, qué necesidades atiende, qué experiencia respalda la propuesta y cómo iniciar contacto.

Las páginas internas concentran el detalle por tema: `/soluciones` explica qué puede construir TinKode, `/proceso` resume la forma de trabajo y `/proyectos` reúne proyectos, estados, autoría y privacidad. El contenido confirmado no se elimina, se reubica donde la lectura tenga más contexto.

Las secciones deben seguir una estructura uniforme: etiqueta opcional, título, introducción breve, contenido principal y CTA integrado. Evitar frases flotantes, notas aisladas o botones separados de su bloque.

En el home, los títulos deben mantenerse breves, las introducciones deben ocupar pocas líneas y los bloques descriptivos no deben superar una idea. En móvil, evitar secuencias largas de tarjetas, párrafos extensos y visuales altos. En escritorio, usar columnas para reducir altura sin convertir la página en dashboard.

Los CTAs deben vivir dentro del cierre o contenido de la sección a la que pertenecen. No se deben dejar frases decorativas antes o después de un CTA sin contenedor claro.

## Fondo Y Grid

El fondo global combina:

- Fondo oscuro principal.
- Grid tecnológico muy sutil mediante `linear-gradient`.
- Dos gradientes radiales discretos para profundidad.

No usa imágenes externas, canvas ni animaciones permanentes.

## Header Y Navegación

El header debe ser compacto, sticky y ligero. Usa fondo oscuro translúcido, borde inferior de baja opacidad y blur sutil. En escritorio muestra navegación horizontal y CTA; en móvil usa un botón de menú con `aria-expanded`, `aria-controls` y cierre al seleccionar enlaces.

La navegación no debe sentirse como barra de administración ni ocupar demasiado espacio vertical. Los enlaces internos deben apuntar a IDs existentes o preparados.

## Logo Oficial

El logo oficial original se conserva en `public/images/brand/tinkode-logo.png`. Para navegación se usa una versión optimizada del símbolo en `public/images/brand/tinkode-symbol.png`.

El logo debe mantener su proporción original, no deformarse, no recortarse y no usarse como fondo decorativo, marca de agua ni relleno visual. Tampoco debe repetirse en cada sección: solo debe aparecer donde aporte identidad real.

Tamaños aprobados: 48 px de alto en móvil y 54 px en escritorio. El header debe conservar una composición profesional, con mayor jerarquía de marca, sin brillo fuerte, sombras exageradas ni animaciones permanentes.

El enlace de marca debe tener un nombre accesible completo. Si el texto `TinKode` aparece junto al logo, el `alt` del logo puede quedar vacío para evitar redundancia.

El favicon actual se mantiene mientras no exista una versión específica aprobada para tamaños pequeños. No se debe rediseñar ni simplificar el logo automáticamente para favicon.

## Páginas Compactas Y Contacto

Las rutas principales son `/`, `/soluciones`, `/proceso`, `/proyectos` y `/nosotros`. Cada página debe concentrarse en un solo propósito y evitar mezclar secciones completas de otras rutas.

El home debe ser corto: hero, resumen de soluciones con una imagen conceptual, resumen de experiencia y CTA hacia Instagram. `/soluciones` debe explicar qué puede construir TinKode. `/proceso` debe explicar las cuatro etapas de trabajo. `/proyectos` debe demostrar experiencia y generar confianza. `/nosotros` debe presentar al equipo fundador con información confirmada.

Las páginas internas no deben convertirse en landing pages extensas. Como orientación, usar encabezado breve, contenido concreto y un CTA final. Evitar introducciones largas, tarjetas altas, frases flotantes, placeholders visibles y cierres sin acción.

El CTA comercial principal se centraliza en el Instagram oficial de TinKode. Los enlaces externos deben abrir en pestaña nueva con `target="_blank"` y `rel="noopener noreferrer"`.

## Hero

El hero debe aparecer pronto debajo de la navegación, especialmente en móvil. El mensaje y CTA mantienen prioridad visual. No debe incluir mockups decorativos vacíos ni interfaces simuladas que repitan la función de imágenes conceptuales reales.

No incluir métricas, números, textos técnicos falsos ni animaciones agresivas.

## Metadatos

Cada página debe tener `title` único y `meta description` breve mediante `BaseLayout`. El sitio mantiene `lang="es"`, viewport responsive y favicon local. No se deben agregar canonical, Open Graph con URL pública ni dominios inventados hasta confirmar la URL de lanzamiento.

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
