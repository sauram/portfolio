import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Import for AOS (Animate On Scroll)
import { AosProvider } from "@/components/common/AosProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saurabh Singh Gautam | Software Engineer",
  description: "Portfolio of Saurabh Singh Gautam, a software engineer with 4 years of experience",
  keywords: ["software engineer", "developer", "portfolio", "frontend", "backend"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AosProvider>
          {children}
        </AosProvider>
      </body>
    </html>
  );
}
