"use client";

import { useRef } from "react";
import { useCustomEffect1 } from "@/hooks/useCustomEffect1";

export default function CoderAnimation() {
  const svgRef = useRef(null);

  useCustomEffect1(svgRef);

  return (
    <section className="coder content">
      <svg aria-hidden="true">
        <clipPath id="clip-1" ref={svgRef}>
            {Array.from({ length: 36 }, (_, i) => (
              <text
                key={i}
                x={`${1.6 + i * 0.18}em`}
                y="0.8em"
                className="line-1 font-1 size-3"
              >
                l
              </text>
            ))}
        </clipPath>
      </svg>

      <div
        className="poster poster--half"
        style={{
          clipPath: "url(#clip-1)",
          "--offset-x": "0%",
          "--offset-y": "0%",
        }}
      >
        <div
          className="poster__inner"
          style={{
            backgroundImage: 'url("/img/hero_collage.jpg")',
          }}
        ></div>
      </div>
    </section>
  );
}