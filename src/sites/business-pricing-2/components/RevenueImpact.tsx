import { DollarSign, TrendingUp, Phone, Users } from "lucide-react";

const RevenueImpact = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-green-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute transform rotate-12 -top-10 -right-10 w-96 h-96 border border-white rounded-full"></div>
        <div className="absolute transform -rotate-12 -bottom-10 -left-10 w-80 h-80 border border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Revenue Impact of Professional Web Presence
          </h2>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Real data from landscaping businesses that invested in professional websites
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <DollarSign className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">$28K</div>
            <div className="text-green-100 text-sm">Average first-year revenue increase</div>
          </div>
          
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Phone className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">180%</div>
            <div className="text-green-100 text-sm">More customer calls per month</div>
          </div>
          
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <TrendingUp className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">65%</div>
            <div className="text-green-100 text-sm">Higher project close rate</div>
          </div>
          
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">9/10</div>
            <div className="text-green-100 text-sm">Customers research online first</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            "My website paid for itself in just 2 months"
          </h3>
          <p className="text-green-100 text-lg mb-6 italic">
            "I spent $588 on my website and it brought in over $18,000 in new business the first year. 
            Homeowners see my professional photos and call me instead of shopping around."
          </p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
              D
            </div>
            <div className="text-left">
              <div className="font-semibold">David Chen</div>
              <div className="text-green-200">Chen's Premium Landscaping, Seattle</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueImpact;