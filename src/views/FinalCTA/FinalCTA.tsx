"use client";

import { useTranslation } from "react-i18next";
import Typography from "~/components/atoms/Typography/Typography";
import ScrollReveal from "~/components/molecules/ScrollReveal/ScrollReveal";
import { Button } from "~/shadcn/components/ui/button";

export default function FinalCTA() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-16 md:py-24">
      <ScrollReveal>
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
          <Typography variant="heading2" tagName="h2">
            {t("finalCta.headline")}
            <span className="text-prose-brand">.</span>
          </Typography>
          <Typography variant="paragraph1" color="secondary">
            {t("finalCta.description")}
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button href="/" color="brand" size="lg">
              {t("finalCta.explore")}
            </Button>
            <Button href="https://t.me/Skatfxclub/2" color="brand" size="lg" variant="outlined">
              {t("finalCta.performance")}
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
