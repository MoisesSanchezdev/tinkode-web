// Content is visible before JS. Motion enhances the static Astro document.
const motionQuery = window.matchMedia(
  "(prefers-reduced-motion: no-preference)",
);
let dispose: (() => void) | undefined;
let generation = 0;

async function initializeMotion() {
  const currentGeneration = ++generation;
  dispose?.();
  dispose = undefined;
  if (!motionQuery.matches) return;
  const [{ gsap }, { ScrollTrigger }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ]);
  if (!motionQuery.matches || currentGeneration !== generation) return;
  gsap.registerPlugin(ScrollTrigger);
  const media = gsap.matchMedia();
  media.add("(prefers-reduced-motion: no-preference)", () => {
    const ease = "power3.out";
    if (!location.hash && window.scrollY < 80) {
      gsap
        .timeline({ defaults: { ease, duration: 0.75 } })
        .from(".site-header__inner", { y: -8 }, 0)
        .from("[data-hero-reveal]", { y: 16, stagger: 0.075 }, 0.06)
        .from(
          "[data-system-visual]",
          { y: 22, scale: 0.97, duration: 0.95 },
          0.12,
        );
    }
    document
      .querySelectorAll<HTMLElement>("[data-reveal], [data-stagger]")
      .forEach((element) => {
        const targets = element.hasAttribute("data-stagger")
          ? [...element.children]
          : element;
        ScrollTrigger.create({
          trigger: element,
          start: "top 94%",
          once: true,
          onEnter: () =>
            gsap.from(targets, {
              y: 18,
              duration: 0.6,
              stagger: 0.07,
              ease,
              clearProps: "transform",
            }),
        });
      });
    const progress = document.querySelector("[data-scroll-progress]");
    if (progress)
      gsap.to(progress, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.2,
        },
      });
  });
  media.add(
    {
      horizontal: "(min-width: 760px)",
      vertical: "(max-width: 759px)",
      motion: "(prefers-reduced-motion: no-preference)",
    },
    (context) => {
      if (!context.conditions?.motion) return;
      const line = document.querySelector(".process-system__line>span");
      if (line) {
        const horizontal = context.conditions.horizontal;
        gsap.from(line, {
          scaleX: horizontal ? 0 : 1,
          scaleY: horizontal ? 1 : 0,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-process]",
            start: "top 80%",
            end: "bottom 55%",
            scrub: 0.4,
          },
        });
      }
    },
  );
  media.add(
    "(hover: hover) and (pointer: fine) and (min-width: 1000px) and (prefers-reduced-motion: no-preference)",
    () => {
      const surface = document.querySelector<HTMLElement>(
        "[data-system-visual]",
      );
      const scene = document.querySelector<HTMLElement>("[data-system-scene]");
      if (!surface || !scene) return;
      const rotateX = gsap.quickTo(scene, "rotationX", {
        duration: 0.6,
        ease: "power2.out",
      });
      const rotateY = gsap.quickTo(scene, "rotationY", {
        duration: 0.6,
        ease: "power2.out",
      });
      const move = (event: PointerEvent) => {
        const bounds = surface.getBoundingClientRect();
        rotateX((0.5 - (event.clientY - bounds.top) / bounds.height) * 8);
        rotateY(((event.clientX - bounds.left) / bounds.width - 0.5) * 10);
      };
      const reset = () => {
        rotateX(0);
        rotateY(0);
      };
      surface.addEventListener("pointermove", move);
      surface.addEventListener("pointerleave", reset);
      return () => {
        surface.removeEventListener("pointermove", move);
        surface.removeEventListener("pointerleave", reset);
      };
    },
  );
  dispose = () => media.revert();
}

initializeMotion().catch(() => {
  /* Static content remains fully usable. */
});
motionQuery.addEventListener("change", () => {
  initializeMotion().catch(() => {});
});
window.addEventListener("pagehide", () => {
  generation++;
  dispose?.();
});
window.addEventListener("pageshow", (event) => {
  if (event.persisted) initializeMotion().catch(() => {});
});
