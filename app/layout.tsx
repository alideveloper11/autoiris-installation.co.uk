import type { Metadata, Viewport } from "next";
import { Archivo, Archivo_Black } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BrandsStrip from "@/components/layout/BrandsStrip";
import ScrollReveal from "@/components/ScrollReveal";
import StructuredData from "@/components/StructuredData";
import { site } from "@/data/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Auto Iris Installations | CCTV, Alarms, Access Control & Security in Barking & London",
    template: `%s | ${site.name}`,
  },
  description:
    "Auto Iris Installations. CCTV, intruder alarms and access control, installed and maintained. 5.0 rated, fully insured, 24/7 emergency callouts across London and beyond. Call 07523 521215.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: { icon: site.logo },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: "/",
    title: "Auto Iris Installations | CCTV, Alarms & Access Control in London",
    description:
      "Professional CCTV, intruder alarm and access control installation. 5.0 rated with 96 reviews. Call 07523 521215.",
    images: [site.heroImage],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Iris Installations | CCTV, Alarms & Access Control",
    description:
      "CCTV, intruder alarms and access control across London and beyond. 5.0 rated, fully insured, open 24/7.",
    images: [site.heroImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#f67d25",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      data-scroll-behavior="smooth"
      className={`${archivo.variable} ${archivoBlack.variable}`}
    >
      <body>
        <StructuredData />
        <Header />
        <main>{children}</main>
        <BrandsStrip />
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
