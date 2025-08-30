
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mike Rodriguez",
      business: "Rodriguez Plumbing Services",
      location: "Phoenix, AZ",
      rating: 5,
      text: "Since getting my website, I've booked 40% more jobs. The emergency call button alone has brought in thousands in urgent repairs. Best investment I've made for my plumbing business.",
      result: "40% more bookings in 3 months"
    },
    {
      name: "Sarah Johnson",
      business: "Quick Fix Plumbing",
      location: "Denver, CO",
      rating: 5,
      text: "My website pays for itself every single month. Customers find me on Google now instead of just relying on word-of-mouth. The online booking feature saves me hours on the phone.",
      result: "Website pays for itself monthly"
    },
    {
      name: "Tom Wilson",
      business: "Wilson & Sons Plumbing",
      location: "Atlanta, GA",
      rating: 5,
      text: "I was skeptical about needing a website, but now I can't imagine running my business without it. The lead generation forms bring in steady work, and customers trust me more because I look professional online.",
      result: "Steady stream of new leads"
    },
    {
      name: "Lisa Chen",
      business: "Metro Plumbing Experts",
      location: "Seattle, WA",
      rating: 5,
      text: "The mobile-friendly design is perfect. Most of my emergency calls come from people searching on their phones. Having a website that works great on mobile has been a game-changer.",
      result: "Most emergency calls from mobile"
    },
    {
      name: "Dave Martinez",
      business: "24/7 Emergency Plumbing",
      location: "Houston, TX",
      rating: 5,
      text: "My competitors without websites are missing out big time. I get calls at all hours because my emergency contact info is right there on my site. It's like having a 24/7 receptionist.",
      result: "24/7 lead generation"
    },
    {
      name: "Jennifer Adams",
      business: "Adams Family Plumbing",
      location: "Orlando, FL",
      rating: 5,
      text: "The before/after photo gallery shows off my work beautifully. Customers see the quality before they even call. It's helped me win jobs over cheaper competitors because people see I do professional work.",
      result: "Winning jobs over cheaper competitors"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from Real Plumbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what plumbing business owners are saying 
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
                  <Quote className="h-8 w-8 text-blue-200 mb-2" />
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-blue-800">
                    💡 Result: {testimonial.result}
                  </p>
                </div>
                
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-blue-600 font-medium">{testimonial.business}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Hundreds of Successful Plumbers
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            These plumbers took action and invested in their business. Now they're getting more customers, 
            charging premium prices, and growing faster than their competitors.
          </p>
          <div className="flex justify-center gap-8 text-center mb-8">
            <div>
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Plumbing Websites Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">35%</div>
              <div className="text-sm text-gray-600">Average Revenue Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">4.9★</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
          <div className="border-t pt-6">
            <p className="text-blue-800 font-medium mb-4">Ready to join them?</p>
            <a href="#growth-plan" className="inline-block">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
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
