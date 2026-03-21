"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/useMagnetic";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const magnetic = useMagnetic();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const to = "aiswaryapurushothamancp@gmail.com";
    const subject = `New contact from ${name}`;
    const body = `Hi Aiswarya,%0A%0AName: ${encodeURIComponent(
      name
    )}%0AEmail: ${encodeURIComponent(
      email
    )}%0A%0AMessage:%0A${encodeURIComponent(
      message
    )}%0A%0A— Sent from your portfolio site`;

    const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
    window.location.href = mailtoUrl;

    setStatus("sent");
    setTimeout(() => setStatus("idle"), 2600);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      data-section
      className="relative flex min-h-[85vh] items-center px-6 pb-24 pt-10 sm:px-10 lg:px-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,1),_transparent_60%)]" />
      </div>

      <motion.div
        className="mx-auto flex w-full max-w-5xl flex-col gap-10 lg:flex-row"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex-1 space-y-4">
          <p className="text-xs font-mono uppercase tracking-[0.32em] text-slate-400">
            Contact Portal
          </p>
          <h2 className="font-display text-2xl text-slate-50 sm:text-3xl">
            Step through the portal.
          </h2>
          <p className="max-w-md text-sm text-slate-300/85 sm:text-[0.96rem]">
            Let&apos;s collaborate on products that need robust engineering and a
            refined, modern interface — from dashboards and platforms to
            full-scale web applications. Fill in the form and your email client
            will open with a message addressed directly to me.
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-300/85">
            <div className="flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em]">
                Available for opportunities
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="mailto:aiswaryapurushothamancp@gmail.com"
                className="text-[0.86rem] text-accent-cyan underline-offset-4 hover:underline"
              >
                aiswaryapurushothamancp@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-300/85">
            <a
              href="https://www.linkedin.com/in/aiswarya-purushothaman-578090296/"
              className="rounded-full border border-slate-700/70 bg-slate-950/70 px-3 py-1.5 text-[0.75rem] hover:border-accent-purple hover:text-accent-purple"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative rounded-3xl border border-accent-cyan/40 bg-slate-950/80 p-[1.6px] shadow-neon-blue">
            <div className="pointer-events-none absolute -left-10 top-8 h-24 w-24 rounded-full bg-accent-purple/25 blur-3xl" />
            <div className="pointer-events-none absolute -right-8 bottom-0 h-24 w-24 rounded-full bg-accent-cyan/25 blur-3xl" />

            <div className="relative rounded-3xl bg-slate-950/90 p-6 sm:p-7">
              <div className="mb-4 flex items-center justify-between gap-2">
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400">
                  Message Console
                </p>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[0.65rem] text-slate-400">
                  ~ portal.open()
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-[0.75rem] text-slate-300">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-9 w-full rounded-xl border border-slate-700/70 bg-slate-950/80 px-3 text-sm text-slate-100 outline-none ring-0 transition focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/60"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[0.75rem] text-slate-300">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-9 w-full rounded-xl border border-slate-700/70 bg-slate-950/80 px-3 text-sm text-slate-100 outline-none ring-0 transition focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/60"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[0.75rem] text-slate-300">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-slate-700/70 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/60"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="magnetic group relative inline-flex items-center justify-center overflow-hidden rounded-full px-[2px] py-[2px]"
                    {...magnetic}
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan" />
                    <span className="magnetic-inner relative flex items-center gap-2 rounded-full bg-slate-950/95 px-6 py-2 text-sm font-medium text-slate-50">
                      <span>
                        {status === "sent"
                          ? "Sent — thank you!"
                          : "Send message"}
                      </span>
                    </span>
                    <motion.span
                      className="pointer-events-none absolute inset-0 rounded-full bg-slate-50/10"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={
                        status === "sent"
                          ? { scale: 1.4, opacity: 0 }
                          : { scale: 0, opacity: 0 }
                      }
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                  </button>

                  <p className="hidden text-[0.68rem] text-slate-400 sm:block">
                    No spam. Just ideas, projects, and possibilities.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

