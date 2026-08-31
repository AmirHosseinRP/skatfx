"use client";

import { useTranslation } from "react-i18next";

export default function LanguageSwitch() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="flex items-center rounded-md border border-background-secondary text-xs">
      <button
        type="button"
        onClick={() => i18n.changeLanguage("en")}
        className={`px-2 py-1 transition-colors rounded-sm ${currentLang === "en" ? "bg-brand text-white" : "text-prose-secondary hover:text-prose-primary"}`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => i18n.changeLanguage("fr")}
        className={`px-2 py-1 transition-colors rounded-sm ${currentLang === "fr" ? "bg-brand text-white" : "text-prose-secondary hover:text-prose-primary"}`}
      >
        FR
      </button>
    </div>
  );
}
