'use client';

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export function useSmoothAnchorScroll() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.currentTarget;
      const href = anchor.getAttribute("href");
      const targetId = href.startsWith("#") ? href.substring(1) : href.split("#")[1];

      if (!targetId) return;

      e.preventDefault();

      if (pathname !== "/") {
        router.push(`/#${targetId}`);
        return;
      }

      const target = document.getElementById(targetId);
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 125,
          },
          ease: "power2.inOut",
        });
      }
    };

    const links = document.querySelectorAll(".scroll-link");

    links.forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach((anchor) => {
        anchor.removeEventListener("click", handleClick);
      });
    };
  }, [pathname, router]);
}
