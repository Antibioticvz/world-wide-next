/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placekitten.com',
      },
    ],
  },
  experimental: {
    reactCompiler: true,
    ppr: 'incremental',
  },
}

export default nextConfig
