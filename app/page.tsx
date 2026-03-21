"use client";

import { MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const value = height > 0 ? scrollTop / height : 0;
      setScrollProgress(value);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

