import AboutUs from "~/views/AboutUs/AboutUs";
import Benefits from "~/views/Benefits/Benefits";
import FAQ from "~/views/FAQ/FAQ";
import FinalCTA from "~/views/FinalCTA/FinalCTA";
import Footer from "~/views/Footer/Footer";
import Header from "~/views/Header/Header";
import Hero from "~/views/Hero/Hero";
import Pricing from "~/views/Pricing/Pricing";
import Process from "~/views/Process/Process";
import Testimonials from "~/views/Testimonials/Testimonials";
import TrustStrip from "~/views/TrustStrip/TrustStrip";

export default function Home() {
  return (
    <>
      <Header />

      <main className="mt-28 md:mt-36 px-7">
        <Hero />
        <TrustStrip />
        <Benefits />
        <Process />
        <Pricing />
        <AboutUs />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
