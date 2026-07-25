import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import FounderCard from "@/components/FounderCard";
import CompanyProfileSection from "@/components/CompanyProfileSection";
import CTASection from "@/components/CTASection";
import { company } from "@/lib/company";
import { spacing } from "@/lib/theme";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Antimatter Innovations — our vision, mission, and the team driving technical and creative excellence for clients worldwide.",
};

const founders = [...company.founders];
const values = company.values;

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
              Antimatter Innovations is a professional consultancy delivering
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
            {company.stats.map(({ value, label }) => (
              <div
                key={label}
                className={`bg-av-surface border-[1.5px] border-av-orange ${spacing.cardPadding} rounded-2xl`}
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
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Vision */}
          <div className={`bg-av-surface border-[1.5px] border-av-orange ${spacing.cardPadding} rounded-2xl my-8`}>
            <div className="w-12 h-12 bg-av-teal/10 border-[1.5px] border-av-teal rounded-xl flex items-center justify-center mb-6">
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
          <div className={`bg-av-surface border-[1.5px] border-av-orange ${spacing.cardPadding} rounded-2xl`}>
            <div className="w-12 h-12 bg-av-orange/10 border-[1.5px] border-av-orange rounded-xl flex items-center justify-center mb-6">
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
      <SectionWrapper id="team" className="mb-16">
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
            Three specialists, one shared standard — exceptional work, every
            time.
          </p>
          <div className={`grid grid-cols-1 md:grid-cols-3 ${spacing.gapMedium}`}>
            {founders.map((founder, i) => (
              <FounderCard key={i} {...founder} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CompanyProfileSection />

      <CTASection />
    </>
  );
}
