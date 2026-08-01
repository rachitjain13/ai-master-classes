
"use client";

import Link from "next/link";
import {
  BrainCircuit,
  Globe,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "What's Inside", href: "#book" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-500/10 p-3">
                <BrainCircuit className="h-6 w-6 text-cyan-400" />
              </div>
              <span className="text-2xl font-black text-white">
                AI Masterclass
              </span>
            </div>

            <p className="mt-5 leading-7 text-slate-400">
              A practical guide to mastering Artificial Intelligence with
              modern tools, workflows and real-world applications.
            </p>

            <div className="mt-6 flex gap-3">
              {[Globe, Mail, Phone, ArrowUpRight].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-slate-400 hover:text-cyan-400 transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Legal</h3>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-slate-400 hover:text-cyan-400 transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Contact</h3>
            <p className="mt-5 text-slate-400">
              support@example.com
            </p>
            <p className="mt-3 text-slate-500 text-sm">
              Replace with your support email before launch.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} AI Masterclass. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
