import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { faqs } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Faq
          id="faq"
          description="A quick guide to render and cladding before you request a quote."
          items={faqs}
        />
        <Gallery />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
