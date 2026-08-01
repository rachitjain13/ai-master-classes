"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle2 } from "lucide-react";

const chapters = [
  "AI Foundations",
  "Prompt Engineering",
  "ChatGPT Mastery",
  "AI Image Generation",
  "Automation Workflows",
  "AI for Students",
  "AI for Business",
  "Coding with AI",
  "Future Careers",
  "Productivity Hacks",
  "Ethics & Safety",
  "Next Steps",
];

export default function BookPreview() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">Book Preview</p>
          <h2 className="mt-5 text-4xl md:text-6xl font-black text-white">
            Whats Inside
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            A structured learning path with practical chapters you can apply immediately.
          </p>
        </motion.div>

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{opacity:0,x:-40}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            whileHover={{rotate:-2, scale:1.02}}
            className="mx-auto w-full max-w-md"
          >
            <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-[0_0_60px_rgba(6,182,212,.18)]">
              <div className="aspect-[3/4] rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 flex flex-col items-center justify-center text-center p-8">
                <BookOpen className="h-16 w-16 text-white" />
                <h3 className="mt-6 text-3xl font-black text-white">
                  AI Masterclass
                </h3>
                <p className="mt-3 text-cyan-100">
                  The Complete Guide to Artificial Intelligence
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {chapters.map((chapter, i) => (
              <motion.div
                key={chapter}
                initial={{opacity:0,y:20}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{delay:i*0.04}}
                whileHover={{y:-4}}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan-400" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-cyan-400">
                      Chapter {i+1}
                    </p>
                    <h4 className="mt-1 font-semibold text-white">
                      {chapter}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="mt-16 flex justify-center"
        >
          <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105">
            Get Instant Access
          </button>
        </motion.div>
      </div>
    </section>
  );
}
