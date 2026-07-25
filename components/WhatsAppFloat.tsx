"use client";

import { motion, useReducedMotion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./ConnectWhatsAppButton";

export default function WhatsAppFloat() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Connect with us on WhatsApp"
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/40 hover:bg-[#1ebe57] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <WhatsAppIcon className="w-5 h-5" />
      <span className="hidden sm:inline">Connect with Us</span>
    </motion.a>
  );
}
