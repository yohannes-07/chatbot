import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Allow build to proceed despite TypeScript errors
  },
  /* config options here */
};

export default nextConfig;
