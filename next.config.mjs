/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  eslint: {
    dirs: ['.']
  },
  poweredByHeader: false,
  trailingSlash: false,

  // Enable logging
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};

export default nextConfig;
