"use client";

import { useThemeSetting } from "@tamagui/next-theme";
import { Button } from "tamagui";
import { Moon, Sun } from "@tamagui/lucide-icons-2";

export function ThemeToggle() {
  const themeSetting = useThemeSetting();
  const isDark = themeSetting.resolvedTheme === "dark";

  return (
    <Button
      size="$3"
      circular
      chromeless
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      icon={isDark ? Sun : Moon}
      onPress={() => themeSetting.set(isDark ? "light" : "dark")}
    />
  );
}
