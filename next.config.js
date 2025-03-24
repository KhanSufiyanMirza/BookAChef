/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Enable static HTML export
  distDir: 'out',    // Output directory
  assetPrefix: process.env.NODE_ENV === 'production' ? '/BookAChef' : '',  // GitHub Pages repo name
  basePath: process.env.NODE_ENV === 'production' ? '/BookAChef' : '',  // GitHub Pages repo name
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
  trailingSlash: true,  // Add trailing slashes for GitHub Pages compatibility
};

module.exports = nextConfig; 