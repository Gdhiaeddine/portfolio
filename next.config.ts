import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    unoptimized: true, // add this to rule out optimization issues
  },

};

export default nextConfig;
