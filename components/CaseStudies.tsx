"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { spacing, motionVariants } from "@/lib/theme";

const cases = [
  {
    number: "01",
    title: "Platform Development",
    category: "Technical",
    description:
      "Architected and delivered a multi-tenant SaaS platform handling 100k+ concurrent users. Full-stack implementation with real-time data pipelines and enterprise-grade security.",
    tags: ["Next.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    number: "02",
    title: "Agentic Solutions",
    category: "AI & Automation",
    description:
      "Built an autonomous agent system that reduced manual operations by 70% for a logistics firm. Integrated LLM-powered decision trees with existing ERP infrastructure.",
    tags: ["Python", "LangChain", "GCP", "REST APIs"],
  },
  {
    number: "03",
    title: "Brand Transformation",
    category: "Creative",
    description:
      "Redesigned a legacy fintech brand from the ground up — new identity, design system, product UI, and launch video. Increased brand recall by 45% in post-launch surveys.",
    tags: ["Brand Identity", "UI/UX", "Motion", "Figma"],
  },
];

export default function CaseStudies() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper id="case-studies" className="bg-av-surface">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          variants={motionVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16"
        >
          <motion.div
            variants={motionVariants.fadeUp}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-px bg-av-orange" aria-hidden="true" />
            <span className="text-av-orange text-sm font-medium tracking-[0.2em] uppercase">
              Work
            </span>
          </motion.div>
          <motion.h2
            variants={motionVariants.fadeUp}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Selected <span className="text-av-teal">Case Studies</span>
          </motion.h2>
        </motion.div>

        {/* Cases */}
        <div className="space-y-0">
          {cases.map((item, i) => (
            <CaseItem
              key={i}
              {...item}
              index={i}
              isLast={i === cases.length - 1}
              shouldReduceMotion={!!shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function CaseItem({
  number,
  title,
  category,
  description,
  tags,
  index,
  isLast,
  shouldReduceMotion,
}: (typeof cases)[0] & {
  index: number;
  isLast: boolean;
  shouldReduceMotion: boolean;
}) {
  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={
        shouldReduceMotion
          ? {}
          : {
              type: "spring",
              stiffness: 80,
              damping: 20,
              delay: index * 0.1,
            }
      }
      layout
      className={`group grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-6 md:gap-12 py-10 ${
        !isLast ? "border-b border-av-border" : ""
      } hover:bg-black/30 transition-colors duration-200 -mx-6 md:-mx-16 px-6 md:px-16`}
    >
      {/* Number */}
      <div className="flex items-start">
        <span className="text-5xl md:text-6xl font-black text-white/10 group-hover:text-white/20 transition-colors duration-200 leading-none select-none">
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center">
        <span className="text-xs font-medium text-av-teal group-hover:text-av-orange transition-colors duration-200 tracking-[0.18em] uppercase mb-3">
          {category}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {title}
        </h3>
        <p className="text-white/60 leading-relaxed max-w-xl">{description}</p>
        <div className="flex flex-wrap gap-2 mt-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium text-white/60 border border-av-border rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div className="hidden md:flex items-center">
        <div className="w-10 h-10 border border-av-border rounded-sm flex items-center justify-center text-white/30 group-hover:border-av-orange group-hover:text-av-orange transition-all duration-200">
          <svg
            className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 17L17 7M17 7H7M17 7v10"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
