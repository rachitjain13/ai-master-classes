"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  BrainCircuit,
  Bot,
  Workflow,
  Rocket,
  Trophy,
} from "lucide-react";

const journey = [
  {
    title: "Start Here",
    subtitle: "Zero AI Knowledge",
    description:
      "No coding, no prompt engineering, no AI experience required.",
    icon: BookOpen,
  },
  {
    title: "Learn AI",
    subtitle: "Understand the Fundamentals",
    description:
      "Build a strong foundation with clear explanations and practical examples.",
    icon: BrainCircuit,
  },
  {
    title: "Master ChatGPT",
    subtitle: "Prompt Like a Pro",
    description:
      "Unlock advanced prompting techniques used by professionals.",
    icon: Bot,
  },
  {
    title: "Automate",
    subtitle: "Save Hours Every Week",
    description:
      "Use AI tools to automate writing, research, coding, design and more.",
    icon: Workflow,
  },
  {
    title: "Build",
    subtitle: "Projects & Income",
    description:
      "Create AI-powered products, workflows and business opportunities.",
    icon: Rocket,
  },
  {
    title: "Become Future Ready",
    subtitle: "Stay Ahead",
    description:
      "Gain skills that remain valuable as AI transforms every industry.",
    icon: Trophy,
  },
];

export default function AIJourney() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-24 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Your Transformation
          </p>

          <h2 className="mt-5 text-4xl font-black text-white md:text-6xl">
            Your AI Journey
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Follow a structured roadmap from complete beginner
            to confident AI professional.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Desktop Line */}
          <div className="absolute left-0 right-0 top-14 hidden h-[2px] bg-gradient-to-r from-cyan-500/20 via-cyan-400 to-blue-500 lg:block" />

          {/* Mobile Line */}
          <div className="absolute left-8 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500/20 via-cyan-400 to-blue-500 lg:hidden" />

          <div className="grid gap-10 lg:grid-cols-6">
            {journey.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: .5,
                  }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Mobile Layout */}
                  <div className="flex gap-6 lg:hidden">
                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900">
                      <Icon className="h-7 w-7 text-cyan-400" />
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                      <span className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                        Step {index + 1}
                      </span>

                      <h3 className="mt-2 text-2xl font-bold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-2 font-medium text-cyan-300">
                        {step.subtitle}
                      </p>

                      <p className="mt-4 leading-7 text-slate-400">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden lg:block">
                    <motion.div
                      whileHover={{
                        y: -8,
                      }}
                      className="text-center"
                    >
                      <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900 shadow-[0_0_40px_rgba(6,182,212,.15)]">
                        <Icon className="h-10 w-10 text-cyan-400" />

                        <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ping" />
                      </div>

                      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                          STEP {index + 1}
                        </span>

                        <h3 className="mt-3 text-xl font-bold text-white">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-cyan-300">
                          {step.subtitle}
                        </p>

                        <p className="mt-5 text-sm leading-7 text-slate-400">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}