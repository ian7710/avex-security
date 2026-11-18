import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avex — Runtime armor for AI agents",
  description:
    "Avex sits in the execution path of every AI agent — validating tool calls, enforcing policy, and blocking prompt injection, tool abuse, MCP poisoning and data exfiltration before they reach production.",
  keywords: [
    "AI security",
    "AI-SPM",
    "agent runtime security",
    "prompt injection defense",
    "MCP security",
    "LLM agent security",
    "EU AI Act",
    "NIST AI RMF",
    "ISO 42001",
  ],
  authors: [{ name: "Avex Security, Inc." }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Avex — Runtime armor for AI agents",
    description:
      "Stop prompt injection, tool abuse, MCP poisoning and data exfiltration — at execution time, not after.",
    siteName: "Avex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avex — Runtime armor for AI agents",
    description:
      "Stop prompt injection, tool abuse, MCP poisoning and data exfiltration — at execution time, not after.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
