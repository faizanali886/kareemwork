/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
      "images.unsplash.com",
      "logos-world.net",
      "www.bettertechtips.com",
    ],
  },
  output: 'export', // Ensure this is set for static export
};

module.exports = nextConfig;
