# Rediseño de Proceso TinKode

## 1. Objetivo
Rediseñar `/proceso` para explicar cómo TinKode transforma una necesidad de negocio en una solución tecnológica mediante análisis, diseño, construcción, validación y mejora.

## 2. Estructura anterior
La versión anterior tenía un intro, una lista de cuatro pasos y un CTA. Era clara, pero demasiado breve y dependía casi por completo del texto.

## 3. Estructura nueva
La página queda organizada en siete bloques: hero, flujo principal, análisis previo, comunicación y validación, idea a sistema real, principios y CTA final.

## 4. Narrativa del proceso
La narrativa central es entender antes de construir. La tecnología se selecciona después de comprender el problema, el proceso, las personas y la información del negocio.

## 5. Etapas representadas
El flujo principal representa cuatro etapas: Entendemos, Diseñamos, Construimos y Evolucionamos. Cada una incluye número, icono, frase breve y recurso visual.

## 6. Componentes creados
Se crearon `ProcessHeroVisual`, `MainProcessTimeline`, `BusinessAnalysisDiagram`, `CollaborationFlow`, `IdeaToSystem`, `ProcessPrinciples` y `ProcessFinalCTA`.

## 7. Componentes reutilizados
La fase reutiliza `SectionBackground`, `Badge`, `Button`, `GlowIcon`, `VisualCard`, `SectionHeading`, `TechNode`, `ConnectionLine`, `Reveal` e `InlineIcon`.

## 8. Diagramas
El hero usa capas de pensamiento y construcción. El análisis usa un núcleo de comprensión del negocio. El CTA usa una línea de proceso compacta.

## 9. Iconografía
No se agregaron iconos nuevos. Se reutilizó el sistema lineal existente con iconos de mensaje, flujo, interfaz, software, automatización, usuarios, base de datos y validación.

## 10. Textos reducidos
Se eliminaron explicaciones largas y se reemplazaron por frases breves orientadas al negocio. La página evita metodologías genéricas, frameworks y lenguaje técnico innecesario.

## 11. Responsive
En escritorio el timeline usa progresión horizontal y variación vertical. En tablet reorganiza diagramas en dos columnas. En móvil usa secuencias verticales y botones cómodos.

## 12. Animaciones
Se mantienen reveals progresivos y pulsos sutiles en capas seleccionadas. El contenido sigue visible sin JavaScript y respeta `prefers-reduced-motion`.

## 13. Accesibilidad
La página conserva un solo `h1`, jerarquía clara, diagramas con descripciones accesibles, SVG decorativos ocultos cuando corresponde y texto que no depende solo del color.

## 14. Rendimiento
No se agregaron dependencias, imágenes, videos, canvas, WebGL ni frameworks. Los recursos visuales se construyen con Astro, HTML, CSS y SVG inline.

## 15. Diferencias frente a la versión anterior
La nueva página deja de ser una lista de etapas y se convierte en un recorrido visual compacto que demuestra pensamiento de negocio, producto e ingeniería.
