# TinKode Web

Repositorio oficial de la página institucional de TinKode construido con Astro.

## Descripción

TinKode es una startup tecnológica colombiana que diseña tecnología para que los negocios funcionen mejor. Este repositorio contiene la base inicial del sitio institucional.

## Estado actual

Rediseño integral con la paleta original, hero geométrico interactivo, capacidades visuales, proceso conectado, proyectos con contexto real, planes y equipo. Las rutas internas comparten el sistema visual. El contacto se centraliza en el WhatsApp oficial indicado para esta versión.

## Objetivo

Crear una base profesional, limpia, documentada y verificable para construir el sitio institucional de TinKode por fases.

## Tecnología

- Astro con generación estática.
- TypeScript en modo estricto.
- CSS personalizado.
- GSAP y ScrollTrigger con carga condicional: sin React ni visor 3D.
- Inter variable local; licencia en `public/fonts/OFL-Inter.txt`.
- npm como gestor de paquetes.
- Git para control de versiones.

## Requisitos

- Node.js `>=22.12.0`.
- npm `>=9.6.5`.
- Git instalado.

## Instalación

```powershell
cd tinkode-web
npm install
```

## Ejecución local

```powershell
npm run dev
```

## Comandos disponibles

- `npm run dev`: inicia el servidor de desarrollo.
- `npm run build`: compila el sitio estático en `dist/`.
- `npm run preview`: previsualiza la compilación local.
- `npm run astro`: ejecuta comandos de Astro.
- `npm run check`: ejecuta comprobaciones de Astro y TypeScript.

El servidor de revisión de esta entrega se inicia con `npm run dev -- --host 127.0.0.1 --port 4321` y se abre en `http://localhost:4321/`.

## Rutas

- `/`: propuesta de valor, capacidades, proyectos seleccionados, planes para negocios y contacto.
- `/soluciones`: presencia digital, sistemas para negocios y automatización.
- `/proceso`: cuatro etapas concretas de trabajo.
- `/proyectos`: LPT, Robot Explota Globos UTP y Experiencias NFC con estado y contexto verificable.
- `/nosotros`: presentación breve, equipo fundador y criterios de trabajo.
- `/404.html`: página de recuperación con marca y enlace de regreso.

## Estructura principal

- `public/`: activos estáticos locales.
- `public/images/brand/`: identidad visual oficial de TinKode.
- `src/components/ui/BrandLogo.astro`: logo oficial compartido por header, menú y footer; fuente original preservada y exports en `public/images/brand/`.
- `public/images/home/`: visuales conceptuales del inicio.
- `public/images/projects/`: carpeta preparada para capturas futuras de proyectos autorizados.
- `public/images/projects/nfc/`: visuales conceptuales del proyecto NFC.
- `src/pages/`: páginas del sitio.
- `src/styles/`: estilos globales y base CSS.
- `src/components/layout/`: componentes de layout.
- `src/components/sections/`: secciones editoriales, proyectos, proceso y planes para negocios.
- `src/components/ui/`: piezas mínimas de interfaz: `Button` e `InlineIcon`.
- `src/layouts/`: layouts Astro.
- `src/data/`: datos y contenido confirmado.
- `src/scripts/`: scripts del lado cliente cuando sean necesarios.
- `src/utils/`: utilidades compartidas.
- `docs/`: documentación estratégica, visual, de contenido, desarrollo y despliegue.

## Documentación

- `AGENTS.md`: reglas permanentes para agentes.
- `docs/strategy/brand-context.md`: contexto estratégico de marca.
- `docs/design/design-system.md`: dirección visual inicial.
- `docs/content/content-status.md`: estado del contenido pendiente.
- `docs/development/roadmap.md`: fases futuras del proyecto.
- `docs/release/mobile-first-redesign.md`: auditoría, decisiones, matriz responsive y resultados de Lighthouse del rediseño actual.
- `docs/release/minimal-content-audit.md`: auditoría editorial y decisiones de simplificación.
- `docs/design/redesign-2026.md`: auditoría inicial, referencias, tokens y decisiones del nuevo sistema.
- `docs/release/ui-ux-redesign-2026.md`: entrega, validación, pendientes y preview actual.
- `docs/qa/`: auditorías independientes, scripts reproducibles y evidencia visual.

## Flujo de trabajo

1. Trabajar únicamente dentro del repositorio local del proyecto.
2. Leer `AGENTS.md` y la documentación antes de modificar.
3. Mantener cambios pequeños y verificables.
4. Ejecutar `npm run check` y `npm run build` al finalizar.
5. Revisar `git status`.
6. No hacer commit ni push sin solicitud explícita.

## Variables de entorno

No hay variables de entorno requeridas en esta fase. No guardar secretos en el repositorio. En el futuro se podrá crear `.env.example` sin valores reales.

## Seguridad

- No guardar tokens, credenciales, claves privadas ni información sensible.
- No publicar datos personales sin confirmación.
- No añadir servicios externos sin justificación.

## Próxima fase

Mantener verificada la publicación conectada a GitHub en Cloudflare Pages y preparar mejoras posteriores como fotografías autorizadas, contenido legal si aplica, formulario propio y dominio personalizado cuando se autoricen.

## Nota

Este proyecto está en desarrollo y aún no representa la versión final del sitio de TinKode.
