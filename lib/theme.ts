export const spacing = {
  sectionY: "py-24",
  sectionX: "px-6 md:px-16",
  cardPadding: "p-10",
  gapLarge: "gap-14",
  gapMedium: "gap-10",
} as const;

export const colors = {
  background: "#000000",
  accent: "#0f766e",
  cta: "#ff6a00",
  surface: "#0d0d0d",
  border: "#1f1f1f",
} as const;

export const motionVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 20 },
    },
  },
  staggerContainer: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  },
  cardHover: {
    scale: 0.97,
    transition: { type: "spring" as const, stiffness: 400, damping: 25 },
  },
} as const;
