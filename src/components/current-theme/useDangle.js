// components/current-theme/useDangle.js
"use client";
// Shared by the seasonal themes: lowers an ornament on a thread as the page
// scrolls, and lets it be dragged and swing back like a pendulum.
import { useEffect } from "react";

const MAX_DROP = 260; // px the spider can lower itself
const DROP_PER_SCROLL = 0.2; // px of drop per px scrolled
const EASE = 0.12; // 0-1, lower = floatier scroll follow
const SPRING = 0.06; // pull back toward rest after a drag
const DAMPING = 0.9; // 0-1, lower = less swing after release

export default function useDangle(spiderRef, threadRef, { maxDrop = MAX_DROP, dropPerScroll = DROP_PER_SCROLL } = {}) {
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

    const target = () => Math.min(window.scrollY * dropPerScroll, maxDrop);

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
  }, [spiderRef, threadRef, maxDrop, dropPerScroll]);
}
