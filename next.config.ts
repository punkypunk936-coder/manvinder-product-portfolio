import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";
const githubBasePath = "/manvinder-product-portfolio";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  turbopack: { root: process.cwd() },
  typescript: {
    tsconfigPath: githubPages ? "./tsconfig.github.json" : "./tsconfig.json",
  },
  ...(githubPages
    ? {
        output: "export" as const,
        basePath: githubBasePath,
        assetPrefix: githubBasePath,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
