"use client";

import { Paragraph, XStack } from "tamagui";
import { profile } from "@/data/resume";
import { brand } from "@/data/theme";

export function Footer() {
  return (
    <XStack
      render="footer"
      paddingHorizontal="$6"
      paddingVertical="$5"
      borderTopWidth={2}
      borderTopColor={brand.accent}
      justifyContent="space-between"
      flexWrap="wrap"
      gap="$2"
      $md={{ paddingHorizontal: "$10" }}
    >
      <Paragraph fontSize="$2" color="$color10">
        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
      </Paragraph>
      <Paragraph fontSize="$2" color="$color10">
        Built with Next.js, TypeScript &amp; Tamagui.
      </Paragraph>
    </XStack>
  );
}