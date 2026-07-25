import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  title: {
    default: "Antimatter Innovations – Engineering Solutions That Matter",
    template: "%s | Antimatter Innovations",
  },
  description:
    "Antimatter Innovations delivers technical and creative excellence with precision, passion, and performance. Web development, DevOps, branding, UI/UX, and more.",
  keywords: [
    "consultancy",
    "web development",
    "DevOps",
    "branding",
    "UI/UX design",
    "Antimatter Innovations",
    "cloud engineering",
    "motion graphics",
  ],
  openGraph: {
    siteName: "Antimatter Innovations",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-black text-white font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
