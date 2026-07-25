export type Client = {
  id: string;
  name: string;
  shortName: string;
  url: string;
  industry: string;
  region: string;
  summary: string;
};

/**
 * Live client properties delivered by Antimatter Innovations.
 * Source URLs provided for portfolio / testimonials integration.
 */
export const clients: Client[] = [
  {
    id: "safetywide",
    name: "Safety Wide",
    shortName: "Safety Wide",
    url: "https://safetywide.com/",
    industry: "Industrial Safety & PPE",
    region: "United Kingdom",
    summary:
      "Enterprise PPE and height-safety e-commerce platform with deep catalog taxonomy and B2B purchasing flows.",
  },
  {
    id: "altavida",
    name: "ALTAVIDA",
    shortName: "ALTAVIDA",
    url: "https://tryaltavida.com/",
    industry: "Health & Wellness",
    region: "United States",
    summary:
      "DTC supplement brand storefront focused on conversion, education, and trust-led product storytelling.",
  },
  {
    id: "happysoul",
    name: "Happy Soul Gifting",
    shortName: "Happy Soul",
    url: "https://happysoulgifting.com/",
    industry: "Corporate Gifting",
    region: "India",
    summary:
      "Corporate gifting marketplace with budget tiers, bulk inquiry workflows, and curated collection UX.",
  },
  {
    id: "natur3",
    name: "NATUR3 Real Food",
    shortName: "NATUR3",
    url: "https://natur3brand.com/",
    industry: "Food & Beverage",
    region: "Spain / EU",
    summary:
      "Clean-label snack brand with bilingual storefront, ingredient transparency, and subscription-ready commerce.",
  },
  {
    id: "karpus",
    name: "Karpus",
    shortName: "Karpus",
    url: "https://karpus.ae/",
    industry: "Luxury Accessories",
    region: "UAE",
    summary:
      "Minimal jewelry brand experience with monthly drops, regional payments, and premium product storytelling.",
  },
  {
    id: "niraa",
    name: "NIRAA",
    shortName: "NIRAA",
    url: "https://niraamaya.co.in/",
    industry: "Home Textiles",
    region: "India",
    summary:
      "Premium bedding and lifestyle commerce platform with collection hierarchy and conscious-living brand narrative.",
  },
  {
    id: "northworkshop",
    name: "North Workshop",
    shortName: "North Workshop",
    url: "https://www.northworkshop.co.uk/",
    industry: "Craft & Manufacturing",
    region: "United Kingdom",
    summary:
      "UK craft brand storefront with secure access controls and Shopify-backed commerce infrastructure.",
  },
  {
    id: "myperfectwear",
    name: "MyPerfectWear",
    shortName: "MyPerfectWear",
    url: "https://myperfectwear.com/",
    industry: "Apparel & Lifestyle",
    region: "United States",
    summary:
      "Heavyweight graphic apparel brand with collection merchandising, gifting flows, and on-demand fulfillment UX.",
  },
  {
    id: "avarahome",
    name: "AVARA Home",
    shortName: "AVARA",
    url: "https://avarahome.com/",
    industry: "Luxury Appliances",
    region: "United States",
    summary:
      "High-ticket kitchen appliance retailer with complex category IA, bundles, and authorized-dealer trust signals.",
  },
  {
    id: "anoralux",
    name: "Anoralux Industries",
    shortName: "Anoralux",
    url: "https://anoralux.vercel.app/",
    industry: "Industrial Lighting",
    region: "India",
    summary:
      "B2B lighting and stage solutions site with product series architecture and enterprise partner credibility.",
  },
  {
    id: "berico",
    name: "BeriCo Research LLP",
    shortName: "BeriCo",
    url: "https://berico.co.in",
    industry: "Family Office & Finance",
    region: "India",
    summary:
      "Private family office web presence emphasizing discretion, legacy storytelling, and advisory credibility.",
  },
];
