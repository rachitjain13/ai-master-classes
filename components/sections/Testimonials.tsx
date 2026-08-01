
"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    review:
      "This book helped me understand AI far better than dozens of scattered tutorials. The practical examples were excellent.",
  },
  {
    name: "Priya Gupta",
    role: "College Student",
    review:
      "The prompt engineering and ChatGPT chapters alone were worth the price. Everything is explained clearly.",
  },
  {
    name: "Aman Verma",
    role: "Freelancer",
    review:
      "I started using AI daily after reading this. It improved my workflow and helped me save hours every week.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Testimonials
          </p>
          <h2 className="mt-5 text-4xl font-black text-white md:text-6xl">
            Readers Love AI Masterclass
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Heres what early readers have to say.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{opacity:0,y:25}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:i*0.08}}
              whileHover={{y:-8}}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <Quote className="h-10 w-10 text-cyan-400" />

              <div className="mt-6 flex gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="mt-6 leading-8 text-slate-300">
                “{t.review}”
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/15 font-bold text-cyan-400">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-sm text-slate-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
);
}
