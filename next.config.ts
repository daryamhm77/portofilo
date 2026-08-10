import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/projects", destination: "/work", permanent: true },
      { source: "/projects/:slug", destination: "/work/:slug", permanent: true },
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/blog/:slug", destination: "/insights/:slug", permanent: true },
      { source: "/work/mitamed", destination: "/work/mitabase", permanent: true },
      { source: "/projects/mitamed", destination: "/work/mitabase", permanent: true },
    ];
  },
};

export default nextConfig;
