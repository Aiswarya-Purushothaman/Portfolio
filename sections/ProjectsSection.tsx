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
    hrefDemo: null,
    hrefCode: "https://github.com/Aiswarya-Purushothaman/ADHYAYA"
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
    hrefDemo: null,
    hrefCode: "https://github.com/Aiswarya-Purushothaman/LikeIt-TryIt"
  }
];

const miniProjects = [
  {
    title: "User Management",
    description:
      "Admin-side user management system with secure JWT authentication and global state via Redux.",
    tech: ["React.js", "Redux", "Node.js", "Express.js", "JWT"],
    hrefCode: "https://github.com/Aiswarya-Purushothaman/React/tree/main/user-management",
    hrefDemo: null
  },
  {
    title: "Netflix Clone",
    description:
      "Responsive UI mimicking Netflix's design with TMDb API integration for movies, top-rated picks, and genres.",
    tech: ["React.js", "CSS", "JavaScript", "TMDb API"],
    hrefCode: "https://github.com/Aiswarya-Purushothaman/React/tree/main/Netflix-Clone",
    hrefDemo: "https://poetic-pastelito-5ca6c4.netlify.app/"
  },
  {
    title: "OLX Clone",
    description:
      "Functional OLX clone where users can add products, upload images, and manage listings using Firebase and Context API.",
    tech: ["React.js", "Tailwind CSS", "Firebase", "JavaScript"],
    hrefCode: "https://github.com/Aiswarya-Purushothaman/React/tree/main/olx-react",
    hrefDemo: "https://poetic-pastelito-5ca6c4.netlify.app/"
  },
  {
    title: "Todo List App",
    description:
      "Simple task management app built to solidify understanding of React fundamentals and component-based architecture.",
    tech: ["React.js"],
    hrefCode: "https://github.com/Aiswarya-Purushothaman/React/tree/main/Todo",
    hrefDemo: "https://moonlit-shortbread-06a32f.netlify.app/"
  },
  {
    title: "Weather App",
    description:
      "Weather forecast app built to practice TypeScript and React skills with real-time API data.",
    tech: ["TypeScript", "React.js"],
    hrefCode: "https://github.com/Aiswarya-Purushothaman/Weather-app-Typescript",
    hrefDemo: "https://glittering-hamster-6f7e13.netlify.app/"
  },
  {
    title: "Trust Wallet Clone",
    description:
      "Simple clone of the Trust Wallet application built to strengthen HTML, CSS, Bootstrap, and JavaScript skills.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    hrefCode: "https://github.com/Aiswarya-Purushothaman/trust-wallet",
    hrefDemo: "https://chipper-chaja-6887b9.netlify.app/"
  },
  {
    title: "Talabat Clone",
    description:
      "Frontend clone of the Talabat food-delivery platform for polishing responsive layout and Bootstrap skills.",
    tech: ["HTML", "CSS", "Bootstrap"],
    hrefCode: "https://github.com/Aiswarya-Purushothaman/talabat-clone",
    hrefDemo: "https://merry-pika-9b7f46.netlify.app/"
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

        {/* Mini Projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-4"
        >
          <p className="text-xs font-mono uppercase tracking-[0.32em] text-slate-400">
            Mini Projects
          </p>
          <h3 className="mt-1 font-display text-xl text-slate-50 sm:text-2xl">
            Experiments &amp; practice builds.
          </h3>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {miniProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group relative flex flex-col rounded-2xl border border-slate-700/50 bg-slate-950/60 p-4 backdrop-blur-md transition-colors duration-300 hover:border-accent-purple/40"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
            >
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-display text-[0.95rem] text-slate-100">
                  {project.title}
                </h4>
                <div className="flex shrink-0 gap-1.5">
                  {project.hrefDemo && (
                    <button
                      className="rounded-full border border-slate-700/60 bg-slate-900/70 px-2.5 py-1 text-[0.6rem] font-mono uppercase tracking-[0.18em] text-slate-400 transition-colors duration-200 hover:border-accent-purple/50 hover:text-accent-purple"
                      onClick={() => window.open(project.hrefDemo!, "_blank")}
                    >
                      ↗
                    </button>
                  )}
                  <button
                    className="rounded-full border border-slate-700/60 bg-slate-900/70 px-2.5 py-1 text-[0.6rem] font-mono uppercase tracking-[0.18em] text-slate-400 transition-colors duration-200 hover:border-accent-cyan/50 hover:text-accent-cyan"
                    onClick={() => window.open(project.hrefCode, "_blank")}
                  >
                    {"</>"}
                  </button>
                </div>
              </div>

              <p className="mt-2 flex-1 text-[0.78rem] leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-900/70 px-2 py-0.5 text-[0.58rem] font-mono uppercase tracking-[0.15em] text-slate-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

