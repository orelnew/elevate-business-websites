
import Hero from "../components/Hero";
import ClientDemoCarousel from "../components/ClientDemoCarousel";
import WhyWebsite from "../components/WhyWebsite";
import Benefits from "../components/Benefits";
import MiniDemo from "../components/MiniDemo";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import CallToAction from "../components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ClientDemoCarousel />
      <WhyWebsite />
      <Benefits />
      <MiniDemo />
      <Testimonials />
      <Pricing />
      <CallToAction />
    </div>
  );
};

export default Index;
