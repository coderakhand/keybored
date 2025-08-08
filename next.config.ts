import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        pathname: "/9.x/thumbs/**",
      },
    ],
    dangerouslyAllowSVG: true,
    
  },
};

export default nextConfig;
