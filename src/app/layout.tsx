import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import type { PropsWithChildren } from "react";
import Providers from "~/app/providers";
import Layout from "~/components/atoms/Layout/Layout";

import "~/shared/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skatfx — Strategic Trading, Backed by Transparency",
  description:
    "Professional trading signals, transparent performance reports, and expert mentorship. Join 100+ clients in 38+ countries. Forex and commodities trading with a minimum 1:3 risk-to-reward ratio.",
  keywords: ["trading", "forex", "commodities", "signals", "mentorship", "transparent trading"],
  openGraph: {
    title: "Skatfx — Strategic Trading, Backed by Transparency",
    description:
      "Professional trading signals, transparent performance reports, and expert mentorship. Join 100+ clients in 38+ countries.",
    type: "website",
    siteName: "Skatfx",
  },
  appleWebApp: {
    title: "Skatfx",
    capable: true,
    statusBarStyle: "default",
  },
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background-primary h-dvh max-h-dvh overflow-hidden flex flex-col items-center`}
      >
        <Providers>
          <Layout>{children}</Layout>
        </Providers>

        <Script id="register-sw" strategy="afterInteractive" src="/sw.register.js" />
      </body>
    </html>
  );
}
