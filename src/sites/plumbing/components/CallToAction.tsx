import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Star } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get More Plumbing Jobs?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Stop losing customers to competitors with better websites. 
            Get your professional plumbing website and start booking more jobs today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Ready in 7 Days</h3>
              <p className="text-sm text-blue-100">Your website will be live and ready to bring in customers within one week</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Star className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Professional Design</h3>
              <p className="text-sm text-blue-100">Custom design that makes your plumbing business look trustworthy and professional</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Clock className="h-8 w-8 text-blue-300 mx-auto mb-3" />
              <h3 className="font-bold mb-2">24/7 Lead Generation</h3>
              <p className="text-sm text-blue-100">Your website works around the clock to bring in new customers</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">What You Get:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>Emergency call button prominently displayed</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>Service area maps and coverage zones</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>Online booking for non-emergency services</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>Customer review and testimonial sections</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>Before/after photo galleries</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>Mobile-optimized for smartphone users</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>Search engine optimization for local searches</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>Lead generation forms and contact options</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="#growth-plan">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 font-bold"
            >
              Get Your Website Now - Starting at $199/month
            </Button>
            </a>
          </div>

          <div className="text-center text-blue-100">
            <p className="mb-2">
              <strong>Don't wait.</strong> Every day without a website is money left on the table.
            </p>
            <p className="text-sm">
              Your competitors are already getting the customers you should be getting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
