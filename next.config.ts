import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "mtwebsite.io.vn"
          }
        ],
        destination: "https://www.mtwebsite.io.vn/:path*",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
