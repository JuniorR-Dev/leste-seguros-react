import Header from "../components/Header";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Promo from "../components/Promo";
import Promo1 from "../components/Promo1";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Benefits />
        <Promo />
        <FAQ />
        <Promo1 />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}