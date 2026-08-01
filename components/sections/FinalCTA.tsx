"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Download, Clock3 } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-indigo-600/10" />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="rounded-[2rem] border border-cyan-400/20 bg-white/5 p-10 md:p-16 backdrop-blur-xl text-center shadow-[0_0_60px_rgba(6,182,212,.15)]"
        >
          <span className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Start Learning Today
          </span>

          <h2 className="mt-8 text-4xl font-black text-white md:text-6xl">
            Build AI Skills That
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Last For Years
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Stop wasting time jumping between random videos and articles.
            Follow one structured roadmap and start applying AI with confidence.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105">
              Get Instant Access
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1"/>
            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
              Read Sample
            </button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Download className="mx-auto h-8 w-8 text-cyan-400"/>
              <p className="mt-3 font-semibold text-white">Instant Delivery</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <ShieldCheck className="mx-auto h-8 w-8 text-cyan-400"/>
              <p className="mt-3 font-semibold text-white">Secure Checkout</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Clock3 className="mx-auto h-8 w-8 text-cyan-400"/>
              <p className="mt-3 font-semibold text-white">Lifetime Access</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
