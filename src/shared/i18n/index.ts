"use client";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "~/shared/locales/en/common.json";
import fr from "~/shared/locales/fr/common.json";

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "en",
      defaultNS: "common",
      resources: {
        en: { common: en },
        fr: { common: fr },
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
