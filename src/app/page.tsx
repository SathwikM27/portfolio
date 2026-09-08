"use client";

import { YStack } from "tamagui";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { Publications } from "@/components/Publications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <YStack render="main" backgroundColor="$background" minHeight="100vh">
      <Nav />
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <Projects />
      <Publications />
      <Contact />
      <Footer />
    </YStack>
  );
}
