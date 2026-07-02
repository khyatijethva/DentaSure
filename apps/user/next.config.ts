import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@dentasure/ui"],
  webpack(config) {
    // Next.js nests rules inside oneOf — walk all levels to exclude SVG from default handlers
    function excludeSvg(rules: any[]) {
      for (const rule of rules) {
        if (rule.test instanceof RegExp && rule.test.test(".svg")) {
          rule.exclude = /\.svg$/i;
        }
        if (Array.isArray(rule.oneOf)) excludeSvg(rule.oneOf);
      }
    }
    excludeSvg(config.module.rules);

    // Let @svgr/webpack handle all SVG imports as React components
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
