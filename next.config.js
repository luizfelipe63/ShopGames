/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: '.media.rawg.io/**'
    //   }
    // ],
    unoptimized: false,
    domains: ['files.stripe.com']
  }
}

module.exports = nextConfig
