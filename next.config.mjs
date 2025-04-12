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
      // Add any CDNs or external sources you're loading from
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
      // optional: remove moment locales if you're using moment
      config.plugins.push(
        new (require('webpack').IgnorePlugin)({
          resourceRegExp: /^\.\/locale$/,
          contextRegExp: /moment$/
        })
      );
    }
    return config;
  }
};

export default nextConfig;
