import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Sathwik Varma Mudduluri — Full-Stack Developer",
  description:
    "Portfolio of Sathwik Varma Mudduluri, a full-stack developer building with React, Next.js, Spring Boot, and AWS.",
  keywords: [
    "Sathwik Varma Mudduluri",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
