
import { Card, CardContent } from "@/components/ui/card";
import { Search, Users, TrendingUp, Calendar } from "lucide-react";

const WhyWebsite = () => {
  const stats = [
    {
      icon: Search,
      number: "85%",
      text: "of homeowners search online for landscapers",
      description: "Don't miss out on customers looking for your services"
    },
    {
      icon: Users,
      number: "4x",
      text: "more leads with a professional website",
      description: "Stand out from competitors without online presence"
    },
    {
      icon: TrendingUp,
      number: "55%",
      text: "increase in revenue for landscapers with websites",
      description: "Turn your website into a year-round lead generation machine"
    },
    {
      icon: Calendar,
      number: "365",
      text: "days a year for project bookings",
      description: "Capture seasonal jobs and maintenance contracts"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How a Professional Website Drives Revenue Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your competitors are booking the projects you should be getting. 
            Here's how a professional website transforms your landscaping business into a customer magnet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.text}</div>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-green-50 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Stop Losing High-Value Projects to Competitors
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              When homeowners need landscaping work, they research online first. Without a professional website, 
              they're hiring your competitors and you're missing out on thousands in revenue.
            </p>
            <div className="bg-white rounded-lg p-6 max-w-md mx-auto shadow-sm mb-8">
              <div className="text-left space-y-2">
                <div className="text-sm text-gray-500">Customer searches:</div>
                <div className="font-mono text-green-600 bg-gray-50 p-2 rounded">"landscaper near me"</div>
                <div className="text-sm text-gray-500">Your competitor appears first ↑</div>
                <div className="text-sm font-medium text-red-600">You lose the project</div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-green-800 font-medium mb-4">Ready to stop losing customers?</p>
              <a href="#pricing-growth" className="inline-block">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
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
