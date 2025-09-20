import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Check, Star, Phone, Mail, Info, Target, TrendingUp, Crown } from "lucide-react";

const Pricing = () => {
const plans = [
    {
      name: "The Essential",
      headline: "Your First Customer Acquisition System",
      price: "$149",
      description: "Stop losing customers to competitors with better websites",
      target: "Perfect for new businesses or those tired of missed opportunities",
      valueBundles: [
        {
          name: "Professional Foundation",
          description: "3 conversion-focused pages + mobile-first design that works on every device",
          icon: Target,
          isNew: false
        },
        {
          name: "Trust & Authority Builder",
          description: "Customer testimonials + photo gallery that proves your quality",
          icon: Check,
          isNew: false
        },
        {
          name: "Lead Capture System", 
          description: "Contact forms + WhatsApp integration that turns visitors into customers",
          icon: TrendingUp,
          isNew: false
        }
      ],
      popular: false,
      color: "green",
      link: "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-59592865UU178600LNCDIRII"
    },
    {
      name: "The Revenue Engine",
      headline: "Your 24/7 Sales Machine That Never Sleeps",
      price: "$299", 
      description: "Dominate your local market and book customers on autopilot",
      target: "Perfect for established businesses ready to scale beyond word-of-mouth",
      valueBundles: [
        {
          name: "Professional Foundation",
          description: "10 pages + mobile-first design + enhanced galleries that work on every device",
          icon: Target,
          isNew: false
        },
        {
          name: "Trust & Authority Builder",
          description: "Advanced testimonials + before/after galleries + portfolio showcase that proves your expertise",
          icon: Check,
          isNew: false
        },
        {
          name: "Lead Capture System", 
          description: "Advanced booking system + lead capture pop-ups + service calculator that converts visitors instantly",
          icon: TrendingUp,
          isNew: false
        },
        {
          name: "Local Market Domination",
          description: "SEO optimization + service area mapping + social media integration that gets you found first",
          icon: Crown,
          isNew: true
        },
        {
          name: "Content & Blog Platform",
          description: "Professional blog + content management that positions you as the industry expert",
          icon: Star,
          isNew: true
        }
      ],
      popular: true,
      color: "purple", 
      link: "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-13G403336J0364513NCDI4DY"
    },
    {
      name: "The Market Dominator",
      headline: "Your Complete Business Growth Operating System",
      price: "$999",
      description: "Become the undisputed leader in your market",
      target: "Perfect for ambitious businesses ready to capture every opportunity in their area",
      valueBundles: [
        {
          name: "Professional Foundation",
          description: "30 pages + unlimited galleries + mobile-first design that works on every device",
          icon: Target,
          isNew: false
        },
        {
          name: "Trust & Authority Builder",
          description: "Advanced testimonial system + unlimited galleries + portfolio showcase that proves your expertise",
          icon: Check,
          isNew: false
        },
        {
          name: "Lead Capture System", 
          description: "Advanced booking + lead capture + pricing calculator that converts every visitor type",
          icon: TrendingUp,
          isNew: false
        },
        {
          name: "Local Market Domination",
          description: "Premium SEO + monthly backlink campaigns + reports that keep you ranking #1",
          icon: Crown,
          isNew: false
        },
        {
          name: "Content & Blog Platform",
          description: "Professional blog + content management that positions you as the industry expert",
          icon: Star,
          isNew: false
        },
        {
          name: "Social Media Authority",
          description: "4 posts/week + Google My Business management that keeps you top-of-mind everywhere",
          icon: Mail,
          isNew: true
        },
        {
          name: "Unlimited Growth Platform",
          description: "Unlimited page creation + on-demand additions that grow with your business",
          icon: Info,
          isNew: true
        }
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
    
    return planName === "The Essential" ? basicIncluded : fullIncluded;
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
            Stop Losing Customers to Better Websites
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Every day without a professional website, you're handing customers to your competitors. Choose the system that turns your website into your #1 employee.
          </p>
        </div>

        {/* Irresistible Guarantee */}
        <div className="bg-gradient-to-r from-emerald-100 to-green-50 rounded-2xl p-8 border border-emerald-200 mb-16">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-emerald-900 mb-2">🛡️ The "Love It or Leave It" Guarantee</h3>
          </div>
          <div className="grid grid-cols-1 gap-6 text-lg max-w-5xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="h-5 w-5 text-white" />
              </div>
              <span className="text-emerald-900">You pay $0 until you're completely satisfied with your website</span>
            </div>
          </div>
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
                    <p className="text-sm text-gray-500 mb-4">{plan.target}</p>
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

                  <div className="space-y-6 mb-8">
                    <h4 className="font-semibold text-gray-900 border-b pb-2">Your Complete Value Stack:</h4>
                    {plan.valueBundles.map((bundle, idx) => {
                      const IconComponent = bundle.icon;
                      return (
                        <div key={idx} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <IconComponent className="h-4 w-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h5 className="font-semibold text-gray-900">{bundle.name}</h5>
                                {bundle.isNew && (
                                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded-full">
                                    NEW
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-600">{bundle.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <a target="_blank" href={`${plan.link}`}>
                    <button className={`w-full ${colors.button} text-white py-4 px-6 rounded-lg font-semibold transition-colors text-lg`}>
                      Get {plan.name} Now
                    </button>
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Results-Focused Support Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your Success is Our Success</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Always Available Support</h4>
              <p className="text-gray-600 text-sm">24-48 hour response time. We're in this together.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Hands-Off Maintenance</h4>
              <p className="text-gray-600 text-sm">We handle all the technical stuff so you can focus on customers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Performance Optimization</h4>
              <p className="text-gray-600 text-sm">Your site stays fast, secure, and converting at peak performance</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Every Day You Wait, Competitors Win
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Your next customer is searching right now. Will they find you... or your competitor?
          </p>
          <a href="#pricing-growth" className="bg-emerald-600 hover:bg-emerald-700 text-white text-xl px-10 py-4 rounded-lg font-semibold transition-colors inline-block">
            Stop Losing Customers Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;