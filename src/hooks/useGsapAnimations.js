import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

export function useIntroAnimation(titleRef, buttonRef, typewriterRef) {
  const hasAnimatedRef = useRef(false); // <-- Ref to prevent duplicate run

  useEffect(() => {
    // Prevent double runs in Strict Mode, but allow rerun on remount
    if (
      hasAnimatedRef.current ||
      !titleRef.current ||
      !buttonRef.current ||
      !typewriterRef.current
    ) {
      return;
    }

    hasAnimatedRef.current = true; // Set flag

    // Animate title
    gsap.to(titleRef.current, {
      duration: 1,
      scale: 1,
      opacity: 1,
      ease: "power1.out",
      delay: 0.2,
    });

    // Animate button
    gsap.to(buttonRef.current, {
      duration: 0.5,
      scale: 1,
      opacity: 1,
      ease: "power1.out",
      delay: 2.5,
    });

    // Typewriter animation
    const typewriter = typewriterRef.current;
    typewriter.innerHTML = ""; // clear on mount

    const words = ["Web Developer,", "Designer,", "World Traveler"];
    const tl = gsap.timeline({ delay: 0.8 }); // sync with title animation

    words.forEach((word, i) => {
      const span = document.createElement("span");
      span.textContent = (i > 0 ? " " : "") + word;
      span.style.opacity = 0;
      typewriter.appendChild(span);

      tl.to(
        span,
        {
          opacity: 1,
          duration: 0.6,
          ease: "power1.out",
        },
        "+=0.01"
      ); // slight delay between entries
    });

    // Reset styles before re-animating
    gsap.set(".card", { clearProps: "all" });

    // Card animations
    const cards = gsap.utils.toArray(".card");
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: index * 0.1,
      });
    });

    // Reset styles before re-animating
    gsap.set("#about-me", { clearProps: "all" });
    gsap.set(".profile-img", { clearProps: "all" });

    // About Me animation
    const aboutMeTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-me",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    aboutMeTimeline
      .from("#about-me", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })
      .from(
        ".profile-img",
        {
          x: -50,
          autoAlpha: 0,
          scale: 0.97,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.6"
      );

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      aboutMeTimeline.kill();
      hasAnimatedRef.current = false; // Reset so it runs again on remount
    };
  }, [titleRef, buttonRef, typewriterRef]);
}
