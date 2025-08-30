
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  MapPin, 
  Star, 
  Calendar, 
  CreditCard, 
  Shield,
  TreePine,
  Camera,
  TrendingUp,
  Flower2,
  Sprout,
  Scissors
} from "lucide-react";

const Benefits = () => {
  const features = [
    {
      icon: Phone,
      title: "Easy Contact Forms",
      description: "Simple contact forms for quotes and consultations",
      benefit: "Capture more leads from interested homeowners"
    },
    {
      icon: MapPin,
      title: "Service Area Maps",
      description: "Show exactly where you provide landscaping services",
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
      description: "Let customers schedule consultations and maintenance",
      benefit: "Get bookings 24/7, even during off-season"
    },
    {
      icon: CreditCard,
      title: "Service Pricing",
      description: "Clear pricing for common landscaping services",
      benefit: "Reduce price shopping phone calls"
    },
    {
      icon: Shield,
      title: "License & Insurance Info",
      description: "Display your credentials and insurance details",
      benefit: "Stand out as a professional, trusted landscaper"
    },
    {
      icon: TreePine,
      title: "Seasonal Services",
      description: "Highlight seasonal offerings like fall cleanup",
      benefit: "Maximize revenue throughout the year"
    },
    {
      icon: Camera,
      title: "Before/After Gallery",
      description: "Showcase your best landscaping transformations",
      benefit: "Demonstrate quality and inspire confidence"
    },
    {
      icon: TrendingUp,
      title: "Lead Generation Forms",
      description: "Capture leads for estimates and design consultations",
      benefit: "Turn website visitors into paying customers"
    },
    {
      icon: Flower2,
      title: "Garden Design Portfolio",
      description: "Beautiful galleries of your garden and patio work",
      benefit: "Win higher-value design projects"
    },
    {
      icon: Sprout,
      title: "Plant Care Guides",
      description: "Share expertise with helpful gardening tips",
      benefit: "Position yourself as the local expert"
    },
    {
      icon: Scissors,
      title: "Maintenance Plans",
      description: "Promote recurring maintenance packages",
      benefit: "Build steady monthly recurring revenue"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Turn Your Website Into a Revenue-Generating Machine
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every feature is designed to build trust, showcase your expertise, and convert visitors into 
            high-paying customers who call you instead of your competitors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-3 leading-relaxed">{feature.description}</p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-green-800">✓ {feature.benefit}</p>
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
              <p className="text-gray-600 text-sm mb-4">Everything you need to compete online and win more projects</p>
              <a href="#pricing-growth" className="inline-block">
                <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">
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
