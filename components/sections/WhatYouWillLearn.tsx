"use client";

import { motion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  ImageIcon,
  Lightbulb,
  Rocket,
  Search,
  Shield,
  Sparkles,
  Workflow,
  Briefcase,
} from "lucide-react";

const topics = [
  {
    title: "Prompt Engineering",
    description:
      "Write prompts that generate better, faster and more accurate AI results.",
    icon: Sparkles,
  },
  {
    title: "ChatGPT Mastery",
    description:
      "Become an advanced ChatGPT user for work, study and business.",
    icon: Bot,
  },
  {
    title: "AI Automation",
    description:
      "Automate repetitive tasks using modern AI workflows and tools.",
    icon: Workflow,
  },
  {
    title: "Future Careers",
    description:
      "Discover the highest-paying AI careers and required skills.",
    icon: Briefcase,
  },
  {
    title: "AI Coding",
    description:
      "Build websites, apps and scripts faster with AI assistants.",
    icon: Code2,
  },
  {
    title: "Image Generation",
    description:
      "Create stunning visuals using today's best AI image models.",
    icon: ImageIcon,
  },
  {
    title: "AI Business",
    description:
      "Launch AI-powered businesses and digital products.",
    icon: Rocket,
  },
  {
    title: "Machine Learning",
    description:
      "Understand AI concepts without complicated mathematics.",
    icon: BrainCircuit,
  },
  {
    title: "Productivity",
    description:
      "Save hours every week with practical AI workflows.",
    icon: Cpu,
  },
  {
    title: "Research",
    description:
      "Perform deep research in minutes instead of days.",
    icon: Search,
  },
  {
    title: "AI Ethics",
    description:
      "Use artificial intelligence responsibly and securely.",
    icon: Shield,
  },
  {
    title: "Future of AI",
    description:
      "Understand where AI is heading and prepare before everyone else.",
    icon: Lightbulb,
  },
];

export default function WhatYouWillLearn() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Glow */}

      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Inside The Book
          </p>

          <h2 className="mt-5 text-4xl font-black text-white md:text-6xl leading-tight">
            Everything You Need
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              To Master AI
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            A carefully structured roadmap covering AI fundamentals,
            advanced tools, business opportunities and practical workflows.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {topics.map((topic, index) => {
            const Icon = topic.icon;

            return (

              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
                  duration: .45,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40"
              >
                {/* Glow */}

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Icon */}

                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="relative z-10 mt-6 text-xl font-bold text-white">
                  {topic.title}
                </h3>

                <p className="relative z-10 mt-4 leading-7 text-slate-400">
                  {topic.description}
                </p>

              </motion.div>

            );
          })}

        </div>

      </div>
    </section>
  );
}