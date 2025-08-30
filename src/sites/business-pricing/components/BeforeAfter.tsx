import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp } from "lucide-react";

const BeforeAfter = () => {
  const transformations = [
    {
      id: 1,
      clientName: "Green Valley Landscaping",
      location: "Austin, TX",
      before: {
        image: "/lovable-uploads/f74691e0-bd0e-4e07-9c9b-88e13a26a785.png",
        description: "Outdated blue website with poor user experience"
      },
      after: {
        image: "/lovable-uploads/076b35c0-4914-45c0-91ad-069530c0a19d.png",
        description: "Professional showcase highlighting their expertise with stunning portfolio"
      },
      results: "185% increase in online inquiries",
      timeframe: "3 months"
    },
    {
      id: 2,
      clientName: "Riverside Garden Design",
      location: "Denver, CO",
      before: {
        image: "/lovable-uploads/c762b660-33fa-4b91-b90d-cc3ee2685daa.png",
        description: "Basic template design lacking visual appeal"
      },
      after: {
        image: "/lovable-uploads/f90026d1-d80d-4c87-aad1-a9f118a48437.png",
        description: "Modern, service-focused design that converts visitors to customers"
      },
      results: "220% more project bookings",
      timeframe: "2 months"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-green-50/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-green-200 text-green-800 bg-green-50">
            Real Transformations
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From Invisible to 
            <span className="text-green-600"> Irresistible</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we transform outdated, generic websites into powerful customer magnets 
            that showcase your expertise and drive real business results.
          </p>
        </div>

        <div className="space-y-16">
          {transformations.map((transformation, index) => (
            <Card key={transformation.id} className="overflow-hidden border-0 shadow-2xl bg-white">
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Before/After Images */}
                  <div className="space-y-8">
                    {/* Before */}
                    <div className="relative">
                      <div className="absolute -top-4 left-4 z-10">
                        <Badge variant="destructive" className="bg-red-500">
                          BEFORE
                        </Badge>
                      </div>
                      <div className="relative overflow-hidden rounded-lg border-4 border-red-200">
                        <img 
                          src={transformation.before.image}
                          alt="Before website transformation"
                          className="w-full h-48 object-cover grayscale"
                        />
                        <div className="absolute inset-0 bg-red-900/20"></div>
                      </div>
                      <p className="text-sm text-red-600 mt-2 font-medium">
                        {transformation.before.description}
                      </p>
                    </div>

                    <div className="flex justify-center">
                      <ArrowRight className="w-8 h-8 text-green-600" />
                    </div>

                    {/* After */}
                    <div className="relative">
                      <div className="absolute -top-4 left-4 z-10">
                        <Badge className="bg-green-600">
                          AFTER
                        </Badge>
                      </div>
                      <div className="relative overflow-hidden rounded-lg border-4 border-green-200 shadow-lg">
                        <img 
                          src={transformation.after.image}
                          alt="After website transformation"
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-green-500/10"></div>
                      </div>
                      <p className="text-sm text-green-600 mt-2 font-medium">
                        {transformation.after.description}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {transformation.clientName}
                      </h3>
                      <p className="text-gray-600 mb-4">{transformation.location}</p>
                    </div>

                    <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-green-800">Results Achieved</span>
                      </div>
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        {transformation.results}
                      </div>
                      <div className="text-sm text-green-700">
                        in just {transformation.timeframe}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                      <span className="ml-2 text-gray-600 font-medium">
                        Client satisfaction: Outstanding
                      </span>
                    </div>

                    <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700">
                      "The new website completely transformed our business. We went from struggling 
                      to find clients to having more work than we can handle."
                    </blockquote>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready for Your Website Transformation?
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of landscaping businesses that have transformed their online presence 
              and dramatically increased their customer base.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
              Start Your Transformation Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;