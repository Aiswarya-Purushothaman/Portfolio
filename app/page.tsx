"use client";

import { MotionConfig } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useLenis } from "@studio-freight/react-lenis";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ContactSection } from "@/sections/ContactSection";
import { ScrollScenes } from "@/components/ScrollScenes";

const SceneCanvas = dynamic(
  () => import("@/three/SceneCanvas").then((m) => m.SceneCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
    )
  }
);

export default function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Use Lenis' own scroll event instead of a raw window listener to
  // avoid firing out of sync with Lenis' animation frame
  useLenis(({ progress }) => {
    setScrollProgress(progress);
  });

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-screen text-slate-100">
        {/* 3D cinematic background */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <SceneCanvas scrollProgress={scrollProgress} />
        </div>

        {/* Content timeline */}
        <div className="relative z-10 flex min-h-screen flex-col">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </div>

        <ScrollScenes />
      </main>
    </MotionConfig>
  );
}

