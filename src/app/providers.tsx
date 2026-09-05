"use client";

import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

import DirectionProvider from "~/components/atoms/DirectionProvider/DirectionProvider";
import "~/shared/i18n";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider enableSystem defaultTheme="light">
      <DirectionProvider />
      {children}
    </ThemeProvider>
  );
}
