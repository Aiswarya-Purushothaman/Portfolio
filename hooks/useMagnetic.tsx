"use client";

import { useCallback } from "react";

export function useMagnetic() {
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
      const target = e.currentTarget;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const inner = target.querySelector<HTMLElement>(".magnetic-inner");
      if (!inner) return;

      inner.style.transform = `translate3d(${x * 0.2}px, ${y * 0.2}px, 0)`;
    },
    []
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
      const inner = e.currentTarget.querySelector<HTMLElement>(".magnetic-inner");
      if (!inner) return;
      inner.style.transform = "translate3d(0, 0, 0)";
    },
    []
  );

  return {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  };
}

