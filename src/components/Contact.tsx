"use client";

import { Button, H2, Paragraph, XStack, YStack } from "tamagui";
import { Github, Linkedin, Mail, Twitter } from "@tamagui/lucide-icons-2";
import { profile } from "@/data/resume";
import { brand } from "@/data/theme";
import { Reveal } from "./Reveal";

const socialLinks = [
  { href: profile.socials.github, label: "GitHub", icon: Github, id: "github-link" },
  { href: profile.socials.linkedin, label: "LinkedIn", icon: Linkedin, id: "linkedin-link" },
  { href: profile.socials.twitter, label: "Twitter", icon: Twitter, id: "twitter-link" },
  { href: profile.socials.email, label: "Email", icon: Mail, id: "email-link" },
];

export function Contact() {
  return (
    <YStack
      render="section"
      id="contact"
      paddingHorizontal="$6"
      paddingVertical="$10"
      gap="$5"
      alignItems="center"
      $md={{ paddingHorizontal: "$10" }}
    >
      <Reveal gap="$5" alignItems="center">
        <H2 fontFamily="$heading">
          Let&apos;s <span style={{ color: brand.accent }}>Connect</span>
        </H2>
        <Paragraph fontSize="$5" color="$color11" maxWidth={520} textAlign="center">
          Feel free to reach out through any of the channels below.
        </Paragraph>

        <XStack gap="$4" flexWrap="wrap" justifyContent="center" marginTop="$3">
          {socialLinks.map(({ href, label, icon: Icon, id }) => (
            <a
              key={label}
              id={id}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              style={{ textDecoration: "none" }}
            >
              <Button
                size="$5"
                circular
                chromeless
                icon={Icon}
                transition="quick"
                hoverStyle={{ backgroundColor: brand.accent, scale: 1.08 }}
              />
            </a>
          ))}
        </XStack>
      </Reveal>
    </YStack>
  );
}
