/** @type {import('next').NextConfig} */
const withExportImages = require('next-export-optimize-images');

const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Enable static HTML export
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
    unoptimized: true,  // Required for static export
  },
  // GitHub Pages will automatically handle the basePath with actions/configure-pages@v5
};

module.exports = withExportImages(nextConfig); 