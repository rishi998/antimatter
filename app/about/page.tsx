import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import FounderCard from "@/components/FounderCard";
import CTASection from "@/components/CTASection";
import { spacing } from "@/lib/theme";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Antimatter Verse — our vision, mission, and the team driving technical and creative excellence for clients worldwide.",
};

const founders = [
  {
    name: "Yash Tomar",
    role: "Vision & Strategy Lead",
    bio: "Yash architects the company's long-term direction, forging partnerships and ensuring every engagement aligns with Antimatter Verse's commitment to excellence. His strategic foresight drives growth across all verticals.",
    initials: "YT",
  },
  {
    name: "Rishi Mehto",
    role: "Technical Architecture Head",
    bio: "Rishi oversees all technical decisions — from system design to code quality standards. With deep expertise in full-stack development and cloud infrastructure, he ensures every product is built to last.",
    initials: "RM",
  },
  {
    name: "Prashant Singh Yadav",
    role: "DevOps & Infrastructure Lead",
    bio: "Prashant leads cloud engineering, CI/CD automation, and infrastructure reliability. His work ensures clients' systems are resilient, scalable, and secure — around the clock.",
    initials: "PSY",
  },
  {
    name: "Gulshan Kumar",
    role: "Creative & Brand Director",
    bio: "Gulshan shapes the visual and narrative identity of every brand we touch. From motion design to complete brand systems, he brings precision and creativity in equal measure.",
    initials: "GK",
  },
  {
    name: "Jatin Bharmota",
    role: "Growth & Partnerships Lead",
    bio: "Jatin drives business development and client relationships. His focus on long-term partnerships and transparent communication ensures every client feels like a priority.",
    initials: "JB",
  },
];

const values = [
  {
    title: "Precision",
    description:
      "We sweat the details others skip. Every pixel, every deployment, every decision is deliberate.",
  },
  {
    title: "Reliability",
    description:
      "When we commit to a deadline or deliverable, we deliver — no excuses, no surprises.",
  },
  {
    title: "Transparency",
    description:
      "Open communication at every stage. You always know where your project stands.",
  },
  {
    title: "Innovation",
    description:
      "We stay ahead of the curve so our clients benefit from the best tools and approaches available.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className={`relative pt-40 pb-24 ${spacing.sectionX} overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#0f766e 1px, transparent 1px), linear-gradient(90deg, #0f766e 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-av-orange" />
            <span className="text-av-orange text-sm font-medium tracking-[0.2em] uppercase">
              Our Story
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            About <span className="text-av-teal">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
            A team built on expertise, accountability, and a genuine passion for
            creating things that work.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <SectionWrapper id="overview">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-av-teal" />
              <span className="text-av-teal text-sm font-medium tracking-[0.2em] uppercase">
                Who We Are
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Built for Performance,{" "}
              <span className="text-av-teal">Driven by Purpose</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-6 text-lg">
              Antimatter Verse is a professional consultancy delivering
              end-to-end technical and creative solutions with reliability and
              innovation. We combine deep engineering expertise with refined
              creative capabilities to serve clients across industries and
              geographies.
            </p>
            <p className="text-white/60 leading-relaxed text-lg">
              Founded by a team of specialists who understood that great work
              requires both technical depth and creative clarity, we operate as
              a unified force — not a loosely connected roster of freelancers.
            </p>
          </div>
          <div className={`grid grid-cols-2 ${spacing.gapMedium}`}>
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "12+", label: "Service Domains" },
              { value: "20+", label: "Team Members" },
              { value: "98%", label: "Client Retention" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className={`bg-av-surface border border-av-border ${spacing.cardPadding} rounded-sm`}
              >
                <div className="text-4xl font-bold text-av-teal mb-2">
                  {value}
                </div>
                <div className="text-white/60 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Vision & Mission */}
      <SectionWrapper id="vision-mission">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className={`bg-av-surface border border-av-teal ${spacing.cardPadding} rounded-sm`}>
            <div className="w-12 h-12 bg-av-teal/10 border border-av-teal rounded-sm flex items-center justify-center mb-6">
              <span className="text-av-teal font-bold text-lg">V</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-white/60 leading-relaxed text-lg">
              To become a globally trusted partner delivering high-quality
              professional services with speed and integrity — empowering
              businesses to build, grow, and lead with confidence.
            </p>
          </div>

          {/* Mission */}
          <div className={`bg-av-surface border border-av-orange ${spacing.cardPadding} rounded-sm`}>
            <div className="w-12 h-12 bg-av-orange/10 border border-av-orange rounded-sm flex items-center justify-center mb-6">
              <span className="text-av-orange font-bold text-lg">M</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <ul className="space-y-3">
              {[
                "Provide access to skilled professionals",
                "Deliver flexible, results-oriented service models",
                "Ensure timely, transparent execution",
                "Build long-term partnerships based on trust",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-av-orange mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper id="values">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-av-teal" />
            <span className="text-av-teal text-sm font-medium tracking-[0.2em] uppercase">
              Culture
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            What We Stand For
          </h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${spacing.gapMedium}`}>
            {values.map((value, i) => (
              <div
                key={i}
                className="group border-t-2 border-av-teal pt-6 hover:border-av-orange transition-colors duration-200"
              >
                <span className="text-5xl font-black text-white/5 block mb-4 group-hover:text-white/10 transition-colors duration-200">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Founders */}
      <SectionWrapper id="team">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-av-orange" />
            <span className="text-av-orange text-sm font-medium tracking-[0.2em] uppercase">
              The Team
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet the <span className="text-av-teal">Founders</span>
          </h2>
          <p className="text-white/60 max-w-2xl mb-16 text-lg leading-relaxed">
            Five specialists, one shared standard — exceptional work, every
            time.
          </p>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 ${spacing.gapMedium}`}>
            {founders.map((founder, i) => (
              <FounderCard key={i} {...founder} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
