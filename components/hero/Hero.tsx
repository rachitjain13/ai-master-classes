"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black pt-32 pb-20">
      <HeroBackground />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-8">
        <HeroContent />
      </div>
    </section>
  );
}