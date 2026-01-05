import DisclaimerModal from "@/components/DisclaimerModal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import OpeningHours from "@/components/OpeningHours";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DisclaimerModal />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Brands />
        <OpeningHours />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
