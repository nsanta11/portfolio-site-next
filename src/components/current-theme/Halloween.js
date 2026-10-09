// components/current-theme/Halloween.js
"use client";
import { useEffect, useRef } from "react";
import "./halloween.css";

// Corner web: radial strands fan out from the top-right corner,
// joined by slightly sagging arcs.
const SIZE = 160;
const RADIALS = 6;
const RINGS = [32, 60, 88, 116, 144];

const point = (r, i) => {
  const angle = Math.PI / 2 + (i / (RADIALS - 1)) * (Math.PI / 2);
  return [SIZE + r * Math.cos(angle), r * Math.sin(angle)];
};

const radialPaths = Array.from({ length: RADIALS }, (_, i) => {
  const [x, y] = point(SIZE * 0.95, i);
  return `M${SIZE} 0L${x.toFixed(1)} ${y.toFixed(1)}`;
});

const ringPaths = RINGS.map((r) => {
  let d = "";
  for (let i = 0; i < RADIALS - 1; i++) {
    const [x1, y1] = point(r, i);
    const [x2, y2] = point(r, i + 1);
    const [cx, cy] = point(r * 0.88, i + 0.5);
    d += `${i === 0 ? "M" : ""}${i === 0 ? `${x1.toFixed(1)} ${y1.toFixed(1)}` : ""}Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
  }
  return d;
});

const MAX_DROP = 260; // px the spider can lower itself
const DROP_PER_SCROLL = 0.2; // px of drop per px scrolled

export default function Halloween() {
  const spiderRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = Math.min(window.scrollY * DROP_PER_SCROLL, MAX_DROP);
      spiderRef.current?.style.setProperty("--spider-y", `${y}px`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="theme-halloween" aria-hidden="true">
      <svg
        className="theme-web"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        fill="none"
      >
        {[...radialPaths, ...ringPaths].map((d, i) => (
          <path key={i} d={d} />
        ))}
      </svg>

      <div className="theme-spider-clip">
      <div className="theme-spider" ref={spiderRef}>
        <span className="theme-spider__thread"></span>
        <div className="theme-spider__swing">
        <svg className="theme-spider__svg" viewBox="0 0 40 40">
          <g className="theme-spider__legs">
            <path d="M14 18Q6 10 3 14M14 21Q5 17 2 22M14 24Q6 26 3 32M15 27Q9 31 8 37" />
            <path d="M26 18Q34 10 37 14M26 21Q35 17 38 22M26 24Q34 26 37 32M25 27Q31 31 32 37" />
          </g>
          <ellipse className="theme-spider__body" cx="20" cy="26" rx="7" ry="9" />
          <circle className="theme-spider__body" cx="20" cy="16" r="5" />
          <circle className="theme-spider__eye" cx="18" cy="15" r="1.1" />
          <circle className="theme-spider__eye" cx="22" cy="15" r="1.1" />
        </svg>
        </div>
      </div>
      </div>
    </div>
  );
}
