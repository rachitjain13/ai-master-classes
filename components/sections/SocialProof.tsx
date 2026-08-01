"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cpu,
  Bot,
  Sparkles,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const companies = [
  {
    name: "OpenAI",
    icon: Bot,
  },
  {
    name: "Google AI",
    icon: Sparkles,
  },
  {
    name: "Microsoft",
    icon: Cpu,
  },
  {
    name: "NVIDIA",
    icon: BrainCircuit,
  },
  {
    name: "Meta AI",
    icon: Workflow,
  },
  {
    name: "Anthropic",
    icon: ShieldCheck,
  },
];

const stats = [
  {
    number: "150+",
    title: "AI Tools Explained",
  },
  {
    number: "300+",
    title: "Pages of Learning",
  },
  {
    number: "40+",
    title: "Real Projects",
  },
  {
    number: "2026",
    title: "Latest AI Trends",
  },
];

export default function SocialProof() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-cyan-400 font-semibold tracking-widest uppercase">
            Learn What Industry Uses
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Master the AI Technologies
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Powering the Future
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            This book covers the tools, workflows and concepts behind the
            worlds fastest growing AI companies.
          </p>
        </motion.div>

        {/* Logo Cards */}

        <div className="mt-20 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">

          {companies.map((company, index) => {
            const Icon = company.icon;

            return (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition">
                  <Icon size={32} />
                </div>

                <h3 className="mt-5 font-semibold text-white">
                  {company.name}
                </h3>
              </motion.div>
            );
          })}

        </div>

        {/* Stats */}

        <div className="mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .1,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-cyan-500/5 backdrop-blur-xl p-8"
            >
              <h3 className="text-5xl font-black text-cyan-400">
                {item.number}
              </h3>

              <p className="mt-3 text-slate-400">
                {item.title}
              </p>
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}