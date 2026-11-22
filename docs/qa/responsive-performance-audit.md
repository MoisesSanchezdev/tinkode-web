# Auditoría final responsive y rendimiento

Fecha: 24 de octubre de 2026. Repositorio: `C:\Projects\tinkode-web`.

> Actualización tras incorporar el logo definitivo: se repitió Lighthouse de Inicio. Móvil: 99/100/100/100, LCP 1,96 s, CLS 0. Escritorio: 100/100/100/100, LCP 0,43 s, CLS 0. Los reportes Home y `lighthouse-summary.json` contienen estas mediciones más recientes. El barrido integral descrito abajo corresponde al rediseño anterior a ese ajuste de identidad; la comprobación adicional está en [brand-audit.md](brand-audit.md).

## Resultado

La compilación estática final supera las 45 combinaciones responsive verificadas. No se detectaron desbordamientos horizontales, texto recortado, colisiones entre los elementos del header, controles visibles menores de 44 px ni errores de JavaScript. Las seis mediciones finales de Lighthouse obtuvieron **100 en rendimiento, accesibilidad, buenas prácticas y SEO**.

La auditoría no modificó la implementación, las dependencias ni el lockfile. Los problemas encontrados en la primera pasada se remitieron al responsable del rediseño y se verificaron después de sus correcciones.

## Método y alcance

- Chrome 155 en Windows, Playwright y Lighthouse 13.5.0.
- Compilación de producción servida mediante Astro Preview en `http://127.0.0.1:4325`, sin reemplazar el servidor de desarrollo en el puerto 4321.
- Cinco rutas: `/`, `/soluciones`, `/proceso`, `/proyectos`, `/nosotros`.
- Nueve anchos CSS por ruta: 320, 360, 390, 430, 768, 1024, 1280, 1440 y 1920 px; viewport de 900 px de alto.
- Se midieron límites del documento y sus elementos, recortes de texto dentro de contenedores, tamaños de controles y colisiones del header.
- En los 25 escenarios con menú móvil se comprobaron apertura modal, `aria-expanded`, bloqueo del scroll, cierre con Escape y restauración del foco.
- Se comprobó el cambio dinámico a movimiento reducido y la visibilidad del contenido con JavaScript deshabilitado.
- Las capturas canónicas y la revisión visual están en [visual-ux-audit.md](visual-ux-audit.md) y `evidence/`.

La matriz usa movimiento reducido para medir posiciones estables. Lighthouse ejecuta la experiencia normal con JavaScript y movimiento habilitados. Son mediciones locales de laboratorio: no representan datos de usuarios reales ni garantizan el rendimiento de una futura infraestructura pública.

## Matriz responsive final

| Ruta | 320 | 360 | 390 | 430 | 768 | 1024 | 1280 | 1440 | 1920 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Inicio | Pasa | Pasa | Pasa | Pasa | Pasa | Pasa | Pasa | Pasa | Pasa |
| Soluciones | Pasa | Pasa | Pasa | Pasa | Pasa | Pasa | Pasa | Pasa | Pasa |
| Proceso | Pasa | Pasa | Pasa | Pasa | Pasa | Pasa | Pasa | Pasa | Pasa |
| Proyectos | Pasa | Pasa | Pasa | Pasa | Pasa | Pasa | Pasa | Pasa | Pasa |
| Nosotros | Pasa | Pasa | Pasa | Pasa | Pasa | Pasa | Pasa | Pasa | Pasa |

Datos completos: [responsive-matrix.json](responsive-matrix.json). Script de comprobación: [responsive-performance-audit.mjs](responsive-performance-audit.mjs).

### Hallazgos corregidos y revalidados

| Hallazgo inicial | Corrección verificada | Resultado final |
| --- | --- | --- |
| `/proyectos` a 768 px: visual de LPT llegaba a x=816,98 y producía un documento de 817 px. | El visual puede contraerse con `min-width: 0` y ancho limitado por su columna. | Documento de 768 px; sin elementos fuera de pantalla. |
| Inicio a 320 px: la palabra «Automatización» de la banda del hero llegaba a x=337,59 y se recortaba. | La banda admite salto de línea en pantallas muy pequeñas. | Texto completo y documento de 320 px. |
| Enlaces «Planes» del header/footer: ancho de 37–38 px. | Ancho interactivo mínimo de 44 px. | Ningún control visible por debajo de 44 × 44 px en la matriz. |
| Los CTA de planes tenían texto visible «Elegir…» y nombre accesible «Consultar…». | El nombre accesible incorpora el texto visible. | `label-content-name-mismatch` pasa en Lighthouse final. |

La [matriz previa](responsive-matrix-before-final-fixes.json) conserva las mediciones originales como trazabilidad de las correcciones.

## Lighthouse final

Configuración móvil estándar de Lighthouse: 412 × 823 px, DPR 1,75, red simulada con RTT 150 ms y CPU ×4. Escritorio usa el preset oficial de escritorio. Las ejecuciones finales fueron secuenciales para reducir interferencia entre mediciones.

| Página / perfil | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | CLS | TBT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Inicio móvil | 100 | 100 | 100 | 100 | 1,803 s | 0 | 10 ms |
| Inicio escritorio | 100 | 100 | 100 | 100 | 0,393 s | 0,003 | 0 ms |
| Soluciones móvil | 100 | 100 | 100 | 100 | 1,655 s | 0 | 0 ms |
| Proceso móvil | 100 | 100 | 100 | 100 | 1,655 s | 0 | 0 ms |
| Proyectos móvil | 100 | 100 | 100 | 100 | 1,730 s | 0 | 0 ms |
| Nosotros móvil | 100 | 100 | 100 | 100 | 1,657 s | 0 | 0 ms |

Los reportes finales tienen `runtimeError` ausente. [Resumen JSON](lighthouse-summary.json), [Inicio móvil HTML](lighthouse-home-mobile.report.html), [Inicio escritorio HTML](lighthouse-home-desktop.report.html), [Soluciones HTML](lighthouse-soluciones-mobile.report.html), [Proceso HTML](lighthouse-proceso-mobile.report.html), [Proyectos HTML](lighthouse-proyectos-mobile.report.html), [Nosotros HTML](lighthouse-nosotros-mobile.report.html).

La primera ejecución por CLI generó reportes completos, pero Windows rechazó la limpieza del perfil temporal de Chrome con `EPERM`. Se sustituyeron esos reportes por una nueva pasada programática que reutiliza Chrome lanzado por Playwright y finalizó con código 0. El script está en [lighthouse-audit.mjs](lighthouse-audit.mjs). Lighthouse se obtuvo de la caché transitoria de npm; no se añadió como dependencia del proyecto.

Un resultado automático de 100 en accesibilidad no reemplaza la revisión manual de teclado, semántica y contraste documentada en la auditoría funcional.

## Presupuesto de recursos

Valores del `dist` final; gzip calculado sobre los archivos generados, sin cabeceras HTTP.

| Recurso | Sin comprimir | Gzip |
| --- | --- | --- |
| Código de navegación, contacto y arranque de movimiento | 3.654 B | 1.651 B |
| GSAP, carga dinámica | 69.941 B | 27.181 B |
| ScrollTrigger, carga dinámica | 42.754 B | 17.425 B |
| **JavaScript total con movimiento** | **116.349 B** | **46.257 B ≈ 45,2 KiB** |
| CSS global combinado | 40.454 B | 8.698 B ≈ 8,5 KiB |
| Inter variable local WOFF2 | 48.256 B | 48.254 B |
| Símbolo actual de marca PNG, 192 × 192 | 13.924 B | 13.947 B |
| Ilustración conceptual NFC WebP, carga diferida | 38.032 B | 38.065 B |

El logo original de 819.376 B y la imagen anterior de conexiones de 45.446 B permanecen como activos locales, pero no se solicitan en la carga inicial auditada. La imagen Open Graph de 56.814 B es metadato para enlaces compartidos. No hay solicitudes a fuentes, imágenes o scripts de terceros en la carga inicial.

La fuente tiene `font-display: swap` y preload local. Las imágenes conservan dimensiones explícitas. La ilustración NFC se carga de forma diferida. El logo usado en navegación se muestra a 40 px; una futura variante del activo aprobado a 40/80 px o en WebP podría ahorrar aproximadamente 13 KiB según Lighthouse. Es una optimización menor y no condiciona el resultado actual.

## Movimiento y degradación

- Con `prefers-reduced-motion: reduce`: cero animaciones activas, desplazamiento nativo sin suavizado, progreso de scroll oculto y escena sin transformaciones.
- GSAP y ScrollTrigger se importan solo cuando el usuario permite movimiento; el arranque ligero mantiene los controles y navegación.
- El contenido está visible desde el HTML estático y permanece visible sin JavaScript.
- El menú móvil se oculta cuando no hay JavaScript; los enlaces de navegación del footer siguen disponibles. Los CTA son enlaces HTML.
- El proceso reevalúa la orientación al cruzar 760 px mediante `gsap.matchMedia`; los efectos de puntero se limitan a equipos con hover y puntero preciso.

## Dependencias: alertas preexistentes

`npm audit` detectó **11 paquetes afectados: 1 crítico y 10 altos**. Los once ya estaban en el lockfile de `HEAD` con exactamente las mismas versiones. El único paquete añadido por el rediseño es GSAP 3.15.0, sin dependencias transitivas propias ni alerta en este reporte.

Prueba comparativa: [npm-audit-preexisting-proof.json](npm-audit-preexisting-proof.json). Reporte completo con enlaces y rangos: [npm-audit.json](npm-audit.json).

| Paquete | Versión preexistente y actual | Severidad |
| --- | --- | --- |
| astro | 7.1.1 | Crítica |
| devalue | 5.8.1 | Alta |
| fast-uri | 3.1.5 | Alta |
| http-cache-semantics | 4.2.0 | Alta |
| js-yaml | 4.3.1 | Alta |
| sharp | 0.35.3 | Alta |
| smol-toml | 1.7.0 | Alta |
| source-map-js | 1.2.1 | Alta |
| svgo | 4.0.2 | Alta |
| vite | 8.1.5 | Alta |
| zod | 4.4.3 | Alta |

La alerta crítica de Astro afecta el procesamiento de AVIF no confiable mediante Sharp. El [aviso oficial GHSA-26w7-cxv4-gfx2](https://github.com/advisories/GHSA-26w7-cxv4-gfx2) indica la corrección en Astro 7.2.8 y Sharp 0.35.4. El sitio auditado exporta HTML estático, no configura adaptador SSR ni endpoint de optimización en producción y utiliza activos locales PNG/WebP; esa ruta de explotación no aparece expuesta en la salida auditada. Las alertas siguen requiriendo mantenimiento del entorno de construcción y desarrollo, especialmente antes de procesar contenido no confiable o cambiar a SSR.

La simulación `npm audit fix --dry-run` propone Astro **7.4.2**, Sharp **0.35.5** y actualizaciones transitivas: 5 incorporaciones, 68 cambios y 15 eliminaciones en el árbol. Astro 7.4.2 está dentro del rango existente `^7.1.1`, pero exige Node **>=22.23.4**; el entorno actual Node 24.16.0 cumple, mientras `engines` y README todavía declaran >=22.12.0. La actualización futura debe alinear esa exigencia y ejecutar `check`, `build` y una pasada de regresión. No se aplicó porque supone un cambio amplio del árbol de dependencias separado del rediseño UI.

Evidencia de la simulación: [salida completa](npm-audit-fix-dry-run.txt) y [JSON](npm-audit-fix-dry-run.json). El reporte interno de la simulación conserva las alertas del árbol instalado: no se presenta como una prueba de remediación.

## Reproducción local

Con el build final y Astro Preview en el puerto 4325:

```powershell
node docs/qa/responsive-performance-audit.mjs
node docs/qa/lighthouse-audit.mjs
npm audit --json
```

Los scripts de auditoría usan las rutas locales del runtime de Playwright y de la caché temporal de Lighthouse presentes en esta máquina. No son parte del código servido al navegador. Si esa caché desaparece, debe volver a resolverse la herramienta antes de repetir la medición.
