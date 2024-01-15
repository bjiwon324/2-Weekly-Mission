/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['reactjs.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'codeit-images.codeit.com',
        port: '',
        pathname: '/badges/**',
      },
      {
        protocol: 'https',
        hostname: 'codeit-front.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'tanstack.com',
        port: '',
        pathname: '/build/**',
      },
      {
        protocol: 'https',
        hostname: 's.pstatic.net',
        port: '',
        pathname: '/static/**',
      },
      {
        protocol: 'https',
        hostname: 'storybook.js.org',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'codeit-frontend.codeit.com',
        port: '',
        pathname: '/static/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.vercel.com',
        port: '',
        pathname: '/image/**',
      },

      {
        protocol: 'https',
        hostname: 'jasonwatmore.com',
        port: '',
        pathname: '/_content/**',
      },
      {
        protocol: 'https',
        hostname: 'codeit.kr',
        port: '',
        pathname: '/static/**',
      },
    ],
  },
};

module.exports = nextConfig;
