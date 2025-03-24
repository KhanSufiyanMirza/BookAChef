/** @type {import('next').NextConfig} */
const withExportImages = require('next-export-optimize-images');

const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Enable static HTML export
  images: {
    loader: 'custom',
    loaderFile: './src/lib/image-loader.ts',
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
    // The next-export-optimize-images plugin handles image optimization itself
  },
  // GitHub Pages will automatically handle the basePath with actions/configure-pages@v5
};

module.exports = withExportImages(nextConfig); 