import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ProcessSection from "./components/ProcessSection";
import ProductsSection from "./components/ProductsSection";
import MayoristaSection from "./components/MayoristaSection";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      <div id="inicio">
        <HeroSection />
      </div>
      <div id="por-que-elegirnos">
        <WhyChooseUs />
      </div>
      <div id="como-funciona">
        <ProcessSection />
      </div>
      <ProductsSection />
      <div id="mayoristas">
        <MayoristaSection />
      </div>
      <div id="contacto">
        <ContactForm />
      </div>
    </div>
  );
}
