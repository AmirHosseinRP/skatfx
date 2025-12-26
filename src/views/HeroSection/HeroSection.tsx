import ReviewBoxCount from "~/views/ReviewCountBox/ReviewCountBox";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center">
      <div className="w-full max-w-xl flex flex-col gap-3 text-center">
        <h1 className="text-heading1">
          Strategic trading built on transparency and documented results<span className="text-prose-brand">.</span>
        </h1>

        <p className="text-paragraph1">Experience clarity, verified trading setups, and performance you can measure</p>

        <ReviewBoxCount />
      </div>
    </section>
  );
}
