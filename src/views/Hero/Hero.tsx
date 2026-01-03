import ThemedImage from "~/components/atoms/ThemedImage/ThemedImage";
import Typography from "~/components/atoms/Typography/Typography";
import ScrollReveal from "~/components/molecules/ScrollReveal/ScrollReveal";
import { images } from "~/shared/libs/images";
import ReviewBoxCount from "~/views/ReviewCountBox/ReviewCountBox";

export default function Hero() {
  return (
    <section className="flex flex-col items-center">
      <div className="w-full max-w-xl flex flex-col gap-3 text-center">
        <ScrollReveal>
          <Typography variant="heading2" tagName="h1">
            Strategic trading, backed by transparency<span className="text-prose-brand">.</span>
          </Typography>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Typography variant="paragraph1">
            Experience clarity, verified trading setups, and performance you can measure
          </Typography>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <ReviewBoxCount />
        </ScrollReveal>

        <div className="flex flex-col gap-5 text-center justify-center items-center">
          <ScrollReveal delay={0.3} className="w-full flex flex-col justify-center items-center mt-8">
            <ThemedImage
              src={images.worldMap.src}
              alt={images.worldMap.alt}
              width={700}
              height={500}
              className="rounded-full border-2 border-background-secondary"
            />
          </ScrollReveal>

          <ScrollReveal>
            <Typography variant="label1">Countries where traders have joined us so far.</Typography>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
