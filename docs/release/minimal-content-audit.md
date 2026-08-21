# Auditoría de contenido mínimo

Fecha: 21 de agosto de 2026.

## Estado público auditado

La auditoría se realizó sobre `https://tinkode-web.pages.dev/` antes de editar, recorriendo las cinco rutas públicas como visitante. El repositorio estaba limpio en `main`, sincronizado con `origin/main` y en el commit `3ceb327757b0aff35152c909a91147bd18620e16`.

El Home público tenía 1.323 palabras visibles en `main`, 9 secciones, 19 artículos y 10.262 px de altura en una vista de escritorio de 1280 × 720. La primera pantalla móvil de referencia a 390 × 844 acumulaba una etiqueta, un H1 de cinco líneas, dos CTA, tres señales y un panel conceptual antes de presentar el contenido principal.

## Decisiones

| Sección | Problema encontrado | Decisión | Justificación | Destino del contenido |
| --- | --- | --- | --- | --- |
| Header | Incluye “Inicio”, “Proceso” y un recorrido más largo de lo necesario. | Reducir | El logo ya enlaza al inicio y los planes necesitan mayor prioridad comercial. | “Proceso” permanece en el footer y en `/proceso`. |
| Hero del Home | Título largo, etiqueta, señales y panel conceptual compiten por atención. | Reducir | La propuesta debe entenderse en menos de diez segundos. | Se conserva solo el mensaje central, dos CTA y una representación de marca sin texto. |
| Franja de beneficios | Repite estrategia, responsive, automatización y acompañamiento. | Eliminar | Las mismas ideas aparecen en soluciones, proceso y contenido institucional. | Responsive y acompañamiento permanecen donde aportan contexto. |
| Seis problemas | Añade seis tarjetas antes de explicar la oferta. | Trasladar a página interna | El diagnóstico no es necesario para una primera lectura del Home. | Se resume de forma natural dentro de `/soluciones`. |
| Seis soluciones | Cada tarjeta repite problema, beneficio y tipo de solución. | Fusionar | Se puede expresar la oferta con tres capacidades claras. | Home: tres capacidades. `/soluciones`: tres categorías compactas. |
| Proyectos en Home | Cada caso contiene situación, solución, evidencia, tecnologías y notas extensas. | Reducir | El Home debe funcionar como portafolio visual, no como documentación. | El detalle conciso permanece en `/proyectos`. |
| Proceso en Home | Repite una ruta interna completa. | Trasladar a página interna | No es decisivo para el recorrido comercial principal. | Se conserva en `/proceso` y se enlaza desde el footer. |
| Fundadores en Home | Interrumpe la oferta antes de los planes y duplica `/nosotros`. | Trasladar a página interna | La información institucional tiene una ruta propia. | Se conserva en `/nosotros`. |
| FAQ | Ocho respuestas alargan el Home y varias repiten servicios o proceso. | Eliminar | No resuelve una objeción indispensable para esta versión. | Sin traslado. |
| Planes para restaurantes | La oferta comercial y los precios confirmados no están presentes. | Conservar y añadir | Permite comparar alcance, precio y siguiente acción en una sola sección. | Nueva sección `#planes-restaurantes` en el Home. |
| CTA final | Dos botones, texto largo y diagrama vuelven a explicar el proceso. | Reducir | Una sola acción de contacto es suficiente. | CTA único hacia Instagram. |
| Footer | Cuatro columnas repiten navegación, soluciones y proyectos. | Reducir | El cierre debe orientar, no reabrir todo el sitio. | Logo, frase, navegación esencial, Instagram y derechos. |
| `/soluciones` | Repite seis problemas, seis soluciones y una cuadrícula de públicos. | Fusionar | Tres categorías cubren la oferta sin duplicar el Home. | Una sección editorial compacta con detalles esenciales. |
| `/proyectos` | Hero conceptual y casos extensos repiten varias veces qué demuestra TinKode. | Reducir | Los tres proyectos pueden explicarse con contexto, solución, tecnologías y estado. | Los detalles se concentran en una sola presentación por proyecto. |
| `/proceso` | Hero visual, cuatro pasos y cuatro principios expresan ideas cercanas. | Fusionar | Los pasos ya comunican la forma de trabajo. | Cuatro pasos, una frase por paso y CTA simple. |
| `/nosotros` | Hero conceptual, filosofía, perfiles y cuatro valores generan repetición. | Fusionar | La página necesita presentar a TinKode y a sus fundadores sin biografía extensa. | Presentación breve, dos perfiles y tres criterios diferenciadores. |

## Estructura objetivo del Home

1. Hero.
2. Lo que podemos construir contigo.
3. Proyectos seleccionados.
4. Planes para restaurantes.
5. CTA final.

Header y footer acompañan el recorrido sin contarse como secciones principales de `main`.

## Resultado posterior

La segunda auditoría sobre el preview de producción confirmó:

| Métrica del Home | Antes | Después | Reducción |
| --- | ---: | ---: | ---: |
| Palabras visibles en `main` | 1.323 | 311 | 76,5 % |
| Altura a 1280 × 720 | 10.262 px | 4.363 px | 57,5 % |
| Secciones principales | 9 | 5 | 44,4 % |
| Tarjetas visuales | 19 | 6 | 68,4 % |

- Las únicas tarjetas visuales son tres proyectos y tres planes.
- Los tres planes mantienen precio, propósito, beneficios principales, objetivo y CTA visibles.
- Los 32 alcances detallados permanecen en `<details>` nativos, accesibles e indexables.
- Intermedio conserva la insignia “Recomendado”.
- Los 45 recorridos responsive (cinco rutas por nueve viewports) terminaron sin overflow, controles menores de 44 × 44 px ni H1 duplicados.
- La consola quedó limpia en las cinco rutas.
