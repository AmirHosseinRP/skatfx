"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { switchLanguage } from "~/app/actions/locale";

export function LanguageSwitch() {
  const [isPending, startTransition] = useTransition();
  const currentLocale = useLocale();

  const handleLanguageChange = (locale: string) => {
    startTransition(() => {
      switchLanguage(locale);
    });
  };

  return (
    <div className="flex items-center gap-2">
      <button type="button" onClick={() => handleLanguageChange("en")} disabled={isPending || currentLocale === "en"}>
        EN
      </button>
      <button type="button" onClick={() => handleLanguageChange("fr")} disabled={isPending || currentLocale === "fr"}>
        FR
      </button>
    </div>
  );
}
