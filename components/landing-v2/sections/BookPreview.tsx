"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  BookOpen,
} from "lucide-react";

import Section from "../ui/Section";
import Container from "../ui/Container";

const chapter = {
  title: "AI Revolution 2026",
  subtitle:
    "Discover how AI is changing business, freelancing, productivity and the future of work through practical examples.",

  topics: [
    "AI Services & Freelancing",
    "Digital AI Products",
    "AI Automation",
    "Income Roadmap with AI",
  ],
};

export default function BookPreview() {
  return (
    <Section className="relative overflow-hidden bg-white py-28">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.05),transparent_60%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />

      </div>

      <Container>

        {/* Heading */}

        <div
          className="mx-auto max-w-4xl text-center"
        >

          <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-violet-700">

            BOOK PREVIEW

          </span>

          <h2 className="mt-8 text-4xl font-bold tracking-tight text-black md:text-5xl xl:text-6xl">

            See What You will
            <br />

            Learn Inside.

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">

            Explore the first chapter and experience the
            practical learning style before getting full access.

          </p>

          <Link
            href="/checkout"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-white transition-all duration-300 hover:scale-[1.02]"
          >

            Get Instant Access

            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

          </Link>

        </div>

        {/* Content */}

        <div className="mt-24 grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
                    {/* LEFT */}

          

            <div
              className="
                overflow-hidden
                rounded-[34px]
                border
                border-neutral-200
                bg-white
                shadow-[0_20px_60px_rgba(0,0,0,0.06)]
              "
            >

              {/* Header */}

              <div className="flex items-center justify-between border-b border-neutral-100 px-8 py-7">

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.30em] text-violet-600">

                    Chapter 01

                  </p>

                  <h3 className="mt-3 text-4xl font-bold tracking-tight text-black">

                    {chapter.title}

                  </h3>

                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50">

                  <ChevronDown
                    className="h-5 w-5 text-violet-700"
                    strokeWidth={2}
                  />

                </div>

              </div>

              {/* Description */}

              <div className="px-8 pt-7">

                <p className="text-lg leading-8 text-neutral-600">

                  {chapter.subtitle}

                </p>

              </div>

              {/* Topics */}

              <div className="mt-8 space-y-5 px-8">

                {chapter.topics.map((topic) => (

                  <div
                    key={topic}
                    className="flex items-center gap-4"
                  >

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100">

                      <CheckCircle2
                        className="h-4 w-4 text-violet-700"
                        strokeWidth={2.5}
                      />

                    </div>

                    <span className="text-lg font-medium text-neutral-800">

                      {topic}

                    </span>

                  </div>

                ))}

              </div>

              {/* Progress */}

              <div className="border-t border-neutral-100 mt-10 px-8 py-7">

                <div className="mb-4 flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100">

                      <BookOpen
                        className="h-5 w-5 text-violet-700"
                      />

                    </div>

                    <span className="font-medium text-neutral-700">

                      Reading Progress

                    </span>

                  </div>

                  <span className="font-bold text-black">

                    25%

                  </span>

                </div>

                <div className="h-2 overflow-hidden rounded-full bg-neutral-200">

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: "25%",
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

          
                  {/* RIGHT */}

          <div
            className="relative flex items-center justify-center"
          >

            {/* Background Rings */}

            {/* <div className="absolute h-[540px] w-[540px] rounded-full border border-violet-100" />

            <div className="absolute h-[430px] w-[430px] rounded-full border border-violet-100/70" />

            <div className="absolute h-[320px] w-[320px] rounded-full border border-violet-100/40" /> */}

            {/* Soft Glow */}

            <div
              className="absolute h-[360px] w-[360px] rounded-full bg-violet-300/20 blur-[120px]"
            />

            {/* Floating Book */}

            <div
              className="relative z-20"
            >

              <Image
                src="/images/book.png"
                alt="AI Masterclass"
                width={500}
                height={720}
                priority
                className="
                  relative
                  rounded-[22px]
                  shadow-[0_50px_120px_rgba(0,0,0,0.22)]
                  transition-transform
                  duration-500
                  hover:scale-[1.02]
                "
              />

            </div>

            {/* Platform */}

            <div
              className="
                absolute
                bottom-4
                h-10
                w-72
                rounded-full
                bg-violet-400/20
                blur-2xl
              "
            />

            {/* Floating Badge */}

            <div
              
              className="
                absolute
                left-0
                top-14
                hidden
                rounded-2xl
                border
                border-violet-100
                bg-white/90
                px-5
                py-4
                shadow-xl
                backdrop-blur-md
                lg:block
              "
            >

              <p className="text-xs uppercase tracking-[0.25em] text-violet-600">

                Includes

              </p>

              <h4 className="mt-2 text-lg font-bold text-black">

                20 Chapters

              </h4>

              <p className="mt-1 text-sm text-neutral-600">

                Practical AI roadmap

              </p>

            </div>

            {/* Floating Badge */}

            <div
              
              className="
                absolute
                bottom-20
                right-0
                hidden
                rounded-2xl
                border
                border-violet-100
                bg-white/90
                px-5
                py-4
                shadow-xl
                backdrop-blur-md
                lg:block
              "
            >

              <p className="text-xs uppercase tracking-[0.25em] text-violet-600">

                Skill Level

              </p>

              <h4 className="mt-2 text-lg font-bold text-black">

                Beginner

              </h4>

              <p className="mt-1 text-sm text-neutral-600">

                Learn step-by-step

              </p>

            </div>

          </div>

        </div>
                {/* Bottom CTA */}

        <div
          
          className="mt-24"
        >

          <div className="relative overflow-hidden rounded-[36px] border border-neutral-200 bg-gradient-to-br from-white via-violet-50/40 to-white px-10 py-12">

            {/* Decorative Blur */}

            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-violet-200/30 blur-3xl" />

            <div className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-violet-200/20 blur-3xl" />

            <div className="relative z-10 flex flex-col items-center text-center">

              <span className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.30em] text-violet-700">

                READY TO LEARN?

              </span>

              <h3 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-black md:text-5xl">

                Start Building Real
                <br />

                AI Skills Today.

              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">

                Learn through structured chapters, practical
                examples and real-world AI workflows designed
                for beginners.

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
                  hover:shadow-[0_24px_60px_rgba(0,0,0,0.18)]
                "
              >

                Get Instant Access

                <ArrowRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>

            </div>

          </div>

        </div>
              </Container>

      {/* Bottom Fade */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/90 to-transparent" />

      {/* Ambient Light */}

      <div
        
        className="pointer-events-none absolute -left-32 top-28 h-72 w-72 rounded-full bg-violet-300 blur-[140px]"
      />

      <div
        
        className="pointer-events-none absolute -right-32 bottom-16 h-80 w-80 rounded-full bg-violet-200 blur-[150px]"
      />

      {/* Decorative Dots */}

      <div className="pointer-events-none absolute left-16 top-40 hidden lg:block">

        <div className="grid grid-cols-6 gap-3 opacity-30">

          {Array.from({ length: 36 }).map((_, index) => (
            <div
              key={index}
              className="h-1.5 w-1.5 rounded-full bg-violet-300"
            />
          ))}

        </div>

      </div>

      <div className="pointer-events-none absolute right-20 bottom-32 hidden lg:block">

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