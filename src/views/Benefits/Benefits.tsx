"use client";

import { BarChart3, BookOpen, Headphones, ShieldCheck, Target } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import Typography from "~/components/atoms/Typography/Typography";
import ScrollReveal from "~/components/molecules/ScrollReveal/ScrollReveal";

const featureKeys = [
  "transparentReports",
  "educationalContent",
  "subscriptionSafeguard",
  "support247",
  "highQualityAnalysis",
] as const;

const featureIcons: Record<string, typeof Target> = {
  transparentReports: BarChart3,
  educationalContent: BookOpen,
  subscriptionSafeguard: ShieldCheck,
  support247: Headphones,
  highQualityAnalysis: Target,
};

export default function Benefits() {
  const { t } = useTranslation();

  return (
    <section id="benefits" className="w-full py-16 md:py-24">
      <ScrollReveal>
        <div className="text-center mb-12">
          <Typography variant="heading2" tagName="h2">
            {t("benefits.title")}
            <span className="text-prose-brand">.</span>
          </Typography>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureKeys.map((key, index) => {
          const Icon = featureIcons[key];
          return (
            <ScrollReveal key={key} delay={index * 0.1}>
              <div className="flex flex-col gap-4 rounded-xl border border-background-secondary bg-background-secondary/50 p-6 h-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex size-12 items-center justify-center rounded-lg bg-brand-light"
                >
                  <Icon className="size-6 text-prose-brand" />
                </motion.div>
                <Typography variant="heading5" tagName="h3">
                  {t(`benefits.items.${key}.title`)}
                </Typography>
                <Typography variant="paragraph2" color="secondary">
                  {t(`benefits.items.${key}.description`)}
                </Typography>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
