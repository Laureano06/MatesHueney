import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The built-in optimizer flattens PNG transparency to black when
    // resizing these product cutouts, so serve the originals as-is.
    unoptimized: true,
  },
};

export default nextConfig;
