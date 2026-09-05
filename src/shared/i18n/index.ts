"use client";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import ar from "~/shared/locales/ar/common.json";
import de from "~/shared/locales/de/common.json";
import en from "~/shared/locales/en/common.json";
import es from "~/shared/locales/es/common.json";
import fr from "~/shared/locales/fr/common.json";
import it from "~/shared/locales/it/common.json";
import ru from "~/shared/locales/ru/common.json";

export const supportedLngs = ["en", "fr", "de", "it", "ru", "ar", "es"] as const;
export type SupportedLng = (typeof supportedLngs)[number];

export const localeNames: Record<SupportedLng, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  ru: "Русский",
  ar: "العربية",
  es: "Español",
};

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "en",
      defaultNS: "common",
      supportedLngs: [...supportedLngs],
      resources: {
        en: { common: en },
        fr: { common: fr },
        de: { common: de },
        it: { common: it },
        ru: { common: ru },
        ar: { common: ar },
        es: { common: es },
      },
      detection: {
        order: ["localStorage"],
        caches: ["localStorage"],
        lookupLocalStorage: "lang",
      },
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;
