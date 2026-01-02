import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

import "~/shared/styles/globals.css";
import Layout from "~/components/atoms/Layout/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skatfx",
  description: "Skatfx",
  appleWebApp: {
    title: "Skatfx",
  },
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background-primary h-dvh max-h-dvh overflow-hidden flex flex-col items-center`}
      >
        <ThemeProvider enableSystem defaultTheme="light">
          <Layout>{children}</Layout>
        </ThemeProvider>

        <Script id="register-sw" strategy="afterInteractive" src="/sw.register.js" />
      </body>
    </html>
  );
}
