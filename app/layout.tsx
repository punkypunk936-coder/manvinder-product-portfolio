import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manvinder Arora | Vibe-Coded Product Portfolio",
  description: "Three working products built for real personal workflows across markets, personal knowledge and publishing.",
  metadataBase: new URL("https://punkypunk936-coder.github.io/manvinder-product-portfolio/"),
  alternates: { canonical: "https://punkypunk936-coder.github.io/manvinder-product-portfolio/" },
  openGraph: {
    title: "Manvinder Arora | Vibe-Coded Product Portfolio",
    description: "Three focused products for market intelligence, searchable personal knowledge and frictionless publishing.",
    type: "website",
    images: [{ url: "https://punkypunk936-coder.github.io/manvinder-product-portfolio/og.png", width: 1200, height: 630, alt: "Manvinder Arora product portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manvinder Arora | Vibe-Coded Product Portfolio",
    description: "Three working products built for real personal workflows.",
    images: ["https://punkypunk936-coder.github.io/manvinder-product-portfolio/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
