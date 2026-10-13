const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {(phase: string) => import('next').NextConfig} */
module.exports = (phase) => ({
  output: 'export', // Use static export mode
  // Production builds go to /docs for GitHub Pages; the dev server keeps its
  // own .next folder so it never wipes docs/ (CNAME, .nojekyll).
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next' : 'docs',
  images: {
    unoptimized: true, // Required for static export if using <Image>
  },
});
