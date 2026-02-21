"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { spacing, motionVariants } from "@/lib/theme";

export default function CTASection() {
  const shouldReduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className={`${spacing.sectionY} ${spacing.sectionX} bg-av-surface border-t border-av-border`}
      id="contact"
      aria-label="Contact us"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — CTA text */}
          <motion.div
            variants={motionVariants.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={motionVariants.fadeUp}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-px bg-av-orange" aria-hidden="true" />
              <span className="text-av-orange text-sm font-medium tracking-[0.2em] uppercase">
                Get In Touch
              </span>
            </motion.div>

            <motion.h2
              variants={motionVariants.fadeUp}
              className="text-4xl md:text-5xl font-bold text-av-teal mb-6 leading-tight"
            >
              Ready to Build
              <br />
              Something Great?
            </motion.h2>

            <motion.p
              variants={motionVariants.fadeUp}
              className="text-white/60 text-lg leading-relaxed mb-8 max-w-md"
            >
              Tell us what you&apos;re working on. We&apos;ll get back to you
              within 24 hours with a clear path forward.
            </motion.p>

            <motion.div variants={motionVariants.fadeUp} className="space-y-4">
              {[
                { icon: "◈", label: "Fast onboarding — start within 48 hours" },
                { icon: "◉", label: "Single point of contact, always" },
                { icon: "◎", label: "Transparent pricing, no hidden fees" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-white/60">
                  <span className="text-av-teal" aria-hidden="true">{icon}</span>
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={
              shouldReduceMotion
                ? {}
                : { type: "spring", stiffness: 80, damping: 20, delay: 0.15 }
            }
          >
            {submitted ? (
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`bg-av-surface-2 border border-av-teal ${spacing.cardPadding} rounded-sm flex flex-col items-start gap-4`}
              >
                <div className="w-12 h-12 rounded-sm bg-av-teal/10 border border-av-teal flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-av-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">
                    Message Received
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Thanks, {form.name}! We&apos;ll be in touch within 24
                    hours. Watch your inbox.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="text-av-teal hover:text-av-orange text-sm font-medium transition-colors duration-200 mt-2"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={`bg-av-surface-2 border border-av-border ${spacing.cardPadding} rounded-sm space-y-5`}
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="cta-name"
                      className="block text-xs font-medium text-white/60 tracking-[0.12em] uppercase mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      id="cta-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      placeholder="Jane Smith"
                      className="w-full bg-black border border-av-border text-white text-sm px-4 py-3 rounded-sm placeholder:text-white/30 focus:outline-none focus:border-av-teal transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cta-email"
                      className="block text-xs font-medium text-white/60 tracking-[0.12em] uppercase mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      placeholder="jane@company.com"
                      className="w-full bg-black border border-av-border text-white text-sm px-4 py-3 rounded-sm placeholder:text-white/30 focus:outline-none focus:border-av-teal transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="cta-service"
                    className="block text-xs font-medium text-white/60 tracking-[0.12em] uppercase mb-2"
                  >
                    Service of Interest
                  </label>
                  <select
                    id="cta-service"
                    className="w-full bg-black border border-av-border text-white text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-av-teal transition-colors duration-200 appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="technical">Technical Services</option>
                    <option value="creative">Creative & Brand Services</option>
                    <option value="devops">DevOps & Cloud</option>
                    <option value="dedicated">Dedicated Engineers</option>
                    <option value="other">Other / Multiple</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="cta-message"
                    className="block text-xs font-medium text-white/60 tracking-[0.12em] uppercase mb-2"
                  >
                    Tell Us More
                  </label>
                  <textarea
                    id="cta-message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="Briefly describe what you're building or what challenge you're facing..."
                    className="w-full bg-black border border-av-border text-white text-sm px-4 py-3 rounded-sm placeholder:text-white/30 focus:outline-none focus:border-av-teal transition-colors duration-200 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={shouldReduceMotion ? {} : { scale: 0.98 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="w-full py-4 bg-av-orange text-white font-semibold text-base rounded-sm hover:bg-av-teal transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-av-orange"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
