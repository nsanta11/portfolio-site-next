// components/current-theme/Winter.js
"use client";
import { useRef } from "react";
import useDangle from "./useDangle";
import "./winter.css";

// Three cut-paper snowflake designs. Each path is one arm pointing up from the
// origin; evenodd punches the little shapes through as paper cut-outs.
const DESIGNS = {
  // six branching arms with a diamond cut-out
  fern: {
    arms: [0, 60, 120, 180, 240, 300],
    d:
      "M-4 -5L-4 -17L-13 -27L-10 -30L-4 -24L-4 -33L-10 -41L-7.5 -43.5L-3 -39L-3 -46L0 -50L3 -46L3 -39L7.5 -43.5L10 -41L4 -33L4 -24L10 -30L13 -27L4 -17L4 -5Z" +
      "M0 -12L1.8 -16L0 -20L-1.8 -16Z",
  },
  // six spear-tipped arms with round holes
  spear: {
    arms: [0, 60, 120, 180, 240, 300],
    d:
      "M-3 -5L-3 -30L-10 -38L0 -50L10 -38L3 -30L3 -5Z" +
      "M0 -14m-1.8 0a1.8 1.8 0 1 0 3.6 0a1.8 1.8 0 1 0 -3.6 0Z" +
      "M0 -24m-1.4 0a1.4 1.4 0 1 0 2.8 0a1.4 1.4 0 1 0 -2.8 0Z" +
      "M0 -39L2.4 -35L-2.4 -35Z",
  },
  // eight chunky petal arms with a triangle cut-out
  petal: {
    arms: [0, 45, 90, 135, 180, 225, 270, 315],
    d:
      "M-3.5 -6L-7 -22L-3.5 -32L0 -48L3.5 -32L7 -22L3.5 -6Z" +
      "M0 -15L3 -24L-3 -24Z",
  },
};

function Snowflake({ design, className }) {
  const { arms, d } = DESIGNS[design];
  return (
    <svg className={className} viewBox="-52 -52 104 104">
      <g className="theme-flake__paper">
        {arms.map((deg) => (
          <path key={deg} d={d} fillRule="evenodd" transform={`rotate(${deg})`} />
        ))}
        <polygon className="theme-flake__fold" points="0,-9 7.8,-4.5 7.8,4.5 0,9 -7.8,4.5 -7.8,-4.5" />
      </g>
    </svg>
  );
}

// One flake hanging from the top on its own thread.
function HangingFlake({ design, className, drop }) {
  const flakeRef = useRef(null);
  const threadRef = useRef(null);
  useDangle(flakeRef, threadRef, drop);

  return (
    <>
      <span className={`theme-flake__thread ${className}`} ref={threadRef}></span>
      <div className={`theme-flake ${className}`} ref={flakeRef}>
        <div className="theme-flake__swing">
          <Snowflake design={design} className="theme-flake__svg" />
        </div>
      </div>
    </>
  );
}

export default function Winter() {
  return (
    <div className="theme-winter" aria-hidden="true">
      <div className="theme-flake-clip">
        <HangingFlake design="fern" className="theme-flake--a" drop={{ maxDrop: 260, dropPerScroll: 0.2 }} />
        <HangingFlake design="spear" className="theme-flake--b" drop={{ maxDrop: 180, dropPerScroll: 0.12 }} />
        <HangingFlake design="petal" className="theme-flake--c" drop={{ maxDrop: 340, dropPerScroll: 0.28 }} />
      </div>
    </div>
  );
}
