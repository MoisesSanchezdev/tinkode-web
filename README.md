# TinKode Web

Repositorio oficial de la página institucional de TinKode construido con Astro.

## Descripción

TinKode es una startup tecnológica colombiana que diseña tecnología para que los negocios funcionen mejor. Este repositorio contiene la base inicial del sitio institucional.

## Estado actual

Primera versión pública preparada. La base técnica, el sistema visual inicial, la navegación responsive y la arquitectura multipágina están listas para publicación. El inicio resume la propuesta y las rutas internas concentran soluciones, proceso, proyectos y fundadores. No contiene todavía un formulario de contacto ni footer definitivo.

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

## Rutas

- `/`: presentación breve de TinKode, resumen de soluciones, experiencia y CTA hacia Instagram.
- `/soluciones`: soluciones que TinKode puede construir para negocios.
- `/proceso`: forma breve de trabajo de TinKode.
- `/proyectos`: proyectos reales compactos, estados, autoría, privacidad y evidencia futura autorizada.
- `/nosotros`: presentación breve de los fundadores y del enfoque de trabajo de TinKode.

## Estructura principal

- `public/`: activos estáticos locales.
- `public/images/brand/`: identidad visual oficial de TinKode.
- `public/images/home/`: visuales conceptuales del inicio.
- `public/images/projects/`: carpeta preparada para capturas futuras de proyectos autorizados.
- `public/images/projects/nfc/`: visuales conceptuales del proyecto NFC.
- `src/pages/`: páginas del sitio.
- `src/styles/`: estilos globales y base CSS.
- `src/components/layout/`: componentes de layout.
- `src/components/sections/`: componentes de secciones de página como hero, resúmenes del home, problemas, soluciones, proceso y proyectos.
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

Publicar la primera versión oficial y preparar mejoras posteriores como footer definitivo, contenido legal si aplica y dominio personalizado cuando se autorice.

## Nota

Este proyecto está en desarrollo y aún no representa la versión final del sitio de TinKode.
