"use client";

import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import Typography from "~/components/atoms/Typography/Typography";
import ScrollReveal from "~/components/molecules/ScrollReveal/ScrollReveal";
import { Button } from "~/shadcn/components/ui/button";
import { SITE_CONFIG } from "~/shared/config";

const edgeFeatureKeys = ["setups", "signals", "safeguard", "analysis", "support"] as const;
const primeFeatureKeys = ["everythingInEdge", "educationalContent", "mentorship"] as const;

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <section id="pricing" className="w-full py-16 md:py-24">
      <ScrollReveal>
        <div className="text-center mb-12">
          <Typography variant="heading2" tagName="h2">
            {t("pricing.title")}
            <span className="text-prose-brand">.</span>
          </Typography>
          <Typography variant="subtitle1" color="secondary" className="mt-2">
            {t("pricing.subtitle")}
          </Typography>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Edge Plan */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col rounded-xl border border-background-secondary bg-background-secondary/50 p-8 h-full">
            <Typography variant="heading4" tagName="h3" className="mb-1">
              {t("pricing.edge.name")}
            </Typography>
            <div className="flex items-baseline gap-1 mb-3">
              <Typography variant="heading2" color="brand">
                {t("pricing.edge.price")}
              </Typography>
              <Typography variant="paragraph2" color="secondary">
                {t("pricing.edge.period")}
              </Typography>
            </div>
            <Typography variant="paragraph2" color="secondary" className="mb-6">
              {t("pricing.edge.subtitle")}
            </Typography>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {edgeFeatureKeys.map(key => (
                <li key={key} className="flex items-start gap-3">
                  <Check className="size-5 shrink-0 text-prose-brand mt-0.5" />
                  <Typography variant="paragraph3">{t(`pricing.edge.features.${key}`)}</Typography>
                </li>
              ))}
            </ul>

            <Button href={SITE_CONFIG.subscribeUrl} color="brand" size="lg" className="w-full">
              {t("pricing.edge.cta")}
            </Button>
          </div>
        </ScrollReveal>

        {/* Prime Plan */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col rounded-xl border-2 border-brand bg-background-secondary/50 p-8 h-full relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-brand text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
            </div>
            <Typography variant="heading4" tagName="h3" className="mb-1">
              {t("pricing.prime.name")}
            </Typography>
            <div className="flex items-baseline gap-1 mb-3">
              <Typography variant="heading2" color="brand">
                {t("pricing.prime.price")}
              </Typography>
              <Typography variant="paragraph2" color="secondary">
                {t("pricing.prime.period")}
              </Typography>
            </div>
            <Typography variant="paragraph2" color="secondary" className="mb-6">
              {t("pricing.prime.subtitle")}
            </Typography>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {primeFeatureKeys.map(key => (
                <li key={key} className="flex items-start gap-3">
                  <Check className="size-5 shrink-0 text-prose-brand mt-0.5" />
                  <Typography variant="paragraph3">{t(`pricing.prime.features.${key}`)}</Typography>
                </li>
              ))}
            </ul>

            <Button href={SITE_CONFIG.subscribeUrl} color="brand" size="lg" className="w-full">
              {t("pricing.prime.cta")}
            </Button>
          </div>
        </ScrollReveal>
      </div>

      {/* Secondary links */}
      <ScrollReveal delay={0.3}>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 text-center">
          <a
            href="https://t.me/c/Skatfxclub/2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-prose-link hover:underline text-sm"
          >
            {t("pricing.performanceReports")}
          </a>
          <a
            href="https://t.me/Skatfxclub/7/74"
            target="_blank"
            rel="noopener noreferrer"
            className="text-prose-link hover:underline text-sm"
          >
            {t("pricing.howItWorks")}
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
