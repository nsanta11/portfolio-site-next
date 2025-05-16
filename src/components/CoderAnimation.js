"use client";
import { useRef } from "react";
import { useCustomEffect1 } from "@/hooks/useCustomEffect1";

export default function CoderAnimation() {
  const svgRef = useRef(null);

  useCustomEffect1(svgRef);

  return (
    <section className="coder content">
			<svg>
				<clipPath id="clip-1" ref={svgRef}>				
					<text x="1.0em" y="0.95em" className="line-1 font-1 size-3">x</text>
					<text x="1.25em" y="0.95em" className="line-1 font-1 size-3">x</text>
					<text x="1.5em" y="0.95em" className="line-1 font-1 size-3">o</text>
					<text x="1.75em" y="0.95em" className="line-1 font-1 size-3">o</text>
					<text x="2.0em" y="0.95em" className="line-1 font-1 size-3">x</text>
					<text x="2.25em" y="0.95em" className="line-1 font-1 size-3">x</text>
					<text x="2.5em" y="0.95em" className="line-1 font-1 size-3">o</text>
					<text x="2.75em" y="0.95em" className="line-1 font-1 size-3">o</text>
					<text x="3.0em" y="0.95em" className="line-1 font-1 size-3">x</text>
					<text x="3.25em" y="0.95em" className="line-1 font-1 size-3">x</text>
					<text x="3.5em" y="0.95em" className="line-1 font-1 size-3">o</text>
					<text x="3.75em" y="0.95em" className="line-1 font-1 size-3">o</text>
					<text x="4.0em" y="0.95em" className="line-1 font-1 size-3">x</text>
					<text x="4.25em" y="0.95em" className="line-1 font-1 size-3">x</text>
					<text x="4.5em" y="0.95em" className="line-1 font-1 size-3">o</text>
					<text x="4.75em" y="0.95em" className="line-1 font-1 size-3">o</text>
					<text x="5.0em" y="0.95em" className="line-1 font-1 size-3">x</text>
					<text x="5.25em" y="0.95em" className="line-1 font-1 size-3">x</text>
					<text x="5.5em" y="0.95em" className="line-1 font-1 size-3">o</text>
					<text x="5.75em" y="0.95em" className="line-1 font-1 size-3">x</text>
					<text x="6.0em" y="0.95em" className="line-1 font-1 size-3">o</text>
					<text x="6.25em" y="0.95em" className="line-1 font-1 size-3">x</text>
					<text x="6.5em" y="0.95em" className="line-1 font-1 size-3">o</text>
					<text x="6.75em" y="0.95em" className="line-1 font-1 size-3">x</text>
					<text x="7.00em" y="0.95em" className="line-1 font-1 size-3">o</text>
				</clipPath>

			</svg>
			<div className="poster poster--half" style={{ clipPath: 'url(#clip-1);--offset-x:15%;--offset-y:19%' }}>
				<div className="poster__inner"  style={{ backgroundImage: 'url("/img/cartoon_comp.png")' }}></div>
			</div>

    </section>
  );
}
