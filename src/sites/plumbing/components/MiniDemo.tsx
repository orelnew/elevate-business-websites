
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Star, Clock, Wrench, Droplets } from "lucide-react";

const MiniDemo = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See What Your Website Could Look Like
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This is a mini preview of what we build for plumbing businesses. 
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
                  reliableplumbingpro.com
                </div>
              </div>
            </div>

            {/* Mock Website Content */}
            <div className="bg-white rounded-b-lg overflow-hidden">
              {/* Header */}
              <div className="bg-blue-600 text-white p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <Wrench className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Reliable Plumbing Pro</h3>
                      <p className="text-blue-100 text-sm">Licensed & Insured</p>
                    </div>
                  </div>
                  <Button className="bg-red-500 hover:bg-red-600 text-white">
                    <Phone className="h-4 w-4 mr-2" />
                    Emergency Call
                  </Button>
                </div>
                
                <div className="text-center">
                  <h1 className="text-3xl font-bold mb-2">24/7 Emergency Plumbing Services</h1>
                  <p className="text-blue-100 mb-4">Fast, Reliable Service Across the Metro Area</p>
                  <div className="flex justify-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>24/7 Available</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Same Day Service</span>
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
                      <Droplets className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h3 className="font-semibold mb-1">Emergency Repairs</h3>
                      <p className="text-sm text-gray-600">Burst pipes, leaks, clogs</p>
                      <Button size="sm" className="mt-2 w-full">Get Help Now</Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-gray-200">
                    <CardContent className="p-4 text-center">
                      <Wrench className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h3 className="font-semibold mb-1">Water Heater Service</h3>
                      <p className="text-sm text-gray-600">Installation & repair</p>
                      <Button size="sm" variant="outline" className="mt-2 w-full">Schedule Service</Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-gray-200">
                    <CardContent className="p-4 text-center">
                      <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h3 className="font-semibold mb-1">Drain Cleaning</h3>
                      <p className="text-sm text-gray-600">Professional cleaning</p>
                      <Button size="sm" variant="outline" className="mt-2 w-full">Book Now</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gray-50 p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Need a Plumber Right Now?</h3>
                <p className="text-gray-600 mb-4">Call us for immediate assistance or schedule a service online</p>
                <div className="flex gap-3 justify-center">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Phone className="h-4 w-4 mr-2" />
                    (555) 123-PIPE
                  </Button>
                  <Button variant="outline">Schedule Online</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              This is just a preview. Your website will be fully customized with your business information, 
              branding, and specific services.
            </p>
            <a href="#growth-plan" className="inline-block">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Your Custom Plumbing Website
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniDemo;
