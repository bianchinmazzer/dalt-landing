import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ProcessSection from "./components/ProcessSection";
import ProductsSection from "./components/ProductsSection";
import ContactForm from "./components/ContactForm";
import WhatsappIcon from "./components/WhatsappIcon";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      <Navbar />
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
      <div id="contacto">
        <ContactForm />
      </div>
      <WhatsappIcon />
      <Footer />
    </div>
  );
}
