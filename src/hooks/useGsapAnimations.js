import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

export function useIntroAnimation(titleRef, buttonRef, typewriterRef) {
  useEffect(() => {
    if (!titleRef.current || !buttonRef.current || !typewriterRef.current) return;

    // Intro animation
    gsap.to(titleRef.current, {
      duration: 1,
      scale: 1,
      opacity: 1,
      ease: "power1.out",
      delay: 0.2,
    });

    gsap.to(buttonRef.current, {
      duration: 0.5,
      scale: 1,
      opacity: 1,
      ease: "power1.out",
      delay: 2.5,
    });

    // Typewriter effect
    const words = ["", "Web Developer,", " Designer,", " World Traveler"];
    const typewriter = typewriterRef.current;

    function addWord(index) {
      if (index >= words.length) return;

      const wordSpan = document.createElement("span");
      wordSpan.textContent = (index === 0 ? "" : " ") + words[index];
      wordSpan.style.opacity = 0;

      if (index === words.length - 1) {
        wordSpan.classList.add("break-before");
      }

      typewriter.appendChild(wordSpan);

      gsap.to(wordSpan, {
        opacity: 1,
        duration: 1.2,
        ease: "power1.out",
        delay: 0.5,
      });

      setTimeout(() => addWord(index + 1), 500);
    }

    addWord(0);

    // -- STAGGERED .card animations --
    const cards = gsap.utils.toArray(".card");
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
          // markers: true, // Uncomment to debug ScrollTrigger positions
        },
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: index * 0.1,
      });
    });

    // -- ABOUT ME TIMELINE --
    const aboutMeTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-me",
        start: "top 80%",
        toggleActions: "play none none none",
        // markers: true, // Uncomment to debug
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

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      aboutMeTimeline.kill();
    };
  }, [titleRef, buttonRef, typewriterRef]);
}
