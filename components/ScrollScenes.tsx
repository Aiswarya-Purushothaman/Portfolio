"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "@studio-freight/react-lenis";

export function ScrollScenes() {
  // Keep ScrollTrigger in sync with Lenis' virtual scroll position
  useLenis(() => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section]")
    );

    const animations: ScrollTrigger[] = [];

    sections.forEach((section, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 60%",
          // scrub: true means instant follow — Lenis already provides smoothing,
          // so double-lerp (scrub: 0.7 + lerp) was causing the sluggish hang
          scrub: true
        }
      });

      tl.fromTo(
        section,
        {
          opacity: 0,
          y: index === 0 ? 0 : 90,
          scale: index === 0 ? 1 : 0.96
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out"
        }
      );

      if (tl.scrollTrigger) {
        animations.push(tl.scrollTrigger);
      }
    });

    return () => {
      animations.forEach((st) => st.kill());
      ScrollTrigger.killAll();
    };
  }, []);

  return null;
}

