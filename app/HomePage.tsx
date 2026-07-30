import HeroSlider from "@/components/HeroSlider";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="pt-20 md:pt-24">
      <HeroSlider />
      <About />
      <Services />
      <Gallery />
      <Contact />
    </main>
  );
}
