"use client";

import { useEffect, useRef, useState } from "react";
import { YStack, type YStackProps } from "tamagui";

export function Reveal({ children, delay = 0, ...props }: YStackProps & { delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <YStack
      // @ts-expect-error -- Tamagui forwards refs to the underlying DOM node on web
      ref={ref}
      opacity={visible ? 1 : 0}
      y={visible ? 0 : 28}
      transition="medium"
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...props}
    >
      {children}
    </YStack>
  );
}
