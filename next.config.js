/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/user",
        destination: "http://localhost:8080/user",
      },
      {
        source: "/lecturer",
        destination: "http://localhost:8080/lecturer",
      },
      {
        source: "/update",
        destination: "http://localhost:8080/update",
      },
    ];
  },
  images: {
    domains: ["k.kakaocdn.net"],
  },
};

module.exports = nextConfig;
