import Header from "~/components/atoms/Header/Header";
import ThemeToggle from "~/components/atoms/ThemeToggle/ThemeToggle";
import HeroSection from "~/views/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <Header />

      <div className="fixed bottom-0 left-0">
        <ThemeToggle />
      </div>

      <main className="mt-28 md:mt-36 px-7">
        <HeroSection />
      </main>
    </>
  );
}
