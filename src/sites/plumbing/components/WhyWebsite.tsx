
import { Card, CardContent } from "@/components/ui/card";
import { Search, Users, TrendingUp, Clock } from "lucide-react";

const WhyWebsite = () => {
  const stats = [
    {
      icon: Search,
      number: "90%",
      text: "of people search online for plumbers",
      description: "Don't miss out on customers looking for your services"
    },
    {
      icon: Users,
      number: "3x",
      text: "more leads with a professional website",
      description: "Stand out from competitors without online presence"
    },
    {
      icon: TrendingUp,
      number: "40%",
      text: "increase in revenue for plumbers with websites",
      description: "Turn your website into a 24/7 lead generation machine"
    },
    {
      icon: Clock,
      number: "24/7",
      text: "availability for emergency bookings",
      description: "Capture urgent plumbing jobs even when you're busy"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Every Plumber Needs a Website
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your competitors are getting the jobs you should be getting. 
            Here's why a professional website is essential for your plumbing business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.text}</div>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Stop Losing Customers to the Competition
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              When someone needs a plumber, they search online first. If you don't have a website, 
              they're calling your competitors instead of you.
            </p>
            <div className="bg-white rounded-lg p-6 max-w-md mx-auto shadow-sm mb-8">
              <div className="text-left space-y-2">
                <div className="text-sm text-gray-500">Customer searches:</div>
                <div className="font-mono text-blue-600 bg-gray-50 p-2 rounded">"emergency plumber near me"</div>
                <div className="text-sm text-gray-500">Your competitor appears first ↑</div>
                <div className="text-sm font-medium text-red-600">You lose the job</div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-blue-800 font-medium mb-4">Ready to stop losing customers?</p>
              <a href="#growth-plan" className="inline-block">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  See Our Plans
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWebsite;
