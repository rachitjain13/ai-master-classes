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

        <div className="
grid
min-h-screen
items-center
gap-8
pt-32
pb-20
lg:grid-cols-[1.05fr_0.95fr]
"/>

        {/* Soft Glow */}

        <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-neutral-200/60 blur-[80px]" />


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

            <div className="inline-flex items-center gap-2 rounded- border border-neutral-200 bg-white px-4 py-2 shadow-sm">

              <Sparkles
                className="h-4 w-4"
                strokeWidth={2}
              />

              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-700">
                AI MASTERCLASS • 2026
              </span>

            </div>

            {/* Heading */}

            <h1
              className="
mt-8
max-w-[500px]
text-[30px]
font-bold
leading-[1.03]
tracking-[-0.045em]
text-black
sm:text-[40px]
lg:text-[40px]
"
            >

              Learn Practical AI
              <br />

              Skills That Help
              <br />

              You Build,
              <br />

              Create & Grow.

            </h1>

            {/* Subtitle */}

            <p className="mt-8 max-w-[540px]
text-[15px]
leading-8 text-neutral-600">

              Master ChatGPT, Gemini, Prompt Engineering,
              AI automation and practical workflows in a
              simple, structured learning experience.

            </p>

            {/* CTA */}

            <div className="mt-8 flex flex-wrap items-center gap-6">

              <Button
                size="lg"
                showArrow
                onClick={handleCheckout}
                className="
h-12
min-w-[200px]
rounded-2xl
bg-black
px-6
text-[14px]
font-semibold
text-white
shadow-lg
hover:bg-neutral-900
transition-all
duration-200
hover:scale-[1.02]
gap-2
"
              >
                Buy Now
              </Button>


            </div>

            {/* Price */}

            <div className="mt-8 flex flex-wrap items-center gap-6">

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

            <div className="mt-8 flex flex-wrap gap-3">

              {TRUST_ITEMS.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-sm"
                  >
                    <Icon
                      className="h-4 w-4 text-black"
                      strokeWidth={2}
                    />

                    <span className="text-sm font-medium text-neutral-700">
                      {item.label}
                    </span>

                  </div>
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


            {/* <div className="absolute h-[520px] w-[420px] rounded-[40px] border border-neutral-200 bg-neutral-50" /> */}



            {/* Book */}
            <div
              className="
    absolute
    bottom-8
    h-14
    w-72
    rounded-full
    bg-black/10
    blur-3xl
  "
            />

            <motion.div
              animate={{
                y: [-1, 1, -1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >

              <Image
                src="/images/book.png"
                alt="AI Masterclass Book"
                width={500}
                height={510}
                priority
                className="rounded-[20px] object-cover shadow-[0_35px_90px_rgba(0,0,0,0.18)]"
              />

            </motion.div>

            {/* Floating Card - Top */}

            <div className="absolute left-10 top-20 hidden rounded-xl border border-neutral-200 bg-white px-5 py-4 shadow-lg lg:block">

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Learning
              </p>

              <h4 className="mt-2 text-lg font-bold text-black">
                Step-by-Step
              </h4>

              <p className="mt-1 text-sm text-neutral-600">
                Beginner to practical AI workflows.
              </p>

            </div>

            {/* Floating Card - Bottom */}

            {/* <motion.div
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

            </motion.div> */}

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