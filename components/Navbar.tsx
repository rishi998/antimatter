"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { spacing } from "@/lib/theme";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const menuVariants = {
    hidden: { opacity: 0, y: -8, height: 0 },
    visible: { opacity: 1, y: 0, height: "auto" },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 border-b border-av-border backdrop-blur-none"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`flex items-center justify-between h-16 ${spacing.sectionX} max-w-[1400px] mx-auto`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Antimatter Verse Home"
        >
          <span className="w-2 h-2 bg-av-teal rounded-full group-hover:bg-av-orange transition-colors duration-200" />
          <span className="text-lg font-bold tracking-widest text-white">
            ANTIMATTER{" "}
            <span className="text-av-teal group-hover:text-av-orange transition-colors duration-200">
              VERSE
            </span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-200 group py-1 ${
                    isActive
                      ? "text-av-orange"
                      : "text-white/70 hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-av-teal transition-all duration-300 group-hover:w-full ${
                      isActive ? "w-full bg-av-orange" : "w-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
          <li>
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 0.97 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link
                href="/services"
                className="px-5 py-2 text-sm font-semibold bg-av-teal text-white rounded-sm hover:bg-av-orange transition-colors duration-200"
              >
                Get Started
              </Link>
            </motion.div>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <motion.span
            className="block w-6 h-0.5 bg-white origin-center rounded-full"
            animate={
              shouldReduceMotion ? {} : { rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }
            }
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-white rounded-full"
            animate={shouldReduceMotion ? {} : { opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-white origin-center rounded-full"
            animate={
              shouldReduceMotion
                ? {}
                : { rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }
            }
            transition={{ duration: 0.2 }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={shouldReduceMotion ? {} : menuVariants.hidden}
            animate={shouldReduceMotion ? {} : menuVariants.visible}
            exit={shouldReduceMotion ? {} : menuVariants.hidden}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-black/95 border-b border-av-border overflow-hidden"
          >
            <ul
              className={`flex flex-col ${spacing.sectionX} py-4 gap-1`}
              role="list"
            >
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block text-base font-medium py-3 border-b border-av-border/50 transition-colors duration-150 ${
                      pathname === href
                        ? "text-av-orange"
                        : "text-white/80 hover:text-white"
                    }`}
                    aria-current={pathname === href ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <Link
                  href="/services"
                  className="inline-block px-6 py-2.5 text-sm font-semibold bg-av-teal text-white rounded-sm hover:bg-av-orange transition-colors duration-200"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
