import Header from "~/components/atoms/Header/Header";
import HeroSection from "~/views/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <Header />

      <main className="mt-38">
        <HeroSection />
      </main>
    </>
  );
}
