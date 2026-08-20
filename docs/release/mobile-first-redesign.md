# Rediseño mobile-first de TinKode

Fecha de auditoría e implementación: 20 de agosto de 2026.

## Estado inicial

- Ruta autorizada: `C:\Projects\tinkode-web`.
- Rama inicial: `main`.
- Commit inicial: `2b9dbb08f6238bc6afe43114df52100257bc1447`.
- Estado de Git: limpio, sin merge, rebase, cherry-pick ni commits locales pendientes.
- Remoto: `origin` → `https://github.com/MoisesSanchezdev/tinkode-web.git`.
- Sincronización inicial: `main` estaba `+0 / -0` respecto a `origin/main`.
- Node.js: `v24.16.0`.
- npm: `11.13.0`.
- Astro: `7.1.1`.
- Despliegue documentado: Cloudflare Pages en `https://tinkode-web.pages.dev`, sin Wrangler, workflow local ni script de despliegue. El flujo esperado es GitHub → Cloudflare Pages.
- Validación inicial: `npm ci`, `npm run check`, `npm run build` y `git diff --check` terminaron correctamente.

## Referencia visual

Se auditó `https://pixelee.co/landing/desarrollo-de-pagina-web/` en 1440 × 900 y 390 × 844. Se conservaron como referencia de recorrido el header flotante, hero dividido, beneficios inmediatos, diagnóstico, soluciones, confianza, proceso, FAQ y cierre. No se copiaron textos, recursos, métricas, testimonios, precios ni componentes.

La reinterpretación reduce la saturación azul de la referencia, incorpora el negro, verde y azul oficiales de TinKode y centra el mensaje en operación, automatización, organización de datos y crecimiento.

## Restricciones de contenido respetadas

- El único canal comercial confirmado es Instagram.
- No se publicó un número o enlace de WhatsApp porque sigue pendiente de confirmación.
- No se usaron fotografías de fundadores porque no existen fotografías autorizadas en el repositorio.
- Se conservaron iniciales para Moisés Sánchez Naranjo y Valeria López Chávez.
- Solo se muestran LPT, Robot Explota Globos UTP y Experiencias NFC, con estados y notas verificables.
- No se añadieron clientes, métricas, testimonios, certificaciones, tiempos de entrega, precios ni resultados inventados.
- No se añadieron enlaces legales porque no existen páginas legales confirmadas.

## Implementación

- Home comercial completo con hero, beneficios, problemas, soluciones, proyectos, proceso, fundadores, FAQ y CTA final.
- Header flotante con navegación activa, panel móvil, bloqueo de scroll, cierre por botón, enlace, fondo o Escape, trampa de foco y restauración del foco.
- Sistema mobile-first separado en `src/styles/redesign.css` para preservar el sistema previo y facilitar la revisión.
- Tarjetas de solución con problema, beneficio y tipo de solución.
- Proyectos con situación, solución, evidencia honesta, capacidades y visuales propios.
- FAQ progresivo: el contenido sigue disponible sin JavaScript; con JavaScript usa botones y `aria-expanded`.
- Contacto flotante de Instagram con área segura; se oculta en vistas móviles de altura reducida para no interferir con el teclado.
- Metadatos únicos, canonical, Open Graph, Twitter Cards y JSON-LD para `Organization`, `WebSite`, `Service` y `Person`.
- Footer responsive con navegación, soluciones, proyectos y contacto real.
- Dependencias transitivas de seguridad actualizadas en el lockfile. `npm audit --omit=dev` final: 0 vulnerabilidades.

## Matriz responsive

Se recorrieron las cinco rutas en 16 viewports, para un total de 80 comprobaciones automatizadas de layout:

- 320 × 568
- 360 × 800
- 375 × 667
- 390 × 844
- 412 × 915
- 430 × 932
- 768 × 1024
- 820 × 1180
- 1024 × 1366
- 1024 × 768
- 1280 × 720
- 1366 × 768
- 1440 × 900
- 1920 × 1080
- 844 × 390
- 932 × 430

Resultado: 80 de 80 comprobaciones sin overflow horizontal, elementos fuera del viewport, controles visibles menores a 44 × 44 px ni más de un H1 por ruta.

También se verificaron:

- menú móvil abierto y cierre con Escape;
- restauración de foco al botón del menú;
- bloqueo y restauración del scroll del fondo;
- navegación activa por ruta;
- acordeones abiertos y cerrados;
- CTA principal y secundario;
- imágenes y activos con HTTP 200;
- consola sin errores ni advertencias;
- header, footer y contacto flotante;
- soporte CSS para `prefers-reduced-motion`;
- maquetación equivalente a zoom 200 % mediante viewports de ancho efectivo reducido.

## Lighthouse local

Auditoría sobre el preview de producción con Lighthouse 13.4.1:

| Ruta | Perfil | Performance | Accesibilidad | Buenas prácticas | SEO | LCP | CLS | TBT |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | Móvil | 100 | 100 | 100 | 100 | 1,06 s | 0 | 3 ms |
| `/soluciones` | Móvil | 100 | 100 | 100 | 100 | 1,06 s | 0 | 0 ms |
| `/proceso` | Móvil | 100 | 100 | 100 | 100 | 1,06 s | 0 | 0 ms |
| `/proyectos` | Móvil | 100 | 100 | 100 | 100 | 1,06 s | 0 | 0 ms |
| `/nosotros` | Móvil | 100 | 100 | 100 | 100 | 1,06 s | 0 | 0 ms |
| `/` | Escritorio | 100 | 100 | 100 | 100 | 268 ms | 0 | 54 ms |

## Evidencia visual

- `docs/qa/evidence/home-mobile-390x844.png`
- `docs/qa/evidence/home-desktop-1440x900.png`

## Verificación pública

- GitHub recibió los commits de implementación y QA en `main`.
- Cloudflare Pages completó correctamente el despliegue `21b4b7d9-ba95-4692-8c93-d8d62ce356df` asociado al código validado.
- Se comprobó `https://tinkode-web.pages.dev` en 390 × 844 y 1440 × 900.
- Las rutas `/`, `/soluciones`, `/proceso`, `/proyectos` y `/nosotros` sirven el nuevo contenido con HTTP 200.
- Las cinco rutas públicas conservan un H1, navegación activa, JSON-LD, header, footer, contacto flotante y cero overflow horizontal.
- La consola pública no registró errores ni advertencias.
- `robots.txt`, `sitemap.xml`, `favicon.svg` y `og.png` responden con HTTP 200.

## Pendientes de contenido

WhatsApp comercial, fotografías autorizadas, contenido legal y dominio personalizado siguen pendientes de información o autorización real.
