// next.config.js
const nextConfig = {
  async redirects() {
    return [
      { source: "/how-it-works", destination: "/pilot", permanent: false }, // 307/302
    ];
  },
};
module.exports = nextConfig;
