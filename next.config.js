/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Use static export mode
  distDir: 'docs',  // Output to /docs instead of .next
  images: {
    unoptimized: true, // Required for static export if using <Image>
  },
};

module.exports = nextConfig;
