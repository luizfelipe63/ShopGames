/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: false,
    domains: ['files.stripe.com', 'media.rawg.io']
  }
}

module.exports = nextConfig
