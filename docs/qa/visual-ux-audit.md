# Revisión visual y UX independiente

Fecha: 24 de octubre de 2026. Entorno local: `http://127.0.0.1:4321`.

Se leyeron `AGENTS.md`, `README.md`, contexto de marca, estado de contenido, sistema visual y roadmap. La revisión no modifica la implementación.

## Alcance y método

- Cinco rutas: `/`, `/soluciones`, `/proceso`, `/proyectos`, `/nosotros`.
- Chrome mediante Playwright, escritorios de 1440 × 900 y móviles de 390 × 844.
- Scroll previo para cargar imágenes lazy, espera de fuentes y capturas completas y de primera vista.
- Inspección visual de las capturas mediante `view_image`, incluyendo menú móvil, hero, capacidades y proyectos.
- Evidencia generada por `docs/qa/visual-audit.mjs`; métricas en `docs/qa/evidence/visual-audit-report.json`.

## Resultado final

No se observaron fallos bloqueantes de composición en las diez combinaciones. Todas conservan ancho de documento igual al viewport, sin elementos de contenido fuera del viewport, y todas las imágenes visibles terminaron de cargar.

| Ruta | Alto a 1440 px | Alto a 390 px |
| --- | ---: | ---: |
| Inicio | 5301 px | 7399 px |
| Soluciones | 2617 px | 3552 px |
| Proceso | 1693 px | 2018 px |
| Proyectos | 3023 px | 3177 px |
| Nosotros | 2075 px | 2716 px |

El hero presenta valor y contacto en la primera vista móvil; la ilustración queda en segundo plano. El escritorio equilibra texto y gráfico. Los CTAs tienen jerarquía clara y los planes muestran precios y acciones comparables. La navegación móvil mantiene enlaces separados, cierre visible y contacto integrado. Las internas mantienen una lectura más breve, contexto honesto para los proyectos e identidad coherente con Inicio.

## Hallazgos corregidos durante la revisión

1. Inicio móvil tenía 8926 px de altura. Las capacidades en composición horizontal, proyectos con miniatura y planes más compactos lo redujeron a 7399 px, aproximadamente un 17 %.
2. El contacto flotante con texto tapaba parte de la columna derecha en escritorio. La versión final usa un icono y queda fuera del contenedor de contenido a 1440 px.
3. Una regla de compactación trasladó accidentalmente el diagrama de las soluciones internas a una columna muy estrecha. La regla final se limita a las tarjetas de Inicio; `/soluciones` vuelve a mostrar diagramas completos, con altura móvil contenida. Se volvió a capturar y comprobar la corrección.

## Mejoras posteriores opcionales

- Hallazgo adicional corregido tras esta captura: los estados de proyecto pasaron de 9 px a 11 px; comunican si un trabajo está desarrollado, en pruebas o en desarrollo.
- Inicio sigue siendo la ruta más larga: unas 8,8 pantallas móviles. Si la prioridad futura es una portada especialmente breve, los resúmenes de proceso y equipo pueden reducirse a enlaces editoriales hacia sus rutas.
- El botón flotante móvil puede cruzar una línea de texto en determinados puntos del scroll. No bloquea la lectura continuada, pero conviene mantenerlo compacto y oculto junto a los cierres comerciales como ocurre actualmente.

El logo nuevo se integró después de esta revisión general y tiene una segunda verificación específica en `docs/qa/brand-audit.md`.
