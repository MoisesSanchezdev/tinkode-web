# Segunda revisión de identidad visual

Fecha: 24 de octubre de 2026. Revisión independiente en Chrome local, sin modificar la implementación.

Se inspeccionaron el original suministrado, el logo optimizado, el favicon de 32 px, el Apple Touch Icon y la imagen OG de 1200 × 630 px. Se capturaron y revisaron con `view_image` el header, menú, footer y visual NFC a 360, 390, 768 y 1440 px. Script: `docs/qa/brand-audit.mjs`. Evidencia: `docs/qa/evidence/brand-audit-*`.

Resultado: sin fallos pendientes de branding ni desbordamiento horizontal en las ocho combinaciones de Inicio y Proyectos. Los logos cargan, mantienen la proporción original 910:550 y conservan el símbolo y el nombre completos. El ancho de 94 px en móvil y 110 px en escritorio permite identificar la marca; el footer usa 130 y 140 px. El fondo negro continuo de header, diálogo y footer integra el fondo original del archivo sin parches visibles. El nombre accesible del enlace de inicio se conserva.

El favicon y el Apple Touch Icon utilizan el isotipo nuevo reconocible, con contraste suficiente sobre negro. La imagen OG mantiene la marca completa y una jerarquía legible del mensaje. Esta verificación corresponde a los archivos y referencias locales; no certifica una publicación remota.

El visual NFC usa el isotipo nuevo y conserva la etiqueta «Ilustración conceptual». Se detectó un pequeño recorte del teléfono a 360 px. Tras aumentar a 260 px la altura mínima del visual detallado bajo 640 px, se recapturó: el borde del teléfono queda completo y con separación arriba y abajo tanto a 360 como a 390 px. La variante pequeña del Inicio mantiene el símbolo sin comprimirlo.

No se encontraron sustituciones de la marca antigua en las superficies inspeccionadas. El archivo original permanece preservado en `public/images/brand/tinkode-logo-original.jpg`.
