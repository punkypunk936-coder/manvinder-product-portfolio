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
  title: "Manvinder Arora | AI Product Builder",
  description: "Three working products across AI market intelligence, personal knowledge and publishing automation.",
  metadataBase: new URL("https://manvinder-product-portfolio.punkypunk936.chatgpt.site"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Manvinder Arora | AI Product Builder",
    description: "I build tools for the work I actually do. See Punky, Telegram Brain and the Writing Desk.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Manvinder Arora product portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manvinder Arora | AI Product Builder",
    description: "Three working products across market intelligence, personal knowledge and publishing.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
