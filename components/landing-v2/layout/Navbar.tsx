"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Navbar() {
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((item) =>
      document.querySelector(item.href)
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
        rootMargin: "-35% 0px -55% 0px",
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);

    const section = document.querySelector(href) as HTMLElement | null;

    if (!section) return;

    const navbarHeight = 72;

    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top,
      behavior: "smooth",
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
        duration: 0.45,
      }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-neutral-200 bg-white/90 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container className="max-w-7xl">

        <div className="flex h-[72px] items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black shadow-md">

              <span className="text-base font-bold text-white">
                AI
              </span>

            </div>

            <div>

              <h2 className="text-[17px] font-bold text-black">
                {SITE.name}
              </h2>

              <p className="text-xs text-neutral-500">
                Practical AI Learning
              </p>

            </div>

          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-10 lg:flex">

            {NAV_LINKS.map((item) => {

              const active =
                activeSection === item.href;

              return (

                <button
                  key={item.href}
                  onClick={() =>
                    scrollToSection(item.href)
                  }
                  className={cn(
                    "relative text-[15px] font-medium transition-colors",
                    active
                      ? "text-black"
                      : "text-neutral-500 hover:text-black"
                  )}
                >

                  {item.label}

                  {active && (

                    <motion.span
                      layoutId="navbar-active"
                      className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-black"
                    />

                  )}

                </button>

              );

            })}

          </nav>

          {/* CTA */}

          <div className="hidden lg:block">

            <Button
              size="lg"
              onClick={() => router.push("/checkout")}
              className="
                h-11
                rounded-xl
                bg-black
                px-6
                text-sm
                font-semibold
                text-white
                shadow-lg
                transition-all
                hover:scale-[1.02]
                hover:bg-neutral-900
              "
            >

              Buy Now • ₹{SITE.price}

            </Button>

          </div>

          {/* Mobile */}

          <button
            onClick={() =>
              setMobileOpen((prev) => !prev)
            }
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-neutral-200
              bg-white
              text-black
              shadow-sm
              lg:hidden
            "
          >

            <AnimatePresence mode="wait">

              <motion.div
                key={mobileOpen ? "close" : "menu"}
                initial={{
                  opacity: 0,
                  rotate: -90,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  rotate: 90,
                }}
              >

                {mobileOpen ? (
                  <X size={20} />
                ) : (
                  <Menu size={20} />
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

            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
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
              className="
                fixed
                left-4
                right-4
                top-24
                z-50
                rounded-3xl
                border
                border-neutral-200
                bg-white
                p-6
                shadow-2xl
                lg:hidden
              "
            >

              <nav className="flex flex-col gap-2">

                {NAV_LINKS.map((item) => {

                  const active =
                    activeSection === item.href;

                  return (

                    <button
                      key={item.href}
                      onClick={() =>
                        scrollToSection(item.href)
                      }
                      className={cn(
                        "rounded-xl px-4 py-3 text-left text-base font-medium transition-all",
                        active
                          ? "bg-black text-white"
                          : "text-neutral-700 hover:bg-neutral-100 hover:text-black"
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
                  onClick={() => {
                    setMobileOpen(false);
                    router.push("/checkout");
                  }}
                  className="
                    h-12
                    rounded-xl
                    bg-black
                    text-white
                    hover:bg-neutral-900
                  "
                >

                  Buy Now

                </Button>

              </div>

            </motion.div>

          </>

        )}

      </AnimatePresence>

    </>

  );

}