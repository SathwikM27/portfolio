import { H2, XStack } from "tamagui";
import { brand } from "@/data/theme";

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <XStack alignItems="center" gap="$3">
      <XStack width={28} height={3} borderRadius="$10" backgroundColor={brand.accent} />
      <H2 fontFamily="$heading">{children}</H2>
    </XStack>
  );
}
