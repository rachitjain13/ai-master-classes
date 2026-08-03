"use client";

import Navbar from "./layout/Navbar";

import Hero from "./sections/Hero";
import BookPreview from "./sections/BookPreview";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import WhatYouWillMaster from "./sections/WhatYouWillMaster";
import LearningJourney from "./sections/LearningJourney";
import WhyThisBook from "./sections/WhyThisBook";
import Footer from "../sections/Footer";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white text-black">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute left-[-150px] top-[40%] h-[350px] w-[350px] rounded-full bg-cyan-400/5 blur-[120px]" />

        <div className="absolute right-[-150px] bottom-[15%] h-[350px] w-[350px] rounded-full bg-blue-500/5 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, black 1px, transparent 1px),
              linear-gradient(to bottom, black 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <Navbar />

      <Hero />

      <section id="features">
        <WhatYouWillMaster />
      </section>

      <section id="book">
        <BookPreview />
      </section>

      <section id="roadmap">
        <LearningJourney />
      </section>

      <WhyThisBook />

      <section id="reviews">
        <Pricing />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <Footer />
    </main>
  );
}