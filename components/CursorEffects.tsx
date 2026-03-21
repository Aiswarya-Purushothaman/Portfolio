"use client";

import { useEffect, useRef } from "react";

const TRAIL_COUNT = 12;

export function CursorEffects() {
  const dotsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const dots = dotsRef.current;
    if (!dots.length) return;

    let mouseX = 0;
    let mouseY = 0;
    const positions = Array.from({ length: TRAIL_COUNT }, () => ({
      x: 0,
      y: 0
    }));

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      positions[0].x += (mouseX - positions[0].x) * 0.25;
      positions[0].y += (mouseY - positions[0].y) * 0.25;

      for (let i = 1; i < TRAIL_COUNT; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.3;
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.3;
      }

      positions.forEach((pos, i) => {
        const dot = dots[i];
        if (!dot) return;
        const scale = 1 - i / (TRAIL_COUNT * 1.4);
        dot.style.transform = `translate3d(${pos.x - 5}px, ${
          pos.y - 5
        }px, 0) scale(${scale})`;
        dot.style.opacity = `${scale}`;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <>
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) dotsRef.current[i] = el;
          }}
          className="cursor-dot"
        />
      ))}
    </>
  );
}

