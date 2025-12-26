"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="flex gap-3">
      <Sun onClick={() => setTheme("light")} className="text-prose-primary" />

      <Moon onClick={() => setTheme("dark")} className="text-prose-primary" />
    </div>
  );
}
