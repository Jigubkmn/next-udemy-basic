import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 画像のURLを事前に許可する
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.dog.ceo",
      },
    ],
  }
};

export default nextConfig;
