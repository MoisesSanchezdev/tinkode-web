# AGENTS.md

Guía permanente para agentes que trabajen en el repositorio oficial de la página institucional de TinKode.

## Contexto

TinKode es una startup tecnológica colombiana fundada por dos estudiantes de ingeniería. Ayuda a negocios a funcionar mejor mediante tecnología, automatización, organización de información, sistemas personalizados, experiencias digitales y mejora de procesos.

TinKode no se presenta como una empresa que solo vende páginas web. Su enfoque es diseñar tecnología y procesos digitales que mejoren la operación de los negocios.

## Objetivo de la primera versión

La primera versión pública debe presentar a TinKode con claridad, confianza y orientación comercial, sin inventar clientes, métricas, experiencia o proyectos no confirmados.

## Público objetivo

Negocios, emprendedores y equipos que necesitan ordenar información, automatizar tareas, mejorar procesos y construir experiencias digitales útiles.

## Propuesta de valor

Diseñamos tecnología para que los negocios funcionen mejor.

Filosofía de marca: No vendemos software. Diseñamos la forma en que funcionan los negocios.

## Principios de comunicación

- Escribir en español claro, directo y profesional.
- Evitar exageraciones, promesas absolutas y lenguaje genérico de plantilla.
- Explicar beneficios de negocio antes que detalles técnicos.
- Mantener un tono confiable, inteligente y simple.
- No inventar contenido, clientes, cifras, proyectos, testimonios ni experiencia.

## Principios visuales

- Transmitir innovación, confianza, ingeniería, profesionalismo, simplicidad, elegancia, inteligencia, automatización y escalabilidad.
- Usar una estética tecnológica premium con negro, blanco, verde neón y azul eléctrico de forma controlada.
- Mantener mucho espacio negativo, grid sutil y detalles HUD discretos.
- Evitar saturación visual, apariencia de videojuego, estética de hacker clandestino y exceso de neón.

## Arquitectura tecnológica

- Framework: Astro.
- Renderizado: generación estática.
- Lenguaje: TypeScript en modo estricto.
- Estilos: CSS personalizado.
- Gestor de paquetes: npm.
- Control de versiones: Git.
- No añadir React, Vue, Svelte, Tailwind, Bootstrap, CMS, backend, base de datos ni servicios externos sin solicitud y justificación.

## Organización de archivos

- `src/pages/`: rutas Astro.
- `src/layouts/`: layouts Astro reutilizables.
- `src/components/layout/`: componentes de layout.
- `src/components/sections/`: componentes de secciones de página.
- `src/components/ui/`: piezas pequeñas de interfaz.
- `src/data/`: datos estructurados y contenido confirmado.
- `src/styles/`: CSS global y bases del sistema visual.
- `src/scripts/`: scripts del lado cliente cuando sean necesarios.
- `src/utils/`: utilidades compartidas.
- `public/`: activos estáticos locales.
- `docs/`: documentación estratégica, visual, de contenido, desarrollo y despliegue.

## Convenciones de nombres

- Usar nombres descriptivos en inglés para archivos técnicos cuando el patrón del ecosistema lo favorezca.
- Usar kebab-case para archivos de documentación y CSS.
- Usar PascalCase para componentes Astro reutilizables.
- Usar camelCase para variables y funciones.
- Evitar abreviaturas crípticas.

## Reglas de componentes Astro

- Mantener componentes pequeños y orientados a una responsabilidad.
- Priorizar HTML semántico.
- Evitar lógica de cliente si Astro estático resuelve el caso.
- No crear abstracciones antes de que exista repetición real.
- No instalar integraciones de framework sin justificación aprobada.

## Enfoque mobile-first

Diseñar primero para móvil. La experiencia móvil debe ser rápida, legible y cómoda antes de ampliar la interfaz a tablet y escritorio.

## Requisitos responsive

- Usar unidades fluidas y límites máximos razonables.
- Evitar texto que se desborde.
- Validar que los elementos mantengan jerarquía y separación en pantallas pequeñas.
- No depender de hover para acciones esenciales.

## Accesibilidad básica

- Usar `lang="es"`.
- Mantener contraste suficiente.
- Usar estructura semántica con `main`, `section`, encabezados y texto alternativo cuando corresponda.
- Asegurar estilos visibles de foco.
- Respetar `prefers-reduced-motion`.

## Rendimiento

- Mantener dependencias mínimas.
- Evitar recursos remotos innecesarios.
- Optimizar imágenes antes de agregarlas.
- No cargar JavaScript de cliente si no aporta una interacción necesaria.

## HTML semántico

La estructura debe reflejar el contenido real. No usar `div` como sustituto de elementos semánticos cuando existan alternativas claras.

## Seguridad y contenido

- No guardar secretos, tokens, credenciales ni datos personales sensibles.
- No crear `.env` con valores reales.
- Se permite `.env.example` cuando sea necesario.
- No inventar contenido institucional ni legal.

## Documentación

Antes de modificar el proyecto, leer:

- `AGENTS.md`
- `README.md`
- `docs/strategy/brand-context.md`
- `docs/content/content-status.md`
- `docs/design/design-system.md`
- `docs/development/roadmap.md`

Mantener `README.md` actualizado cuando cambien instalación, comandos, estructura o flujo de trabajo.

## Preservación del trabajo existente

No sobrescribir cambios existentes sin inspeccionarlos. Si hay archivos modificados por otra persona o agente, trabajar con esos cambios y no revertirlos salvo solicitud explícita.

## Comandos disponibles

- `npm run dev`: inicia el servidor local.
- `npm run build`: compila el sitio estático.
- `npm run preview`: previsualiza la compilación.
- `npm run astro`: ejecuta comandos de Astro.
- `npm run check`: ejecuta comprobaciones de Astro y TypeScript.

## Validación obligatoria

Al finalizar cualquier cambio relevante, ejecutar como mínimo:

- `npm run check`
- `npm run build`
- `git status`

Informar archivos modificados y cualquier validación que no se haya podido ejecutar.

## Reglas de Git

- No hacer commit sin solicitud explícita.
- No hacer push sin solicitud explícita.
- No crear pull request sin solicitud explícita.

## Ubicación obligatoria

Trabajar únicamente en `C:\Projects\tinkode-web`. Está prohibido trabajar dentro de OneDrive, Desktop/Escritorio sincronizado, Documents/Documentos sincronizado o cualquier ruta sincronizada del perfil del usuario.
