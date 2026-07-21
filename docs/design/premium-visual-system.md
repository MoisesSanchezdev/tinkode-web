# Sistema visual premium reutilizable

Este documento complementa `docs/design/design-system.md` con la base creada para la fase de rediseño visual premium de TinKode.

## Tokens nuevos o alias

| Token | Uso |
| --- | --- |
| `--color-bg` | Alias del fondo principal. |
| `--color-bg-soft` | Alias del fondo secundario. |
| `--color-surface-elevated` | Superficie elevada para estados interactivos. |
| `--color-border-highlight` | Borde de enfasis con acento verde. |
| `--color-brand-green` | Verde oficial para accion, precision y actividad. |
| `--color-brand-blue` | Azul oficial para soporte, profundidad y contexto. |
| `--shadow-card` | Sombra sobria para tarjetas premium. |
| `--shadow-glow-green` | Brillo verde controlado. |
| `--shadow-glow-blue` | Brillo azul controlado. |
| `--duration-fast`, `--duration-base`, `--duration-slow` | Duraciones de movimiento. |
| `--ease-standard`, `--ease-out` | Curvas de transicion consistentes. |
| `--z-base`, `--z-raised`, `--z-header`, `--z-overlay`, `--z-skip-link` | Capas de profundidad. |

La escala tipografica se define por rangos responsive, no por crecimiento continuo con el viewport. Esto evita saltos pequenos e impredecibles y mantiene proporciones estables entre movil, tablet y escritorio.

## Componentes nuevos

### SectionBackground

Componente para fondos visuales sutiles con variantes `grid`, `glow-green`, `glow-blue`, `mixed` y `none`.

Uso recomendado: primeras vistas, transiciones o secciones que necesiten profundidad tecnica. No debe usarse para decorar cada tarjeta.

### GlowIcon

Contenedor uniforme para iconos lineales o marcas simples. Soporta variantes `green` y `blue`, tamaños `sm`, `md`, `lg`, uso decorativo o etiqueta accesible con `label`.

### VisualCard

Tarjeta premium para composiciones visuales, diagramas o bloques destacados. No reemplaza automaticamente a `SurfaceCard`; se usa cuando una tarjeta necesita mayor presencia visual.

### SectionHeading

Encabezado reusable con eyebrow, titulo, descripcion, alineacion y ancho de lectura consistente.

### TechNode

Nodo para representar conceptos dentro de diagramas: datos, negocio, automatizacion, sistemas, integraciones o experiencias.

### ConnectionLine

Conector CSS ligero para nodos, disponible en orientacion horizontal o vertical y variantes verde, azul o mixta.

### Reveal

Aparicion progresiva basada en `IntersectionObserver`. El contenido queda visible cuando JavaScript no esta disponible o cuando el usuario prefiere movimiento reducido.

## Iconografia

No se agrego una dependencia de iconos. La base queda preparada para SVG propios lineales o iconos inline optimizados dentro de `GlowIcon`.

Reglas:

- Mantener grosor visual consistente.
- No mezclar iconos 3D, emojis, iconos rellenos e iconos lineales.
- Usar verde para accion o estado activo.
- Usar azul para soporte, contexto o conexion secundaria.
- No agregar iconos decorativos a cada parrafo.

## Fondos y profundidad

El fondo global conserva negro mate y reticula sutil. Se agregan lineas tecnicas diagonales de baja opacidad y fondos por seccion con brillos radiales controlados.

Los brillos deben apoyar la jerarquia visual, no dominarla. No se usan videos, canvas, WebGL ni imagenes pesadas para fondos.

## Movimiento

El movimiento permitido se limita a:

- Apariciones cortas.
- Elevacion minima de tarjetas.
- Cambio suave de borde.
- Pulso muy sutil en nodos activos.

`prefers-reduced-motion: reduce` elimina transformaciones de hover y animaciones.

## Aplicacion actual

La fase aplica el nuevo sistema de forma controlada:

- Se actualizan tokens globales.
- Se mejora la profundidad de tarjetas base.
- Se agrega fondo tecnico reutilizable.
- Se valida una muestra en el hero mediante `SectionBackground`.
- Se preparan componentes para futuras fases sin rediseñar todas las paginas.
