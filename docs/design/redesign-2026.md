# Rediseño integral · octubre de 2026

## Auditoría previa

Repositorio limpio en `main`, cinco rutas Astro estáticas, dos capas CSS, datos confirmados centralizados y SEO completo. Se conservan rutas, precios, alcances de planes, fundadores, estados y autoría de proyectos, canonical, sitemap, robots y JSON-LD. No existen capturas autorizadas ni fotos de fundadores. Tras la primera entrega se recibió el nuevo logo: integrado en todos los puntos activos de identidad, sin redibujarlo.

Problemas: hero con órbitas genéricas, poca diferenciación entre servicios, proyectos uniformes, proceso sin conexiones, home sin método/equipo. Estados y notas de proyectos ocultos en home. Contacto desactualizado. Menú fijo dentro de header con backdrop-filter y fondo sin aislamiento de foco. CTA flotante invisible pero enfocable. Columnas de planes prematuras en tablet.

## Criterio de composición

Una empresa que diseña sistemas: geometría modular propia, líneas conectadas, contraste entre tipografía editorial y anotaciones técnicas. Inspiración estudiada: profundidad y foco de Spline (https://spline.design/), proyectos y microinteracciones de Skiper (https://skiper-ui.com/), secuencias y ScrollTrigger de GSAP (https://gsap.com/). Sin copiar layouts ni instalar frameworks de UI.

## Sistema

- Paleta original: página #05070b, superficies #090d14/#0d131d/#111925, texto #f4f7fb, verde #18f28a, azul #2c9cff. Solo opacidades de estos acentos.
- Contenedor 1200px, gutters 20–56px. Secciones 72–104px; separación interna 8/12/16/24/32/48.
- Sans principal Inter local si está disponible, fallback Segoe UI; monoespaciada del sistema solo para etiquetas.
- Títulos fluidos 36–76px; secciones 30–48px; cuerpo 16–18px. No más de dos familias.
- Radios 8/16/24px; líneas discretas; verde para acción, azul para información secundaria.
- Botones mínimos 44px, primario verde y secundario de superficie oscura; foco visible.
- Motion: power3.out, 180ms hover, 550ms reveal, 900ms entrada; stagger 80ms. GSAP matchMedia elimina motion con preferencia reducida; nada depende de animación para ser visible.
- Breakpoints 640/900/1100px. Planes a tres columnas solo desde 1000px; tablet en composición propia.

## Arquitectura

Home: hero → capacidades/problema → método resumido → proyectos → planes → fundadores resumidos → contacto. Internas: hero editorial, contenido específico, CTA. Proyectos con diagramas conceptuales rotulados; nunca pantallas o resultados ficticios.

## Verificación prevista

Auditor independiente de UX/contenido y segunda auditoría final de diseño, responsive, rendimiento, accesibilidad y funcionalidad. Astro check y build obligatorios. Playwright sobre rutas y anchos 360/390/430/768/1024/1280/1440/1920, enlaces, acordeones, teclado, menú, reduced-motion, consola y recursos. Preview local si no existe credencial de Cloudflare Pages.
