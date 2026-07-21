# Rediseño visual premium del Home

## 1. Objetivo del Home

Convertir la pagina principal de TinKode en una experiencia visual, compacta y profesional que comunique tecnologia aplicada a negocios sin parecer una agencia generica, un dashboard ficticio o un portafolio improvisado.

El Home mantiene el posicionamiento central: TinKode diseña tecnologia para que los negocios funcionen mejor.

## 2. Estructura final

La pagina queda organizada en seis bloques principales:

1. Hero premium con mensaje principal y diagrama de negocio conectado.
2. Ecosistema del negocio con modulos operativos conectados.
3. Resumen visual de soluciones.
4. Vista previa de proyecto destacado.
5. Principios de ingenieria y confianza.
6. CTA final hacia Instagram.

## 3. Componentes creados

- `InlineIcon`: sistema de iconos SVG lineales sin dependencias externas.
- `BusinessNetwork`: diagrama conceptual del sistema conectado del Hero.
- `BusinessEcosystem`: bloque visual de operacion del negocio y modulos conectados.
- `HomeSolutionsVisual`: resumen visual de soluciones con tarjetas editoriales.
- `FeaturedProjectPreview`: vista previa conceptual de Robot Explota Globos.
- `EngineeringPrinciples`: principios de trabajo de TinKode.
- `HomeFinalCTA`: cierre comercial premium conectado con Instagram.

## 4. Diagramas implementados

El Hero usa un nodo central `TinKode` y nodos conectados para clientes, ventas, inventario, WhatsApp, informacion, automatizacion, reportes y experiencias.

El ecosistema del negocio usa un nucleo `Operacion del negocio` y modulos como sitio web, WhatsApp, base de datos, panel administrativo, NFC, formularios, inventario y reportes.

Ambos diagramas son construidos con Astro, HTML, CSS, SVG inline, `TechNode`, `ConnectionLine` y fondos del sistema visual premium.

## 5. Decisiones de diseño

- Mantener negro mate como base y usar verde y azul con moderacion.
- Reducir parrafos largos y trasladar parte de la comunicacion a diagramas.
- Usar tarjetas con profundidad sobria y recursos secundarios pequeños.
- Evitar capturas falsas, metricas inventadas, clientes inventados y pantallas que aparenten datos reales.
- Presentar Robot Explota Globos como representacion conceptual, no como captura exacta.

## 6. Adaptacion responsive

En escritorio, el Hero, ecosistema y proyecto destacado usan composiciones de dos columnas para aprovechar el ancho.

En tablet, las reticulas pasan a dos columnas y los diagramas mantienen etiquetas legibles.

En movil, los diagramas se simplifican a nodos apilados, las conexiones decorativas se reducen, los botones ocupan ancho comodo y las tarjetas se apilan sin scroll horizontal.

## 7. Animaciones

Las animaciones se limitan a:

- Reveal progresivo mediante `Reveal`.
- Pulso sutil en nodos activos.
- Lineas con iluminacion moderada.
- Hover suave en tarjetas.

`prefers-reduced-motion: reduce` desactiva transformaciones y animaciones mediante las reglas globales existentes.

## 8. Accesibilidad

- Se conserva un unico `h1`.
- Los diagramas tienen nombres accesibles.
- Los SVG decorativos usan `aria-hidden` cuando corresponde.
- La informacion no depende solo del color: los nodos y etiquetas contienen texto.
- Los CTAs son enlaces nativos con nombres claros.
- El contenido sigue siendo comprensible sin JavaScript.

## 9. Rendimiento

No se agregaron dependencias, frameworks, canvas, WebGL, videos ni imagenes nuevas.

Los graficos se construyen con HTML, CSS y SVG inline. Las animaciones son CSS ligeras y se aplican a pocos elementos.

## 10. Diferencias frente al Home anterior

El Home anterior comunicaba bien mediante texto, pero dependia de pocos recursos visuales y una imagen conceptual unica.

El nuevo Home conserva la claridad y reduce texto repetido, pero agrega una experiencia visual propia: diagramas conectados, tarjetas de solucion, mockup conceptual honesto, principios de trabajo y CTA final premium.
