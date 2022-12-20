/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/user",
        destination: "http://3.34.239.208:2020/user",
      },
      {
        source: "/lecturer",
        destination: "http://3.34.239.208:2020/lecturer",
      },
      {
        source: "/update",
        destination: "http://3.34.239.208:2020/update",
      },
    ];
  },
  images: {
    domains: ["k.kakaocdn.net"],
  },
};

module.exports = nextConfig;
