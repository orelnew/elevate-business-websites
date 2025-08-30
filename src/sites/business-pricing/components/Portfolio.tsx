
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Portfolio = () => {
  const portfolioSites = [
    {
      name: "GreenScape Pro",
      specialty: "Residential Landscaping",
      location: "Austin, TX",
      description: "Complete yard transformations and ongoing maintenance",
      features: ["Photo Gallery", "Service Areas", "Online Booking"],
      rating: 4.9
    },
    {
      name: "Premier Lawn Care",
      specialty: "Commercial & Residential",
      location: "Denver, CO", 
      description: "Full-service lawn care and landscape maintenance",
      features: ["Customer Portal", "Seasonal Packages", "Emergency Service"],
      rating: 4.8
    },
    {
      name: "Hardscape Masters",
      specialty: "Hardscaping & Patios",
      location: "Phoenix, AZ",
      description: "Custom patios, walkways, and outdoor living spaces",
      features: ["3D Renderings", "Material Calculator", "Warranty Info"],
      rating: 5.0
    },
    {
      name: "Tree Care Specialists",
      specialty: "Tree Services",
      location: "Portland, OR",
      description: "Tree removal, pruning, and emergency storm cleanup",
      features: ["Emergency Hotline", "Free Estimates", "Insurance Info"],
      rating: 4.9
    },
    {
      name: "Irrigation Solutions",
      specialty: "Sprinkler Systems",
      location: "Las Vegas, NV",
      description: "Smart irrigation design, installation, and repair",
      features: ["System Design Tool", "Water Savings Calculator", "Maintenance Plans"],
      rating: 4.7
    },
    {
      name: "Seasonal Landscapes",
      specialty: "Garden Design",
      location: "Seattle, WA",
      description: "Year-round garden design and plant selection",
      features: ["Plant Database", "Seasonal Calendar", "Care Guides"],
      rating: 4.8
    },
    {
      name: "Outdoor Living Co.",
      specialty: "Complete Outdoor Spaces",
      location: "Miami, FL",
      description: "Full outdoor entertainment and living space design",
      features: ["Virtual Tours", "Design Gallery", "Financing Options"],
      rating: 5.0
    },
    {
      name: "Eco-Friendly Lawns",
      specialty: "Organic Lawn Care",
      location: "San Diego, CA",
      description: "Sustainable and organic landscaping solutions",
      features: ["Eco Certifications", "Organic Products", "Environmental Impact"],
      rating: 4.9
    },
    {
      name: "Quick Hedge Trimming",
      specialty: "Hedge & Shrub Care",
      location: "Atlanta, GA",
      description: "Professional hedge trimming and shrub maintenance",
      features: ["Before/After Gallery", "Trimming Schedule", "Plant Health Tips"],
      rating: 4.6
    },
    {
      name: "Winter Prep Landscapes",
      specialty: "Seasonal Preparation",
      location: "Chicago, IL",
      description: "Winterization and seasonal landscape preparation",
      features: ["Seasonal Checklist", "Weather Alerts", "Emergency Services"],
      rating: 4.8
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See What We've Built for Other Landscapers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every landscaping business is unique. Here are some examples of the custom websites 
            we've created for landscapers across different specialties and markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioSites.map((site, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{site.name}</h3>
                    <p className="text-green-600 font-medium">{site.specialty}</p>
                    <p className="text-gray-500 text-sm">{site.location}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{site.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{site.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {site.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="w-full bg-gray-100 text-gray-500 py-2 px-4 rounded-lg font-medium text-center">
                  Portfolio Example
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Your Business Could Be Next
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              These are real examples of what your landscaping website could look like. 
              Each site is custom-designed to match your business needs, local market, and specialty services.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Your Custom Design
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
