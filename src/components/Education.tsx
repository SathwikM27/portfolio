"use client";

import { GraduationCap } from "@tamagui/lucide-icons-2";
import { Paragraph, XStack, YStack } from "tamagui";
import { education } from "@/data/resume";
import { brand } from "@/data/theme";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <YStack
      render="section"
      id="education"
      paddingHorizontal="$6"
      paddingVertical="$10"
      gap="$6"
      $md={{ paddingHorizontal: "$10" }}
    >
      <Reveal>
        <SectionHeading>Education</SectionHeading>
      </Reveal>

      <Reveal delay={80}>
        <XStack gap="$4" flexWrap="wrap" marginTop="$4">
          {education.map((item) => (
            <XStack
              key={item.school}
              gap="$3"
              flex={1}
              minWidth={280}
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
              <GraduationCap size={22} color={brand.accent} style={{ flexShrink: 0, marginTop: 2 }} />
              <YStack gap="$1">
                <Paragraph fontSize="$4" fontWeight="700">
                  {item.degree}
                </Paragraph>
                <Paragraph fontSize="$3" color="$color11">
                  {item.school}
                </Paragraph>
                <Paragraph fontSize="$2" fontFamily="$mono" color="$color10">
                  {item.location} · {item.year}
                </Paragraph>
              </YStack>
            </XStack>
          ))}
        </XStack>
      </Reveal>
    </YStack>
  );
}
