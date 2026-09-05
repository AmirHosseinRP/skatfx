"use client";

import { Check, Copy, ExternalLink } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import Typography from "~/components/atoms/Typography/Typography";
import ScrollReveal from "~/components/molecules/ScrollReveal/ScrollReveal";
import { Button } from "~/shadcn/components/ui/button";

// TODO: insert real wallet addresses
const wallets = [
  {
    name: "Bitcoin",
    network: "Bitcoin",
    address: "bc1qs300en79ct0qvrn3khh86k7glddkl3wd99q4g2",
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
        <title>Bitcoin</title>
        <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.546zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.52 2.107c-.345-.087-.7-.168-1.05-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.065-.565-.13-.84-.2l.001-.007-1.815-.45-.35 1.407s.975.224.955.238c.535.136.63.494.615.775l-.618 2.48c.037.01.085.025.138.045l-.14-.036-.867 3.47c-.065.165-.23.41-.61.32.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.33.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.254 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.2 1.508-.766 1.68-1.93zM14.74 16.92c-.405 1.64-3.16.753-4.05.53l.72-2.9c.896.224 3.757.67 3.33 2.37zm.41-4.64c-.37 1.49-2.662.735-3.405.548l.654-2.63c.744.186 3.137.534 2.75 2.082z" />
      </svg>
    ),
  },
  {
    name: "USDC",
    network: "ERC20",
    address: "0xf0F64ed192bF65bF8a72970fEbE73D5f768bF50F",
    // TODO: specify correct network (e.g. ERC20/Polygon/Solana)
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
        <title>USDC</title>
        <path d="M12 24c6.624 0 12-5.376 12-12S18.624 0 12 0 0 5.376 0 12s5.376 12 12 12zm-1.08-6.36c-.72 0-1.2-.18-1.56-.42l.36-1.38c.36.24.84.48 1.38.48.6 0 .96-.24.96-.66 0-.42-.36-.66-1.02-.96-.96-.36-1.68-.84-1.68-1.86 0-.9.66-1.56 1.74-1.74V8.4h.6v1.44c.54.06 1.02.24 1.38.48l-.36 1.32c-.3-.18-.72-.36-1.2-.36-.54 0-.84.24-.84.6 0 .42.42.66 1.14.96.96.36 1.62.84 1.62 1.8 0 .96-.72 1.62-1.8 1.8v1.5h-.6v-1.44z" />
      </svg>
    ),
  },
  {
    name: "USDT",
    network: "TRC20",
    address: "0xf0F64ed192bF65bF8a72970fEbE73D5f768bF50F",
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
        <title>USDT</title>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.03 4.5c3.47 0 6.73.78 7.95 2.1h-3.54c-.57-.57-1.68-1.08-3.12-1.26v2.64c1.56.12 2.76.48 3.6 1.08-.48.36-1.2.72-2.16.96-.72.18-1.56.3-2.43.36v3.36h-2.4v-3.36c-.87-.06-1.71-.18-2.43-.36-.96-.24-1.68-.6-2.16-.96.84-.6 2.04-.96 3.6-1.08V8.34c-1.44.18-2.55.69-3.12 1.26H4.05c1.22-1.32 4.48-2.1 7.92-2.1v-.003z" />
      </svg>
    ),
  },
  {
    name: "TRX",
    network: "TRON",
    address: "TR2hYRQFnPzbctZxkdAQpgBPnVB4eTfYG5",
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
        <title>TRX</title>
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.508 7.12l-6.84 3.12-5.28-2.4 8.16-4.08 3.96 3.36zm-.72 1.32L12.48 16.8H8.28l3.96-8.64 3.548.28zM7.56 8.52l5.28 2.4-3.6 7.92L3 14.88l4.56-6.36zm6.36 9.12l3.48-7.68 1.08.48-4.56 7.2z" />
      </svg>
    ),
  },
  {
    name: "Solana",
    network: "Solana",
    address: "2G7wTLjwSKFkU6hwcpmybNV6ePtUEPfxmEAeRYPGWpo5",
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
        <title>Solana</title>
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.97 14.88H7.23c-.36 0-.54-.42-.3-.66l2.4-2.4c.18-.18.48-.18.66 0l1.32 1.32 3.42-3.42c.18-.18.48-.18.66 0l2.28 2.28c.24.24.06.66-.3.66zm0-5.88H7.23c-.36 0-.54-.42-.3-.66l2.4-2.4c.18-.18.48-.18.66 0l1.32 1.32 3.42-3.42c.18-.18.48-.18.66 0l2.28 2.28c.24.24.06.66-.3.66zm0 10.08H7.23c-.36 0-.54-.42-.3-.66l2.4-2.4c.18-.18.48-.18.66 0l1.32 1.32 3.42-3.42c.18-.18.48-.18.66 0l2.28 2.28c.24.24.06.66-.3.66z" />
      </svg>
    ),
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  }, [text]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-brand text-white hover:bg-brand-hover active:bg-brand-active transition-colors cursor-pointer"
    >
      {copied ? (
        <>
          <Check className="size-4" />
          Copied
        </>
      ) : (
        <>
          <Copy className="size-4" />
          Copy Address
        </>
      )}
    </button>
  );
}

export default function SubscriptionPage() {
  const plansRef = useRef<HTMLDivElement>(null);

  const scrollToPlans = useCallback(() => {
    plansRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <main className="mt-28 md:mt-36 px-7 w-full max-w-5xl mx-auto">
      {/* 11.1 Page Header */}
      <section className="w-full py-16 md:py-24">
        <ScrollReveal>
          <div className="text-center mb-4">
            <Typography variant="heading1" tagName="h1" className="text-4xl md:text-6xl">
              Subscription
              <span className="text-prose-brand">.</span>
            </Typography>
          </div>
          <div className="text-center">
            <Typography variant="subtitle1" color="secondary">
              Choose the way that works best for you.
            </Typography>
          </div>
        </ScrollReveal>
      </section>

      {/* 11.2 Choose Your Path */}
      <section className="w-full pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-4 rounded-xl border border-background-secondary bg-background-secondary/50 p-8 h-full">
              <Typography variant="heading4" tagName="h3">
                Talk to Our Team
              </Typography>
              <Typography variant="paragraph2" color="secondary" className="flex-1">
                Prefer a guided process? Connect directly with our team on Telegram. We&apos;ll help you choose the
                right plan, complete your payment, and activate your membership.
              </Typography>
              <Button href="https://t.me/skatfx" color="brand" size="lg" className="w-full">
                Continue on Telegram <ExternalLink className="size-4" />
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col gap-4 rounded-xl border-2 border-brand bg-background-secondary/50 p-8 h-full relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-brand text-white text-xs font-semibold px-3 py-1 rounded-full">Self-Serve</span>
              </div>
              <Typography variant="heading4" tagName="h3">
                Choose a Plan & Pay
              </Typography>
              <Typography variant="paragraph2" color="secondary" className="flex-1">
                View our subscription plans, choose the one that fits you, and complete your payment using
                cryptocurrency.
              </Typography>
              <Button onClick={scrollToPlans} color="brand" size="lg" className="w-full">
                View Plans & Payment
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 11.3 Choose Your Plan */}
      <section ref={plansRef} id="plans" className="w-full pb-16 md:pb-24">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Typography variant="heading2" tagName="h2">
              Choose Your Plan
              <span className="text-prose-brand">.</span>
            </Typography>
            <Typography variant="subtitle1" color="secondary" className="mt-2">
              Select the subscription that best fits your trading goals.
            </Typography>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Edge Plan */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col rounded-xl border border-background-secondary bg-background-secondary/50 p-8 h-full">
              <Typography variant="heading4" tagName="h3" className="mb-1">
                SkatFX Edge
              </Typography>
              <div className="flex items-baseline gap-1 mb-3">
                <Typography variant="heading2" color="brand">
                  $78
                </Typography>
                <Typography variant="paragraph2" color="secondary">
                  / Month
                </Typography>
              </div>
              <Typography variant="paragraph2" color="secondary" className="mb-6">
                Best for those who want fast, reliable signals and expert support with minimal commitment.
              </Typography>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {[
                  "High-Quality Trading Setups",
                  "Minimum 1:3 Risk-to-Reward Ratio",
                  "Signals from 3 Elite Traders",
                  "Subscription Safeguard",
                  "VIP Weekly Market Analysis",
                  "24/7 Premium Support",
                ].map(feature => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="size-5 shrink-0 text-prose-brand mt-0.5" />
                    <Typography variant="paragraph3">{feature}</Typography>
                  </li>
                ))}
              </ul>

              <Button onClick={scrollToPlans} color="brand" size="lg" className="w-full">
                Choose Edge
              </Button>
            </div>
          </ScrollReveal>

          {/* Prime Plan */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col rounded-xl border-2 border-brand bg-background-secondary/50 p-8 h-full relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-brand text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
              </div>
              <Typography variant="heading4" tagName="h3" className="mb-1">
                SkatFX Prime
              </Typography>
              <div className="flex items-baseline gap-1 mb-3">
                <Typography variant="heading2" color="brand">
                  $209
                </Typography>
                <Typography variant="paragraph2" color="secondary">
                  / 3 Months
                </Typography>
              </div>
              <Typography variant="paragraph2" color="secondary" className="mb-6">
                For serious traders looking to level up with strategy, education, and deep mentorship.
              </Typography>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {[
                  "Everything in Edge Plan",
                  "Full Access to Premium Educational Content",
                  "Ebooks",
                  "48 Hours of Live Mentorship",
                ].map(feature => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="size-5 shrink-0 text-prose-brand mt-0.5" />
                    <Typography variant="paragraph3">{feature}</Typography>
                  </li>
                ))}
              </ul>

              <Button onClick={scrollToPlans} color="brand" size="lg" className="w-full">
                Choose Prime
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 11.4 & 11.5 Payment + Crypto */}
      <section className="w-full pb-16 md:pb-24">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Typography variant="heading2" tagName="h2">
              Complete Your Payment
              <span className="text-prose-brand">.</span>
            </Typography>
            <Typography variant="subtitle1" color="secondary" className="mt-2">
              Complete your payment using one of the supported cryptocurrencies below.
            </Typography>
          </div>
        </ScrollReveal>

        {/* Important notice */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto mb-12 rounded-xl border border-brand/20 bg-brand-light/30 p-6">
            <Typography variant="subtitle3" className="!text-prose-primary">
              Important: Please make sure you are sending the correct cryptocurrency through the correct network.
              Sending funds through the wrong network may result in permanent loss of funds.
            </Typography>
          </div>
        </ScrollReveal>

        {/* Crypto Payment heading */}
        <ScrollReveal delay={0.15}>
          <div className="text-center mb-8">
            <Typography variant="heading3" tagName="h3">
              Crypto Payment
            </Typography>
            <Typography variant="paragraph2" color="secondary" className="mt-2">
              Send the exact subscription amount to the wallet address corresponding to your selected cryptocurrency and
              network.
            </Typography>
          </div>
        </ScrollReveal>

        {/* Wallet cards */}
        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {wallets.map((wallet, index) => (
            <ScrollReveal key={wallet.name} delay={0.2 + index * 0.05}>
              <div className="flex flex-col gap-4 rounded-xl border border-background-secondary bg-background-secondary/50 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-background-primary text-prose-primary">
                    {wallet.icon}
                  </div>
                  <div>
                    <Typography variant="subtitle3">{wallet.name}</Typography>
                    <Typography variant="caption1" color="secondary">
                      Network: {wallet.network}
                    </Typography>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <div className="flex-1 min-w-0 w-full rounded-lg bg-background-primary border border-background-secondary px-4 py-3">
                    <p className="text-paragraph3 text-prose-primary font-mono" style={{ wordBreak: "break-all" }}>
                      {/* TODO: insert real wallet address */}
                      {wallet.address}
                    </p>
                  </div>
                  <CopyButton text={wallet.address} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 11.6 After Payment */}
      <section className="w-full pb-16 md:pb-24">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Typography variant="heading2" tagName="h2">
              After Payment
              <span className="text-prose-brand">.</span>
            </Typography>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-0">
            {[
              { num: "01", text: "Complete your payment to the selected wallet." },
              { num: "02", text: "Save your transaction receipt or TXID." },
              { num: "03", text: "Send your payment proof to our team via Telegram or WhatsApp." },
              { num: "04", text: "Our team will verify the payment and activate your subscription." },
            ].map((step, index) => (
              <ScrollReveal key={step.num} delay={index * 0.1}>
                <div className="flex gap-6 relative">
                  <div className="flex flex-col items-center">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand text-white text-sm font-semibold">
                      {step.num}
                    </div>
                    {index < 3 && <div className="w-px flex-1 bg-background-secondary" />}
                  </div>
                  <div className="pb-10">
                    <Typography variant="paragraph1">{step.text}</Typography>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Button href="https://t.me/skatfx" color="brand" size="lg" className="flex-1">
                Send Receipt via Telegram <ExternalLink className="size-4" />
              </Button>
              <Button href="https://wa.me/message/FBBXP4SJC3XTC1" color="brand" size="lg" className="flex-1">
                Send Receipt via WhatsApp <ExternalLink className="size-4" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 11.7 Final Note */}
      <section className="w-full pb-16 md:pb-24">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center rounded-xl border border-background-secondary bg-background-secondary/50 p-8">
            <Typography variant="subtitle2" className="!text-prose-primary">
              Your subscription will be activated after payment verification.
            </Typography>
            <Typography variant="paragraph2" color="secondary" className="mt-2">
              For a faster and smoother process, please include your transaction ID (TXID) when contacting our team.
            </Typography>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
