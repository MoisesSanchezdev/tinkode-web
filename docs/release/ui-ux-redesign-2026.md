# Entrega del rediseño UI/UX · TinKode

24 de octubre de 2026. Preview: **http://localhost:4321/**.

## Resultado

Versión visual implementada y comprobada en las cinco rutas existentes: Inicio, Soluciones, Proceso, Proyectos y Nosotros. Se añade una página 404 propia. Se trabaja exclusivamente en `C:\Projects\tinkode-web`, fuera de OneDrive. No se hicieron commits, push ni cambios en producción.

Se conservan Astro estático, paleta original, URLs públicas, SEO, datos reales, precios y alcances. Todos los CTA comerciales usan `https://wa.me/qr/N7DH57UUDVPNI1?s=p`.

## Cambios

- Sistema de tokens, Inter variable local, tipografía fluida, superficies, botones, bordes y espaciado coherentes.
- Header compacto y menú móvil con dialog nativo, fondo inerte, Escape, foco restaurado y alternativa sin JavaScript.
- Hero con geometría modular CSS/SVG relacionada con la conexión del negocio; inclinación sutil solo con puntero preciso.
- Nuevos componentes `SystemVisual` y `CapabilityDiagram`. Rediseño de HomeHero, CapabilitiesOverview, SolutionsOverview, ProcessTimeline, ProjectsShowcase, BusinessPlans, FounderCards, PageHero, FinalCta, Header, Footer, FloatingContact e InlineIcon. Button hereda el sistema común.
- Proceso conectado y proyectos editoriales. Se muestran estados, autoría y rótulos conceptuales; no se inventan capturas, clientes ni resultados.
- Planes generales con precios y alcances preservados, detalle nativo desplegable y opción de solución a medida.
- GSAP + ScrollTrigger: entrada secuenciada, reveals breves, stagger, línea de proceso, progreso y tilt del hero. Carga condicional, cleanup y cambio dinámico de preferencia reducida.
- Sin Spline: no existe una escena propia apropiada; CSS/SVG logra la profundidad sin visor 3D, WebGL ni dependencias de React.
- Composición específica para móvil y tablet; Home móvil compactado un 17 % durante QA.

## Validación

- `npm run check`: cero errores, advertencias e indicaciones.
- `npm run build`: seis páginas estáticas compiladas.
- `git diff --check`: sin problemas de whitespace.
- Tres subagentes independientes cubrieron diseño/UX, responsive/performance y accesibilidad/funcionalidad. Se corrigieron overflow en proyectos a 768 px, diagramas estrechos, contacto oculto enfocable, superposición del contacto, objetivos táctiles y nombres accesibles.
- 45/45 escenarios responsive: cinco rutas × 320, 360, 390, 430, 768, 1024, 1280, 1440 y 1920 px. Sin desbordamientos, texto cortado, colisiones de header ni controles inferiores a 44 px.
- 12 vistas con axe: cero violaciones seleccionadas. 26/26 interacciones; 18 URLs/anclas verificadas. Cuatro regresiones adicionales del menú → Planes pasan en 390/768 px y movimiento normal/reducido.
- Rutas directas, 404, imágenes, fuentes, JSON-LD, canonical, Open Graph, keyboard, Escape, acordeones, menú y contenido sin JS comprobados. Cero errores JS registrados.
- Reduced motion: contenido inmediato, cero animaciones y sin descarga de GSAP.

| Ruta / perfil | Performance | Accesibilidad | Buenas prácticas | SEO | LCP | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Inicio móvil (logo final) | 99 | 100 | 100 | 100 | 1,96 s | 0 |
| Inicio escritorio (logo final) | 100 | 100 | 100 | 100 | 0,43 s | 0 |
| Soluciones móvil | 100 | 100 | 100 | 100 | 1,66 s | 0 |
| Proceso móvil | 100 | 100 | 100 | 100 | 1,66 s | 0 |
| Proyectos móvil | 100 | 100 | 100 | 100 | 1,73 s | 0 |
| Nosotros móvil | 100 | 100 | 100 | 100 | 1,66 s | 0 |

Mediciones de laboratorio locales con Lighthouse 13.5; no equivalen a métricas de usuarios en producción. Inicio se volvió a medir después del logo definitivo; las internas corresponden a la auditoría integral anterior. JS gzip total ≈45,2 KiB, CSS gzip final ≈8,8 KiB. Fuente local 48,3 KB. Imágenes locales con dimensiones y carga diferida.

## Identidad oficial actualizada

Nuevo logo completado tras recibir el archivo: JPEG original preservado, versión WebP de 20,3 KB y reemplazo de header, menú, footer, favicon SVG/PNG, icono Apple, OG/Twitter y JSON-LD. `BrandLogo.astro` centraliza el lockup completo y su proporción. El concepto NFC usa un nuevo diagrama nativo con el isotipo actualizado; las ilustraciones históricas anteriores ya no se muestran. No se alteran los colores de marca ni se deforma el logo.

Verificación adicional: 30 vistas en cinco rutas, siete assets HTTP 200, cero errores JS y comparación exacta de píxeles del PNG contra el recorte del JPEG original. Segunda auditoría independiente en 360/390/768/1440 px aprobada, incluido el ajuste de altura del NFC a 360 px. No quedan pendientes de branding.

## Pendientes y límites

1. **Dependencias previas:** npm audit informa 11 alertas (10 altas y una crítica) ya presentes en HEAD, del árbol Astro/Sharp. GSAP no introduce alertas. El sitio es estático y no procesa imágenes remotas no confiables. El posible mantenimiento a Astro 7.4.2 se documenta en la auditoría y requiere ajustar el mínimo de Node; se evitó mezclar 68 cambios de dependencias con el rediseño.
2. No están disponibles `taste-skill`, `ui-ux-pro-max` ni `impeccable`. Se realizó su revisión conceptual mediante inspección visual y auditoría independiente.
3. Se utiliza preview local: no hay credenciales de Cloudflare Pages configuradas para crear uno remoto. Producción no fue reemplazada.
4. No se probaron conversaciones comerciales reales ni una sesión completa con lector de pantalla. Los enlaces y la semántica se verificaron sin enviar mensajes.

## Evidencia

- [Diseño/UX](../qa/visual-ux-audit.md)
- [Responsive/performance](../qa/responsive-performance-audit.md)
- [Accesibilidad/funcionalidad](../qa/accessibility-functional-audit.md)
- [Identidad oficial y logo](../qa/brand-audit.md)
- Capturas finales: `docs/qa/evidence/audit-{ruta}-{390|1440}.png`.
- Reportes Lighthouse: `docs/qa/lighthouse-*.report.html`.
- Sistema y auditoría inicial: [redesign-2026.md](../design/redesign-2026.md).

El servidor de revisión permanece activo. Para reiniciarlo: `npm run dev -- --host 127.0.0.1 --port 4321`.
