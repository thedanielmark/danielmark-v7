import './src/lib/env/env.mjs';
import { IgnorePlugin } from 'webpack';

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
      // Add more if you're pulling images from other sources
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push(
        new IgnorePlugin({ resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/ })
      );
    }
    return config;
  }
};

export default nextConfig;
