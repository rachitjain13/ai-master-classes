"use client";

import { motion } from "framer-motion";
import {
  Brain,
  PenTool,
  Bot,
  Coins,
  Rocket,
} from "lucide-react";
import { ArrowRight } from "lucide-react";

import Section from "../ui/Section";
import Container from "../ui/Container";
import Link from "next/link";

const roadmap = [
  {
    step: "01",
    title: "Build Your AI Foundation",
    description:
      "Understand AI fundamentals, ChatGPT, prompt engineering and the tools powering modern businesses.",
    progress: 20,
    tags: ["ChatGPT", "Prompting", "AI Basics"],
    icon: Brain,
  },
  {
    step: "02",
    title: "Create Content That Sells",
    description:
      "Use AI for YouTube, Instagram, SEO, blogs and persuasive copywriting.",
    progress: 40,
    tags: ["YouTube", "SEO", "Instagram"],
    icon: PenTool,
  },
  {
    step: "03",
    title: "Automate Your Workflow",
    description:
      "Build AI workflows that save hours every week using practical automation tools.",
    progress: 60,
    tags: ["Automation", "Agents", "No-Code"],
    icon: Bot,
  },
  {
    step: "04",
    title: "Earn With AI",
    description:
      "Turn your AI knowledge into freelancing services, products and client work.",
    progress: 80,
    tags: ["Freelancing", "Clients", "Income"],
    icon: Coins,
  },
  {
    step: "05",
    title: "Become AI Ready",
    description:
      "Combine everything you've learned into a long-term AI skillset for the future.",
    progress: 100,
    tags: ["Career", "Business", "Growth"],
    icon: Rocket,
  },
];

export default function LearningJourney() {
  return (
    <Section className="relative overflow-hidden bg-white py-32">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.05),transparent_60%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />

      </div>

      <Container>

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-4xl text-center"
        >

          <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.30em] text-violet-700">

            LEARNING JOURNEY

          </span>

          <h2 className="mt-8 text-4xl font-bold tracking-tight text-black md:text-5xl xl:text-6xl">

            From Beginner
            <br />

            To AI Professional.

          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-neutral-600">

            Follow a structured roadmap that gradually
            transforms you from learning AI fundamentals
            into building practical projects, automation
            systems and income opportunities.

          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Vertical Line */}

          <div className="absolute left-8 top-0 hidden h-full w-[2px] bg-neutral-200 lg:block" />

          <div className="space-y-12">
            {roadmap.slice(0, 3).map((item, index) => {
  const Icon = item.icon;

  return (
    <motion.div
      key={item.step}
      initial={{
        opacity: 0,
        x: 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.12,
        duration: 0.6,
      }}
      className="relative flex gap-8"
    >

      {/* Timeline */}

      <div className="relative hidden w-16 justify-center lg:flex">

        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          className="
            z-20
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border
            border-violet-200
            bg-white
            shadow-lg
          "
        >

          <Icon
            className="h-7 w-7 text-violet-600"
            strokeWidth={2}
          />

        </motion.div>

      </div>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -6,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          flex-1
          overflow-hidden
          rounded-[32px]
          border
          border-neutral-200
          bg-white
          p-8
          shadow-[0_18px_50px_rgba(0,0,0,0.06)]
          transition-all
          duration-300
          hover:border-violet-200
          hover:shadow-[0_30px_80px_rgba(124,58,237,0.12)]
        "
      >

        {/* Step */}

        <div className="flex items-center justify-between">

          <span
            className="
              rounded-full
              bg-violet-50
              px-4
              py-2
              text-xs
              font-semibold
              tracking-[0.30em]
              text-violet-700
            "
          >
            STEP {item.step}
          </span>

          <span className="text-sm font-medium text-neutral-400">

            Stage {index + 1} of 5

          </span>

        </div>

        {/* Title */}

        <h3 className="mt-6 text-3xl font-bold tracking-tight text-black">

          {item.title}

        </h3>

        {/* Description */}

        <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600">

          {item.description}

        </p>

        {/* Tags */}

        <div className="mt-7 flex flex-wrap gap-3">

          {item.tags.map((tag) => (

            <span
              key={tag}
              className="
                rounded-full
                border
                border-neutral-200
                bg-neutral-50
                px-4
                py-2
                text-sm
                font-medium
                text-neutral-700
              "
            >
              {tag}
            </span>

          ))}

        </div>

        {/* Progress */}

        <div className="mt-8">

          <div className="mb-3 flex items-center justify-between">

            <span className="text-sm font-medium text-neutral-500">

              Learning Progress

            </span>

            <span className="text-sm font-semibold text-black">

              {item.progress}%

            </span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-neutral-200">

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: `${item.progress}%`,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
              }}
              className="h-full rounded-full bg-violet-600"
            />

          </div>

        </div>

      </motion.div>

    </motion.div>
  );
})}
{/* Remaining Steps */}

{roadmap.slice(3).map((item, index) => {
  const Icon = item.icon;

  const isLast = index === 1;

  return (
    <motion.div
      key={item.step}
      initial={{
        opacity: 0,
        x: 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
      }}
      className="relative flex gap-8"
    >

      {/* Timeline */}

      <div className="relative hidden w-16 justify-center lg:flex">

        {/* Vertical Connector */}

        {!isLast && (
          <div className="absolute top-16 h-full w-[2px] bg-neutral-200" />
        )}

        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          className={`
            z-20
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border
            shadow-lg

            ${
              isLast
                ? "border-violet-500 bg-violet-600 text-white shadow-[0_25px_60px_rgba(124,58,237,.35)]"
                : "border-violet-200 bg-white"
            }
          `}
        >

          <Icon
            className={`h-7 w-7 ${
              isLast ? "text-white" : "text-violet-600"
            }`}
            strokeWidth={2}
          />

        </motion.div>

      </div>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -6,
        }}
        transition={{
          duration: 0.25,
        }}
        className={`
          relative
          flex-1
          overflow-hidden
          rounded-[32px]
          border
          p-8
          transition-all
          duration-300

          ${
            isLast
              ? "border-violet-200 bg-gradient-to-br from-violet-50 via-white to-violet-100 shadow-[0_35px_90px_rgba(124,58,237,.15)]"
              : "border-neutral-200 bg-white shadow-[0_18px_50px_rgba(0,0,0,.06)] hover:border-violet-200 hover:shadow-[0_30px_80px_rgba(124,58,237,.12)]"
          }
        `}

      >

        {/* Decorative Glow */}

        {isLast && (
          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-violet-300/20 blur-3xl" />
        )}

        <div className="relative z-10">

          <div className="flex items-center justify-between">

            <span
              className={`
                rounded-full
                px-4
                py-2
                text-xs
                font-semibold
                tracking-[0.30em]

                ${
                  isLast
                    ? "bg-violet-600 text-white"
                    : "bg-violet-50 text-violet-700"
                }
              `}
            >
              STEP {item.step}
            </span>

            <span className="text-sm font-medium text-neutral-500">

              Stage {Number(item.step)} of 5

            </span>

          </div>

          <h3 className="mt-6 text-3xl font-bold tracking-tight text-black">

            {item.title}

          </h3>

          <p className="mt-5 text-lg leading-8 text-neutral-600">

            {item.description}

          </p>

          {/* Tags */}

          <div className="mt-7 flex flex-wrap gap-3">

            {item.tags.map((tag) => (

              <span
                key={tag}
                className={`
                  rounded-full
                  border
                  px-4
                  py-2
                  text-sm
                  font-medium

                  ${
                    isLast
                      ? "border-violet-200 bg-white text-violet-700"
                      : "border-neutral-200 bg-neutral-50 text-neutral-700"
                  }
                `}
              >

                {tag}

              </span>

            ))}

          </div>

          {/* Progress */}

          <div className="mt-8">

            <div className="mb-3 flex items-center justify-between">

              <span className="text-sm text-neutral-500">

                Completion

              </span>

              <span className="font-semibold text-black">

                {item.progress}%

              </span>

            </div>

            <div className="h-2 overflow-hidden rounded-full bg-neutral-200">

              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: `${item.progress}%`,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1,
                }}
                className="h-full rounded-full bg-violet-600"
              />

            </div>

          </div>

        </div>

      </motion.div>

    </motion.div>
  );
})}
        </div>
        </div>


        {/* Journey Destination */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mt-28"
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-violet-200
              bg-gradient-to-br
              from-violet-50
              via-white
              to-violet-100
              px-12
              py-16
            "
          >

            {/* Background Glow */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-[-100px]
                top-[-100px]
                h-80
                w-80
                rounded-full
                bg-violet-300/30
                blur-[120px]
              "
            />

            <div className="relative z-10">

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-violet-600 shadow-[0_25px_70px_rgba(124,58,237,.35)]">

                <Rocket
                  className="h-10 w-10 text-white"
                  strokeWidth={2}
                />

              </div>

              <h3 className="mt-10 text-center text-5xl font-bold tracking-tight text-black">

                Your AI Journey
                <br />

                Starts Today.

              </h3>

              <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-neutral-600">

                Every chapter is designed to move you
                one step closer to becoming someone
                who can confidently use AI to create,
                automate and earn.

              </p>

              {/* Stats */}

              <div className="mt-14 grid gap-8 md:grid-cols-3">

                <div className="rounded-3xl border border-white/70 bg-white/70 p-8 backdrop-blur">

                  <p className="text-5xl font-bold text-violet-600">

                    20

                  </p>

                  <p className="mt-3 text-neutral-600">

                    Practical Chapters

                  </p>

                </div>

                <div className="rounded-3xl border border-white/70 bg-white/70 p-8 backdrop-blur">

                  <p className="text-5xl font-bold text-violet-600">

                    100+

                  </p>

                  <p className="mt-3 text-neutral-600">

                    Actionable Prompts

                  </p>

                </div>

                <div className="rounded-3xl border border-white/70 bg-white/70 p-8 backdrop-blur">

                  <p className="text-5xl font-bold text-violet-600">

                    ∞

                  </p>

                  <p className="mt-3 text-neutral-600">

                    Lifetime Access

                  </p>

                </div>

              </div>

              {/* CTA */}

              <div className="mt-14 flex justify-center">

                <Link
                  href="/checkout"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-4
                    rounded-full
                    bg-black
                    px-9
                    py-5
                    text-lg
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                    hover:bg-neutral-900
                    hover:shadow-[0_25px_70px_rgba(0,0,0,.18)]
                  "
                >

                  Start Your Journey

                  <ArrowRight
                    className="
                      h-5
                      w-5
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </Link>

              </div>

            </div>

          </div>

        </motion.div>
                {/* Section Divider */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="relative mt-28 flex justify-center"
        >

          <div className="h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

        </motion.div>

      </Container>

      {/* Ambient Lights */}

      <motion.div
        animate={{
          opacity: [0.05, 0.12, 0.05],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-24
          top-40
          h-72
          w-72
          rounded-full
          bg-violet-300
          blur-[140px]
        "
      />

      <motion.div
        animate={{
          opacity: [0.04, 0.10, 0.04],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-28
          bottom-20
          h-80
          w-80
          rounded-full
          bg-violet-200
          blur-[160px]
        "
      />

      {/* Decorative Grid */}

      <div className="pointer-events-none absolute right-20 top-24 hidden lg:block">

        <div className="grid grid-cols-6 gap-3 opacity-20">

          {Array.from({ length: 36 }).map((_, index) => (

            <div
              key={index}
              className="h-1.5 w-1.5 rounded-full bg-violet-300"
            />

          ))}

        </div>

      </div>

      <div className="pointer-events-none absolute left-16 bottom-20 hidden lg:block">

        <div className="grid grid-cols-5 gap-3 opacity-20">

          {Array.from({ length: 25 }).map((_, index) => (

            <div
              key={index}
              className="h-1.5 w-1.5 rounded-full bg-violet-300"
            />

          ))}

        </div>

      </div>

    </Section>
  );
}