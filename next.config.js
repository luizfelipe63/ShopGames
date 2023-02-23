/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: false,
    domains: ['files.stripe.com']
  }
}

module.exports = nextConfig
