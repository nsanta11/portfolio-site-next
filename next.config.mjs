/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true, // needed for GitHub Pages
    },
    basePath: "/portfolio-site-next", 
    assetPrefix: "/portfolio-site-next",
  };
  
  export default nextConfig;
  