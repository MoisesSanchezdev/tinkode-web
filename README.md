# TinKode Web

Repositorio oficial de la página institucional de TinKode construido con Astro.

## Descripción

TinKode es una startup tecnológica colombiana que diseña tecnología para que los negocios funcionen mejor. Este repositorio contiene la base inicial del sitio institucional.

## Estado actual

Proyecto en desarrollo. La base técnica, el sistema visual inicial, la navegación responsive, el hero principal y las secciones de problemas, soluciones y forma de trabajo están preparados para revisión. No contiene todavía las secciones completas de proyectos, fundadores o contacto.

## Objetivo

Crear una base profesional, limpia, documentada y verificable para construir el sitio institucional de TinKode por fases.

## Tecnología

- Astro con generación estática.
- TypeScript en modo estricto.
- CSS personalizado.
- npm como gestor de paquetes.
- Git para control de versiones.

## Requisitos

- Node.js `>=22.12.0`.
- npm `>=9.6.5`.
- Git instalado.

## Instalación

```powershell
cd C:\Projects\tinkode-web
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

## Estructura principal

- `public/`: activos estáticos locales.
- `src/pages/`: páginas del sitio.
- `src/styles/`: estilos globales y base CSS.
- `src/components/layout/`: componentes de layout.
- `src/components/sections/`: componentes de secciones de página como hero, problemas, soluciones y proceso.
- `src/components/ui/`: componentes pequeños de interfaz como `Button`, `Badge` y `SurfaceCard`.
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

## Flujo de trabajo

1. Trabajar únicamente en `C:\Projects\tinkode-web`.
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

Desarrollar la sección de proyectos solo con información autorizada, sin publicar repositorios privados ni datos confidenciales.

## Nota

Este proyecto está en desarrollo y aún no representa la versión final del sitio de TinKode.
