export const company = {
  legalName: "Antimatter Innovations",
  brandName: "Antimatter Innovations",
  tagline: "Engineering Solutions That Matter",
  description:
    "Antimatter Innovations is a professional software engineering and creative consultancy delivering end-to-end digital products, e-commerce platforms, cloud infrastructure, and brand systems for ambitious companies worldwide.",
  positioning:
    "Trusted software engineering partner for high-growth brands and enterprise teams who need precision delivery, modern architecture, and measurable business outcomes.",
  email: "hello@antimatterinnovations.com",
  phone: "+91 83689 48151",
  whatsapp: "918368948151",
  whatsappDisplay: "+91 83689 48151",
  whatsappMessage:
    "Hi! I'd like to know more about your services, products, and deals.",
  website: "https://antimatterinnovations.com",
  location: "India · Remote-first · Global delivery",
  officeHours: "Monday – Friday, 9:00 AM – 6:00 PM IST",
  founded: "2024",
  profilePdfPath: "/docs/antimatter-company-profile.pdf",
  profilePdfFileName: "Antimatter-Innovations-Company-Profile.pdf",
  stats: [
    { value: "50+", label: "Projects Delivered" },
    { value: "11+", label: "Live Client Brands" },
    { value: "12+", label: "Service Domains" },
    { value: "98%", label: "Client Retention" },
  ],
  vision:
    "To become a globally trusted partner delivering high-quality professional services with speed and integrity — empowering businesses to build, grow, and lead with confidence.",
  mission: [
    "Provide access to skilled engineering and creative professionals",
    "Deliver flexible, results-oriented engagement models",
    "Ensure timely, transparent, and measurable execution",
    "Build long-term partnerships rooted in trust and craft",
  ],
  values: [
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
  ],
  services: {
    technical: [
      "Web & Full-Stack Development",
      "E-Commerce Solutions (Shopify / Custom)",
      "DevOps & Cloud Engineering",
      "CI/CD Pipelines",
      "Cloud Security & Monitoring",
      "Dedicated Engineering Teams",
    ],
    creative: [
      "Brand Identity Systems",
      "UI/UX Design",
      "Graphic Design",
      "Motion Graphics",
      "Explainer & Marketing Videos",
      "Presentation Design",
    ],
    engagement: [
      "Project-Based Engagement",
      "Dedicated Resource Model",
      "Managed Services Model",
      "On-Demand Support",
    ],
  },
  techStack: {
    Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    Backend: ["Node.js", "Python", "REST APIs", "GraphQL"],
    Mobile: ["React Native", "Progressive Web Apps"],
    Database: ["PostgreSQL", "MongoDB", "Redis"],
    Cloud: ["AWS", "GCP", "Azure", "Vercel", "Cloudflare"],
    DevOps: ["Docker", "CI/CD", "GitHub Actions", "Monitoring"],
    AI: ["LLM Integrations", "LangChain", "Automation Agents"],
    Testing: ["Playwright", "Jest", "Cypress", "Lighthouse"],
  },
  process: [
    {
      step: "01",
      title: "Discover",
      description: "Align on goals, constraints, users, and success metrics.",
    },
    {
      step: "02",
      title: "Design",
      description: "Architecture, UX flows, and technical blueprint before build.",
    },
    {
      step: "03",
      title: "Build",
      description: "Iterative delivery with code quality, reviews, and demos.",
    },
    {
      step: "04",
      title: "Launch",
      description: "Hardened releases, performance checks, and go-live support.",
    },
    {
      step: "05",
      title: "Scale",
      description: "Monitoring, optimization, and continuous improvement.",
    },
  ],
  differentiators: [
    {
      title: "Engineering-first delivery",
      description:
        "Production-grade architecture, not throwaway prototypes. Clean codebases that teams can own.",
    },
    {
      title: "Outcome-focused partnerships",
      description:
        "We optimize for conversion, reliability, and business impact — not vanity features.",
    },
    {
      title: "Cross-disciplinary craft",
      description:
        "Engineering and creative under one roof, so product, brand, and performance stay aligned.",
    },
    {
      title: "Transparent execution",
      description:
        "Clear milestones, proactive communication, and accountability at every stage.",
    },
  ],
  industries: [
    "E-Commerce & DTC",
    "Health & Wellness",
    "Corporate Gifting",
    "Luxury Retail",
    "Home & Lifestyle",
    "Industrial & B2B",
    "Family Office & Finance",
    "Apparel & Fashion",
  ],
  founders: [
    {
      name: "Yash Tomar",
      role: "Chief Executive Officer",
      bio: "Yash leads the company's vision and long-term strategy, forging partnerships and ensuring every engagement aligns with Antimatter Innovations' commitment to excellence. His leadership drives growth across all verticals.",
      initials: "YT",
      portfolioUrl: "https://portfolio-yash-tau.vercel.app",
    },
    {
      name: "Rishi Mehto",
      role: "Chief Backend Architect",
      bio: "Rishi oversees all engineering operations — from system design to code quality standards. With deep expertise in full-stack development and cloud infrastructure, he ensures every product is built to last.",
      initials: "RM",
      portfolioUrl: "https://mehtorishipf.vercel.app",
    },
    {
      name: "Asad Mazhar",
      role: "Senior Cloud Architect",
      bio: "Asad designs and scales cloud infrastructure across AWS, GCP, and Azure — from resilient architectures and CI/CD automation to security hardening and production reliability. He ensures every system is built to perform under real-world load.",
      initials: "AM",
    },
  ],
} as const;

export type Company = typeof company;
