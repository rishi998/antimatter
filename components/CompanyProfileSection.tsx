"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { company } from "@/lib/company";
import { spacing, motionVariants } from "@/lib/theme";

export default function CompanyProfileSection() {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState<string>(company.profilePdfPath);
  const pdfUrl = company.profilePdfPath;

  useEffect(() => {
    setShareUrl(`${window.location.origin}${pdfUrl}`);
  }, [pdfUrl]);

  const handleShare = useCallback(async () => {
    const shareData = {
      title: `${company.brandName} — Company Profile`,
      text: company.tagline,
      url: shareUrl,
    };

    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share(shareData);
        return;
      }
      await navigator.clipboard.writeText(shareData.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      try {
        await navigator.clipboard.writeText(shareData.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        /* noop */
      }
    }
  }, [shareUrl]);

  return (
    <SectionWrapper id="company-profile" className="bg-av-surface">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          variants={motionVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-12"
        >
          <motion.div
            variants={motionVariants.fadeUp}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-px bg-av-orange" aria-hidden="true" />
            <span className="text-av-orange text-sm font-medium tracking-[0.2em] uppercase">
              Resources
            </span>
          </motion.div>
          <motion.h2
            variants={motionVariants.fadeUp}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Company <span className="text-av-teal">Profile</span>
          </motion.h2>
          <motion.p
            variants={motionVariants.fadeUp}
            className="text-white/60 max-w-2xl text-lg leading-relaxed"
          >
            Download or preview our official company documentation — capability
            overview, services, technology stack, delivery process, and selected
            client properties.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="rounded-2xl border-[1.5px] border-av-orange overflow-hidden bg-black"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-av-border bg-av-surface-2">
              <p className="text-sm text-white/70 font-medium truncate">
                {company.profilePdfFileName}
              </p>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-av-teal hover:text-av-orange transition-colors duration-200"
              >
                Open fullscreen
              </a>
            </div>
            <iframe
              title={`${company.brandName} company profile PDF preview`}
              src={`${pdfUrl}#view=FitH`}
              className="w-full h-[520px] md:h-[640px] bg-white"
              loading="lazy"
            />
          </motion.div>

          <motion.aside
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              delay: 0.08,
            }}
            className={`bg-black border-[1.5px] border-av-border rounded-2xl ${spacing.cardPadding} sticky top-28`}
          >
            <p className="text-av-teal text-xs font-medium tracking-[0.2em] uppercase mb-3">
              Documentation
            </p>
            <h3 className="text-2xl font-bold text-white mb-3">
              Official company brief
            </h3>
            <p className="text-white/55 text-sm leading-relaxed mb-8">
              Includes vision, mission, services, tech stack, process, leadership,
              and live client references across {company.stats[1].value} brands.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={pdfUrl}
                download={company.profilePdfFileName}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-av-teal text-white font-semibold text-sm rounded-xl hover:bg-av-orange transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-av-teal"
              >
                <DownloadIcon />
                Download PDF
              </a>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-xl hover:border-av-orange hover:text-av-orange transition-all duration-200"
              >
                <PreviewIcon />
                Preview
              </a>

              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-av-border text-white/80 font-semibold text-sm rounded-xl hover:border-av-teal hover:text-av-teal transition-all duration-200"
              >
                <ShareIcon />
                {copied ? "Link copied" : "Share"}
              </button>
            </div>

            <p className="mt-6 text-xs text-white/35 break-all">{shareUrl}</p>
          </motion.aside>
        </div>
      </div>
    </SectionWrapper>
  );
}

function DownloadIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
    </svg>
  );
}

function PreviewIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  );
}
