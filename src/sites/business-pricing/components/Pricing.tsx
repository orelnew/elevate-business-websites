
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Check, Star, Phone, Mail, Info } from "lucide-react";

const Pricing = () => {
const plans = [
    {
      name: "Essential",
      price: "$149",
      description: "Perfect for small businesses just getting started online",
      pages: 1,
      features: [
        "3 Professional Pages",
        "Mobile Responsive Design",
        "Photo Gallery (Basic)",
        "Business Information",
        "Basic Contact Form",
        "Customer Testimonials",
        "Full Phone & WhatsApp Support",
      ],
      popular: false,
      color: "green",
      link: "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-59592865UU178600LNCDIRII"
    },
    {
      name: "Pro",
      price: "$299",
      description: "Ideal for established businesses ready to expand their online presence",
      pages: 3,
      features: [
        "10 Professional Pages",
        "Mobile Responsive Design",
        "Enhanced Photo Galleries",
        "Business Information",
        "Advanced Contact Forms",
        "Customer Testimonials",
        "Full Phone & WhatsApp Support",
        "Before/After Gallery|New",
        "Blog with Articles|New",
        "SEO Optimization for Key Keywords|New",
        "Social Media Integration (Facebook/Instagram)|New",
        "Project Portfolio Showcase|New",
        "Service Area Mapping|New",
        "Booking System|New",
        "Service Pricing Calculator|New",
        "WhatsApp Chat Button|New",
      ],
      popular: true,
      color: "purple",
      link: "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-13G403336J0364513NCDI4DY"
    },
    {
      name: "Growth Partner",
      price: "$999",
      description: "For large businesses that need comprehensive online solutions",
      pages: 10,
      features: [
        "30 Professional Pages",
        "Mobile Responsive Design",
        "Unlimited Photo Galleries",
        "Business Information",
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
        "Monthly SEO Boost with Network Backlinks + Report",
        "Instagram & Facebook Content Posting (4 posts/week)",
        "Google My Business Optimization & Management|New",
      ],
      popular: false,
      color: "green",
      link: "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-42U36669AC403554WNCDI5KI"
    }
  ];

  const getMonthlyIncluded = (planName: string) => {
    const basicIncluded = [
      "Domain & hosting management",
      "24/7 uptime monitoring",
      "Software & security updates",
    ];
    
    const fullIncluded = [
      "Domain & hosting management",
      "24/7 uptime monitoring",
      "Software & security updates",
      "Daily backups",
      "Speed optimization",
    ];
    
    return planName === "Essential" ? basicIncluded : fullIncluded;
  };

  const getColorClasses = (color: string, popular: boolean) => {
    if (color === "purple" && popular) {
      return {
        border: "border-amber-500",
        bg: "bg-gradient-to-br from-amber-50 to-yellow-100",
        button: "bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 shadow-lg hover:shadow-amber-500/25",
        accent: "text-amber-600"
      };
    }
    
    if (popular) {
      return {
        border: "border-amber-500",
        bg: "bg-gradient-to-br from-amber-50 to-yellow-100",
        button: "bg-amber-600 hover:bg-amber-700",
        accent: "text-amber-600"
      };
    }
    
    return {
      border: "border-green-200",
      bg: "bg-white",
      button: "bg-green-600 hover:bg-green-700",
      accent: "text-green-600"
    };
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-white to-green-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple Pricing for Business Websites
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include everything you need to start getting more customers online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color, plan.popular);
            
            return (
              <Card key={index} id={plan.popular ? "pricing-growth" : undefined} className={`border-2 ${colors.border} ${colors.bg} shadow-xl hover:shadow-2xl transition-all duration-300 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
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
                          <button className="inline-flex items-center gap-1.5 text-xs text-gray-600 underline decoration-dotted underline-offset-2" aria-label="What's included in the monthly fee">
                            <Info className="h-3.5 w-3.5 text-gray-500" />
                            What's included monthly
                          </button>
                        </HoverCardTrigger>
                        <HoverCardContent align="center" className="w-72">
                          <div className="space-y-2">
                            {getMonthlyIncluded(plan.name).map((item, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span className="text-sm text-gray-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-gray-900 border-b pb-2">What's Included:</h4>
                    {plan.features.map((feature, idx) => {
                      const [featureText, isNew] = feature.split("|");
                      return (
                        <div key={idx} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600 flex-1">{featureText}</span>
                          {isNew && (
                            <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded-full">
                              New
                            </span>
                          )}
                        </div>
                      );
                    })}
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
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Email & WhatsApp Support</h4>
            <p className="text-gray-600 text-sm">24-48 hour response time for all support requests</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Technical Maintenance</h4>
            <p className="text-gray-600 text-sm">Security updates, bug fixes, and plugin maintenance</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
