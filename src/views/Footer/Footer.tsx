"use client";

import { Mail, MapPin, MessageCircle } from "lucide-react";
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto px-8">
        {/* Contact Info */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col gap-6">
            <Typography variant="heading4" tagName="h3">
              {t("footer.contact")}
            </Typography>
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
              <svg
                viewBox="0 0 24 24"
                className="size-5 text-prose-brand shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M8.5 3.5A2 2 0 0 0 6.7 6.2c.5 2.2 1.6 4.4 3.5 6.4 2 1.9 4.2 3 6.4 3.5a2 2 0 0 0 2.7-1.8v-1.1a1 1 0 0 0-.7-.95l-2.4-.8a1 1 0 0 0-1.1.35l-.8 1a11.5 11.5 0 0 1-3.2-3.2l1-.8a1 1 0 0 0 .35-1.1l-.8-2.4a1 1 0 0 0-.95-.7H9.6a2 2 0 0 0-1.1.3Z" />
              </svg>
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
          <div className="flex flex-col gap-4 pt-15">
            {/* <Typography variant="heading4" tagName="h3" className="mb-2">
              {t("footer.legal")}
            </Typography> */}
            <a
              href="https://drive.google.com/file/d/1TL9sViENy3Ee1Tta--iPFLOI9lEProw6/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-prose-secondary hover:text-prose-primary transition-colors text-sm"
            >
              {t("footer.terms")}
            </a>
            <a
              href="https://drive.google.com/file/d/1OA6qCmXhwrd0boz4P_5h_ws8KRECiEXh/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-prose-secondary hover:text-prose-primary transition-colors text-sm"
            >
              {t("footer.safeguard")}
            </a>
            <a
              href="https://drive.google.com/file/d/1TAKbO0-mQjIKG_zg0r_FmJkZSqXYJ9K1/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-prose-secondary hover:text-prose-primary transition-colors text-sm"
            >
              {t("footer.privacy")}
            </a>
            <a
              href="https://drive.google.com/file/d/14jdZA_cBMTYgUboOCCH74bDxVGpLZwIP/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-prose-secondary hover:text-prose-primary transition-colors text-sm"
            >
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
