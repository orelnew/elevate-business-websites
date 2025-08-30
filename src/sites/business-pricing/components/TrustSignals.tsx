import { Shield, Award, Clock, CheckCircle } from "lucide-react";

const TrustSignals = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Landscapers Trust Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've helped hundreds of landscaping businesses grow their online presence with proven results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">30-Day</div>
            <div className="text-sm text-gray-600">Money-Back Guarantee</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">7-Day</div>
            <div className="text-sm text-gray-600">Delivery Time</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">4.8★</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">750+</div>
            <div className="text-sm text-gray-600">Websites Delivered</div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-green-100">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              "Best decision I made for my landscaping business!"
            </h3>
            <p className="text-gray-600 mb-4 italic">
              "My website has brought in over $8,000 in new business this year alone. 
              The investment paid for itself in the first month."
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                M
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-900">Maria Rodriguez</div>
                <div className="text-sm text-gray-600">Rodriguez Landscaping, Phoenix AZ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;