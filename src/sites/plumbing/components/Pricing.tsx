
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Check, Star, Phone, Mail, Info } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$199",
      description: "Perfect for small landscaping businesses just getting started online",
      features: [
        "3 Professional Pages",
        "Mobile Responsive Design",
        "Photo Gallery (Basic)",
        "Service Information",
        "Basic Contact Form",
        "Customer Testimonials",
        "Full Phone & WhatsApp Support",
      ],
      popular: false,
      color: "blue",
      link: "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-59592865UU178600LNCDIRII"
    },
    {
      name: "Pro",
      price: "$299",
      description: "Ideal for established landscapers ready to expand their online presence",
      features: [
        "10 Professional Pages",
        "Mobile Responsive Design",
        "Enhanced Photo Galleries",
        "Service Information",
        "Advanced Contact Forms",
        "Customer Testimonials",
        "Full Phone & WhatsApp Support",
        { text: "Before/After Gallery", isNew: true },
        { text: "Blog with Articles", isNew: true },
        { text: "SEO Optimization for Key Keywords", isNew: true },
        { text: "Social Media Integration (Facebook/Instagram)", isNew: true },
        { text: "Project Portfolio Showcase", isNew: true },
        { text: "Service Area Mapping", isNew: true },
        { text: "Booking System", isNew: true },
        { text: "Service Pricing Calculator", isNew: true },
        { text: "WhatsApp Chat Button", isNew: true },
      ],
      popular: true,
      color: "purple",
      link: "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-13G403336J0364513NCDI4DY"
    },
    {
      name: "Enterprise",
      price: "$599",
      description: "For large landscaping companies that need comprehensive online solutions",
      features: [
        "30 Professional Pages",
        "Mobile Responsive Design",
        "Unlimited Photo Galleries",
        "Service Information",
        "Advanced Contact Forms",
        "Advanced Testimonial System",
        "Full Phone & WhatsApp Support",
        "Before/After Gallery",
        "Blog with Articles",
        "Premium SEO Optimization for Key Keywords",
        "Social Media Integration (Facebook/Instagram)",
        "Project Portfolio Showcase",
        "Service Area Mapping",
        "Booking System",
        "Service Pricing Calculator",
        "WhatsApp Chat Button",
        { text: "Monthly SEO Boost with Network Backlinks + Report", isNew: true },
        { text: "Instagram & Facebook Content Posting (4 posts/week)", isNew: true },
      ],
      popular: false,
      color: "blue",
      link: "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-42U36669AC403554WNCDI5KI"
    }
  ];

  const getColorClasses = (color: string, popular: boolean) => {
    if (color === "purple" && popular) {
      return {
        border: "border-purple-500",
        bg: "bg-gradient-to-br from-purple-50 to-purple-100",
        button: "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg hover:shadow-purple-500/25",
        accent: "text-purple-600",
        newTag: "bg-purple-100 text-purple-700"
      };
    }
    
    if (popular) {
      return {
        border: "border-blue-500",
        bg: "bg-gradient-to-br from-blue-50 to-blue-100",
        button: "bg-blue-600 hover:bg-blue-700",
        accent: "text-blue-600",
        newTag: "bg-blue-100 text-blue-700"
      };
    }
    
    return {
      border: "border-blue-200",
      bg: "bg-white",
      button: "bg-blue-600 hover:bg-blue-700",
      accent: "text-blue-600",
      newTag: "bg-blue-100 text-blue-700"
    };
  };

  const renderFeature = (feature: string | { text: string; isNew: boolean }, index: number, colors: any) => {
    if (typeof feature === 'string') {
      return (
        <div key={index} className="flex items-center gap-3">
          <Check className="h-5 w-5 text-blue-500 flex-shrink-0" />
          <span className="text-gray-600">{feature}</span>
        </div>
      );
    }

    return (
      <div key={index} className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Check className="h-5 w-5 text-blue-500 flex-shrink-0" />
          <span className="text-gray-600">{feature.text}</span>
        </div>
        {feature.isNew && (
          <span className={`${colors.newTag} text-xs font-medium px-2 py-1 rounded-full flex-shrink-0`}>
            New
          </span>
        )}
      </div>
    );
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing for Landscapers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your business size and goals. All plans include our 
            30-day money-back guarantee and the same professional quality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color, plan.popular);
            
            return (
              <Card key={index} id={plan.name.toLowerCase() === 'pro' ? 'growth-plan' : undefined} className={`border-2 ${colors.border} ${colors.bg} shadow-xl hover:shadow-2xl transition-all duration-300 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="h-4 w-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-gray-900 mb-1">
                        {plan.price}<span className="text-lg text-gray-500">/month</span>
                      </div>
                    </div>
                    <div className="flex justify-center mb-6">
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <button type="button" className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 hover:bg-blue-100">
                            <Info className="h-3 w-3" />
                            Includes care package
                          </button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-72 text-sm">
                          <p className="font-semibold mb-2">Your care package includes:</p>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            <li>Domain & hosting management</li>
                            <li>24/7 uptime monitoring</li>
                            <li>Software & security updates</li>
                            <li>Daily backups</li>
                            <li>Speed optimization</li>
                          </ul>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-gray-900 border-b pb-2">What's Included:</h4>
                    {plan.features.map((feature, idx) => renderFeature(feature, idx, colors))}
                  </div>

                  <a target="_blank" href={`${plan.link}`}>
                    <button className={`w-full ${colors.button} text-white py-3 px-6 rounded-lg font-semibold transition-colors`}>
                      Choose {plan.name} Plan
                    </button>
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Support Information */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Included Support & Maintenance</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Email & WhatsApp Support</h4>
              <p className="text-gray-600 text-sm">24-48 hour response time for all support requests</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Technical Maintenance</h4>
              <p className="text-gray-600 text-sm">Security updates, bug fixes, and plugin maintenance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Website Speed Optimization</h4>
              <p className="text-gray-600 text-sm">Ongoing performance monitoring and optimization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
