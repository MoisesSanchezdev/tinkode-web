# Rediseño de Soluciones TinKode

## 1. Alcance
El rediseño aplica exclusivamente a `/soluciones`. No modifica la estructura visual de Home, Proceso, Proyectos ni Nosotros.

## 2. Objetivo
Convertir la página en una narrativa premium sobre cómo TinKode detecta fricciones operativas y diseña tecnología alrededor de necesidades reales.

## 3. Problema de la versión anterior
La página funcionaba como una lista breve de servicios. Explicaba qué podía construir TinKode, pero no mostraba el razonamiento de negocio detrás de cada solución.

## 4. Narrativa
La secuencia queda definida como problema de negocio, consecuencia operativa, enfoque tecnológico y resultado cualitativo esperado.

## 5. Estructura
La página queda organizada en siete bloques principales: hero, problemas frecuentes, transformación problema-solución, ecosistema de capacidades, escenarios de negocio, preview de proceso y CTA final.

## 6. Hero
El hero comunica que la tecnología debe adaptarse al negocio. El visual representa operación fragmentada, método TinKode y sistema conectado mediante HTML, CSS y componentes visuales existentes.

## 7. Problemas Frecuentes
El bloque muestra seis fricciones operativas: procesos manuales, información dispersa, herramientas desconectadas, falta de control, comunicación lenta y tareas repetitivas.

## 8. Transformación
Cada bloque conecta problema, enfoque TinKode, posible solución y beneficio cualitativo. Las categorías son automatización, software personalizado, sistemas administrativos, experiencias digitales, integraciones y NFC.

## 9. Arquitectura
La arquitectura se presenta por capas: experiencias, operación e información. El centro es "Solución TinKode", sin estados falsos, métricas ni promesas cuantificadas.

## 10. Escenarios
Los escenarios son ejemplos adaptables para restaurantes, clínicas, gimnasios, tiendas, profesionales, pymes, eventos y espacios de entretenimiento. No se presentan como clientes actuales.

## 11. Proceso
El preview refuerza que TinKode no empieza eligiendo tecnología. La secuencia es entender problema, revisar proceso, diseñar solución, elegir tecnología, construir y mejorar.

## 12. CTA
El cierre usa una sola acción principal hacia Instagram: "Hablemos". El mensaje evita ofrecer más herramientas y enfoca la conversación en mejorar un proceso concreto.

## 13. Sistema Visual
Se mantiene la paleta premium de negro mate, blanco, grises, verde TinKode y azul eléctrico. No se agregan fondos de otros colores.

## 14. Iconografía
Se reutiliza `InlineIcon.astro` y se amplía con iconos lineales para control, comunicación, agenda, inventario, clientes, escenarios y APIs. Los iconos mantienen trazo simple y heredan color.

## 15. Validación
La fase requiere `npm run check`, `npm run build`, `git diff --check`, revisión HTTP de rutas principales y capturas visuales de `/soluciones` en desktop, tablet y móvil.
