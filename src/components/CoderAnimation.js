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
                x={`${1 + i * 0.18}em`}
                y="0.95em"
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


// "use client";
// import { useRef } from "react";
// import { useCustomEffect1 } from "@/hooks/useCustomEffect1";

// export default function CoderAnimation() {
//   const svgRef = useRef(null);

//   useCustomEffect1(svgRef);

//   return (
//     <section className="coder content">
//       <svg>
//       {/* viewBox="0 0 1200 700"
//   width="100%"
//   height="700" */}
//         <clipPath id="clip-1" ref={svgRef}>
//             <text x="1.0em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="1.1em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="1.2em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="1.3em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="1.4em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="1.5em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="1.6em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="1.7em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="1.8em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="1.9em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="2.0em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="2.1em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="2.2em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="2.3em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="2.4em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="2.5em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="2.6em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="2.7em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="2.8em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="2.9em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="3.0em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="3.1em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="3.2em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="3.3em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="3.4em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="3.5em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="3.6em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="3.7em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="3.8em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="3.9em" y="0.95em" className="line-1 font-1 size-3">l</text>
//             <text x="4.0em" y="0.95em" className="line-1 font-1 size-3">l</text>
//           {/* <text x="1.0em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="1.2em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="1.4em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="1.6em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="1.8em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="2.0em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="2.2em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="2.4em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="2.6em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="2.8em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="3.0em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="3.2em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="3.4em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="3.6em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="3.8em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="4.0em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="4.2em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="4.4em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="4.6em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="4.8em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="5.0em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="5.2em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="5.4em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="5.6em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="5.8em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="6.0em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="6.2em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="6.4em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="6.6em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="6.8em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="7.0em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text>
//           <text x="7.2em" y="0.95em" className="line-1 font-1 size-3">
//             l
//           </text> */}
//         </clipPath>
//       </svg>
//       <div
//         className="poster poster--half"
//         style={{
//           clipPath: "url(#clip-1)",
//           "--offset-x": "0%",
//           "--offset-y": "0%",
//         }}
//       >
//         <div
//           className="poster__inner"
//           style={{ backgroundImage: 'url("/img/hero_collage.jpg")' }}
//         ></div>
//       </div>
//     </section>
//   );
// }
