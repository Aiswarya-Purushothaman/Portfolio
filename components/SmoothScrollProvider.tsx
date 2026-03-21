"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function SmoothScrollProvider({ children }: Props) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.12,
        smoothWheel: true,
        smoothTouch: false,
        syncTouch: true
      }}
    >
      {children}
    </ReactLenis>
  );
}

