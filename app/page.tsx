import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Engineering Solutions That Matter",
  description:
    "Antimatter Verse delivers technical and creative excellence with precision, passion, and performance.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid preview />
      <CaseStudies />
      <Testimonials />
      <CTASection />
    </>
  );
}
