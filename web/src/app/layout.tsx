import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kisam Technologies | Advanced Security Solutions",
  description:
    "Professional CCTV installation, alarm systems, smart gate automation, car alarms, and GPS tracking solutions.",
  metadataBase: new URL("https://kisamtechnologies.co.ke"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "CCTV installation Kenya",
    "alarm systems Kenya",
    "smart gate automation Kenya",
    "car alarm installation Kenya",
    "GPS tracking Kenya",
    "security company Nairobi",
    "Kisam Technologies",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kisam Technologies",
  image: "https://kisamtechnologies.co.ke/og-image.jpg",
  url: "https://kisamtechnologies.co.ke",
  telephone: "+254701841358",
  email: "kisamtechnology@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
  description:
    "Kisam Technologies provides CCTV installation, alarm systems, smart gate automation, car alarm systems, and GPS tracking services across Kenya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <div className="min-h-screen bg-black text-white">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
