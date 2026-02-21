import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  title: {
    default: "Antimatter Verse – Engineering Solutions That Matter",
    template: "%s | Antimatter Verse",
  },
  description:
    "Antimatter Verse delivers technical and creative excellence with precision, passion, and performance. Web development, DevOps, branding, UI/UX, and more.",
  keywords: [
    "consultancy",
    "web development",
    "DevOps",
    "branding",
    "UI/UX design",
    "Antimatter Verse",
    "cloud engineering",
    "motion graphics",
  ],
  openGraph: {
    siteName: "Antimatter Verse",
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
      </body>
    </html>
  );
}
