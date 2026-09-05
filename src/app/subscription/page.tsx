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
      <svg width="24" height="24" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>Bitcoin</title>
        <g clip-path="url(#clip0_108_3)">
          <path
            d="M220 110C220 131.756 213.549 153.023 201.462 171.113C189.375 189.202 172.195 203.301 152.095 211.627C131.995 219.952 109.878 222.131 88.5401 217.886C67.2022 213.642 47.6021 203.166 32.2183 187.782C16.8345 172.398 6.35804 152.798 2.11367 131.46C-2.13071 110.122 0.0476608 88.0047 8.3733 67.9048C16.6989 47.805 30.7979 30.6253 48.8873 18.5383C66.9767 6.45139 88.2441 0 110 0C139.174 0 167.153 11.5893 187.782 32.2183C208.411 52.8473 220 80.8262 220 110Z"
            fill="#F7931A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M78.1801 50.2304L103.46 57.0004L109.11 35.9404L121.75 39.3704L116.32 59.5604L126.63 62.3304L132.07 41.9204L144.93 45.3604L139.39 65.8804C139.39 65.8804 160.39 70.5304 165.33 87.6104C170.27 104.69 154.47 113.66 149.59 114C149.59 114 167.99 124.09 161.67 143.94C155.35 163.79 135.95 167.34 115.54 162.79L110 184.07L97.1401 180.63L102.79 159.68L92.5901 156.9L86.9401 178L74.1801 174.57L79.8401 153.57L53.8901 146.57L60.4301 132.05C60.4301 132.05 67.7501 134.05 70.5201 134.71C73.2901 135.37 75.0701 132.49 75.8501 129.61C76.6301 126.73 88.3801 79.0004 89.4901 75.0704C90.6001 71.1404 90.1501 68.0704 85.4901 66.8604C80.8301 65.6504 74.4901 63.7604 74.4901 63.7604L78.1801 50.2304ZM103.68 113.44L96.6801 141.27C96.6801 141.27 131.39 153.8 135.83 136.17C140.27 118.54 103.68 113.44 103.68 113.44ZM106.9 100.24L113.77 74.7404C113.77 74.7404 143.49 80.0604 139.83 94.2504C136.17 108.44 118.65 103 106.9 100.24Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_108_3">
            <rect width="220" height="220" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: "USDC",
    network: "ERC20",
    address: "0xf0F64ed192bF65bF8a72970fEbE73D5f768bF50F",
    // TODO: specify correct network (e.g. ERC20/Polygon/Solana)
    icon: (
      <svg width="24" height="24" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>USDC</title>
        <g clip-path="url(#clip0_108_15)">
          <path
            d="M110 220C131.756 220 153.023 213.549 171.113 201.462C189.202 189.375 203.301 172.195 211.627 152.095C219.952 131.995 222.131 109.878 217.886 88.5401C213.642 67.2022 203.165 47.6021 187.782 32.2183C172.398 16.8345 152.798 6.35804 131.46 2.11367C110.122 -2.13071 88.0045 0.0476608 67.9047 8.3733C47.8048 16.6989 30.6251 30.7979 18.5382 48.8873C6.45123 66.9767 -0.000155252 88.2441 -0.000155252 110C-0.035768 124.455 2.78516 138.775 8.30056 152.137C13.816 165.499 21.9171 177.64 32.1387 187.861C42.3602 198.083 54.5007 206.184 67.8626 211.699C81.2245 217.215 95.5444 220.036 110 220Z"
            fill="#2775CA"
          />
          <path
            d="M140.25 127.42C140.25 111.42 130.63 105.87 111.38 103.58C97.6199 101.75 94.8799 98.0799 94.8799 91.6699C94.8799 85.2599 99.4599 81.1199 108.62 81.1199C116.88 81.1199 121.46 83.8699 123.75 90.7499C123.996 91.4127 124.439 91.984 125.021 92.3865C125.602 92.7889 126.293 93.003 127 92.9999H134.33C134.754 93.0109 135.177 92.9354 135.571 92.7779C135.966 92.6205 136.324 92.3845 136.624 92.0842C136.924 91.7839 137.16 91.4256 137.318 91.0312C137.475 90.6368 137.551 90.2144 137.54 89.7899V89.3399C136.654 84.3722 134.153 79.8362 130.424 76.4365C126.695 73.0369 121.948 70.964 116.92 70.5399V59.5399C116.92 57.7099 115.54 56.3399 113.25 55.8799H106.37C104.54 55.8799 103.17 57.2499 102.71 59.5399V70.1199C88.9199 71.9999 80.2099 81.1199 80.2099 92.5799C80.2099 107.71 89.3799 113.67 108.63 115.96C121.46 118.25 125.63 120.96 125.63 128.33C125.63 135.7 119.22 140.71 110.51 140.71C98.5899 140.71 94.5099 135.71 93.0899 128.79C92.9589 128.017 92.5609 127.314 91.9652 126.804C91.3695 126.295 90.6139 126.01 89.8299 126H81.9999C81.5757 125.99 81.154 126.067 80.7602 126.225C80.3664 126.383 80.0087 126.619 79.7087 126.919C79.4087 127.219 79.1726 127.576 79.0147 127.97C78.8568 128.364 78.7803 128.786 78.7899 129.21V129.67C80.6299 141.13 87.9599 149.38 103.09 151.67V162.67C103.09 164.5 104.46 165.88 106.75 166.34H113.63C115.46 166.34 116.84 164.96 117.29 162.67V151.67C131.04 149.38 140.21 139.75 140.21 127.38L140.25 127.42Z"
            fill="white"
          />
          <path
            d="M86.6199 175.54C73.4321 170.703 62.0474 161.933 54.0047 150.417C45.962 138.9 41.6492 125.192 41.6492 111.145C41.6492 97.0979 45.962 83.3896 54.0047 71.873C62.0474 60.3565 73.4321 51.5869 86.6199 46.7498C87.4998 46.3692 88.2389 45.7232 88.7337 44.902C89.2286 44.0809 89.4545 43.1256 89.3799 42.1698V35.7498C89.4416 34.9077 89.196 34.0717 88.6885 33.3969C88.181 32.7221 87.446 32.2541 86.6199 32.0798C85.9747 32.0125 85.3265 32.1754 84.7899 32.5398C68.104 37.8433 53.5386 48.319 43.202 62.4505C32.8655 76.5821 27.2939 93.6363 27.2939 111.145C27.2939 128.653 32.8655 145.707 43.202 159.839C53.5386 173.971 68.104 184.446 84.7899 189.75C85.1709 189.971 85.599 190.099 86.0391 190.123C86.4792 190.147 86.9187 190.067 87.3216 189.888C87.7245 189.71 88.0794 189.438 88.3572 189.096C88.6351 188.754 88.8279 188.351 88.9199 187.92C89.3799 187.46 89.3799 187 89.3799 186.08V179.67C89.3799 178.29 87.9999 176.46 86.6199 175.54ZM135.21 32.5398C134.828 32.3184 134.399 32.1907 133.959 32.1673C133.518 32.1438 133.078 32.2252 132.675 32.4048C132.272 32.5844 131.917 32.8571 131.64 33.2004C131.362 33.5437 131.171 33.9479 131.08 34.3798C130.63 34.8298 130.63 35.2898 130.63 36.2098V42.6198C130.707 43.5441 130.995 44.4385 131.472 45.2341C131.949 46.0298 132.601 46.7057 133.38 47.2098C146.568 52.0469 157.952 60.8165 165.995 72.333C174.038 83.8496 178.351 97.5579 178.351 111.605C178.351 125.652 174.038 139.36 165.995 150.877C157.952 162.393 146.568 171.163 133.38 176C132.501 176.381 131.763 177.027 131.27 177.848C130.777 178.67 130.553 179.625 130.63 180.58V187C130.568 187.84 130.812 188.675 131.317 189.35C131.823 190.024 132.556 190.493 133.38 190.67C134.025 190.737 134.673 190.574 135.21 190.21C151.889 184.833 166.434 174.304 176.751 160.139C187.068 145.973 192.626 128.899 192.626 111.375C192.626 93.8501 187.068 76.7769 176.751 62.6111C166.434 48.4452 151.889 37.9167 135.21 32.5398Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_108_15">
            <rect width="220" height="220" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: "USDT",
    network: "TRC20",
    address: "0xf0F64ed192bF65bF8a72970fEbE73D5f768bF50F",
    icon: (
      <svg width="24" height="24" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>USDT</title>
        <g clip-path="url(#clip0_108_407)">
          <path
            d="M110 220C170.751 220 220 170.751 220 110C220 49.2487 170.751 0 110 0C49.2487 0 0 49.2487 0 110C0 170.751 49.2487 220 110 220Z"
            fill="#26A17B"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M123.214 119.51V119.497C122.458 119.552 118.56 119.785 109.863 119.785C102.919 119.785 98.0311 119.579 96.3124 119.497V119.517C69.5824 118.342 49.6311 113.687 49.6311 108.118C49.6311 102.557 69.5824 97.9022 96.3124 96.7059V114.883C98.0586 115.007 103.064 115.303 109.98 115.303C118.278 115.303 122.437 114.959 123.214 114.89V96.7197C149.889 97.9091 169.792 102.563 169.792 108.118C169.792 113.687 149.889 118.328 123.214 119.51ZM123.214 94.8291V78.5628H160.435V53.7578H59.0911V78.5628H96.3124V94.8222C66.0624 96.2109 43.313 102.206 43.313 109.383C43.313 116.561 66.0624 122.549 96.3124 123.945V176.071H123.214V123.931C153.416 122.542 176.11 116.554 176.11 109.383C176.11 102.213 153.416 96.2247 123.214 94.8291Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_108_407">
            <rect width="220" height="220" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: "TRX",
    network: "TRON",
    address: "TR2hYRQFnPzbctZxkdAQpgBPnVB4eTfYG5",
    icon: (
      <svg width="24" height="24" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>TRX</title>
        <g clip-path="url(#clip0_108_398)">
          <path
            d="M110 220C170.751 220 220 170.751 220 110C220 49.2487 170.751 0 110 0C49.2487 0 0 49.2487 0 110C0 170.751 49.2487 220 110 220Z"
            fill="#EF0027"
          />
          <path
            d="M150.782 68.1511L51.5625 49.8911L103.778 181.286L176.536 92.6399L150.782 68.1511ZM149.188 76.1949L164.368 90.6255L122.856 98.1399L149.188 76.1949ZM113.836 96.6342L70.0837 60.348L141.597 73.5067L113.836 96.6342ZM110.722 103.055L103.586 162.043L65.12 65.2224L110.722 103.049V103.055ZM117.322 106.184L163.295 97.8649L110.564 162.098L117.322 106.184Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_108_398">
            <rect width="220" height="220" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: "Solana",
    network: "Solana",
    address: "2G7wTLjwSKFkU6hwcpmybNV6ePtUEPfxmEAeRYPGWpo5",
    icon: (
      <svg width="24" height="24" viewBox="0 0 489 503" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>Solena</title>
        <g clip-path="url(#clip0_405_2)">
          <path
            d="M244.3 0H244.7C379.6 0 489 109.4 489 244.3V257.9C489 392.8 379.6 502.2 244.7 502.2H244.3C109.4 502.2 0 392.8 0 257.9V244.3C0 109.4 109.4 0 244.3 0Z"
            fill="#232323"
          />
          <path
            d="M349 189C348.2 189.9 347.2 190.6 346.1 191C345 191.5 343.8 191.7 342.6 191.7H116.1C108.1 191.7 104 181.7 109.6 175.7L146.8 136.2C147.6 135.3 148.6 134.6 149.8 134.1C150.9 133.6 152.1 133.4 153.3 133.4H380.7C388.8 133.4 392.8 143.5 387.1 149.5L349 189ZM349 365.6C347.3 367.3 345 368.3 342.6 368.3H116.1C108.1 368.3 104 358.5 109.6 352.7L146.8 314.1C147.6 313.2 148.7 312.5 149.8 312.1C150.9 311.6 152.1 311.4 153.3 311.4H380.7C388.8 311.4 392.8 321.3 387.1 327.1L349 365.6ZM349 225.1C347.3 223.4 345 222.4 342.6 222.4H116.1C108.1 222.4 104 232.2 109.6 238L146.8 276.6C147.6 277.5 148.7 278.2 149.8 278.6C150.9 279.1 152.1 279.3 153.3 279.3H380.7C388.8 279.3 392.8 269.4 387.1 263.6L349 225.1Z"
            fill="url(#paint0_linear_405_2)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_405_2"
            x1="124.304"
            y1="371.231"
            x2="371.739"
            y2="130.333"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#CF41E8" />
            <stop offset="1" stop-color="#10F2B0" />
          </linearGradient>
          <clipPath id="clip0_405_2">
            <rect width="489" height="502.2" fill="white" />
          </clipPath>
        </defs>
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
