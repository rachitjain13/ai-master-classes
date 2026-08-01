"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
   Globe,
  Mail,
  Phone,
} from "lucide-react";

import Container from "../ui/Container";

const quickLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Pricing",
    href: "/#pricing",
  },
  {
    label: "FAQ",
    href: "/#faq",
  },
  {
    label: "Checkout",
    href: "/checkout",
  },
];

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Terms & Conditions",
    href: "/terms",
  },
  {
    label: "Refund Policy",
    href: "/refund",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: Globe,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "#",
    icon: Phone,
  },
];


export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-neutral-200 bg-white">

      <Container>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .45,
          }}
          className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]"
        >

          {/* Brand */}

          <div>

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.30em] text-violet-700">

              AI MASTERCLASS

            </span>

            <h3 className="mt-5 text-2xl font-bold tracking-tight text-black">

              Learn AI.
              <br />

              Build Your Future.

            </h3>

            <p className="mt-4 max-w-xs text-[15px] leading-7 text-neutral-600">

              A practical roadmap to learn AI,
              automation, prompting and modern
              workflows from beginner to advanced.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h4 className="text-sm font-semibold text-black">

              Quick Links

            </h4>

            <div className="mt-5 space-y-3">

              {quickLinks.map((item) => (

                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-2 text-sm text-neutral-600 transition hover:text-black"
                >

                  {item.label}

                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />

                </Link>

              ))}

            </div>

          </div>

          {/* Legal */}

          <div>

            <h4 className="text-sm font-semibold text-black">

              Legal

            </h4>

            <div className="mt-5 space-y-3">

              {legalLinks.map((item) => (

                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-neutral-600 transition hover:text-black"
                >

                  {item.label}

                </Link>

              ))}

            </div>

          </div>

          {/* Social */}

          <div>

            <h4 className="text-sm font-semibold text-black">

              Connect

            </h4>

            <div className="mt-5 space-y-3">

              {socialLinks.map((item) => {

                const Icon = item.icon;

                return (

                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-3 text-sm text-neutral-600 transition hover:text-black"
                  >

                    <Icon className="h-4 w-4" />

                    {item.label}

                  </Link>

                );

              })}
                          </div>

          </div>

        </motion.div>

        {/* Bottom Bar */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.45,
          }}
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-neutral-200
            py-7

            text-center

            md:flex-row
          "
        >

          <p className="text-xs text-neutral-500">

            © 2026 AI Masterclass. All rights reserved.

          </p>

          <div className="flex items-center gap-3 text-xs text-neutral-500">

            <span>Built with ❤️ in India</span>

            <span>•</span>

            <span>Powered by AI</span>

          </div>

        </motion.div>

      </Container>

      {/* Ambient Glow */}

      <motion.div
        animate={{
          opacity: [0.02, 0.06, 0.02],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-28
          top-10
          h-72
          w-72
          rounded-full
          bg-violet-300
          blur-[170px]
        "
      />

      <motion.div
        animate={{
          opacity: [0.02, 0.07, 0.02],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-24
          bottom-0
          h-80
          w-80
          rounded-full
          bg-violet-200
          blur-[180px]
        "
      />

    </footer>
  );
}