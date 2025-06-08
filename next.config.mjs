/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Required for static hosting like GitHub Pages or Netlify
    images: {
      unoptimized: true, // Needed since Next.js image optimization doesn't work without a server
    },
  };
  
  export default nextConfig;
  