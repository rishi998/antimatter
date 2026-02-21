"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { spacing, motionVariants } from "@/lib/theme";

interface ServiceCard {
  title: string;
  description: string;
  href: string;
  tag: string;
  items: string[];
  accentOnHover?: "orange" | "teal";
}

const services: ServiceCard[] = [
  {
    title: "Technical Services",
    tag: "Engineering",
    description:
      "Full-stack development, cloud engineering, DevOps pipelines, and dedicated engineering teams built to scale with your ambitions.",
    href: "/services#technical",
    items: [
      "Web & Full-Stack Development",
      "E-Commerce Solutions",
      "DevOps & Cloud Engineering",
      "CI/CD Pipelines",
      "Cloud Security & Monitoring",
    ],
    accentOnHover: "orange",
  },
  {
    title: "Creative Services",
    tag: "Design & Brand",
    description:
      "Brand identity, UI/UX design, motion graphics, and visual content that communicate with clarity and conviction.",
    href: "/services#creative",
    items: [
      "Brand Identity",
      "UI/UX Design",
      "Graphic Design",
      "Motion Graphics",
      "Explainer Videos",
    ],
    accentOnHover: "orange",
  },
  {
    title: "Engagement Models",
    tag: "Flexible Work",
    description:
      "Work with us project-by-project, through dedicated resources, or via managed services — structured around what you actually need.",
    href: "/services#engagement",
    items: [
      "Project-Based Engagement",
      "Dedicated Resource Model",
      "Managed Services Model",
      "On-Demand Support",
    ],
    accentOnHover: "orange",
  },
];

export default function ServicesGrid({ preview = false }: { preview?: boolean }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper id="services">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
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
            <span className="w-8 h-px bg-av-teal" aria-hidden="true" />
            <span className="text-av-teal text-sm font-medium tracking-[0.2em] uppercase">
              {preview ? "What We Do" : "Service Areas"}
            </span>
          </motion.div>
          <motion.h2
            variants={motionVariants.fadeUp}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {preview ? (
              <>
                Three Pillars of{" "}
                <span className="text-av-teal">Excellence</span>
              </>
            ) : (
              <>
                Everything You Need,{" "}
                <span className="text-av-teal">Under One Roof</span>
              </>
            )}
          </motion.h2>
          {preview && (
            <motion.p
              variants={motionVariants.fadeUp}
              className="text-white/60 max-w-2xl text-lg leading-relaxed"
            >
              From engineering infrastructure to brand identity, Antimatter
              Verse covers every dimension of your business.
            </motion.p>
          )}
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={motionVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className={`grid grid-cols-1 md:grid-cols-3 ${spacing.gapMedium}`}
        >
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              {...service}
              index={i}
              shouldReduceMotion={!!shouldReduceMotion}
            />
          ))}
        </motion.div>

        {preview && (
          <motion.div
            variants={motionVariants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-av-teal hover:text-av-orange transition-colors duration-200 font-medium group"
            >
              View All Services
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  );
}

function ServiceCard({
  title,
  tag,
  description,
  href,
  items,
  index,
  shouldReduceMotion,
}: ServiceCard & { index: number; shouldReduceMotion: boolean }) {
  return (
    <motion.div
      variants={motionVariants.fadeUp}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              scale: 0.97,
              transition: { type: "spring", stiffness: 400, damping: 25 },
            }
      }
      whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
      className="group relative bg-av-surface border border-av-teal hover:border-av-orange transition-colors duration-200 rounded-sm overflow-hidden cursor-pointer"
    >
      <Link
        href={href}
        className={`block ${spacing.cardPadding} h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-av-teal`}
        tabIndex={0}
      >
        {/* Tag */}
        <span className="text-xs font-medium text-av-teal group-hover:text-av-orange transition-colors duration-200 tracking-[0.18em] uppercase block mb-5">
          {tag}
        </span>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>

        {/* Description */}
        <p className="text-white/60 text-sm leading-relaxed mb-8">
          {description}
        </p>

        {/* Items */}
        <ul className="space-y-2" role="list">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-white/50">
              <span className="w-1 h-1 rounded-full bg-av-teal group-hover:bg-av-orange transition-colors duration-200 flex-shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        {/* Arrow */}
        <div className="mt-8 flex items-center gap-2 text-av-teal group-hover:text-av-orange transition-colors duration-200 text-sm font-medium">
          Learn More
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
}
