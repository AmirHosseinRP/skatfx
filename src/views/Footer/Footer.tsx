"use client";

import { Mail, MapPin, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import Typography from "~/components/atoms/Typography/Typography";
import ScrollReveal from "~/components/molecules/ScrollReveal/ScrollReveal";
import { SITE_CONFIG } from "~/shared/config";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#25D366" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const legalLinks = [
  { key: "terms", url: "https://drive.google.com/file/d/1TL9sViENy3Ee1Tta–iPFLOI9lEProw6/view?usp=share_link" },
  { key: "safeguard", url: "https://drive.google.com/file/d/1OA6qCmXhwrd0boz4P_5h_ws8KRECiEXh/view?usp=share_link" },
  { key: "disclaimer", url: "https://drive.google.com/file/d/14jdZA_cBMTYgUboOCCH74bDxVGpLZwIP/view?usp=share_link" },
  { key: "privacy", url: "https://drive.google.com/file/d/1TAKbO0-mQjIKG_zg0r_FmJkZSqXYJ9K1/view?usp=share_link" },
] as const;

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="w-full py-12 md:py-16 bg-background-secondary rounded-t-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Contact Info */}
        <ScrollReveal>
          <div className="flex flex-col gap-6">
            <Typography variant="heading3" tagName="h2">
              {t("footer.contactUs")}
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
              <WhatsAppIcon className="size-5 shrink-0" />
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
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col gap-4">
            <Typography variant="heading3" tagName="h2">
              {t("footer.legalDocuments")}
            </Typography>
            {legalLinks.map(({ key, url }) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-prose-secondary hover:text-prose-primary transition-colors text-sm"
              >
                {t(`footer.${key}`)}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
