"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { clientLogoStrip } from "@/lib/testimonials";
import { motionVariants } from "@/lib/theme";

export default function ClientLogoStrip() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper id="clients" className="!py-16 border-y border-av-border">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          variants={motionVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <motion.p
            variants={motionVariants.fadeUp}
            className="text-center text-sm text-white/40 tracking-[0.2em] uppercase"
          >
            Trusted by brands we&apos;ve built for
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
          {clientLogoStrip.map((client, index) => (
            <motion.a
              key={client.id}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 8 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                delay: index * 0.04,
              }}
              className="text-sm md:text-base font-semibold tracking-wide text-white/35 hover:text-av-teal transition-colors duration-200"
              title={`${client.name} — ${client.industry}`}
            >
              {client.name}
            </motion.a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
