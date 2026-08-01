"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import Button from "../ui/Button";
import Container from "../ui/Container";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((item) =>
      document.getElementById(item.href.replace("#", ""))
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);

    const section = document.querySelector(href);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "border-b border-white/10 bg-[#0B0B0F]/80 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
                        {/* Logo */}

            <Link
              href="/"
              className="flex items-center gap-3 transition-opacity hover:opacity-90"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-md">
                <span className="text-lg font-bold text-cyan-300">AI</span>
              </div>

              <div className="flex flex-col leading-none">
                <span className="text-base font-semibold tracking-tight text-white">
                  {SITE.name}
                </span>

                <span className="text-xs text-white/45">
                  Practical AI Learning
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}

            <nav className="hidden items-center gap-8 lg:flex">
              {NAV_LINKS.map((item) => {
                const active = activeSection === item.href;

                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "relative text-[15px] font-medium transition-colors duration-300",
                      active
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    )}
                  >
                    {item.label}

                    {active && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-cyan-400"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Desktop CTA */}

            <div className="hidden items-center lg:flex">
              <Button
                size="md"
                showArrow
                onClick={() => scrollToSection("#pricing")}
              >
                Buy Now • ₹{SITE.price}
              </Button>
            </div>

            {/* Mobile Button */}

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle Navigation"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:border-cyan-400/40 hover:bg-white/10 lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={mobileOpen ? "close" : "menu"}
                  initial={{
                    rotate: -90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  {mobileOpen ? (
                    <X size={22} />
                  ) : (
                    <Menu size={22} />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>
                      </div>
        </Container>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}

            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.25,
              }}
              className="fixed left-4 right-4 top-24 z-50 overflow-hidden rounded-3xl border border-white/10 bg-[#111827]/95 p-6 shadow-2xl backdrop-blur-2xl lg:hidden"
            >
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((item) => {
                  const active = activeSection === item.href;

                  return (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className={cn(
                        "rounded-xl px-4 py-3 text-left text-base font-medium transition-all duration-300",
                        active
                          ? "bg-cyan-400/10 text-cyan-300"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              <div className="mt-6">
                <Button
                  fullWidth
                  showArrow
                  onClick={() => scrollToSection("#pricing")}
                >
                  Buy Now • ₹{SITE.price}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
