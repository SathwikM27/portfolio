import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["tamagui", "@tamagui/config", "@tamagui/next-theme", "@tamagui/lucide-icons-2"],
  turbopack: {
    root: process.cwd(),
    resolveAlias: {
      "react-native$": "react-native-web",
      "react-native-svg": "react-native-svg-web",
    },
  },
};

export default nextConfig;
