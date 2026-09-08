"use client";

import { Check } from "lucide-react";
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
  Belgium: "🇧🇪",
  Belgique: "🇧🇪",
};
const starKeys = ["one", "two", "three", "four", "five"];
const clientDates: Record<string, string> = {
  "Alex T.": "June 2024",
  "Umut G.": "September 2024",
  "David R.": "June 2026",
  "Sergey K.": "October 2025",
  "John R.": "August 2024",
  "Liam O.": "November 2024",
  "Arjun M.": "November 2024",
  "Hassan A.": "December 2025",
  "Alex B.": "October 2025",
  "Eric W.": "June 2026",
  "Roberta D.": "September 2026",
  Andre: "August 2026",
};

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
                  <div className="flex items-center gap-1">
                    <Typography variant="subtitle3">{item.name}</Typography>
                    <span
                      className="flex size-4 items-center justify-center rounded-full bg-blue-500 text-white"
                      title="Verified Client"
                      role="img"
                      aria-label="Verified Client"
                    >
                      <Check className="size-2.5" strokeWidth={3} />
                    </span>
                  </div>
                  <Typography variant="caption1" color="secondary">
                    Verified Client
                  </Typography>
                  <Typography variant="caption1" color="secondary">
                    {clientDates[item.name]}
                  </Typography>
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
            href="https://t.me/Skatfxclub/4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-prose-link hover:underline text-sm"
          >
            Click here for more documented testimonies
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
