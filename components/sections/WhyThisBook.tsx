"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  BrainCircuit,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Structured Roadmap",
    text: "Learn AI from the fundamentals to advanced workflows in a clear, practical sequence.",
  },
  {
    icon: Workflow,
    title: "Hands-on Learning",
    text: "Every chapter focuses on techniques you can apply immediately in real projects.",
  },
  {
    icon: Sparkles,
    title: "Latest AI Tools",
    text: "Explore modern AI platforms, prompting, automation and productivity workflows.",
  },
  {
    icon: Rocket,
    title: "Career Growth",
    text: "Build skills that help you stand out in business, freelancing and your career.",
  },
  {
    icon: ShieldCheck,
    title: "Future Ready",
    text: "Understand AI trends, best practices and responsible use before they become mainstream.",
  },
  {
    icon: BookOpen,
    title: "One Complete Guide",
    text: "Instead of jumping between videos and blogs, learn everything from one premium resource.",
  },
];

export default function WhyThisBook() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute left-1/2 top-16 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Why This Book
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight text-white md:text-6xl">
              Learn AI The Right Way
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-400">
              Most people learn AI by watching random videos and trying dozens of
              disconnected tools. This book gives you one structured roadmap—from
              understanding the fundamentals to building real AI workflows.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Whether youre a student, creator, entrepreneur or working
              professional, youll gain practical skills you can use immediately.
            </p>

            <div className="mt-10 rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-6 backdrop-blur-xl">
              <p className="text-lg font-semibold text-white">
                Stop chasing every new AI tool. Build lasting AI skills instead.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {feature.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
