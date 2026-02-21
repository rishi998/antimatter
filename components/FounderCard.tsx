"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { spacing } from "@/lib/theme";

interface FounderCardProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export default function FounderCard({ name, role, bio, initials }: FounderCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className="relative h-[320px] cursor-pointer select-none focus-visible:outline-none"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={handleFlip}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleFlip();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${name}, ${role}. Press to read bio.`}
    >
      {shouldReduceMotion ? (
        /* Reduced motion: show content statically, toggle on click */
        <div className={`w-full h-full bg-av-surface border ${isFlipped ? "border-av-orange" : "border-av-teal"} rounded-sm ${spacing.cardPadding} flex flex-col`}>
          {!isFlipped ? (
            <>
              <div className="w-14 h-14 rounded-sm bg-av-teal/10 border border-av-teal flex items-center justify-center mb-4">
                <span className="text-av-teal font-bold text-sm">{initials}</span>
              </div>
              <div className="flex-1" />
              <div>
                <p className="text-white font-bold text-lg leading-tight mb-1">{name}</p>
                <p className="text-av-teal text-xs font-medium tracking-[0.15em] uppercase">{role}</p>
              </div>
            </>
          ) : (
            <>
              <p className="text-white/70 text-sm leading-relaxed flex-1">{bio}</p>
              <div className="pt-4 border-t border-av-border mt-4">
                <SocialIcons />
              </div>
            </>
          )}
        </div>
      ) : (
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          {/* Front */}
          <div
            className={`absolute inset-0 bg-av-surface border border-av-teal rounded-sm ${spacing.cardPadding} flex flex-col`}
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="w-14 h-14 rounded-sm bg-av-teal/10 border border-av-teal flex items-center justify-center mb-4">
              <span className="text-av-teal font-bold text-sm">{initials}</span>
            </div>
            <div className="flex-1" />
            <div>
              <p className="text-xs text-white/40 mb-3 tracking-wider uppercase">Hover to read</p>
              <p className="text-white font-bold text-lg leading-tight mb-1">{name}</p>
              <p className="text-av-teal text-xs font-medium tracking-[0.15em] uppercase">
                {role}
              </p>
            </div>
          </div>

          {/* Back */}
          <div
            className={`absolute inset-0 bg-av-surface border border-av-orange rounded-sm ${spacing.cardPadding} flex flex-col`}
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="mb-3">
              <p className="text-white font-bold text-base leading-tight">{name}</p>
              <p className="text-av-orange text-xs font-medium tracking-[0.15em] uppercase mt-0.5">
                {role}
              </p>
            </div>
            <p className="text-white/65 text-sm leading-relaxed flex-1">
              {bio}
            </p>
            <div className="pt-4 border-t border-av-border mt-4">
              <SocialIcons />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      {[
        {
          label: "LinkedIn",
          icon: (
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          ),
        },
        {
          label: "Twitter",
          icon: (
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          ),
        },
      ].map(({ label, icon }) => (
        <a
          key={label}
          href="#"
          aria-label={label}
          className="w-7 h-7 border border-av-border rounded-sm flex items-center justify-center text-white/40 hover:text-av-orange hover:border-av-orange transition-all duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
