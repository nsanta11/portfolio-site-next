import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export function useCustomEffect2() {
  useEffect(() => {
    const contentElement = document.querySelector(".web-dev");
    if (!contentElement) return;

    const clipPath = contentElement.querySelectorAll("svg clipPath");
    const poster = contentElement.querySelectorAll(".poster");
    const posterInner = contentElement.querySelectorAll(".poster__inner");

    if (!clipPath.length || !poster.length || !posterInner.length) {
      console.warn("Missing elements for GSAP animation.");
      return;
    }

    [...clipPath].forEach((clipPathEl, pos) => {
      const texts = clipPathEl.querySelectorAll("text");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: poster[pos],
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
        .fromTo(
          clipPathEl,
          {
            xPercent: pos === 0 ? 0 : -100,
          },
          {
            ease: "none",
            xPercent: pos === 0 ? -100 : 0,
          },
          0
        )
        .fromTo(
          poster[pos],
          {
            filter: "brightness(200%)",
            skewX: pos === 0 ? -5 : 5,
          },
          {
            ease: "sine",
            filter: "brightness(15%)",
            skewX: pos === 0 ? 5 : -5,
          },
          0
        )
        .fromTo(
          posterInner[pos],
          {
            scale: 2.7,
          },
          {
            scale: 1,
          },
          0
        )
        .fromTo(
          texts,
          {
            transformOrigin: pos ? "50% 100%" : "50% 0%",
            scaleX: 0.8,
            scaleY: 0,
          },
          {
            duration: 0.2,
            stagger: pos ? -0.01 : 0.01,
            scaleX: 1,
            scaleY: 1,
          },
          0
        );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
}
