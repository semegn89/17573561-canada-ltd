/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enable static export for GitHub Pages
  trailingSlash: true, // Required for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/17573561-canada-ltd' : '', // Your repo name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/17573561-canada-ltd' : '', // Your repo name
}

module.exports = nextConfig
