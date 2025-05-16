"use client";
import { useRef } from "react";
import { useCustomEffect2 } from "@/hooks/useCustomEffect2";

export default function WebAnimation() {
  const webDev = useRef(null);

  useCustomEffect2(webDev);

  return (
    <section className="web-dev">
      <svg>
        <clipPath id="clip" ref={webDev}>
          <text x="1.5em" y="0.95em" className="line-1 font-3 size-3">
            &lt;
          </text>
          <text x="2.25em" y="0.95em" className="line-1 font-3 size-3">
            w
          </text>
          <text x="3.385em" y="0.95em" className="line-1 font-3 size-3">
            e
          </text>
          <text x="4.08em" y="0.95em" className="line-1 font-3 size-3">
            b
          </text>
          <text x="4.85em" y="0.95em" className="line-1 font-3 size-3">
            &gt;
          </text>
        </clipPath>
        <clipPath id="clip-0">
          <text x="1.5em" y="0.95em" className="line-1 font-3 size-3">
            &lt;
          </text>
          <text x="2.2em" y="0.95em" className="line-1 font-3 size-3">
            /
          </text>
          <text x="2.9em" y="0.95em" className="line-1 font-3 size-3">
            d
          </text>
          <text x="3.7em" y="0.95em" className="line-1 font-3 size-3">
            e
          </text>
          <text x="4.4em" y="0.95em" className="line-1 font-3 size-3">
            v
          </text>
          <text x="5.32em" y="0.95em" className="line-1 font-3 size-3">
            &gt;
          </text>
        </clipPath>
      </svg>
      <div
        className="poster poster--half"
        style={{ clipPath: 'url(#clip);--offset-x:10%;--offset-y:70%' }}
      >
        <div
          className="poster__inner"
          style={{ backgroundImage: 'url("/img/bckground_copy.jpg")' }}
        ></div>
      </div>
      <div
        className="poster poster--half"
        style={{ clipPath: 'url(#clip-0);--offset-x:10%;--offset-y:10%' }}
      >
        <div
          className="poster__inner"
          style={{ backgroundImage: 'url("/img/bckground_copy_2.jpg")' }}
        ></div>
      </div>
    </section>
  );
}
