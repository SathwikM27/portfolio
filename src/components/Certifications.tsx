"use client";

import { Award, ExternalLink } from "@tamagui/lucide-icons-2";
import { Paragraph, XStack, YStack } from "tamagui";
import { certifications } from "@/data/resume";
import { brand } from "@/data/theme";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  return (
    <YStack
      render="section"
      id="certifications"
      paddingHorizontal="$6"
      paddingVertical="$10"
      gap="$6"
      $md={{ paddingHorizontal: "$10" }}
    >
      <Reveal>
        <SectionHeading>Certifications</SectionHeading>
      </Reveal>

      <Reveal delay={80}>
        <XStack gap="$4" flexWrap="wrap" marginTop="$4">
          {certifications.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", flex: 1, minWidth: 280 }}
            >
              <XStack
                gap="$3"
                padding="$4"
                borderRadius="$6"
                borderWidth={1}
                borderLeftWidth={3}
                borderColor="$borderColor"
                borderLeftColor={brand.accent}
                backgroundColor="$color2"
                transition="quick"
                hoverStyle={{ backgroundColor: "$color3", borderColor: brand.accent }}
              >
                <Award size={22} color={brand.accent} style={{ flexShrink: 0, marginTop: 2 }} />
                <YStack gap="$1" flex={1}>
                  <XStack justifyContent="space-between" alignItems="flex-start" gap="$2">
                    <Paragraph fontSize="$4" fontWeight="700">
                      {item.name}
                    </Paragraph>
                    <ExternalLink size={16} color={brand.accent} opacity={0.8} style={{ flexShrink: 0, marginTop: 2 }} />
                  </XStack>
                  <Paragraph fontSize="$3" color="$color11">
                    {item.issuer}
                  </Paragraph>
                </YStack>
              </XStack>
            </a>
          ))}
        </XStack>
      </Reveal>
    </YStack>
  );
}
