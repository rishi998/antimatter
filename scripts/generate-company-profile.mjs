/**
 * Generates the Antimatter Innovations company profile PDF.
 * Run: node scripts/generate-company-profile.mjs
 */
import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "docs");
const outFile = path.join(outDir, "antimatter-company-profile.pdf");

const TEAL = "#0f766e";
const ORANGE = "#ff6a00";
const BLACK = "#0a0a0a";
const GRAY = "#444444";
const LIGHT = "#666666";

const clients = [
  ["Safety Wide", "https://safetywide.com/", "Industrial Safety & PPE"],
  ["ALTAVIDA", "https://tryaltavida.com/", "Health & Wellness"],
  ["Happy Soul Gifting", "https://happysoulgifting.com/", "Corporate Gifting"],
  ["NATUR3 Real Food", "https://natur3brand.com/", "Food & Beverage"],
  ["Karpus", "https://karpus.ae/", "Luxury Accessories"],
  ["NIRAA", "https://niraamaya.co.in/", "Home Textiles"],
  ["North Workshop", "https://www.northworkshop.co.uk/", "Craft & Manufacturing"],
  ["MyPerfectWear", "https://myperfectwear.com/", "Apparel & Lifestyle"],
  ["AVARA Home", "https://avarahome.com/", "Luxury Appliances"],
  ["Anoralux Industries", "https://anoralux.vercel.app/", "Industrial Lighting"],
  ["BeriCo Research LLP", "https://berico.co.in", "Family Office & Finance"],
];

fs.mkdirSync(outDir, { recursive: true });

const doc = new PDFDocument({
  size: "A4",
  margins: { top: 56, bottom: 56, left: 56, right: 56 },
  info: {
    Title: "Antimatter Innovations — Company Profile",
    Author: "Antimatter Innovations",
    Subject: "Company documentation and capability overview",
    Keywords: "software engineering, consultancy, e-commerce, DevOps, design",
  },
});

const stream = fs.createWriteStream(outFile);
doc.pipe(stream);

const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;

function ensureSpace(needed = 80) {
  if (doc.y + needed > doc.page.height - doc.page.margins.bottom) {
    doc.addPage();
  }
}

function sectionRule() {
  doc
    .moveTo(doc.page.margins.left, doc.y)
    .lineTo(doc.page.margins.left + pageWidth, doc.y)
    .strokeColor(TEAL)
    .lineWidth(1.5)
    .stroke();
  doc.moveDown(0.8);
}

function heading(text) {
  ensureSpace(60);
  doc
    .font("Helvetica-Bold")
    .fontSize(14)
    .fillColor(TEAL)
    .text(text.toUpperCase(), { characterSpacing: 1.2 });
  doc.moveDown(0.35);
  sectionRule();
}

function body(text) {
  doc.font("Helvetica").fontSize(10).fillColor(GRAY).text(text, {
    align: "left",
    lineGap: 3,
  });
  doc.moveDown(0.6);
}

function bullet(text) {
  ensureSpace(28);
  const x = doc.page.margins.left;
  const y = doc.y;
  doc.circle(x + 3, y + 5, 2).fill(ORANGE);
  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor(GRAY)
    .text(text, x + 14, y, { width: pageWidth - 14, lineGap: 2 });
  doc.moveDown(0.35);
}

/* ── Cover ── */
doc.rect(0, 0, doc.page.width, 220).fill(BLACK);

doc
  .font("Helvetica")
  .fontSize(9)
  .fillColor(ORANGE)
  .text("COMPANY PROFILE  ·  2026", 56, 70, { characterSpacing: 2 });

doc
  .font("Helvetica-Bold")
  .fontSize(28)
  .fillColor("#ffffff")
  .text("Antimatter Innovations", 56, 100);

doc
  .font("Helvetica")
  .fontSize(13)
  .fillColor(TEAL)
  .text("Engineering Solutions That Matter", 56, 140);

doc
  .font("Helvetica")
  .fontSize(10)
  .fillColor("#aaaaaa")
  .text(
    "Software engineering · E-commerce · Cloud & DevOps · Brand & Product Design",
    56,
    168,
    { width: pageWidth }
  );

doc.y = 250;

/* ── Overview ── */
heading("Who We Are");
body(
  "Antimatter Innovations is a professional software engineering and creative consultancy. We partner with ambitious brands and enterprise teams to design, build, and scale digital products — from high-conversion storefronts to cloud-native platforms and brand systems."
);
body(
  "We operate as a unified delivery team, not a loosely connected roster of freelancers. Every engagement combines engineering depth with creative clarity, measured against business outcomes: reliability, conversion, performance, and long-term maintainability."
);

/* ── Positioning ── */
heading("Positioning");
body(
  "Trusted software engineering partner for high-growth brands who need precision delivery, modern architecture, and measurable results — with the craft quality of a premium product studio."
);

/* ── Vision & Mission ── */
heading("Vision");
body(
  "To become a globally trusted partner delivering high-quality professional services with speed and integrity — empowering businesses to build, grow, and lead with confidence."
);

heading("Mission");
[
  "Provide access to skilled engineering and creative professionals",
  "Deliver flexible, results-oriented engagement models",
  "Ensure timely, transparent, and measurable execution",
  "Build long-term partnerships rooted in trust and craft",
].forEach(bullet);

/* ── Values ── */
heading("Values");
[
  ["Precision", "Every pixel, deployment, and decision is deliberate."],
  ["Reliability", "Commitments are delivered — no excuses, no surprises."],
  ["Transparency", "Clients always know where their project stands."],
  ["Innovation", "Clients benefit from modern tools and proven approaches."],
].forEach(([t, d]) => {
  ensureSpace(36);
  doc.font("Helvetica-Bold").fontSize(10).fillColor(BLACK).text(t);
  doc.font("Helvetica").fontSize(10).fillColor(GRAY).text(d);
  doc.moveDown(0.45);
});

/* ── Services ── */
heading("Services");
doc.font("Helvetica-Bold").fontSize(10).fillColor(BLACK).text("Technical");
doc.moveDown(0.25);
[
  "Web & Full-Stack Development",
  "E-Commerce Solutions (Shopify / Custom)",
  "DevOps & Cloud Engineering",
  "CI/CD Pipelines",
  "Cloud Security & Monitoring",
  "Dedicated Engineering Teams",
].forEach(bullet);

doc.moveDown(0.2);
doc.font("Helvetica-Bold").fontSize(10).fillColor(BLACK).text("Creative");
doc.moveDown(0.25);
[
  "Brand Identity Systems",
  "UI/UX Design",
  "Graphic Design",
  "Motion Graphics",
  "Explainer & Marketing Videos",
  "Presentation Design",
].forEach(bullet);

doc.moveDown(0.2);
doc.font("Helvetica-Bold").fontSize(10).fillColor(BLACK).text("Engagement Models");
doc.moveDown(0.25);
[
  "Project-Based Engagement",
  "Dedicated Resource Model",
  "Managed Services Model",
  "On-Demand Support",
].forEach(bullet);

/* ── Tech Stack ── */
heading("Technology Stack");
const stack = {
  Frontend: "Next.js, React, TypeScript, Tailwind CSS, Framer Motion",
  Backend: "Node.js, Python, REST APIs, GraphQL",
  Mobile: "React Native, Progressive Web Apps",
  Database: "PostgreSQL, MongoDB, Redis",
  Cloud: "AWS, GCP, Azure, Vercel, Cloudflare",
  DevOps: "Docker, CI/CD, GitHub Actions, Monitoring",
  AI: "LLM Integrations, LangChain, Automation Agents",
  Testing: "Playwright, Jest, Cypress, Lighthouse",
};
Object.entries(stack).forEach(([k, v]) => {
  ensureSpace(28);
  doc.font("Helvetica-Bold").fontSize(10).fillColor(TEAL).text(`${k}: `, { continued: true });
  doc.font("Helvetica").fillColor(GRAY).text(v);
  doc.moveDown(0.3);
});

/* ── Process ── */
heading("Delivery Process");
[
  ["01 Discover", "Align on goals, constraints, users, and success metrics."],
  ["02 Design", "Architecture, UX flows, and technical blueprint before build."],
  ["03 Build", "Iterative delivery with code quality, reviews, and demos."],
  ["04 Launch", "Hardened releases, performance checks, and go-live support."],
  ["05 Scale", "Monitoring, optimization, and continuous improvement."],
].forEach(([t, d]) => {
  ensureSpace(36);
  doc.font("Helvetica-Bold").fontSize(10).fillColor(ORANGE).text(t);
  doc.font("Helvetica").fontSize(10).fillColor(GRAY).text(d);
  doc.moveDown(0.4);
});

/* ── Why Us ── */
heading("Why Choose Antimatter Innovations");
[
  ["Engineering-first delivery", "Production-grade architecture teams can own long-term."],
  ["Outcome-focused partnerships", "Optimized for conversion, reliability, and business impact."],
  ["Cross-disciplinary craft", "Engineering and creative stay aligned under one roof."],
  ["Transparent execution", "Clear milestones, proactive communication, accountability."],
].forEach(([t, d]) => {
  ensureSpace(36);
  doc.font("Helvetica-Bold").fontSize(10).fillColor(BLACK).text(t);
  doc.font("Helvetica").fontSize(10).fillColor(GRAY).text(d);
  doc.moveDown(0.4);
});

/* ── Clients ── */
heading("Selected Client Properties");
body(
  "A sample of live brands and digital properties delivered or supported by Antimatter Innovations across e-commerce, lifestyle, industrial, and professional services."
);

clients.forEach(([name, url, industry]) => {
  ensureSpace(34);
  doc.font("Helvetica-Bold").fontSize(10).fillColor(BLACK).text(name);
  doc.font("Helvetica").fontSize(9).fillColor(TEAL).text(url, { link: url });
  doc.font("Helvetica").fontSize(9).fillColor(LIGHT).text(industry);
  doc.moveDown(0.4);
});

/* ── Leadership ── */
heading("Leadership");
[
  ["Yash Tomar", "Chief Executive Officer"],
  ["Rishi Mehto", "Chief Backend Architect"],
  ["Asad Mazhar", "Senior Cloud Architect"],
].forEach(([name, role]) => {
  ensureSpace(28);
  doc.font("Helvetica-Bold").fontSize(10).fillColor(BLACK).text(name, { continued: true });
  doc.font("Helvetica").fillColor(LIGHT).text(`  —  ${role}`);
  doc.moveDown(0.3);
});

/* ── Contact ── */
heading("Contact");
body("India · Remote-first · Global delivery");
body("Email: hello@antimatterinnovations.com");
body("Office hours: Monday – Friday, 9:00 AM – 6:00 PM IST");
body("Website: https://antimatterinnovations.com");

doc.moveDown(1.2);
doc
  .font("Helvetica")
  .fontSize(8)
  .fillColor(LIGHT)
  .text(
    "© 2026 Antimatter Innovations. Confidential company documentation. All rights reserved.",
    { align: "left" }
  );

doc.end();

stream.on("finish", () => {
  console.log(`Wrote ${outFile}`);
});
