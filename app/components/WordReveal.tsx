"use client";

import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface WordRevealProps {
  children: ReactNode;
}

export default function WordReveal({ children }: WordRevealProps) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.2,    // 50% of element visible to trigger
  });

  return (
    <span
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(50px)",
        transition:
          "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}    >
      {children}
    </span>
  );
}
