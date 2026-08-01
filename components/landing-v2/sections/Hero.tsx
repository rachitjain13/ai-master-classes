"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
//   ArrowRight,
  BookOpen,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Section from "../ui/Section";
import Container from "../ui/Container";
import Button from "../ui/Button";

const TRUST_ITEMS = [
  {
    icon: BookOpen,
    label: "20 Practical Chapters",
  },
  {
    icon: ShieldCheck,
    label: "Beginner Friendly",
  },
  {
    icon: Sparkles,
    label: "Lifetime Access",
  },
];

export default function Hero() {
  const router = useRouter();

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <Section className="relative overflow-hidden bg-white">

      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Grid */}

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* Soft Glow */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-neutral-200 blur-[140px]"
        />

      </div>

      <Container>

        <div className="grid min-h-[88vh] items-center gap-14 py-20 lg:grid-cols-[1fr_0.9fr]">

          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-sm">

              <Sparkles
                className="h-4 w-4"
                strokeWidth={2}
              />

              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-700">
                AI MASTERCLASS • 2026
              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 max-w-2xl text-[40px] font-bold leading-[1.02] tracking-[-0.045em] text-black sm:text-[48px] lg:text-[58px]">

              Learn Practical AI
              <br />

              Skills That Help
              <br />

              You Build,
              <br />

              Create & Grow.

            </h1>

            {/* Subtitle */}

            <p className="mt-7 max-w-xl text-[18px] leading-8 text-neutral-600">

              Master ChatGPT, Gemini, Prompt Engineering,
              AI automation and practical workflows in a
              simple, structured learning experience.

            </p>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Button
                size="lg"
                showArrow
                onClick={handleCheckout}
              >
                Get Instant Access
              </Button>

              <Button
                size="lg"
                variant="secondary"
              >
                Preview Book
              </Button>

            </div>

            {/* Price */}

            <div className="mt-8 flex flex-wrap items-center gap-4">

              <span className="text-4xl font-bold text-black">
                ₹149
              </span>

              <span className="text-xl text-neutral-400 line-through">
                ₹999
              </span>

              <span className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700">
                One-Time Purchase
              </span>

            </div>
                        {/* Trust Chips */}

            <div className="mt-10 flex flex-wrap gap-3">

              {TRUST_ITEMS.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    whileHover={{
                      y: -2,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-sm"
                  >
                    <Icon
                      className="h-4 w-4 text-black"
                      strokeWidth={2}
                    />

                    <span className="text-sm font-medium text-neutral-700">
                      {item.label}
                    </span>

                  </motion.div>
                );
              })}

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="relative flex items-center justify-center"
          >

            {/* Background Card */}

            <div className="absolute h-[520px] w-[420px] rounded-[40px] border border-neutral-200 bg-neutral-50" />

            {/* Shadow */}

            <div className="absolute bottom-4 h-10 w-72 rounded-full bg-black/10 blur-2xl" />

            {/* Book */}

            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >

              <Image
                src="/images/book.png"
                alt="AI Masterclass Book"
                width={360}
                height={510}
                priority
                className="rounded-[26px] object-cover shadow-[0_35px_90px_rgba(0,0,0,0.18)]"
              />

            </motion.div>

            {/* Floating Card - Top */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
              }}
              className="absolute left-0 top-12 hidden rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-lg lg:block"
            >

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Learning
              </p>

              <h4 className="mt-2 text-lg font-bold text-black">
                Step-by-Step
              </h4>

              <p className="mt-1 text-sm text-neutral-600">
                Beginner to practical AI workflows.
              </p>

            </motion.div>

            {/* Floating Card - Bottom */}

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.1,
              }}
              className="absolute bottom-16 right-0 hidden rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-lg lg:block"
            >

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Perfect For
              </p>

              <h4 className="mt-2 text-lg font-bold text-black">
                Students • Professionals
              </h4>

              <p className="mt-1 text-sm text-neutral-600">
                Learn AI with a practical approach.
              </p>

            </motion.div>

          </motion.div>

        </div>
                {/* Bottom Meta */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.15,
            duration: 0.6,
          }}
          className="mt-20 border-t border-neutral-200 pt-8"
        >

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            {/* Left */}

            <div>

              <p className="text-sm uppercase tracking-[0.28em] text-neutral-500">

                Practical AI Learning

              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-black">

                Learn today.
                Build tomorrow.

              </h3>

            </div>

            {/* Right */}

            <div className="flex flex-wrap gap-8">

              <div>

                <p className="text-3xl font-bold tracking-tight text-black">
                  20
                </p>

                <p className="mt-1 text-sm text-neutral-600">
                  Chapters
                </p>

              </div>

              <div>

                <p className="text-3xl font-bold tracking-tight text-black">
                  ₹149
                </p>

                <p className="mt-1 text-sm text-neutral-600">
                  One-Time
                </p>

              </div>

              <div>

                <p className="text-3xl font-bold tracking-tight text-black">
                  ∞
                </p>

                <p className="mt-1 text-sm text-neutral-600">
                  Lifetime
                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* Scroll Hint */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            y: [0, 6, 0],
          }}
          transition={{
            delay: 1.6,
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-14 hidden justify-center lg:flex"
        >

          <div className="flex flex-col items-center gap-3">

            <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-400">
              Explore
            </span>

            <div className="flex h-11 w-7 justify-center rounded-full border border-neutral-300">

              <motion.div
                animate={{
                  y: [0, 14, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="mt-2 h-2 w-2 rounded-full bg-black"
              />

            </div>

          </div>

        </motion.div>
              </Container>

      {/* Bottom Fade */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />

      {/* Side Glow */}

      <motion.div
        animate={{
          opacity: [0.08, 0.18, 0.08],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-neutral-300 blur-[110px]"
      />

      <motion.div
        animate={{
          opacity: [0.06, 0.16, 0.06],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-neutral-300 blur-[120px]"
      />

    </Section>
  );
}