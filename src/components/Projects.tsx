"use client";

import { Card, H3, Paragraph, XStack, YStack } from "tamagui";
import { ExternalLink } from "@tamagui/lucide-icons-2";
import { projects } from "@/data/resume";
import { brand } from "@/data/theme";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <YStack
      render="section"
      id="projects"
      paddingHorizontal="$6"
      paddingVertical="$10"
      gap="$6"
      $md={{ paddingHorizontal: "$10" }}
    >
      <Reveal>
        <SectionHeading>Projects</SectionHeading>
      </Reveal>

      <XStack gap="$4" flexWrap="wrap" marginTop="$4">
        {projects.map((project, i) => {
          const CardInner = (
            <Card
              borderWidth={1}
              borderColor="$borderColor"
              padding="$5"
              width="100%"
              gap="$3"
              transition="quick"
              hoverStyle={
                project.href
                  ? { scale: 1.015, borderColor: brand.accent, y: -2 }
                  : undefined
              }
            >
              <XStack justifyContent="space-between" alignItems="center">
                <H3 fontSize="$5" fontFamily="$heading">
                  {project.title}
                </H3>
                {project.href ? <ExternalLink size={16} color={brand.accent} opacity={0.8} /> : null}
              </XStack>
              <YStack gap="$1.5">
                {project.description.map((line) => (
                  <Paragraph key={line} fontSize="$3" color="$color11" lineHeight="$4">
                    · {line}
                  </Paragraph>
                ))}
              </YStack>
              <XStack gap="$2" flexWrap="wrap" marginTop="$2">
                {project.tags.map((tag) => (
                  <XStack
                    key={tag}
                    paddingHorizontal="$2.5"
                    paddingVertical="$1"
                    borderRadius="$10"
                    backgroundColor="$color3"
                  >
                    <Paragraph fontSize="$1" fontFamily="$mono" color={brand.accent}>
                      {tag}
                    </Paragraph>
                  </XStack>
                ))}
              </XStack>
            </Card>
          );

          return (
            <Reveal
              key={project.title}
              delay={i * 80}
              width="100%"
              $sm={{ width: "calc(50% - 8px)" }}
              $lg={{ width: "calc(33.333% - 11px)" }}
            >
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", width: "100%", display: "contents" }}
                >
                  {CardInner}
                </a>
              ) : (
                CardInner
              )}
            </Reveal>
          );
        })}
      </XStack>
    </YStack>
  );
}
