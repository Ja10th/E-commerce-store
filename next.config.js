/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  future: {
    webpack5: true,
  },
  webpack: (config, {}) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
  },
};

module.exports = nextConfig;
