"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { spacing } from "@/lib/theme";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "12+", label: "Service Categories" },
  { value: "20+", label: "Team Members" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setDotCount((d) => (d >= 3 ? 1 : d + 1));
    }, 500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const entrance = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 70 },
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 20,
          delay,
        },
      };

  return (
    <section
      className={`relative min-h-screen flex items-center ${spacing.sectionX} pt-20 pb-16 overflow-hidden`}
      aria-label="Hero"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(#0f766e 1px, transparent 1px), linear-gradient(90deg, #0f766e 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Teal accent line — left edge */}
      <div
        className="absolute left-0 top-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-av-teal to-transparent opacity-30"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        {/* Tag */}
        <motion.div
          {...entrance(0)}
          className="flex items-center gap-3 mb-5"
        >
          <span className="w-8 h-px bg-av-orange" aria-hidden="true" />
          <span className="text-av-orange text-md font-medium tracking-[0.22em] uppercase">
            Professional Consultancy
          </span>
        </motion.div>

        {/* Headline wrapper — entrance */}
        <motion.div {...entrance(0.1)}>
          {/* Float loop on headline text (skipped when reduced motion) */}
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, -28, 0] }}
            transition={
              shouldReduceMotion
                ? {}
                : {
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.9,
                }
            }
          >
            <h1 className="text-5xl md:text-7xl xl:text-[88px] font-bold leading-[1.04] tracking-tight text-white mb-8">
              Engineering{" "}
              <span className="text-av-teal">Solutions</span>
              <br />
              That{" "}
              <span className="relative inline-block">
                Matter
                {/* Underline expansion */}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] bg-av-orange rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={
                    shouldReduceMotion
                      ? {}
                      : { delay: 0.1, duration: 0.15, ease: "easeOut" }
                  }
                  aria-hidden="true"
                />
              </span>
              {/* Animated dots — slide in left to right */}
              {/* Animated dots — 180° horizontal arc */}
              {/* Animated dots — rise from bottom of "r" */}
<span className="relative inline-block">
  {[1, 2, 3].map((n, index) => (
    <motion.span
      key={n}
      className="inline-block text-av-orange"
      initial={
        shouldReduceMotion
          ? {}
          : { y: 18, opacity: 0 } // start below baseline
      }
      animate={
        shouldReduceMotion
          ? {}
          : {
              y: dotCount >= n ? 0 : 18,
              opacity: dotCount >= n ? 1 : 0,
            }
      }
      transition={{
        duration: 0.35,
        ease: "easeOut",
        delay: index * 0.12,
      }}
      style={{
        display: "inline-block",
        verticalAlign: "baseline",
      }}
    >
      .
    </motion.span>
  ))}
</span>
            </h1>
          </motion.div>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          {...entrance(0.2)}
          className="text-lg md:text-xl text-white/55 max-w-2xl leading-relaxed mb-12"
        >
          Antimatter Verse delivers technical and creative excellence with
          precision, passion, and performance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...entrance(0.3)}
          className="flex flex-wrap items-center gap-4"
        >
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 0.97 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-av-teal text-white font-semibold text-base rounded-xl hover:bg-av-orange transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-av-teal"
            >
              Explore Services
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 0.97 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold text-base rounded-xl hover:border-av-orange hover:text-av-orange transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50"
            >
              Work With Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={shouldReduceMotion ? {} : { delay: 1, duration: 0.6 }}
          className="mt-24 pt-12 border-t border-av-border grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl md:text-4xl font-bold text-av-teal mb-1.5">
                {value}
              </div>
              <div className="text-sm text-white/50">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
