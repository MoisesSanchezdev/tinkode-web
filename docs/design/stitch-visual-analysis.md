# Analisis visual de referencias Stitch

## Estado del material recibido

En esta fase no se encontro un archivo ZIP de Stitch disponible en los adjuntos recibidos ni dentro de `C:\Projects\tinkode-web`. El unico adjunto accesible fue el texto de solicitud de la fase.

Este documento registra el analisis accionable a partir de las pautas visuales descritas en la solicitud y deja pendiente una segunda revision cuando el ZIP este disponible. No se inventan pantallas, metricas, clientes, textos ni evidencias visuales no verificadas.

## 1. Resumen de las propuestas

La direccion visual solicitada apunta a una presencia tecnologica premium: fondos oscuros, reticulas tecnicas sutiles, tarjetas con profundidad moderada, diagramas de nodos, conectores, ecosistemas tecnologicos y recursos visuales que reduzcan texto sin convertir el sitio en una aplicacion ficticia.

El enfoque recomendado es reinterpretar esas ideas como sistema reusable dentro de Astro: componentes base, tokens CSS, fondos controlados, nodos diagramaticos y tarjetas sobrias.

## 2. Elementos visuales aprovechables

- Reticulas tecnicas de baja opacidad para profundidad.
- Brillos radiales verdes y azules usados por seccion, no como decoracion permanente.
- Tarjetas oscuras con borde sutil, iluminacion interior y hover discreto.
- Nodos tecnologicos para representar informacion, automatizaciones, integraciones y procesos.
- Lineas de conexion ligeras para diagramas futuros.
- Jerarquia editorial clara: eyebrow, titulo, descripcion, contenido y CTA.
- Composiciones de dos columnas en escritorio para evitar paginas largas y repetitivas.
- Iconografia lineal simple, con grosor consistente y acentos de marca.

## 3. Elementos que no deben copiarse

- Codigo generado por Stitch sin adaptarlo a la arquitectura Astro existente.
- Dashboards, metricas, clientes, testimonios o pantallas de producto inventadas.
- Interfaces que parezcan aplicaciones internas ficticias sin contenido real.
- Efectos neon dominantes o saturacion visual tipo gamer.
- Fondos con cyan intenso, gradientes multicolor o colores fuera de marca.
- Animaciones pesadas, particulas, canvas, WebGL o videos de fondo.
- Iconos 3D, emojis o estilos mezclados.
- Componentes visualmente complejos que dependan de JavaScript para entender el contenido.

## 4. Adaptacion propuesta para escritorio

En escritorio, el sistema debe aprovechar el ancho horizontal con secciones de dos columnas, diagramas mas amplios y tarjetas alineadas en reticulas controladas. Los fondos pueden usar reticulas y luces radiales mas extensas, siempre detras del contenido y con contraste suficiente.

Los diagramas futuros deberian usar `TechNode` y `ConnectionLine` para representar relaciones entre negocio, informacion, automatizacion, sistemas e integraciones. Las tarjetas deben conservar una lectura editorial y evitar apariencia de tablero administrativo.

## 5. Adaptacion propuesta para movil

En movil, los diagramas deben reorganizarse en flujos verticales, con nodos apilados y conectores cortos. Los fondos deben perder protagonismo para priorizar lectura. Las tarjetas necesitan padding suficiente, botones de al menos 44 px de alto y textos sin desbordamiento.

No se debe ocultar informacion esencial ni depender de hover. Las animaciones deben ser progresivas y el contenido debe estar visible aunque JavaScript no cargue.

## 6. Componentes reutilizables recomendados

- `SectionBackground`: fondos tecnicos con variantes `grid`, `glow-green`, `glow-blue`, `mixed` y `none`.
- `GlowIcon`: contenedor consistente para iconos verdes o azules.
- `VisualCard`: tarjeta premium para futuras composiciones visuales.
- `SectionHeading`: encabezado reusable con eyebrow, titulo, descripcion y alineacion.
- `TechNode`: nodo reusable para diagramas de procesos, integraciones o ecosistemas.
- `ConnectionLine`: conector CSS ligero para nodos.
- `Reveal`: aparicion progresiva con soporte para `prefers-reduced-motion`.

## 7. Riesgos de rendimiento

- Usar imagenes grandes de mockups sin optimizar puede aumentar el peso inicial.
- Multiplicar sombras, filtros y blurs en muchas tarjetas puede afectar equipos de gama baja.
- Animaciones constantes sobre muchos nodos pueden generar consumo innecesario.
- Copiar componentes generados con dependencias externas puede romper la simplicidad del sitio Astro.
- Videos, canvas o WebGL no son necesarios para esta identidad y aumentarian el costo de mantenimiento.

## 8. Riesgos de accesibilidad

- Bajo contraste si los brillos o reticulas quedan sobre texto.
- Informacion comunicada solo por color verde o azul.
- Iconos sin texto accesible cuando tienen significado.
- Animaciones de entrada que oculten contenido si JavaScript falla.
- Tarjetas con exceso de densidad visual en movil.
- Focus poco visible sobre superficies oscuras.

## 9. Plan de implementacion por fases

1. Base visual reusable: tokens, fondos, tarjetas, nodos, conectores, heading e iconografia sobria.
2. Home premium: reconstruir hero, resumen de soluciones, visual de ecosistema y CTA sin inventar datos.
3. Soluciones: convertir categorias en composiciones visuales con nodos, capacidades y beneficios claros.
4. Proceso: transformar las cuatro etapas en un recorrido visual responsive con conectores livianos.
5. Proyectos: aplicar formato editorial premium conservando evidencia real y privacidad.
6. Nosotros: mejorar perfiles y confianza sin fotos falsas ni cargos inventados.
7. Optimizacion final: revisar contraste, motion, peso de imagenes, build y rutas completas.
