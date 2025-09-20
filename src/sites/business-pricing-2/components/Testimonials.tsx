
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Garcia",
      business: "Green Valley Landscaping",
      location: "Phoenix, AZ",
      rating: 5,
      text: "Since getting my website, I've booked 60% more landscaping projects. The photo gallery showcases my garden transformations beautifully. Homeowners see my work and immediately want to hire me.",
      result: "60% more projects in 4 months"
    },
    {
      name: "David Thompson",
      business: "Thompson Lawn Care",
      location: "Denver, CO",
      rating: 5,
      text: "My website pays for itself every single month. Customers find me on Google now for lawn maintenance. The online booking system has filled my calendar with recurring clients.",
      result: "Website pays for itself monthly"
    },
    {
      name: "Jennifer Martinez",
      business: "Elite Garden Design",
      location: "Atlanta, GA",
      rating: 5,
      text: "I was skeptical about needing a website, but now I can't imagine running my landscaping business without it. The lead generation forms bring in high-value design projects, and customers trust me more because I look professional online.",
      result: "Premium design project leads"
    },
    {
      name: "Robert Chen",
      business: "Evergreen Tree Services",
      location: "Seattle, WA",
      rating: 5,
      text: "The mobile-friendly design is perfect for my tree service business. Most customers call me after finding my website on their phones while looking up at problem trees. The before/after photos seal the deal.",
      result: "Mobile traffic converts to jobs"
    },
    {
      name: "Carlos Rodriguez",
      business: "Seasonal Landscapes Co",
      location: "Houston, TX",
      rating: 5,
      text: "My competitors without websites are missing out on the seasonal rush. I get booked solid every spring because homeowners find my seasonal service packages online. It's transformed my business.",
      result: "Booked solid every season"
    },
    {
      name: "Amy Wilson",
      business: "Wilson Family Gardens",
      location: "Orlando, FL",
      rating: 5,
      text: "The garden portfolio section shows off my landscape designs beautifully. Customers see the quality and creativity before they even call. I've won contracts over much larger landscaping companies.",
      result: "Winning over larger competitors"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from Real Landscapers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what landscaping business owners are saying 
            about their new websites and the impact on their business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-green-200 mb-2" />
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
                </div>
                
                <div className="bg-green-50 p-3 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-green-800">
                    🌿 Result: {testimonial.result}
                  </p>
                </div>
                
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-green-600 font-medium">{testimonial.business}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Hundreds of Successful Landscapers
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            These landscapers took action and invested in their business. Now they're getting more customers, 
            charging premium prices, and growing faster than their competitors.
          </p>
          <div className="flex justify-center gap-8 text-center mb-8">
            <div>
              <div className="text-3xl font-bold text-green-600">750+</div>
              <div className="text-sm text-gray-600">Landscaping Websites Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">45%</div>
              <div className="text-sm text-gray-600">Average Revenue Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">4.8★</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
          <div className="border-t pt-6">
            <p className="text-green-800 font-medium mb-4">Ready to join them?</p>
            <a href="#pricing-growth" className="inline-block">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Get Started Today
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
