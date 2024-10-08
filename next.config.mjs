/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Ensure static export
    distDir: 'out',    // Export will be in 'out' folder by default
    images: {
      unoptimized: true,  // Since GitHub Pages doesn't support Next.js image optimization
    },
    // Ensure the base path points to the GitHub Pages URL
    basePath: process.env.NODE_ENV === 'production' ? '/Portfo' : '', 
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfo/' : '',
  };
  
  export default nextConfig;
  