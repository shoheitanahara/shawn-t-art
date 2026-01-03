/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // unoptimized: true, 
    minimumCacheTTL: 60 * 60 * 24 * 30,  // unoptimized: trueの代わりに、キャッシュの有効期限を30日に設定
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'opensea.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.seadn.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;