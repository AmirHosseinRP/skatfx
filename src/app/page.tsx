import ThemeToggle from "~/components/atoms/ThemeToggle/ThemeToggle";
import Header from "~/views/Header/Header";
import Hero from "~/views/Hero/Hero";

export default function Home() {
  return (
    <>
      <Header />

      <div className="fixed bottom-0 right-0">
        <ThemeToggle />
      </div>

      <main className="mt-28 md:mt-36 px-7">
        <Hero />
      </main>

      <footer className="min-h-20 mt-28 bg-gray-100 w-full flex justify-center items-center">footer</footer>
    </>
  );
}
