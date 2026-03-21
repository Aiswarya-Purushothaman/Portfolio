"use client";

import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/useMagnetic";

const projects = [
  {
    title: "ADHYAYA — E-learning platform",
    description:
      "An e-learning platform built with Clean Architecture where learners can enroll in courses, track progress, and join interactive sessions. Features Stripe payments, JWT auth with refresh tokens, and plans for real-time chat with Socket.IO.",
    tech: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Redux",
      "Stripe",
      "Socket.IO"
    ],
    hrefDemo: "#",
    hrefCode: "#"
  },
  {
    title: "LikeIt TryIt — E-commerce",
    description:
      "A full-featured e-commerce website for unisex clothing, footwear, and accessories, built using MVC principles with a robust Node.js backend and dynamic frontend flows.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "HTML",
      "CSS",
      "Bootstrap",
      "Ajax",
      "jQuery"
    ],
    hrefDemo: "#",
    hrefCode: "#"
  }
];

export function ProjectsSection() {
  const magnetic = useMagnetic();

  return (
    <section
      id="projects"
      data-section
      className="relative min-h-[90vh] px-6 py-24 sm:px-10 lg:px-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-10 top-10 h-40 rounded-3xl bg-gradient-to-r from-accent-purple/20 via-transparent to-accent-cyan/15 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-60 bg-[radial-gradient(circle_at_bottom,_rgba(15,23,42,1),_transparent_60%)]" />
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xs font-mono uppercase tracking-[0.32em] text-slate-400">
            Projects Universe
          </p>
          <h2 className="mt-2 font-display text-2xl text-slate-50 sm:text-3xl">
            Real-world case studies in orbit.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-300/85 sm:text-[0.96rem]">
            Each project is a self-contained world—hover to expand, explore, and
            jump directly into live demos or source code.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group relative h-full rounded-3xl border border-slate-700/60 bg-slate-950/70 p-[1.5px] shadow-[0_18px_60px_rgba(15,23,42,0.9)] backdrop-blur-xl"
              initial={{ opacity: 0, y: 40, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.06
              }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-purple/12 via-slate-900/90 to-accent-cyan/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col rounded-3xl bg-slate-950/80 p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-[1.05rem] text-slate-50">
                    {project.title}
                  </h3>
                  <span className="rounded-full bg-slate-900/90 px-3 py-1 text-[0.63rem] font-mono uppercase tracking-[0.22em] text-slate-400">
                    Case {index + 1}
                  </span>
                </div>

                <p className="mt-3 text-xs text-slate-300/85 sm:text-[0.9rem]">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-[0.65rem] text-slate-300/85">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-900/80 px-2.5 py-1 text-[0.63rem] font-mono uppercase tracking-[0.18em] text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {/* <button
                    className="magnetic group relative rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan px-[1.8px] py-[1.8px]"
                    {...magnetic}
                    onClick={() => window.open(project.hrefDemo, "_blank")}
                  >
                    <div className="magnetic-inner flex items-center gap-2 rounded-full bg-slate-950/95 px-4 py-1.5 text-[0.72rem] font-medium text-slate-50">
                      <span>Live demo</span>
                      <span className="text-xs">↗</span>
                    </div>
                  </button> */}
                  <button
                    className="magnetic group relative rounded-full border border-slate-700/70 bg-slate-950/80 px-[1.6px] py-[1.6px]"
                    {...magnetic}
                    onClick={() => window.open(project.hrefCode, "_blank")}
                  >
                    <div className="magnetic-inner flex items-center gap-2 rounded-full bg-slate-950/95 px-4 py-1.5 text-[0.72rem] font-medium text-slate-200">
                      <span>GitHub</span>
                      <span className="text-xs">{"</>"}</span>
                    </div>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

