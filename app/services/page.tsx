import type { Metadata } from "next";
import type { ReactNode } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import ServicesGrid from "@/components/ServicesGrid";
import CTASection from "@/components/CTASection";
import { spacing } from "@/lib/theme";
import {
  TbCode,
  TbShoppingCart,
  TbCloud,
  TbGitMerge,
  TbShieldLock,
  TbUsers,
  TbBrush,
  TbDiamond,
  TbLayout,
  TbMovie,
  TbVideo,
  TbPresentation,
} from "react-icons/tb";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Antimatter Verse's full range of technical and non-technical services — web development, DevOps, branding, UI/UX, and flexible engagement models.",
};

const technicalServices: { title: string; description: string; icon: ReactNode }[] = [
  {
    title: "Web & Full-Stack Development",
    description:
      "End-to-end web applications built with modern frameworks. From MVPs to enterprise-scale platforms.",
    icon: <TbCode size={36} />,
  },
  {
    title: "E-Commerce Solutions",
    description:
      "High-conversion storefronts with custom checkout flows, inventory management, and payment integrations.",
    icon: <TbShoppingCart size={36} />,
  },
  {
    title: "DevOps & Cloud Engineering",
    description:
      "Automated infrastructure provisioning, container orchestration, and cloud-native architecture on AWS, GCP, and Azure.",
    icon: <TbCloud size={36} />,
  },
  {
    title: "CI/CD Pipelines",
    description:
      "Streamlined delivery pipelines that cut deployment friction and accelerate release cycles with zero downtime.",
    icon: <TbGitMerge size={36} />,
  },
  {
    title: "Cloud Security & Monitoring",
    description:
      "Proactive threat detection, compliance frameworks, and 24/7 infrastructure monitoring for mission-critical systems.",
    icon: <TbShieldLock size={36} />,
  },
  {
    title: "Dedicated Engineers",
    description:
      "Embed vetted engineers directly into your team — no recruitment overhead, instant ramp-up, full alignment.",
    icon: <TbUsers size={36} />,
  },
];

const creativeServices: { title: string; description: string; icon: ReactNode }[] = [
  {
    title: "Graphic Design",
    description:
      "Visual communication that cuts through noise — print, digital, and everything in between.",
    icon: <TbBrush size={36} />,
  },
  {
    title: "Brand Identity",
    description:
      "Complete brand systems: logo, typography, color, tone, and style guides that stand the test of time.",
    icon: <TbDiamond size={36} />,
  },
  {
    title: "UI/UX Design",
    description:
      "Research-backed interfaces that convert. From wireframes to polished design systems.",
    icon: <TbLayout size={36} />,
  },
  {
    title: "Motion Graphics",
    description:
      "Dynamic animated content for social, product walkthroughs, and brand storytelling.",
    icon: <TbMovie size={36} />,
  },
  {
    title: "Explainer & Marketing Videos",
    description:
      "Concise, compelling video content that communicates value in seconds.",
    icon: <TbVideo size={36} />,
  },
  {
    title: "Presentation Design",
    description:
      "Investor decks, pitch presentations, and internal reports designed to persuade and inform.",
    icon: <TbPresentation size={36} />,
  },
];

const engagementModels = [
  {
    title: "Project-Based Engagement",
    description:
      "Fixed scope, timeline, and budget. Ideal for well-defined deliverables with clear milestones.",
    highlight: "Best for: One-time projects",
  },
  {
    title: "Dedicated Resource Model",
    description:
      "A full-time embedded resource committed exclusively to your product and goals.",
    highlight: "Best for: Ongoing product work",
  },
  {
    title: "Managed Services Model",
    description:
      "We own delivery end-to-end — you get outcomes, not overhead. SLA-backed, scalable, reliable.",
    highlight: "Best for: Long-term partnerships",
  },
  {
    title: "On-Demand Support",
    description:
      "Flexible retainer-based access to expertise when you need it, without long-term commitments.",
    highlight: "Best for: Sporadic needs",
  },
];

const whyUs = [
  {
    title: "Skilled Professionals",
    description: "Every team member is carefully vetted for technical depth and professional reliability.",
  },
  {
    title: "Cost-Effective Scalability",
    description: "Scale your team up or down instantly without the overhead of traditional hiring.",
  },
  {
    title: "Fast Onboarding",
    description: "We integrate with your workflow in days, not months — context-aware from day one.",
  },
  {
    title: "Single Point of Contact",
    description: "One dedicated account manager coordinates all services, reducing your management burden.",
  },
  {
    title: "Transparent Communication",
    description: "Weekly reports, real-time dashboards, and direct access to your team. No surprises.",
  },
  {
    title: "Quality Assured",
    description: "Rigorous QA processes, code reviews, and design critiques built into every engagement.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className={`relative pt-40 pb-24 ${spacing.sectionX} overflow-hidden`}
      >
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
              What We Offer
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Our <span className="text-av-teal">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
            Technical excellence meets creative precision. Every service we
            offer is designed to drive measurable impact.
          </p>
        </div>
      </section>

      {/* Full Services Grid */}
      <ServicesGrid preview={false} />

      {/* Technical Services Detail */}
      <SectionWrapper id="technical">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-av-teal" />
            <span className="text-av-teal text-sm font-medium tracking-[0.2em] uppercase">
              Technical
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Services
          </h2>
          <p className="text-white/60 max-w-2xl mb-16 text-lg leading-relaxed">
            Engineering solutions built for scale, speed, and resilience.
          </p>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${spacing.gapMedium}`}
          >
            {technicalServices.map((service, i) => (
              <ServiceDetailCard key={i} {...service} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Creative Services Detail */}
      <SectionWrapper id="creative">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-av-orange" />
            <span className="text-av-orange text-sm font-medium tracking-[0.2em] uppercase">
              Creative
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Creative & Brand Services
          </h2>
          <p className="text-white/60 max-w-2xl mb-16 text-lg leading-relaxed">
            Design that communicates, converts, and endures.
          </p>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${spacing.gapMedium}`}
          >
            {creativeServices.map((service, i) => (
              <ServiceDetailCard
                key={i}
                {...service}
                index={i}
                accent="orange"
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Engagement Models */}
      <SectionWrapper id="engagement">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-av-teal" />
            <span className="text-av-teal text-sm font-medium tracking-[0.2em] uppercase">
              Engagement
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Engagement Models
          </h2>
          <p className="text-white/60 max-w-2xl mb-16 text-lg leading-relaxed">
            Work with us the way that makes sense for your business.
          </p>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 ${spacing.gapMedium}`}
          >
            {engagementModels.map((model, i) => (
              <EngagementCard key={i} {...model} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper id="why-us">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-av-orange" />
            <span className="text-av-orange text-sm font-medium tracking-[0.2em] uppercase">
              Why Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Why Choose <span className="text-av-teal">Antimatter Verse</span>
          </h2>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${spacing.gapMedium}`}
          >
            {whyUs.map((item, i) => (
              <div
                key={i}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-av-teal/10 border border-av-teal flex items-center justify-center mt-1">
                  <span className="text-av-teal text-xs font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}

function ServiceDetailCard({
  title,
  description,
  icon,
  index,
  accent = "teal",
}: {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
  accent?: "teal" | "orange";
}) {
  const iconColor = accent === "teal" ? "text-av-teal" : "text-av-orange";

  return (
    <div
      className={`group bg-av-surface border-[1.5px] border-av-orange ${spacing.cardPadding} rounded-2xl hover:border-av-teal transition-all duration-200 hover:scale-[0.98]`}
      style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}
    >
      <div className={`${iconColor} mb-6 group-hover:text-av-orange transition-colors duration-200`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function EngagementCard({
  title,
  description,
  highlight,
  index,
}: {
  title: string;
  description: string;
  highlight: string;
  index: number;
}) {
  return (
    <div
      className={`group bg-av-surface border-[1.5px] border-av-orange ${spacing.cardPadding} rounded-2xl hover:border-av-teal transition-all duration-200 hover:scale-[0.98]`}
      style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}
    >
      <span className="text-xs font-medium text-av-orange tracking-[0.15em] uppercase block mb-4">
        {highlight}
      </span>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/60 leading-relaxed">{description}</p>
    </div>
  );
}
