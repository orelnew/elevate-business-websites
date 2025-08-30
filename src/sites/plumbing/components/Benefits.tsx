
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  MapPin, 
  Star, 
  Calendar, 
  CreditCard, 
  Shield,
  Clock,
  Users,
  TrendingUp
} from "lucide-react";

const Benefits = () => {
  const features = [
    {
      icon: Phone,
      title: "Emergency Call Button",
      description: "Prominent emergency contact button for urgent plumbing needs",
      benefit: "Capture high-value emergency jobs"
    },
    {
      icon: MapPin,
      title: "Service Area Maps",
      description: "Show exactly where you provide plumbing services",
      benefit: "Attract local customers in your area"
    },
    {
      icon: Star,
      title: "Customer Reviews",
      description: "Display testimonials and ratings prominently",
      benefit: "Build trust and credibility instantly"
    },
    {
      icon: Calendar,
      title: "Online Booking",
      description: "Let customers schedule non-emergency appointments",
      benefit: "Get bookings 24/7, even while you sleep"
    },
    {
      icon: CreditCard,
      title: "Service Pricing",
      description: "Clear pricing for common plumbing services",
      benefit: "Reduce price shopping phone calls"
    },
    {
      icon: Shield,
      title: "License & Insurance Info",
      description: "Display your credentials and insurance details",
      benefit: "Stand out as a professional, trusted plumber"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Show your emergency hours and response times",
      benefit: "Win more emergency plumbing jobs"
    },
    {
      icon: Users,
      title: "Before/After Gallery",
      description: "Showcase your best plumbing work with photos",
      benefit: "Demonstrate quality and build confidence"
    },
    {
      icon: TrendingUp,
      title: "Lead Generation Forms",
      description: "Capture leads for estimates and consultations",
      benefit: "Turn website visitors into paying customers"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything Your Plumbing Business Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We build websites specifically for plumbers. Every feature is designed 
            to help you get more customers and grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-3 leading-relaxed">{feature.description}</p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">✓ {feature.benefit}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Plus Professional Design & Mobile Optimization
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Mobile-First Design</h4>
                <p className="text-sm text-gray-600">Looks perfect on phones, tablets, and desktops</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Search Engine Ready</h4>
                <p className="text-sm text-gray-600">Optimized to appear in Google searches</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Fast Loading</h4>
                <p className="text-sm text-gray-600">Quick load times keep customers engaged</p>
              </div>
            </div>
            <div className="border-t pt-6">
              <p className="text-gray-600 text-sm mb-4">Everything you need to compete online and win more jobs</p>
              <a href="#growth-plan" className="inline-block">
                <button className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">
                  View Pricing
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
