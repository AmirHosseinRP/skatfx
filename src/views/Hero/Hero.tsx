"use client";

import { useTranslation } from "react-i18next";
import ThemedImage from "~/components/atoms/ThemedImage/ThemedImage";
import Typography from "~/components/atoms/Typography/Typography";
import ScrollReveal from "~/components/molecules/ScrollReveal/ScrollReveal";
import { images } from "~/shared/libs/images";
import ReviewBoxCount from "~/views/ReviewCountBox/ReviewCountBox";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center">
      <div className="w-full max-w-xl flex flex-col gap-3 text-center">
        <ScrollReveal>
          <Typography variant="heading1" tagName="h1" className="text-4xl md:text-6xl">
            {t("hero.headline")}
            <span className="text-prose-brand">.</span>
          </Typography>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Typography variant="paragraph1">
            Experience clarity, verified trading setups, and performance you can measure
          </Typography>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <ReviewBoxCount />
        </ScrollReveal>

        <div className="flex flex-col gap-5 text-center justify-center items-center">
          <ScrollReveal delay={0.3} className="w-full flex flex-col justify-center items-center mt-8">
            <ThemedImage
              src={images.performanceChart.src}
              alt={images.performanceChart.alt}
              width={700}
              height={500}
              className="rounded-2xl border-2 border-background-secondary"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <a
              href="https://skatfx.kit.com/30139e251f"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-brand/30 bg-brand-light/40 px-6 py-4 text-subtitle2 font-semibold text-prose-primary shadow-sm transition-transform hover:-translate-y-1"
            >
              Learn market analysis basics for free
            </a>
          </ScrollReveal>

          <ScrollReveal>
            <Typography variant="label1">Countries where traders have joined us so far.</Typography>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
