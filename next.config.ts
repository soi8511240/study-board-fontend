import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    swcMinify: true,
  /* config options here */
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "http://localhost:8001/api/:path*",
            },
        ];
    },
};

export default nextConfig;
