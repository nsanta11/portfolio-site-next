// components/current-theme/WinterScene.js
//
// Snowy hills and pine trees that sit between <main> and the footer.
// Static and decorative. Layers, back to front: far hills, trees, snow bank.
import "./winter.css";

const HILLS_BACK = [
  { fill: "#262a5a", d: "M0 120C200 60 380 90 560 80C760 70 900 30 1100 60C1250 82 1360 70 1440 50L1440 200L0 200Z" },
  { fill: "#8ea6c9", opacity: 0.4, d: "M0 150C180 110 340 130 520 125C720 118 860 90 1040 110C1220 130 1340 120 1440 100L1440 200L0 200Z" },
];
const HILL_FRONT = "M0 175C240 150 420 170 640 162C860 154 1060 140 1240 155C1340 163 1400 160 1440 152L1440 200L0 200Z";

// left = % across the page (tree centre), h = tree height in px at full width
// (it scales down with the viewport), b = px up from the bottom.
// `extra` trees are hidden on small screens.
const TREES = [
  { left: 4, h: 110, b: 26 },
  { left: 8.5, h: 78, b: 22 },
  { left: 12.5, h: 124, b: 30, extra: true },
  { left: 17, h: 60, b: 20, extra: true },
  { left: 46, h: 54, b: 40, extra: true },
  { left: 50, h: 76, b: 38, extra: true },
  { left: 79, h: 66, b: 30, extra: true },
  { left: 84, h: 118, b: 28 },
  { left: 89, h: 84, b: 24 },
  { left: 93.5, h: 112, b: 22 },
];

function Pine({ left, h, b, extra }) {
  return (
    <svg
      className={`theme-scene__tree${extra ? " theme-scene__tree--extra" : ""}`}
      viewBox="0 0 40 60"
      style={{ "--x": `${left}%`, "--hn": h, "--b": `${b}px` }}
    >
      <rect x="17" y="50" width="6" height="10" fill="#2f2630" />
      <polygon points="20,26 37,52 3,52" fill="#1b4b4a" />
      <polygon points="20,12 32,36 8,36" fill="#1f5553" />
      <polygon points="20,2 29,22 11,22" fill="#235e5b" />
      <g fill="#eef4fb">
        <polygon points="20,26 26,35.1 23,33.5 20,36 17,33.5 14,35.1" />
        <polygon points="20,12 24.8,21.6 22.5,20.5 20,23 17.5,20.5 15.2,21.6" />
        <polygon points="20,2 24,11 22,10 20,12 18,10 16,11" />
      </g>
    </svg>
  );
}

export default function WinterScene() {
  return (
    <div className="theme-scene" aria-hidden="true">
      <svg className="theme-scene__hills" viewBox="0 0 1440 200" preserveAspectRatio="none">
        {HILLS_BACK.map((h, i) => (
          <path key={i} d={h.d} fill={h.fill} opacity={h.opacity ?? 1} />
        ))}
      </svg>
      {TREES.map((t, i) => (
        <Pine key={i} {...t} />
      ))}
      <svg className="theme-scene__hills" viewBox="0 0 1440 200" preserveAspectRatio="none">
        <path d={HILL_FRONT} fill="#dce8f5" opacity="0.88" />
      </svg>
    </div>
  );
}
