import Typography from "~/components/atoms/Typography/Typography";
import ReviewBoxCount from "~/views/ReviewCountBox/ReviewCountBox";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center">
      <div className="w-full max-w-xl flex flex-col gap-3 text-center">
        <Typography variant="heading1" tagName="h1">
          Strategic trading, backed by transparency<span className="text-prose-brand">.</span>
        </Typography>

        <Typography variant="paragraph1">
          Experience clarity, verified trading setups, and performance you can measure
        </Typography>

        <ReviewBoxCount />
      </div>
    </section>
  );
}
