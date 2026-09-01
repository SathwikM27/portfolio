"use client";

import { Paragraph, XStack, YStack } from "tamagui";
import { skillGroups } from "@/data/resume";
import { brand } from "@/data/theme";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <YStack
      render="section"
      id="skills"
      paddingHorizontal="$6"
      paddingVertical="$10"
      gap="$6"
      $md={{ paddingHorizontal: "$10" }}
    >
      <Reveal>
        <SectionHeading>Skills</SectionHeading>
      </Reveal>

      <Reveal gap="$3" marginTop="$4" delay={80}>
        {skillGroups.map((group) => (
          <XStack key={group.label} gap="$3" flexWrap="wrap" alignItems="center">
            <Paragraph
              width={140}
              fontFamily="$mono"
              fontSize="$2"
              color="$color10"
              textTransform="uppercase"
              letterSpacing={1}
            >
              {group.label}
            </Paragraph>
            <XStack gap="$2" flexWrap="wrap" flex={1}>
              {group.skills.map((skill) => (
                <XStack
                  key={skill}
                  paddingHorizontal="$3"
                  paddingVertical="$1.5"
                  borderRadius="$10"
                  borderWidth={1}
                  borderColor="$borderColor"
                  transition="quick"
                  hoverStyle={{ borderColor: brand.accent }}
                >
                  <Paragraph fontSize="$3">{skill}</Paragraph>
                </XStack>
              ))}
            </XStack>
          </XStack>
        ))}
      </Reveal>
    </YStack>
  );
}
