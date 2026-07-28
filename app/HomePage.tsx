import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import BackgroundMusic from "@/components/BackgroundMusic";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="pt-5">
        <HeroSlider />
        <About />
        <Services />
        <Gallery />
        <Contact />
        <Footer />
      </main>

      <BackgroundMusic />
    </>
  );
}