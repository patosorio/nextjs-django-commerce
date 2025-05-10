/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    optimizeCss: false
  },
  webpack: (config) => {
    config.optimization.minimizer = config.optimization.minimizer.filter(
      (minimizer) => !minimizer.constructor.name.includes('CssMinimizerPlugin')
    );
    return config;
  }
};

module.exports = nextConfig; 