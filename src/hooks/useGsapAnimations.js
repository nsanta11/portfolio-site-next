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
      delay: 0.2
    });

    gsap.to(buttonRef.current, {
      duration: 0.5,
      scale: 1,
      opacity: 1,
      ease: "power1.out",
      delay: 2.5
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
        delay: 0.5
      });

      setTimeout(() => addWord(index + 1), 500);
    }

    addWord(0);

    // Scroll animation for #about-me
    const aboutMeTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-me",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    aboutMeTimeline.from("#about-me", {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power2.out"
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      aboutMeTimeline.kill();
    };
  }, []);
}


