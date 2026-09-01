"use client";

import { H3, Paragraph, XStack, YStack } from "tamagui";
import { experience } from "@/data/resume";
import { brand } from "@/data/theme";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <YStack
      render="section"
      id="experience"
      paddingHorizontal="$6"
      paddingVertical="$10"
      gap="$6"
      $md={{ paddingHorizontal: "$10" }}
    >
      <Reveal>
        <SectionHeading>Experience</SectionHeading>
      </Reveal>

      <YStack gap="$7" marginTop="$4">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 60}>
            <XStack gap="$4" alignItems="flex-start" position="relative">
              <YStack
                width={10}
                alignItems="center"
                display="none"
                $sm={{ display: "flex" }}
                alignSelf="stretch"
              >
                <YStack
                  width={10}
                  height={10}
                  borderRadius={999}
                  backgroundColor={brand.accent}
                  marginTop="$2"
                  flexShrink={0}
                />
                {i < experience.length - 1 ? (
                  <YStack width={2} flex={1} backgroundColor="$borderColor" marginTop="$2" />
                ) : null}
              </YStack>
              <YStack
                gap="$2"
                flex={1}
                padding="$4"
                borderRadius="$6"
                borderWidth={1}
                borderColor="$borderColor"
                transition="quick"
                hoverStyle={{ borderColor: brand.accent, backgroundColor: "$color2" }}
              >
                <XStack justifyContent="space-between" flexWrap="wrap" gap="$2">
                  <H3 fontSize="$6" fontFamily="$heading">
                    {job.role} · {job.company}
                  </H3>
                  <Paragraph fontFamily="$mono" fontSize="$3" color="$color10">
                    {job.start} — {job.end}
                    {job.location ? ` · ${job.location}` : ""}
                  </Paragraph>
                </XStack>
                <YStack gap="$1.5" marginTop="$1">
                  {job.highlights.map((line) => (
                    <Paragraph key={line} fontSize="$4" color="$color11" lineHeight="$5">
                      · {line}
                    </Paragraph>
                  ))}
                </YStack>
              </YStack>
            </XStack>
          </Reveal>
        ))}
      </YStack>
    </YStack>
  );
}
