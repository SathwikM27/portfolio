"use client";

import { Button, H1, H2, Paragraph, XStack, YStack } from "tamagui";
import { profile } from "@/data/resume";
import { brand } from "@/data/theme";

export function Hero() {
  return (
    <YStack
      render="section"
      id="home"
      minHeight="90vh"
      justifyContent="center"
      alignItems="flex-start"
      gap="$4"
      paddingHorizontal="$6"
      paddingVertical="$10"
      maxWidth={900}
      position="relative"
      overflow="hidden"
      $md={{ paddingHorizontal: "$10" }}
    >
      <YStack
        position="absolute"
        top={-120}
        left={-120}
        width={420}
        height={420}
        borderRadius={999}
        backgroundColor={brand.accent}
        opacity={0.16}
        style={{ filter: "blur(120px)" }}
        pointerEvents="none"
      />

      <YStack
        gap="$4"
        opacity={1}
        y={0}
        enterStyle={{ opacity: 0, y: 24 }}
        transition="slow"
      >
        <Paragraph color={brand.accent} fontFamily="$mono" fontSize="$5" letterSpacing={2}>
          HELLO, I&apos;M
        </Paragraph>
        <H1 fontFamily="$heading" fontSize="$12" $md={{ fontSize: "$14" }} lineHeight="$12">
          {profile.name}
        </H1>
        <H2 fontFamily="$body" fontWeight="400" color="$color11" fontSize="$8">
          {profile.tagline}
        </H2>
        <Paragraph fontSize="$4" color="$color10">
          Born in {profile.location.born}. Based in {profile.location.based}.
        </Paragraph>
        <Paragraph fontSize="$5" color="$color11" maxWidth={640} lineHeight="$6">
          {profile.summary}
        </Paragraph>
        <XStack gap="$3" flexWrap="wrap" marginTop="$4">
          <a href="#experience" style={{ textDecoration: "none" }}>
            <Button
              size="$4"
              backgroundColor={brand.accent}
              color="white"
              borderWidth={0}
              transition="quick"
              hoverStyle={{ backgroundColor: brand.accent, scale: 1.04 }}
              pressStyle={{ backgroundColor: brand.accent, scale: 0.97 }}
              style={{ boxShadow: `0 8px 24px -8px ${brand.accent}` }}
            >
              Experience
            </Button>
          </a>
          <a href="#projects" style={{ textDecoration: "none" }}>
            <Button
              size="$4"
              variant="outlined"
              borderColor={brand.accent}
              transition="quick"
              hoverStyle={{ borderColor: brand.accent, backgroundColor: "$color3" }}
            >
              Projects
            </Button>
          </a>
          <a id="download-resume" href={profile.resumeFile} download style={{ textDecoration: "none" }}>
            <Button size="$4" chromeless transition="quick" hoverStyle={{ backgroundColor: `${brand.accent}22` }}>
              Download Resume
            </Button>
          </a>
        </XStack>
      </YStack>
    </YStack>
  );
}
