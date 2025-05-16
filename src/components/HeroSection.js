"use client";
import { useRef } from "react";
import { useIntroAnimation } from "@/hooks/useGsapAnimations";
import { useSmoothAnchorScroll } from "@/hooks/useSmoothScroll";

export default function HeroSection() {
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const typewriterRef = useRef(null);

  useIntroAnimation(titleRef, buttonRef, typewriterRef);
  useSmoothAnchorScroll();

  return (
    <section className="hero">
		<div className="title">
            <h1 ref={titleRef} className="frame__title">Nicole Santarsiero</h1>
			<div className="typewriter-container">
				<p id="typewriter" ref={typewriterRef}></p>
			</div>
			<button ref={buttonRef} className="portfolio scroll-link" href="#my-work">MY WORK</button>
		</div>
    </section>
  );
}
