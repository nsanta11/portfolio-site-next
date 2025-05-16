"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useCustomEffect1 = () => {
  useEffect(() => {
    const contentElement = document.querySelector(".coder");
    if (!contentElement) {
      console.warn("useCustomEffect1: .content element not found.");
      return;
    }

    const clipPaths = contentElement.querySelectorAll("svg clipPath");
    const poster = contentElement.querySelector(".poster");
    const posterInner = contentElement.querySelector(".poster__inner");
    const texts = clipPaths[0]?.querySelectorAll("text") ?? [];

    if (!clipPaths.length || !poster || !posterInner || !texts.length) {
      console.warn("useCustomEffect1: Missing elements for GSAP animation.", {
        clipPathsLength: clipPaths.length,
        posterFound: !!poster,
        posterInnerFound: !!posterInner,
        textsLength: texts.length,
      });
      return;
    }

    const imageUrls = [
      "img/cartoon_comp.png",
      "img/cartoon_comp.png",
      "img/cartoon_comp.png",
    ];
    let currentIndex = 0;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: poster,
        start: "top bottom",
        end: "bottom top+=70%",
        once: true,
        scrub: 2,
        onUpdate: (scrollTrigger) => {
          const progress = scrollTrigger.progress;
          const sectionLength = 1 / imageUrls.length;
          const index = Math.floor(progress / sectionLength);

          if (index !== currentIndex) {
            currentIndex = index;
            gsap.killTweensOf(posterInner);
          }
        },
      },
    });

    timeline.fromTo(
      clipPaths,
      { xPercent: 80 },
      { xPercent: -120, ease: "none" },
      0
    );

    timeline.fromTo(
      texts,
      {
        transformOrigin: "100% 75%",
        xPercent: 100,
        rotation: 10,
      },
      {
        duration: 0.2,
        stagger: 0.05,
        xPercent: 0,
        rotation: 0,
      },
      0
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      timeline.kill();
    };
  }, []);
};
