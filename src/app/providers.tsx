"use client";

import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

import "~/shared/i18n";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider enableSystem defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
