"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import Typography from "~/components/atoms/Typography/Typography";
import ScrollReveal from "~/components/molecules/ScrollReveal/ScrollReveal";
import { SITE_CONFIG } from "~/shared/config";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="w-full py-12 md:py-16 bg-background-secondary rounded-t-lg">
      <ScrollReveal>
        <div className="text-center mb-12">
          <Typography variant="heading2" tagName="h2">
            {t("footer.email")}
            <span className="text-prose-brand">.</span>
          </Typography>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Contact Info */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Mail className="size-5 text-prose-brand shrink-0" />
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-prose-secondary hover:text-prose-primary transition-colors"
              >
                {SITE_CONFIG.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="size-5 text-prose-brand shrink-0" />
              <a
                href={SITE_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-prose-secondary hover:text-prose-primary transition-colors"
              >
                {t("footer.telegram")}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="size-5 text-prose-brand shrink-0" />
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-prose-secondary hover:text-prose-primary transition-colors"
              >
                {t("footer.whatsapp")}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="size-5 text-prose-brand shrink-0 mt-0.5" />
              <Typography variant="paragraph2" color="secondary">
                {t("footer.address")}
              </Typography>
            </div>
          </div>
        </ScrollReveal>

        {/* Legal Links */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col gap-4">
            <a href="/terms" className="text-prose-secondary hover:text-prose-primary transition-colors text-sm">
              {t("footer.terms")}
            </a>
            <a href="/safeguard" className="text-prose-secondary hover:text-prose-primary transition-colors text-sm">
              {t("footer.safeguard")}
            </a>
            <a href="/privacy" className="text-prose-secondary hover:text-prose-primary transition-colors text-sm">
              {t("footer.privacy")}
            </a>
            <a href="/disclaimer" className="text-prose-secondary hover:text-prose-primary transition-colors text-sm">
              {t("footer.disclaimer")}
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* <Separator className="my-8" /> */}

      {/* <ScrollReveal delay={0.3}>
        <div className="text-center">
          <Typography variant="caption1" color="hint">
            {t("footer.copyright")}
          </Typography>
        </div>
      </ScrollReveal> */}
    </footer>
  );
}
