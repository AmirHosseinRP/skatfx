"use client";

import { useTranslation } from "react-i18next";
import Typography from "~/components/atoms/Typography/Typography";
import ScrollReveal from "~/components/molecules/ScrollReveal/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/shadcn/components/ui/accordion";

export default function FAQ() {
  const { t } = useTranslation();
  const items = t("faq.items", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section id="questions" className="w-full py-16 md:py-24">
      <ScrollReveal>
        <div className="text-center mb-12">
          <Typography variant="heading2" tagName="h2">
            {t("faq.title")}
            <span className="text-prose-brand">.</span>
          </Typography>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger className="text-start text-prose-primary hover:text-prose-secondary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-prose-secondary">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Typography variant="paragraph2" color="secondary" className="mt-6 text-center">
            Got more questions?{" "}
            <a href="mailto:Skattfx@gmail.com" className="text-prose-link hover:underline">
              Contact us
            </a>
            .
          </Typography>
        </div>
      </ScrollReveal>
    </section>
  );
}
