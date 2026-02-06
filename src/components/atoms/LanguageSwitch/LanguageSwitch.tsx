"use client";

import i18n from "~/shared/i18n";

export function LanguageSwitch() {
  return (
    <div>
      <button type="button" onClick={() => i18n.changeLanguage("en")}>
        EN
      </button>
      <button type="button" onClick={() => i18n.changeLanguage("fr")}>
        FR
      </button>
    </div>
  );
}
