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
const EASE = 0.12; // 0-1, lower = floatier scroll follow
const SPRING = 0.06; // pull back toward rest after a drag
const DAMPING = 0.9; // 0-1, lower = less swing after release

export default function Halloween() {
  const spiderRef = useRef(null);
  const threadRef = useRef(null);

  useEffect(() => {
    const el = spiderRef.current;
    const thread = threadRef.current;
    if (!el || !thread) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let drop = 0; // scroll-driven rest offset
    let px = 0; // drag offset from rest
    let py = 0;
    let vx = 0;
    let vy = 0;
    let dragging = false;
    let grabX = 0;
    let grabY = 0;
    let frame = 0;

    const target = () => Math.min(window.scrollY * DROP_PER_SCROLL, MAX_DROP);

    // The thread is anchored at the top of the box, directly above the
    // spider's resting spot, and always ends at the spider's head.
    const render = () => {
      const anchorX = el.offsetLeft + el.offsetWidth / 2;
      const headY = el.offsetTop + drop + py;
      const angle = -Math.atan2(px, headY);
      thread.style.left = `${anchorX}px`;
      thread.style.height = `${Math.hypot(px, headY).toFixed(1)}px`;
      thread.style.transform = `rotate(${angle}rad)`;
      el.style.transform = `translate3d(${px.toFixed(1)}px, ${(drop + py).toFixed(1)}px, 0) rotate(${angle}rad)`;
    };

    const tick = () => {
      const goal = target();
      drop = reduce ? goal : drop + (goal - drop) * EASE;

      if (!dragging) {
        if (reduce) {
          px = py = vx = vy = 0;
        } else {
          vx = (vx - px * SPRING) * DAMPING;
          vy = (vy - py * SPRING) * DAMPING;
          px += vx;
          py += vy;
        }
      }
      render();

      const moving =
        dragging ||
        Math.abs(goal - drop) > 0.1 ||
        Math.abs(px) + Math.abs(py) > 0.1 ||
        Math.abs(vx) + Math.abs(vy) > 0.05;
      frame = moving ? requestAnimationFrame(tick) : 0;
    };
    const kick = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const onDown = (e) => {
      dragging = true;
      grabX = e.clientX - px;
      grabY = e.clientY - py;
      el.setPointerCapture(e.pointerId);
      el.classList.add("is-dragging");
      kick();
    };
    const onMove = (e) => {
      if (!dragging) return;
      const parent = el.offsetParent;
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      // keep the spider inside the visible area under the header
      const minX = -el.offsetLeft;
      const maxX = parent.clientWidth - el.offsetLeft - w;
      const minY = -el.offsetTop - drop;
      const maxY = parent.clientHeight - el.offsetTop - drop - h;
      const nx = Math.min(Math.max(e.clientX - grabX, minX), maxX);
      const ny = Math.min(Math.max(e.clientY - grabY, minY), maxY);
      vx = nx - px;
      vy = ny - py;
      px = nx;
      py = ny;
      kick();
    };
    const onUp = (e) => {
      if (!dragging) return;
      dragging = false;
      if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
      el.classList.remove("is-dragging");
      kick();
    };

    drop = target();
    render();
    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick);
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
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
      <span className="theme-spider__thread" ref={threadRef}></span>
      <div className="theme-spider" ref={spiderRef}>
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
