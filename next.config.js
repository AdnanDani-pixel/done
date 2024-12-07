/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader'],
      type: 'javascript/auto'
    });
    return config;
  },
  eslint: {
   ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;