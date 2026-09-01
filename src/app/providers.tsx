"use client";

import { useMemo } from "react";
import { NextThemeProvider, useRootTheme } from "@tamagui/next-theme";
import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "@/tamagui.config";

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useRootTheme({ fallback: "dark" });

  return (
    <NextThemeProvider
      defaultTheme="dark"
      onChangeTheme={(next) => setTheme(next as "light" | "dark")}
    >
      <TamaguiProvider config={tamaguiConfig} defaultTheme={theme}>
        {useMemo(() => children, [children])}
      </TamaguiProvider>
    </NextThemeProvider>
  );
}
