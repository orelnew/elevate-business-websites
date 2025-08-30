import { Button } from "@/components/ui/button";
import { Wrench, Phone, Clock, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Get More Plumbing Jobs with a 
                <span className="text-blue-600"> Professional Website</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Stop losing customers to competitors with better online presence. 
                Get a custom plumbing website that brings in more leads and grows your business.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">24/7 Emergency Booking</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Service Area Maps</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Customer Reviews</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#growth-plan" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-lg text-white flex items-center justify-center">
                Get Your Website Now
              </a>
            </div>

            <div className="flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <span>Ready in 7 days</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <span>Free consultation</span>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Wrench className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">24/7 Emergency Plumbing</h3>
                      <p className="text-gray-600">Fast, Reliable Service</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Drain Cleaning</span>
                      <Button size="sm" className="bg-red-500 hover:bg-red-600">Emergency</Button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Water Heater Repair</span>
                      <Button size="sm" variant="outline">Book Now</Button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Pipe Installation</span>
                      <Button size="sm" variant="outline">Get Quote</Button>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-green-700">Available Now</span>
                    </div>
                    <p className="text-sm text-gray-600">Licensed & Insured • 5+ Years Experience</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-300 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
