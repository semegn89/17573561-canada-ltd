/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  basePath: '/17573561-canada-ltd',
  assetPrefix: '/17573561-canada-ltd/',
}

module.exports = nextConfig
