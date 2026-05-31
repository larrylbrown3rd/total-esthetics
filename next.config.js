/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  devIndicators: false,
  // Polling + ignored paths reduce EMFILE watcher failures on macOS (dev 404s)
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/.next/**',
          '**/public/**',
          '**/_archive/**',
        ],
      };
    }
    return config;
  },
  transpilePackages: ['three'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'totalesthetics.com' }],
        destination: 'https://www.total-esthetics.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.totalesthetics.com' }],
        destination: 'https://www.total-esthetics.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
