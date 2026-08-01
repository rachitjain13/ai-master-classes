"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bot,
  Sparkles,
  Wand2,
  Workflow,
  BriefcaseBusiness,
  Rocket,
  ArrowRight,
} from "lucide-react";

import Section from "../ui/Section";
import Container from "../ui/Container";

const skills = [
  {
    id: "01",
    title: "ChatGPT",
    description:
      "Learn prompting, writing, brainstorming, research and daily productivity like a professional.",
    icon: Bot,
  },
  {
    id: "02",
    title: "Google Gemini",
    description:
      "Generate ideas, analyze files and complete work faster using Gemini AI.",
    icon: Sparkles,
  },
  {
    id: "03",
    title: "Prompt Engineering",
    description:
      "Write prompts that consistently produce accurate and high-quality results.",
    icon: Wand2,
  },
  {
    id: "04",
    title: "AI Automation",
    description:
      "Automate repetitive work using practical AI tools and workflows.",
    icon: Workflow,
  },
  {
    id: "05",
    title: "Earn With AI",
    description:
      "Discover practical ways to use AI skills for freelancing and business.",
    icon: BriefcaseBusiness,
  },
  {
    id: "06",
    title: "Future AI",
    description:
      "Understand upcoming AI trends and prepare yourself for the future.",
    icon: Rocket,
  },
];

export default function WhatYouWillMaster() {
  return (
    <Section className="relative overflow-hidden bg-white py-28">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(211, 57, 57, 0.03),transparent_60%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79, 64, 64, 0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />

      </div>

      <Container>

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full border border-neutral-00 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.30em] text-neutral-700 shadow-sm">

            WHAT YOU WILL MASTER
          </span>

          <h2 className="mt-7 text-4xl font-bold tracking-tight text-black md:text-5xl">

            Master The Most
            <br />

            In-Demand AI Skills

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">

            Learn practical AI tools, prompting,
            automation and real-world workflows that
            help you work smarter and grow faster.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill, index) => {
  const Icon = skill.icon;

  return (
    <motion.div
      key={skill.id}
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.08,
        duration: 0.55,
      }}
    >
      <Link
        href="/checkout"
        className="group block h-full"
      >
        <div
          className="
            relative
            h-full
            overflow-hidden
            rounded-[30px]
            border
            border-neutral-200
            bg-white
            p-8
            shadow-[0_10px_40px_rgba(0,0,0,0.05)]
            transition-all
            duration-500
            group-hover:-translate-y-2
            group-hover:border-neutral-300
            group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.10)]
          "
        >

          {/* Number */}

          <span className="absolute right-7 top-7 text-sm font-semibold tracking-widest text-neutral-300">

            {skill.id}

          </span>

          {/* Icon */}

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-neutral-200
              bg-neutral-50
              transition-all
              duration-500
              group-hover:bg-black
            "
          >

            <Icon
              className="
                h-6
                w-6
                text-black
                transition-colors
                duration-500
                group-hover:text-white
              "
              strokeWidth={2}
            />

          </div>

          {/* Title */}

          <h3 className="mt-8 text-2xl font-bold tracking-tight text-black">

            {skill.title}

          </h3>

          {/* Description */}

          <p className="mt-4 text-[15px] leading-7 text-neutral-600">

            {skill.description}

          </p>
                    {/* Learn More */}

          <div className="mt-8 flex items-center gap-2">

            <span
              className="
                text-sm
                font-semibold
                tracking-wide
                text-violet-600
                transition-colors
                duration-300
                group-hover:text-black
              "
            >
              Learn More
            </span>

            <ArrowRight
              className="
                h-4
                w-4
                text-violet-600
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:text-black
              "
              strokeWidth={2}
            />

          </div>

          {/* Bottom Accent */}

          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="
              absolute
              bottom-0
              left-0
              h-1
              w-full
              origin-left
              bg-gradient-to-r
              from-violet-500
              via-fuchsia-500
              to-sky-500
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          {/* Soft Hover Glow */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[30px]
              bg-gradient-to-br
              from-violet-500/0
              via-transparent
              to-sky-500/0
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

        </div>

      </Link>

    </motion.div>
  );
})}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.15,
            duration: 0.6,
          }}
          className="mt-20 flex flex-col items-center justify-center text-center"
        >

          <span className="text-sm uppercase tracking-[0.32em] text-neutral-500">

            Ready To Start?

          </span>

          <h3 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight text-black md:text-4xl">

            Start Learning AI
            <br />
            With Practical Skills.

          </h3>

          <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-600">

            Join the complete learning experience and build
            practical AI skills through structured lessons.

          </p>

          <Link
            href="/checkout"
            className="
              group
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-black
              px-8
              py-4
              text-base
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:bg-neutral-900
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
            "
          >

            Get Instant Access

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

        </motion.div>
              </Container>

      {/* Bottom Fade */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />

      {/* Decorative Blur */}

      <motion.div
        animate={{
          opacity: [0.06, 0.12, 0.06],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-neutral-300 blur-[120px]"
      />

      <motion.div
        animate={{
          opacity: [0.04, 0.10, 0.04],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-neutral-300 blur-[140px]"
      />

    </Section>
  );
}
