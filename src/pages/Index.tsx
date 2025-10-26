import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Snowfall from "@/components/Snowfall";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Snowfall />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
