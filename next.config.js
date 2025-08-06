/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "2b6c2b8761cef85bd0c4fb2b39b8bafe.r2.cloudflarestorage.com",
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
    ],
    domains: ["pub-c778066b804f40ed9a3dead9fa183469.r2.dev"],
  },
}

module.exports = nextConfig
