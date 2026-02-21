"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { spacing, motionVariants } from "@/lib/theme";

const testimonials = [
  {
    quote:
      "Antimatter Verse transformed our entire platform in 8 weeks. The engineering quality was exceptional — zero bugs at launch, and the DevOps setup they configured has saved us countless hours since.",
    author: "Sarah Chen",
    role: "CTO",
    company: "Nexora Labs",
    initials: "SC",
  },
  {
    quote:
      "The brand identity work was nothing short of extraordinary. They understood our vision immediately and executed it with a level of craft that genuinely surprised us. Our investor deck looks like it's from a Fortune 500 company.",
    author: "Marcus Webb",
    role: "Founder & CEO",
    company: "Velance Finance",
    initials: "MW",
  },
  {
    quote:
      "Working with their dedicated engineering team felt like having in-house developers who actually cared. Fast communication, clean code, and they always delivered ahead of schedule.",
    author: "Priya Anand",
    role: "Head of Product",
    company: "Stackform",
    initials: "PA",
  },
  {
    quote:
      "The managed services model was exactly what we needed. One point of contact, SLA-backed delivery, and a team that proactively flagged issues before they became problems. Highly recommend.",
    author: "James O'Brien",
    role: "Operations Director",
    company: "TridentFlow",
    initials: "JO",
  },
  {
    quote:
      "Their UI/UX team redesigned our onboarding flow and our activation rate jumped 38% in the first month. The attention to micro-interactions and accessibility was impressive.",
    author: "Lena Kovacs",
    role: "Product Designer",
    company: "Clarix AI",
    initials: "LK",
  },
];

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <SectionWrapper id="testimonials">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          variants={motionVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.div
            variants={motionVariants.fadeUp}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-px bg-av-teal" aria-hidden="true" />
            <span className="text-av-teal text-sm font-medium tracking-[0.2em] uppercase">
              Testimonials
            </span>
          </motion.div>
          <motion.h2
            variants={motionVariants.fadeUp}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Trusted by <span className="text-av-teal">Builders</span>
          </motion.h2>
          <motion.p
            variants={motionVariants.fadeUp}
            className="text-white/60 mt-4 text-lg"
          >
            Drag to explore &mdash; or just read.
          </motion.p>
        </motion.div>

        {/* Draggable Slider */}
        <div className="overflow-hidden -mx-6 md:-mx-16 px-6 md:px-16" ref={containerRef}>
          <motion.div
            drag={shouldReduceMotion ? false : "x"}
            dragConstraints={containerRef}
            dragElastic={0.1}
            whileDrag={{ cursor: "grabbing" }}
            className="flex gap-6 cursor-grab select-none pb-4"
            style={{ width: "max-content" }}
          >
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} index={i} shouldReduceMotion={!!shouldReduceMotion} />
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="flex items-center gap-2 mt-6" aria-hidden="true">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-av-border"
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
  company,
  initials,
  index,
  shouldReduceMotion,
}: (typeof testimonials)[0] & { index: number; shouldReduceMotion: boolean }) {
  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={
        shouldReduceMotion
          ? {}
          : { type: "spring", stiffness: 80, damping: 20, delay: index * 0.05 }
      }
      className={`flex-shrink-0 w-[340px] md:w-[400px] bg-av-surface border-[1.5px] border-av-orange ${spacing.cardPadding} rounded-2xl flex flex-col justify-between hover:border-av-teal transition-colors duration-200`}
    >
      {/* Quote icon */}
      <div className="mb-6">
        <svg
          className="w-8 h-8 text-av-orange"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.5C7.5 11.515 9.015 10 10 10V8zm18 0c-3.314 0-6 2.686-6 6v10h10V14h-6.5C25.5 11.515 27.015 10 28 10V8z" />
        </svg>
      </div>

      {/* Quote text */}
      <p className="text-white/70 leading-relaxed text-[15px] flex-1 mb-8">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-av-border pt-6">
        <div className="w-10 h-10 rounded-xl bg-av-teal/10 border-[1.5px] border-av-teal flex items-center justify-center flex-shrink-0">
          <span className="text-av-teal text-xs font-bold">{initials}</span>
        </div>
        <div>
          <p className="text-white text-sm font-semibold">{author}</p>
          <p className="text-white/50 text-xs">
            {role} &mdash; {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
