"use client";

import { motion } from "framer-motion";
import { Gift, FileText, Sparkles, Library, Wand2, Download } from "lucide-react";

const bonuses = [
  { icon: FileText, title: "500+ Prompt Pack", desc: "Ready-to-use prompts for study, business and productivity." },
  { icon: Wand2, title: "AI Workflow Templates", desc: "Step-by-step workflows you can copy and customize." },
  { icon: Library, title: "Resource Library", desc: "Curated collection of the best AI tools and websites." },
  { icon: Download, title: "Lifetime Updates", desc: "Receive future revisions and new resources as AI evolves." },
];

export default function Bonuses() {
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
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
            <Gift className="h-8 w-8"/>
          </div>

          <p className="mt-6 font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Exclusive Bonuses
          </p>

          <h2 className="mt-5 text-4xl font-black text-white md:text-6xl">
            More Than Just A Book
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Get premium resources designed to accelerate your AI learning journey.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {bonuses.map((bonus, i) => {
            const Icon = bonus.icon;
            return (
              <motion.div
                key={bonus.title}
                initial={{opacity:0,y:25}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{delay:i*0.08}}
                whileHover={{y:-8, scale:1.02}}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <Icon className="h-7 w-7"/>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {bonus.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {bonus.desc}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-cyan-400">
                  <Sparkles className="h-4 w-4"/>
                  Included Free
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="mt-16 rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-8 text-center backdrop-blur-xl"
        >
          <h3 className="text-2xl font-bold text-white">
            Total Bonus Value: ₹4,999
          </h3>
          <p className="mt-3 text-slate-300">
            Included at no extra cost with your AI Masterclass purchase.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
