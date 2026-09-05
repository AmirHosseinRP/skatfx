"use client";

import * as Select from "@radix-ui/react-select";
import { ChevronDown, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "~/shadcn/lib/utils";
import { localeNames, type SupportedLng, supportedLngs } from "~/shared/i18n";

export default function LanguageSwitch() {
  const { i18n } = useTranslation();
  const currentLang = (supportedLngs.includes(i18n.language as SupportedLng) ? i18n.language : "en") as SupportedLng;

  return (
    <Select.Root value={currentLang} onValueChange={value => i18n.changeLanguage(value)}>
      <Select.Trigger
        aria-label="Select language"
        className={cn(
          "inline-flex items-center gap-1.5 px-2 py-1 text-xs font-medium rounded-md",
          "border border-background-secondary text-prose-secondary hover:text-prose-primary",
          "transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        )}
      >
        <Globe className="size-3.5" />
        <Select.Value />
        <Select.Icon>
          <ChevronDown className="size-3" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={4}
          className={cn(
            "z-[10000] min-w-[140px] overflow-hidden rounded-md",
            "border border-background-secondary bg-background-primary shadow-md",
            "animate-in fade-in-0 zoom-in-95"
          )}
        >
          <Select.Viewport className="p-1">
            {supportedLngs.map(lng => (
              <Select.Item
                key={lng}
                value={lng}
                className={cn(
                  "relative flex items-center justify-between px-3 py-2 text-xs rounded-sm cursor-pointer",
                  "text-prose-secondary outline-none",
                  "data-[highlighted]:bg-background-secondary data-[highlighted]:text-prose-primary",
                  "transition-colors"
                )}
              >
                <Select.ItemText>{localeNames[lng]}</Select.ItemText>
                <Select.ItemIndicator className="ms-2 text-prose-brand">
                  <svg viewBox="0 0 16 16" fill="currentColor" className="size-3.5" aria-hidden="true">
                    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
                  </svg>
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
