"use client";

import { motion, useReducedMotion } from "framer-motion";
import { spacing } from "@/lib/theme";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  as = "section",
}: SectionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      id={id}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        shouldReduceMotion
          ? {}
          : { type: "spring", stiffness: 80, damping: 20 }
      }
      className={`${spacing.sectionY} ${spacing.sectionX} ${className}`}
    >
      {children}
    </Tag>
  );
}
