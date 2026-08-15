import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.GITHUB_PAGES
    ? {
        output: "export" as const,
      }
    : {}),
};

export default nextConfig;
