import './src/lib/env/env.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    optimizeCss: true
  },
  images: {
    domains: [
      'www.googletagmanager.com',
      'www.google-analytics.com',
      'c.clarity.ms',
      'x.clarity.ms',
      'c.bing.com',
      'cdn.jsdelivr.net'
    ]
  },
  webpack(config, { isServer, webpack }) {
    if (!isServer) {
      config.plugins.push(
        new webpack.IgnorePlugin({ resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/ })
      );
    }
    return config;
  }
};

export default nextConfig;
