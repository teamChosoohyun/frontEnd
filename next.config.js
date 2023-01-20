/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:api*",
  //       destination: "http://localhost:8080/api/:path*",
  //     },
  //   ];
  // },
  images: {
    domains: ["k.kakaocdn.net"],
  },
};

module.exports = nextConfig;
