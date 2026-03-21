"use client";

import { motion } from "framer-motion";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      data-section
      className="relative min-h-[75vh] px-6 py-24 sm:px-10 lg:px-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-20 top-10 h-28 rounded-full bg-accent-blue/20 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xs font-mono uppercase tracking-[0.32em] text-slate-400">
            Experience Timeline
          </p>
          <h2 className="mt-2 font-display text-2xl text-slate-50 sm:text-3xl">
            Milestones in my journey.
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-4 top-0 h-full w-[2px] rounded-full bg-gradient-to-b from-accent-purple via-accent-cyan to-accent-blue"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />

          <div className="space-y-8 pl-10">
            {/* Metaonus */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="absolute -left-[1.3rem] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 shadow-neon-blue">
                <span className="h-3 w-3 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan" />
              </div>
              <div className="glass-panel rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-[0.25em] text-accent-cyan">
                      Software Engineer
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-50">
                      Metaonus — School Management System
                    </p>
                  </div>
                  <p className="text-xs text-slate-400">2025 — Present</p>
                </div>
                <p className="mt-3 text-xs text-slate-300/90 sm:text-[0.9rem]">
                  Contributing to a School Management System built with Next.js
                  and NestJS in a monorepo architecture, focusing on scalable
                  frontend components and secure backend APIs.
                </p>
                <ul className="mt-3 grid gap-2 text-xs text-slate-300/85 sm:grid-cols-2">
                  <li>• Designed modular components and implemented role-based access control.</li>
                  <li>• Built features for class management, student–teacher modules and attendance tracking.</li>
                  <li>• Worked with Terraform and Coolify to streamline deployment workflows.</li>
                  <li>• Helped maintain clean, maintainable code and CI/CD pipelines.</li>
                </ul>
              </div>
            </motion.div>

            {/* Vitel Global */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
            >
              <div className="absolute -left-[1.3rem] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 shadow-neon-blue">
                <span className="h-3 w-3 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan" />
              </div>
              <div className="glass-panel rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-[0.25em] text-accent-cyan">
                      Full Stack Developer
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-50">
                      Vitel Global
                    </p>
                  </div>
                  <p className="text-xs text-slate-400">
                    May 2024 — Oct 2024 · Hyderabad (On-site)
                  </p>
                </div>
                <p className="mt-3 text-xs text-slate-300/90 sm:text-[0.9rem]">
                  Worked as a full stack developer on production features, using
                  the MERN stack to deliver reliable, user-focused solutions in a
                  fast-paced environment.
                </p>
                <ul className="mt-3 grid gap-2 text-xs text-slate-300/85 sm:grid-cols-2">
                  <li>• Implemented and maintained end-to-end features across frontend and backend.</li>
                  <li>• Collaborated closely with on-site teams to understand and refine requirements.</li>
                  <li>• Focused on performance, code quality and clean abstractions.</li>
                  <li>• Contributed to debugging, testing and deployment workflows.</li>
                </ul>
              </div>
            </motion.div>

            {/* Brototype */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.16 }}
            >
              <div className="absolute -left-[1.3rem] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 shadow-neon-blue">
                <span className="h-3 w-3 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan" />
              </div>
              <div className="glass-panel rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-[0.25em] text-accent-cyan">
                      Full Stack Developer
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-50">
                      Brototype
                    </p>
                  </div>
                  <p className="text-xs text-slate-400 text-right">
                    Oct 2023 — Aug 2024
                  </p>
                </div>
                <p className="mt-3 text-xs text-slate-300/90 sm:text-[0.9rem]">
                  Intensive full stack developer program where I built projects
                  using the MERN stack, strengthened core fundamentals, and
                  developed production-style workflows.
                </p>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.24 }}
            >
              <div className="absolute -left-[1.3rem] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 shadow-neon-blue">
                <span className="h-3 w-3 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan" />
              </div>
              <div className="glass-panel rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-[0.25em] text-accent-cyan">
                      Education
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-50">
                      University of Calicut
                    </p>
                  </div>
                  <p className="text-xs text-slate-400 text-right">
                    2021 — 2023 · MA English
                    <br />
                    2018 — 2021 · BA English
                  </p>
                </div>
                <p className="mt-3 text-xs text-slate-300/90 sm:text-[0.9rem]">
                  Completed Bachelor&apos;s and Master&apos;s degrees in English at SNGS
                  College Pattambi, strengthening my communication, critical
                  thinking, and collaboration skills which I bring into every
                  engineering project.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

