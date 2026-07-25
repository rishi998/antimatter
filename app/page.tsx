import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ClientLogoStrip from "@/components/ClientLogoStrip";
import Testimonials from "@/components/Testimonials";
import ServicesGrid from "@/components/ServicesGrid";
import CaseStudies from "@/components/CaseStudies";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Engineering Solutions That Matter",
  description:
    "Antimatter Innovations delivers technical and creative excellence with precision, passion, and performance.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogoStrip />
      <Testimonials />
      <ServicesGrid preview />
      <CaseStudies />
      <CTASection />
    </>
  );
}
