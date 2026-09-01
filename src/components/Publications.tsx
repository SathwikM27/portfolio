"use client";

import { H3, Paragraph, XStack, YStack } from "tamagui";
import { ExternalLink } from "@tamagui/lucide-icons-2";
import { publications } from "@/data/resume";
import { brand } from "@/data/theme";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Publications() {
  return (
    <YStack
      render="section"
      id="publications"
      paddingHorizontal="$6"
      paddingVertical="$10"
      gap="$6"
      $md={{ paddingHorizontal: "$10" }}
    >
      <Reveal>
        <SectionHeading>Publications</SectionHeading>
      </Reveal>

      <YStack gap="$5" marginTop="$4">
        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={i * 80}>
            <a href={pub.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <YStack
                gap="$2"
                padding="$5"
                borderWidth={1}
                borderLeftWidth={3}
                borderColor="$borderColor"
                borderLeftColor={brand.accent}
                borderRadius="$6"
                transition="quick"
                hoverStyle={{ borderColor: brand.accent, y: -2, backgroundColor: "$color2" }}
              >
                <XStack justifyContent="space-between" alignItems="flex-start" gap="$3">
                  <H3 fontSize="$5" fontFamily="$heading" flex={1}>
                    {pub.title}
                  </H3>
                  <ExternalLink size={16} color={brand.accent} opacity={0.8} />
                </XStack>
                <Paragraph fontSize="$3" color="$color11">
                  {pub.authors}
                </Paragraph>
                <Paragraph fontSize="$3" fontFamily="$mono" color="$color10">
                  {pub.venue} · {pub.volume}, {pub.pages} · {pub.date}
                </Paragraph>
                <Paragraph fontSize="$3" color="$color11" lineHeight="$4" marginTop="$2">
                  {pub.abstract}
                </Paragraph>
              </YStack>
            </a>
          </Reveal>
        ))}
      </YStack>
    </YStack>
  );
}
