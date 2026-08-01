"use client";

import Navbar from "./layout/Navbar";
// import Footer from "./layout/Footer";

import Hero from "./sections/Hero";
// import WhatYouWillBuild from "./sections/WhatYouWillBuild";

import BookPreview from "./sections/BookPreview";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import FinalCTA from "./sections/FinalCTA";
import WhatYouWillMaster from "./sections/WhatYouWillMaster";
import LearningJourney from "./sections/LearningJourney";
import WhyThisBook from "./sections/WhyThisBook";
import Footer from "../sections/Footer";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0B0B0F] text-white">
      {/* Animated Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* Top Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        {/* Left Glow */}
        <div className="absolute left-[-150px] top-[40%] h-[350px] w-[350px] rounded-full bg-cyan-400/5 blur-[120px]" />

        {/* Right Glow */}
        <div className="absolute right-[-150px] bottom-[15%] h-[350px] w-[350px] rounded-full bg-blue-500/5 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
      </div>
<Navbar />
     <Hero />

<WhatYouWillMaster />

<BookPreview />

<LearningJourney />

<WhyThisBook />

<Pricing />

{/* <WhatYouWillBuild /> */}

<FAQ />

<FinalCTA />
<Footer />
    </main>
  );
}