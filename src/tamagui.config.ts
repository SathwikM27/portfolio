import { createTamagui } from "tamagui";
import { defaultConfig, createSystemFont } from "@tamagui/config/v5";
import { animationsCSS } from "@tamagui/config/v5-css";

const monoFont = createSystemFont({
  font: {
    family:
      '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace',
  },
});

const tamaguiConfig = createTamagui({
  ...defaultConfig,
  animations: animationsCSS,
  fonts: {
    ...defaultConfig.fonts,
    mono: monoFont,
  },
  settings: {
    ...defaultConfig.settings,
    onlyAllowShorthands: false,
  },
});

export type AppConfig = typeof tamaguiConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default tamaguiConfig;
