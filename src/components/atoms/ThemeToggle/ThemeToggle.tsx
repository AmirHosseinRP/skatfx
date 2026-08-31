"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center size-8 rounded-md border border-background-secondary text-prose-secondary hover:text-prose-primary transition-colors"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
