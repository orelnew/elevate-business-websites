
import UrgencyBanner from "../components/UrgencyBanner";
import Hero from "../components/Hero";
import ClientDemoCarousel from "../components/ClientDemoCarousel";
import WhyWebsite from "../components/WhyWebsite";
import RevenueImpact from "../components/RevenueImpact";
import BeforeAfter from "../components/BeforeAfter";
import Benefits from "../components/Benefits";
import MiniDemo from "../components/MiniDemo";
import TrustSignals from "../components/TrustSignals";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import CallToAction from "../components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <UrgencyBanner />
      <Hero />
      <ClientDemoCarousel />
      <WhyWebsite />
      <RevenueImpact />
      <Pricing />
      <BeforeAfter />
      <Benefits />
      <MiniDemo />
      <TrustSignals />
      <Testimonials />
      <Pricing />
      <CallToAction />
    </div>
  );
};

export default Index;
