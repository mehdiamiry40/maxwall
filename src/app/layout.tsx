import type { Metadata } from "next";
import { Belleza, Manrope } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

// Manrope carries the whole UI; Belleza is kept only for the MAX WALL wordmark
const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const brand = Belleza({
  variable: "--font-brand",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Wall Cladding & Render Adelaide | Max Wall",
    template: "%s | Max Wall",
  },
  description:
    "Cement render, acrylic render, Hebel and cladding across Adelaide. Free fixed-price quotes from Max Wall.",
  openGraph: {
    title: "Wall Cladding & Render Adelaide | Max Wall",
    description:
      "Cement render, acrylic render, Hebel and cladding across Adelaide. Free fixed-price quotes.",
    url: site.url,
    siteName: site.name,
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${body.variable} ${brand.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
