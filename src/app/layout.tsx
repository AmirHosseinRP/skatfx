import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

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
  title: "Skatfx",
  description: "Skatfx",
  appleWebApp: {
    title: "Skatfx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-dvh max-h-dvh overflow-hidden flex flex-col`}
      >
        <ThemeProvider enableSystem defaultTheme="system">
          {children}
        </ThemeProvider>

        <Script id="register-sw" strategy="afterInteractive" src="/sw.register.js" />
      </body>
    </html>
  );
}
