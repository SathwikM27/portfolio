"use client";

import { useState } from "react";
import { Button, H4, Sheet, XStack, YStack } from "tamagui";
import { Menu, X } from "@tamagui/lucide-icons-2";
import { ThemeToggle } from "./ThemeToggle";
import { brand } from "@/data/theme";

const links = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#projects", label: "Projects" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <XStack
      render="nav"
      position="sticky"
      top={0}
      zIndex={1000}
      width="100%"
      paddingHorizontal="$4"
      paddingVertical="$3"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="$background"
      borderBottomWidth={2}
      borderBottomColor={brand.accent}
    >
      <a href="#home" style={{ textDecoration: "none" }}>
        <H4 fontFamily="$heading" letterSpacing={1} color={brand.accent}>
          SVM
        </H4>
      </a>

      <XStack gap="$5" alignItems="center" display="none" $md={{ display: "flex" }}>
        {links.map((link) => (
          <a key={link.href} href={link.href} style={{ textDecoration: "none" }}>
            <Button chromeless size="$3" transition="quick" hoverStyle={{ backgroundColor: `${brand.accent}22` }}>
              {link.label}
            </Button>
          </a>
        ))}
        <ThemeToggle />
      </XStack>

      <XStack gap="$2" alignItems="center" $md={{ display: "none" }}>
        <ThemeToggle />
        <Button
          size="$3"
          circular
          chromeless
          aria-label="Open menu"
          icon={Menu}
          onPress={() => setOpen(true)}
        />
      </XStack>

      <Sheet open={open} onOpenChange={setOpen} dismissOnSnapToBottom modal snapPointsMode="fit">
        <Sheet.Overlay enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame padding="$5" backgroundColor="$background">
          <XStack justifyContent="flex-end">
            <Button
              size="$3"
              circular
              chromeless
              aria-label="Close menu"
              icon={X}
              onPress={() => setOpen(false)}
            />
          </XStack>
          <YStack gap="$4" paddingVertical="$4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{ textDecoration: "none" }}
              >
                <Button
                  size="$5"
                  chromeless
                  justifyContent="flex-start"
                  width="100%"
                  transition="quick"
                  hoverStyle={{ backgroundColor: `${brand.accent}22` }}
                >
                  {link.label}
                </Button>
              </a>
            ))}
          </YStack>
        </Sheet.Frame>
      </Sheet>
    </XStack>
  );
}
