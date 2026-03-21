"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section
      id="about"
      data-section
      className="relative flex min-h-[80vh] items-center px-6 py-24 sm:px-10 lg:px-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-10 top-0 h-52 w-52 rounded-full bg-accent-blue/15 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-accent-purple/20 blur-3xl" />
      </div>

      <motion.div
        className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="glass-panel relative overflow-hidden rounded-3xl p-[1px]">
          <div className="relative h-full rounded-3xl bg-slate-900/60 p-7 sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.32em] text-slate-400">
                  About
                </p>
                <h2 className="mt-2 font-display text-2xl text-slate-50 sm:text-3xl">
                  A snapshot of my journey.
                </h2>
              </div>
              <motion.div
                className="relative h-16 w-16 overflow-hidden rounded-2xl bg-gradient-to-tr from-accent-purple/60 via-accent-cyan/70 to-accent-blue/60 p-[1.2px] shadow-neon"
                whileHover={{ rotate: -4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <div className="relative h-full w-full rounded-2xl bg-slate-950/70">
                  <Image
                    src="/aiswarya-profile.jpeg"
                    alt="Portrait of Aiswarya C P"
                    fill
                    sizes="64px"
                    className="rounded-2xl object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            <p className="text-sm text-slate-300/90 sm:text-[0.96rem]">
              I&apos;m Aiswarya, a self-taught MERN Stack Developer based in
              Palakkad, Kerala, India. Over the last 2.5 years I&apos;ve been
              working with the MERN stack and its ecosystems to craft scalable,
              maintainable web applications with clean architecture and
              thoughtful user experiences.
            </p>

            <p className="mt-4 text-sm text-slate-300/80">
              I have hands-on experience at Metaonus building a School Management
              System using Next.js and NestJS in a monorepo architecture. From
              designing modular components to deploying with Terraform and
              Coolify, I enjoy owning features end-to-end and collaborating
              closely with teams to ship reliable products.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <motion.div
            className="glass-panel rounded-3xl p-5 sm:p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400">
              Snapshot
            </p>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center text-xs sm:text-sm">
              <div className="flex flex-col gap-1">
                <span className="text-lg font-semibold text-accent-cyan sm:text-xl">
                  2.5+
                </span>
                <span className="text-slate-400">years experience</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-lg font-semibold text-accent-purple sm:text-xl">
                  10+
                </span>
                <span className="text-slate-400">projects</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-lg font-semibold text-accent-blue sm:text-xl">
                  Next.js
                </span>
                <span className="text-slate-400">MERN / NestJS stack</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass-panel rounded-3xl p-5 sm:p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.18, duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400">
              Focus
            </p>
            <ul className="mt-3 space-y-2 text-xs text-slate-300/85 sm:text-[0.86rem]">
              <li>• Full stack apps with Next.js, React, Node.js &amp; NestJS</li>
              <li>• Clean Architecture, MVC and monorepo-based codebases</li>
              <li>• Secure REST APIs, authentication and role-based access</li>
              <li>• Payment integrations, real-time features and smooth UX</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

