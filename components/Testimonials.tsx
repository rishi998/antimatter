"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { spacing, motionVariants } from "@/lib/theme";
import { testimonials } from "@/lib/testimonials";
import type { Testimonial } from "@/lib/testimonials";

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper id="testimonials" className="scroll-mt-24">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          variants={motionVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <motion.div
            variants={motionVariants.fadeUp}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-px bg-av-teal" aria-hidden="true" />
            <span className="text-av-teal text-sm font-medium tracking-[0.2em] uppercase">
              Client Feedback
            </span>
          </motion.div>
          <motion.h2
            variants={motionVariants.fadeUp}
            id="testimonials-heading"
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Testimonials
          </motion.h2>
          <motion.p
            variants={motionVariants.fadeUp}
            className="text-white/60 mt-4 text-lg max-w-2xl"
          >
            Real feedback from brands we engineered and launched.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.id}
              {...t}
              index={i}
              shouldReduceMotion={!!shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-1 mb-6"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-av-orange" : "text-white/15"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
  company,
  companyUrl,
  rating,
  initials,
  index,
  shouldReduceMotion,
}: Testimonial & { index: number; shouldReduceMotion: boolean }) {
  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={
        shouldReduceMotion
          ? undefined
          : {
              type: "spring",
              stiffness: 80,
              damping: 20,
              delay: Math.min(index, 5) * 0.05,
            }
      }
      className={`bg-av-surface border-[1.5px] border-av-orange ${spacing.cardPadding} rounded-2xl flex flex-col justify-between hover:border-av-teal transition-colors duration-200 h-full`}
    >
      <div>
        <StarRating rating={rating} />
        <svg
          className="w-8 h-8 text-av-orange mb-6"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.5C7.5 11.515 9.015 10 10 10V8zm18 0c-3.314 0-6 2.686-6 6v10h10V14h-6.5C25.5 11.515 27.015 10 28 10V8z" />
        </svg>
        <p className="text-white/70 leading-relaxed text-[15px] mb-8">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      <div className="flex items-center gap-3 border-t border-av-border pt-6">
        <div className="w-10 h-10 rounded-xl bg-av-teal/10 border-[1.5px] border-av-teal flex items-center justify-center flex-shrink-0">
          <span className="text-av-teal text-xs font-bold">{initials}</span>
        </div>
        <div className="min-w-0">
          <p className="text-white text-sm font-semibold">{author}</p>
          <p className="text-white/50 text-xs">
            {role} &mdash;{" "}
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-av-teal hover:text-av-orange transition-colors duration-200"
            >
              {company}
            </a>
          </p>
        </div>
      </div>
    </motion.article>
  );
}
