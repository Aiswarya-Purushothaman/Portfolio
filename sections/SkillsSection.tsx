"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Redux",
  "Node.js",
  "Express.js",
  "NestJS",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "REST API",
  "Firebase",
  "Razorpay",
  "Stripe",
  "JWT Auth",
  "AWS / Nginx"
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      data-section
      className="relative flex min-h-[80vh] items-center px-6 py-24 sm:px-10 lg:px-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.18),_transparent_55%)]" />
      </div>

      <motion.div
        className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.32em] text-slate-400">
            Skills Galaxy
          </p>
          <h2 className="mt-2 font-display text-2xl text-slate-50 sm:text-3xl">
            A rotating constellation of tools.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-300/85 sm:text-[0.96rem]">
            Technologies I orbit around every day, from frontend craft to backend
            infrastructure and 3D experiences.
          </p>
        </div>

        <div className="relative h-[380px] w-full max-w-xl">
          <motion.div
            className="absolute inset-0 rounded-full border border-accent-cyan/15 bg-slate-950/40 shadow-[0_0_80px_rgba(56,189,248,0.35)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
          />

          {skills.map((skill, index) => {
            const angle = (index / skills.length) * Math.PI * 2;
            const radius = 130;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={skill}
                className="group absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2"
                style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                whileHover={{ scale: 1.15 }}
              >
                <motion.div
                  className="flex h-full w-full items-center justify-center rounded-2xl border border-slate-600/70 bg-slate-900/80 text-xs font-semibold text-slate-100 shadow-lg shadow-slate-950/80 backdrop-blur-xl group-hover:border-accent-cyan group-hover:shadow-neon-blue"
                  whileHover={{ boxShadow: "0 0 32px rgba(56,189,248,0.8)" }}
                >
                  <span>{skill}</span>
                </motion.div>
              </motion.div>
            );
          })}

          <motion.div
            className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-gradient-to-tr from-accent-purple via-accent-cyan to-accent-blue text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-slate-50 shadow-neon backdrop-blur-xl"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>Core</span>
            <span className="font-mono text-[0.6rem]">Stack</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

