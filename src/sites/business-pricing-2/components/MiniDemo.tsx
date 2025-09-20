
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Star, Trees, Flower, Scissors, TreePine } from "lucide-react";

const MiniDemo = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See What Your Website Could Look Like
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This is a mini preview of what we build for landscaping businesses. 
            Your website will be customized with your branding, services, and contact information.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 p-8 rounded-2xl shadow-2xl">
            {/* Mock Browser Bar */}
            <div className="bg-gray-200 rounded-t-lg p-3 mb-0">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="ml-4 bg-white px-3 py-1 rounded text-sm text-gray-600">
                  premiumlandscapingpro.com
                </div>
              </div>
            </div>

            {/* Mock Website Content */}
            <div className="bg-white rounded-b-lg overflow-hidden">
              {/* Header */}
              <div className="bg-green-600 text-white p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <Trees className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Premium Landscaping Pro</h3>
                      <p className="text-green-100 text-sm">Licensed & Insured</p>
                    </div>
                  </div>
                  <Button className="bg-green-500 hover:bg-green-400 text-white">
                    <Phone className="h-4 w-4 mr-2" />
                    Get Quote
                  </Button>
                </div>
                
                <div className="text-center">
                  <h1 className="text-3xl font-bold mb-2">Professional Landscaping Services</h1>
                  <p className="text-green-100 mb-4">Transform Your Outdoor Space Year-Round</p>
                  <div className="flex justify-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Trees className="h-4 w-4" />
                      <span>Full Service</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Local Area</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      <span>5-Star Rated</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border border-gray-200">
                    <CardContent className="p-4 text-center">
                      <Scissors className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h3 className="font-semibold mb-1">Lawn Maintenance</h3>
                      <p className="text-sm text-gray-600">Mowing, trimming, care</p>
                      <Button size="sm" className="mt-2 w-full bg-green-600 hover:bg-green-700">Schedule</Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-gray-200">
                    <CardContent className="p-4 text-center">
                      <Flower className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h3 className="font-semibold mb-1">Garden Design</h3>
                      <p className="text-sm text-gray-600">Custom garden planning</p>
                      <Button size="sm" variant="outline" className="mt-2 w-full">Get Quote</Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-gray-200">
                    <CardContent className="p-4 text-center">
                      <TreePine className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h3 className="font-semibold mb-1">Tree Services</h3>
                      <p className="text-sm text-gray-600">Trimming & removal</p>
                      <Button size="sm" variant="outline" className="mt-2 w-full">Book Now</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gray-50 p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Transform Your Yard?</h3>
                <p className="text-gray-600 mb-4">Get a free consultation and estimate for your landscaping project</p>
                <div className="flex gap-3 justify-center">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Phone className="h-4 w-4 mr-2" />
                    (555) 123-LAWN
                  </Button>
                  <Button variant="outline">View Gallery</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              This is just a preview. Your website will be fully customized with your business information, 
              branding, and specific landscaping services.
            </p>
            <a href="#pricing-growth" className="inline-block">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Get Your Custom Landscaping Website
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniDemo;
