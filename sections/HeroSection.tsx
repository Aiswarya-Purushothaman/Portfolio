"use client";

import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/useMagnetic";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" }
  }
};

export function HeroSection() {
  const magnetic = useMagnetic();

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      data-section
      className="relative flex min-h-screen items-center justify-center px-6 py-20 sm:px-10 lg:px-20"
    >
      {/* Gradient aura */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-accent-purple/25 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-72 rounded-full bg-accent-cyan/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[32rem] -translate-x-1/2 rounded-[999px] bg-gradient-to-r from-accent-purple/30 via-accent-blue/40 to-accent-cyan/30 blur-3xl" />
      </div>

      <motion.div
        className="mx-auto flex max-w-5xl flex-col gap-10 text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-1 text-[0.65rem] font-mono uppercase tracking-[0.3em] text-slate-300/80 shadow-lg shadow-slate-900/80 backdrop-blur-md lg:self-start">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan shadow-neon" />
          Entering developer cosmos
        </div>

        <div className="space-y-7">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-slate-400">
              Aiswarya C P · Software Developer
            </p>
            <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
              <span className="block">Fullstack Developer</span>
              <span className="mt-2 block bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-blue bg-clip-text text-transparent">
                crafting scalable, product-ready web platforms.
              </span>
            </h1>
          </div>

          <p className="mx-auto max-w-xl text-sm text-slate-300/85 sm:text-base lg:mx-0">
            Self-taught MERN Stack Developer with 2.9 years of hands-on
            experience building production systems using the MERN stack and its
            frameworks like Next.js and NestJS. I focus on clean architecture,
            secure APIs, and polished UI that balances performance with
            cinematic interactions.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <button
              className="magnetic group relative rounded-full bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan px-[2.2px] py-[2.2px] shadow-neon"
              {...magnetic}
              onClick={() => scrollToId("projects")}
            >
              <div className="magnetic-inner flex items-center gap-2 rounded-full bg-slate-950/90 px-7 py-2.5 text-sm font-medium text-slate-50 backdrop-blur-xl">
                <span>View Work</span>
                <span className="text-xs text-slate-200/70">↳ projects</span>
              </div>
              <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-accent-purple/40 blur-xl" />
            </button>

            <button
              className="magnetic group relative rounded-full border border-slate-600/70 bg-slate-950/60 px-[1.8px] py-[1.8px]"
              {...magnetic}
              onClick={() => scrollToId("contact")}
            >
              <div className="magnetic-inner flex items-center gap-2 rounded-full bg-slate-900/80 px-6 py-2.5 text-sm font-medium text-slate-200 backdrop-blur-xl">
                <span>Contact</span>
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan" />
              </div>
            </button>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 lg:justify-start">
            <div className="flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 backdrop-blur-md">
              <span className="h-1 w-3 rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan" />
              <span>2.9+ years building production-ready web platforms</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.25em] text-accent-cyan">
                MERN • Next.js • NestJS • Clean Architecture • TypeScript • React • Node.js • Express.js • MongoDB • PostgreSQL • MySQL • REST API • AWS / Nginx
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 text-[0.68rem] text-slate-400/90 lg:justify-start">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700/50 bg-slate-950/60 text-xs font-semibold text-slate-200 shadow-lg shadow-slate-950/70 backdrop-blur-lg">
            ↓
          </span>
          <span className="font-mono uppercase tracking-[0.28em]">
            Scroll to navigate the journey
          </span>
        </div>
      </motion.div>
    </section>
  );
}

