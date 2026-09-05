"use client";

import { useTranslation } from "react-i18next";
import Typography from "~/components/atoms/Typography/Typography";
import ScrollReveal from "~/components/molecules/ScrollReveal/ScrollReveal";

export default function AboutUs() {
  const { t } = useTranslation();
  const whoWeAreItems = t("about.whoWeAre.items", { returnObjects: true }) as string[];
  const commitmentItems = t("about.commitment.items", { returnObjects: true }) as string[];
  const edgeItems = t("about.edge.items", { returnObjects: true }) as string[];

  return (
    <section id="about" className="w-full py-16 md:py-24">
      <ScrollReveal>
        <div className="text-center mb-12">
          <Typography variant="heading2" tagName="h2">
            {t("about.title")}
            <span className="text-prose-brand">.</span>
          </Typography>
        </div>
      </ScrollReveal>

      <div className="flex flex-col gap-12 max-w-3xl mx-auto">
        {/* Who We Are */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col gap-3">
            <Typography variant="heading4" tagName="h3">
              {t("about.whoWeAre.title")}
            </Typography>
            <Typography variant="paragraph2" color="secondary">
              {t("about.whoWeAre.description")}
            </Typography>
            <ul className="flex flex-col gap-2 mt-2">
              {whoWeAreItems.map(item => (
                <li key={item} className="flex items-center gap-3">
                  <div className="size-2 rounded-full bg-brand shrink-0" />
                  <Typography variant="paragraph2" color="secondary">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
            <Typography variant="paragraph2" color="secondary" className="mt-2">
              {t("about.whoWeAre.founding")}
            </Typography>
          </div>
        </ScrollReveal>

        {/* Our Commitment */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col gap-3">
            <Typography variant="heading4" tagName="h3">
              {t("about.commitment.title")}
            </Typography>
            <ul className="flex flex-col gap-2">
              {commitmentItems.map(item => (
                <li key={item} className="flex items-center gap-3">
                  <div className="size-2 rounded-full bg-brand shrink-0" />
                  <Typography variant="paragraph2" color="secondary">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
            <Typography variant="paragraph2" color="secondary" className="mt-2">
              {t("about.commitment.closing")}
            </Typography>
          </div>
        </ScrollReveal>

        {/* Our Edge */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col gap-3">
            <Typography variant="heading4" tagName="h3">
              {t("about.edge.title")}
            </Typography>
            <Typography variant="paragraph2" color="secondary">
              {t("about.edge.description")}
            </Typography>
            <ul className="flex flex-col gap-2 mt-2">
              {edgeItems.map(item => (
                <li key={item} className="flex items-center gap-3">
                  <div className="size-2 rounded-full bg-brand shrink-0" />
                  <Typography variant="paragraph2" color="secondary">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
            <Typography variant="paragraph2" color="secondary" className="mt-2">
              {t("about.edge.closing")}
            </Typography>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
