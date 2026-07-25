import { clients } from "./clients";

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  companyUrl: string;
  rating: number;
  initials: string;
  photo?: string;
};

/**
 * Client testimonials mapped to live properties Antimatter Innovations delivered.
 */
export const testimonials: Testimonial[] = [
  {
    id: "safetywide",
    quote:
      "Antimatter rebuilt our industrial catalog into a fast, searchable storefront. Navigation across hundreds of PPE SKUs finally feels effortless for our trade customers.",
    author: "Operations Lead",
    role: "E-Commerce Director",
    company: "Safety Wide",
    companyUrl: "https://safetywide.com/",
    rating: 5,
    initials: "SW",
  },
  {
    id: "altavida",
    quote:
      "They translated our science-backed formula into a high-converting DTC experience. Education sections, trust badges, and checkout flow all work together without feeling salesy.",
    author: "Brand Founder",
    role: "Founder",
    company: "ALTAVIDA",
    companyUrl: "https://tryaltavida.com/",
    rating: 5,
    initials: "AV",
  },
  {
    id: "happysoul",
    quote:
      "Our corporate buyers can now filter by budget, category, and occasion in seconds. The bulk inquiry flow cut our response time dramatically during peak gifting seasons.",
    author: "Client Success",
    role: "Head of Sales",
    company: "Happy Soul Gifting",
    companyUrl: "https://happysoulgifting.com/",
    rating: 5,
    initials: "HS",
  },
  {
    id: "natur3",
    quote:
      "Clean design that matches our clean ingredients. The storefront is simple, fast, and clearly communicates why NATUR3 is different from mass-market snacks.",
    author: "Product Lead",
    role: "Brand Manager",
    company: "NATUR3 Real Food",
    companyUrl: "https://natur3brand.com/",
    rating: 5,
    initials: "N3",
  },
  {
    id: "karpus",
    quote:
      "Premium without being loud — exactly our brand. Monthly drop UX, regional payments, and product storytelling feel native to how our customers shop in the UAE.",
    author: "Creative Director",
    role: "Founder",
    company: "Karpus",
    companyUrl: "https://karpus.ae/",
    rating: 5,
    initials: "KP",
  },
  {
    id: "niraa",
    quote:
      "They captured the calm, conscious aesthetic of NIRAA while keeping collection browsing and product discovery crisp. Our customers finally see the quality before they buy.",
    author: "Merchandising Lead",
    role: "Brand Lead",
    company: "NIRAA",
    companyUrl: "https://niraamaya.co.in/",
    rating: 5,
    initials: "NR",
  },
  {
    id: "northworkshop",
    quote:
      "Secure, dependable Shopify infrastructure with the operational controls we needed. Quiet excellence — which is exactly how we like our digital storefront to feel.",
    author: "Studio Manager",
    role: "Operations",
    company: "North Workshop",
    companyUrl: "https://www.northworkshop.co.uk/",
    rating: 5,
    initials: "NW",
  },
  {
    id: "myperfectwear",
    quote:
      "Collections, gifting paths, and product storytelling finally match the energy of our brand. Launch velocity improved and the site still feels stupidly soft — just like the tees.",
    author: "Growth Lead",
    role: "Marketing Lead",
    company: "MyPerfectWear",
    companyUrl: "https://myperfectwear.com/",
    rating: 5,
    initials: "MP",
  },
  {
    id: "avarahome",
    quote:
      "High-ticket appliances demand trust. Antimatter built category depth, bundle clarity, and a buyer journey that helps contractors and homeowners decide with confidence.",
    author: "Retail Operations",
    role: "Operations Manager",
    company: "AVARA Home",
    companyUrl: "https://avarahome.com/",
    rating: 5,
    initials: "AH",
  },
  {
    id: "anoralux",
    quote:
      "Our industrial lighting portfolio needed enterprise credibility online. The series architecture and partner-facing presentation finally match the quality of our installations.",
    author: "Sales Director",
    role: "Sales Director",
    company: "Anoralux Industries",
    companyUrl: "https://anoralux.vercel.app/",
    rating: 5,
    initials: "AX",
  },
  {
    id: "berico",
    quote:
      "Discretion and clarity — rare combination. BeriCo’s digital presence now communicates generational stewardship without oversharing, exactly as a family office should.",
    author: "Principal Office",
    role: "Partner",
    company: "BeriCo Research LLP",
    companyUrl: "https://berico.co.in",
    rating: 5,
    initials: "BC",
  },
];

export const clientLogoStrip = clients.map((c) => ({
  id: c.id,
  name: c.shortName,
  url: c.url,
  industry: c.industry,
}));
