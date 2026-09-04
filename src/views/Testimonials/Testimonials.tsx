"use client";

import { useTranslation } from "react-i18next";
import Typography from "~/components/atoms/Typography/Typography";
import ScrollReveal from "~/components/molecules/ScrollReveal/ScrollReveal";
import { Avatar, AvatarFallback } from "~/shadcn/components/ui/avatar";

const flags: Record<string, string> = {
  USA: "🇺🇸",
  "États-Unis": "🇺🇸",
  Turkey: "🇹🇷",
  Turquie: "🇹🇷",
  UK: "🇬🇧",
  "Royaume-Uni": "🇬🇧",
  Germany: "🇩🇪",
  Allemagne: "🇩🇪",
  UAE: "🇦🇪",
  EAU: "🇦🇪",
  Ireland: "🇮🇪",
  Irlande: "🇮🇪",
  India: "🇮🇳",
  Inde: "🇮🇳",
  "Saudi Arabia": "🇸🇦",
  "Arabie Saoudite": "🇸🇦",
  Italy: "🇮🇹",
  Italie: "🇮🇹",
  "Hong Kong": "🇭🇰",
};
const starKeys = ["one", "two", "three", "four", "five"];

export default function Testimonials() {
  const { t } = useTranslation();
  const items = t("testimonials.items", { returnObjects: true }) as Array<{
    name: string;
    country: string;
    quote: string;
    rating: number;
  }>;

  return (
    <section id="testimonial" className="w-full py-16 md:py-24">
      <ScrollReveal>
        <div className="text-center mb-12">
          <Typography variant="heading2" tagName="h2">
            {t("testimonials.title")}
            <span className="text-prose-brand">.</span>
          </Typography>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <ScrollReveal key={item.name} delay={index * 0.05}>
            <div className="flex flex-col gap-4 rounded-xl border border-background-secondary bg-background-secondary/50 p-6 h-full">
              <div className="flex items-center gap-3">
                <Avatar size="lg">
                  <AvatarFallback className="text-xl">{flags[item.country] ?? "🌍"}</AvatarFallback>
                </Avatar>
                <div>
                  <Typography variant="subtitle3">{item.name}</Typography>
                  <Typography variant="caption1" color="secondary">
                    {item.country}
                  </Typography>
                  <div className="flex text-sm text-success" role="img" aria-label={`${item.rating} out of 5 stars`}>
                    {starKeys.map((key, star) => (
                      <span key={key}>{star < item.rating ? "★" : "☆"}</span>
                    ))}
                  </div>
                </div>
              </div>
              <Typography variant="paragraph2" color="secondary" className="italic">
                &ldquo;{item.quote}&rdquo;
              </Typography>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.5}>
        <div className="text-center mt-8">
          <a
            href="https://t.me/c/Skatfxclub/4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-prose-link hover:underline text-sm"
          >
            {t("testimonials.seeMore")}
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
