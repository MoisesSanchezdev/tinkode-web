# Rediseño de Proyectos TinKode

## 1. Objetivo
Rediseñar `/proyectos` para presentar proyectos reales como casos de ingeniería, diseño y solución de problemas, sin convertir la página en una galería genérica.

## 2. Estructura anterior
La versión anterior tenía un intro, un listado de proyectos y un cierre. Comunicaba honestidad, pero no mostraba suficientemente el razonamiento detrás de cada caso.

## 3. Estructura nueva
La página queda organizada en siete bloques: hero, Robot Explota Globos, LPT, NFC Smart Experience, capacidades demostradas, stack tecnológico y CTA final.

## 4. Proyectos incluidos
Solo se incluyen Robot Explota Globos UTP, LPT y NFC Smart Experience.

## 5. Información verificada por proyecto
Robot Explota Globos se presenta como sistema universitario de gestión de competencia en preparación y pruebas para torneo. LPT se presenta como experiencia web corporativa previa a TinKode con código privado. NFC Smart Experience se presenta como concepto tecnológico en desarrollo.

## 6. Información que se evitó inventar
No se inventaron clientes, métricas, fechas de lanzamiento, resultados comerciales, repositorios públicos, enlaces privados, tráfico, conversiones ni implementaciones comerciales no confirmadas.

## 7. Componentes creados
Se crearon `ProjectsHeroVisual`, `FeaturedProjectCase`, `CompetitionSystemMockup`, `CorporateWebsiteMockup`, `NfcExperienceVisual`, `ProjectCapabilityGrid`, `TechnologyStack` y `ProjectsFinalCTA`.

## 8. Componentes reutilizados
La fase reutiliza `SectionBackground`, `Badge`, `Button`, `GlowIcon`, `VisualCard`, `SectionHeading`, `TechNode`, `ConnectionLine`, `Reveal` e `InlineIcon`.

## 9. Mockups conceptuales
Robot usa un mockup conceptual de administración de competencia. LPT usa una composición de navegador corporativo. NFC usa un flujo de objeto físico a experiencia digital.

## 10. Capacidades representadas
La página resume análisis de problemas, modelado de procesos, arquitectura de información, frontend, backend, automatización, integración físico-digital y documentación técnica.

## 11. Stack mostrado
El stack se organiza por Frontend, Backend y Herramientas. Se aclara que las tecnologías se seleccionan según cada solución y no todas aplican a todos los proyectos.

## 12. Iconografía
No se agregaron iconos nuevos. Se reutilizó el sistema lineal existente para mantener consistencia visual.

## 13. Textos reducidos
Los textos se reorganizaron en contexto, problema, solución, capacidades y estado. Se eliminaron frases promocionales amplias y detalles no verificables.

## 14. Responsive
En escritorio se usan composiciones amplias y alternadas. En tablet se reorganizan los casos en dos columnas. En móvil los mockups se simplifican y las etiquetas hacen wrapping.

## 15. Animaciones
Se usan reveals progresivos, hover moderado y pulsos sutiles. El contenido sigue siendo comprensible sin JavaScript y respeta `prefers-reduced-motion`.

## 16. Accesibilidad
La página conserva un solo `h1`, jerarquía correcta, CTAs claros, diagramas con descripciones accesibles y mockups conceptuales sin depender solo del color.

## 17. Rendimiento
No se agregaron dependencias, imágenes nuevas, videos, canvas, WebGL ni frameworks. Los recursos visuales están construidos con Astro, HTML, CSS y SVG inline.

## 18. Diferencias frente a la versión anterior
La nueva versión deja de ser un listado de proyectos y pasa a presentar casos editoriales con problema, enfoque, solución, capacidades, estado y stack.
