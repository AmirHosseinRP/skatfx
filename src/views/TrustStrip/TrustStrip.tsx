"use client";

import { Globe, Headphones, Shield, Star, TrendingUp, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import Typography from "~/components/atoms/Typography/Typography";
import ScrollReveal from "~/components/molecules/ScrollReveal/ScrollReveal";

const trustItems = [
  { key: "clients", icon: Users },
  { key: "countries", icon: Globe },
  { key: "support", icon: Headphones },
  { key: "rrRatio", icon: TrendingUp },
  { key: "experience", icon: Star },
  { key: "mentors", icon: Shield },
] as const;

export default function TrustStrip() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-8">
      <ScrollReveal>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {trustItems.map(({ key, icon: Icon }) => (
            <div key={key} className="flex items-center gap-2 text-prose-secondary">
              <Icon className="size-5 text-prose-brand" />
              <Typography variant="label1">{t(`trustStrip.${key}`)}</Typography>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
