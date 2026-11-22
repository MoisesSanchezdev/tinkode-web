# Auditoría final de accesibilidad y funcionalidad

Fecha: 24 de octubre de 2026. Entorno: sitio local `http://127.0.0.1:4321`, Chrome headless mediante Playwright, axe-core 4.10.3. No se modificó implementación desde esta auditoría.

## Resultado verificado

- 12 vistas auditadas: `/`, `/soluciones`, `/proceso`, `/proyectos`, `/nosotros` y una ruta inexistente, a 1440 × 900 y 390 × 844.
- Cinco rutas responden HTTP 200; la ruta inexistente responde HTTP 404 y muestra la página de recuperación propia.
- Cero violaciones axe en las categorías WCAG A/AA, WCAG 2.1/2.2 y buenas prácticas seleccionadas. Se habilitó también `label-content-name-mismatch`.
- 26 de 26 pruebas de interacción completadas: apertura/cierre del menú, navegación, Tab/Shift+Tab, Escape, devolución del foco, cierre mediante backdrop, cierre al cambiar a escritorio, tres acordeones, skip link e inercia del contacto oculto.
- 18 URLs y anclas internas únicas resuelven. Sus IDs existen y no quedan ocultos bajo el encabezado.
- Todos los enlaces WhatsApp usan exactamente `https://wa.me/qr/N7DH57UUDVPNI1?s=p`, con pestaña nueva y protección `noopener noreferrer`.
- Un h1 por página, idioma español, títulos y descriptions por ruta, canonical y Open Graph presentes; JSON-LD válido y sin IDs repetidos.
- No hubo errores JavaScript ni desbordamiento horizontal en las vistas verificadas.

## Teclado y menú modal

El diálogo nativo mantiene inerte el contenido de fondo: no se puede enfocar un enlace de `main` mientras está abierto. Tab y Shift+Tab recorren sus controles; Chrome permite también visitar la interfaz del propio navegador, sin enfocar controles de fondo del documento. Escape y botón de cierre devuelven foco al disparador y actualizan `aria-expanded`.

La comprobación del diálogo abierto también produjo cero violaciones axe.

## Movimiento

Con `prefers-reduced-motion: reduce`, las cinco rutas mantienen contenido visible, cero animaciones activas, desplazamiento inmediato y barra de progreso oculta. Los recursos GSAP no se cargan en ese modo. Cambiar la preferencia durante la sesión revierte las transformaciones de revelado y el movimiento del diagrama.

El recorrido con movimiento normal por las cinco rutas no generó errores ni dejó contenido oculto.

## JavaScript desactivado

Diez vistas revisadas: las cinco rutas a ambos tamaños. El contenido y WhatsApp permanecen disponibles. El encabezado ofrece navegación alternativa mediante `noscript`, el disparador inoperante queda oculto y el acordeón nativo sigue funcionando.

## Regresión de navegación a Planes resuelta

La auditoría detectó que la devolución de foco al cerrar el diálogo alteraba la alineación de `#planes-negocios`. Se corrigió en la implementación mediante `toggle.focus({ preventScroll: true })`.

La regresión pasa en cuatro casos: anchos de 390 y 768 px, con movimiento normal y reducido. Elegir Planes desde el menú coloca la sección exactamente en la misma posición que navegar directamente al fragmento: aproximadamente 224 px desde la parte superior, fuera del encabezado sticky. El fragmento es correcto y el diálogo se cierra. No quedan fallos funcionales pendientes identificados por esta auditoría.

El logotipo nuevo queda fuera del alcance de esta auditoría porque aún requiere el recurso del usuario.

## Evidencia y reproducción

- `docs/qa/accessibility-functional-audit.mjs`: barrido de rutas, axe, teclado, enlaces, metadatos, movimiento reducido y ausencia de JavaScript.
- `docs/qa/motion-dialog-supplement.mjs`: movimiento normal, cambio de preferencia, bloqueo del fondo y navegación desde el modal a Planes.
- `docs/qa/menu-anchor-regression.mjs`: cuatro variantes de la navegación móvil a Planes después de corregir la restauración de foco.
- `docs/qa/evidence/accessibility-functional-report.json`: resultados detallados.
- `docs/qa/evidence/motion-dialog-supplement.json`: comprobaciones suplementarias.
- `docs/qa/evidence/menu-anchor-regression.json`: resultado final de la regresión de Planes, cuatro de cuatro casos correctos.
- `docs/qa/evidence/audit-*-desktop.png`, `audit-*-mobile.png` y `audit-no-js-mobile.png`: capturas del barrido.

La auditoría automatizada y de teclado no sustituye una prueba completa con lectores de pantalla ni verifica entregas reales de conversaciones WhatsApp.
