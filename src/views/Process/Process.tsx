"use client";

import { useTranslation } from "react-i18next";
import Typography from "~/components/atoms/Typography/Typography";
import ScrollReveal from "~/components/molecules/ScrollReveal/ScrollReveal";

const stepKeys = ["analyze", "buildPlan", "execute", "document", "support"] as const;

export default function Process() {
  const { t } = useTranslation();

  return (
    <section id="process" className="w-full py-16 md:py-24">
      <ScrollReveal>
        <div className="text-center mb-12">
          <Typography variant="heading2" tagName="h2">
            {t("process.title")}
            <span className="text-prose-brand">.</span>
          </Typography>
        </div>
      </ScrollReveal>

      <div className="relative flex flex-col gap-0">
        {stepKeys.map((key, index) => (
          <ScrollReveal key={key} delay={index * 0.1}>
            <div className="flex gap-6 relative">
              {/* Step number and line */}
              <div className="flex flex-col items-center">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand text-white text-sm font-semibold">
                  {index + 1}
                </div>
                {index < stepKeys.length - 1 && <div className="w-px flex-1 bg-background-secondary" />}
              </div>

              {/* Step content */}
              <div className="pb-10">
                <Typography variant="heading4" tagName="h3" className="mb-2">
                  {t(`process.steps.${key}.title`)}
                </Typography>
                <Typography variant="paragraph2" color="secondary">
                  {t(`process.steps.${key}.description`)}
                </Typography>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
