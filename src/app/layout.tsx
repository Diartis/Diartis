import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://diartis.com"),
  title: {
    default: "DIARTIS - Multidisciplinary Designer",
    template: "%s | DIARTIS",
  },
  description:
    "Premium portfolio for DIARTIS, a multidisciplinary designer specializing in graphic design, motion design, video editing, branding, advertising, and visual storytelling.",
  keywords: [
    "DIARTIS",
    "graphic designer",
    "motion designer",
    "video editor",
    "brand identity",
    "logo design",
    "social media design",
    "advertising design",
  ],
  authors: [{ name: "DIARTIS" }],
  creator: "DIARTIS",
  openGraph: {
    title: "DIARTIS - Multidisciplinary Designer",
    description:
      "Graphic Design, Motion Design, and Video Editing-bringing ideas to life through impactful visuals and storytelling.",
    url: "https://diartis.com",
    siteName: "DIARTIS",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "DIARTIS portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DIARTIS - Multidisciplinary Designer",
    description:
      "Premium portfolio for branding, motion design, video editing, advertising, and digital content.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0B0B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
