import React, { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ExternalLink, Star, Zap } from "lucide-react";

const ClientDemoCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;

    const autoScroll = setInterval(() => {
      api.scrollNext();
    }, 4000); // Scroll every 4 seconds

    return () => clearInterval(autoScroll);
  }, [api]);

  const clientSites = [
    {
      id: 1,
      image: "/lovable-uploads/e79e3218-4cf5-4d73-9126-cf2af29ae1a9.png",
      alt: "GreenSpace Landscaping - Create Your Dream Landscape",
      title: "GreenSpace Landscaping",
      location: "Austin, Texas",
      features: ["Dream Landscape Design", "Professional Services", "5-Star Rated"],
      rating: 5.0,
      link: "https://landscaping-client-1.lovable.app/",
    },
    {
      id: 2,
      image: "/lovable-uploads/00bb6f88-2277-4c84-8439-8d925a8a1904.png",
      alt: "Valley View Designs - Dream Landscape Creation",
      title: "Valley View Designs",
      location: "Los Angeles, California",
      features: ["Tropical Design", "Garden Oasis", "Premium Service"],
      rating: 4.9,
      link: "https://landscaping-client-6.lovable.app/",
    },
    {
      id: 3,
      image: "/lovable-uploads/4474feb1-b4a3-4a2b-9a0b-41013073a2d4.png",
      alt: "Urban Oasis Landscaping - Where Dreams Take Root",
      title: "Urban Oasis Landscaping",
      location: "Miami, Florida",
      features: ["Urban Landscapes", "Green Spaces", "Property Value Enhancement"],
      rating: 4.8,
      link: "https://landscaping-client-4.lovable.app/",
    },
    {
      id: 4,
      image: "/lovable-uploads/47b9869e-8fe7-485b-8a27-a1e698a7c6cc.png",
      alt: "Veridian Landworks - Transform Your Outdoor Space",
      title: "Veridian Landworks",
      location: "Phoenix, Arizona",
      features: ["Outdoor Transformation", "Pool Landscapes", "Event Promotion"],
      rating: 4.9,
      link: "https://landscaping-client-5.lovable.app/",
    },
    {
      id: 5,
      image: "/lovable-uploads/0e003295-79ad-47bb-9935-0c9768cab33d.png",
      alt: "LandscapeDesign - Professional Landscapers",
      title: "LandscapeDesign",
      location: "Denver, Colorado",
      features: ["Professional Design", "Property Enhancement", "Style Reflection"],
      rating: 5.0,
      link: "https://landscaping-client-3.lovable.app/",
    },
    {
      id: 6,
      image: "/lovable-uploads/22c94521-517c-4fe2-8d7d-b7277d05d39d.png",
      alt: "GreenScape Pro - Premium Landscaping",
      title: "GreenScape Pro",
      location: "Seattle, Washington",
      features: ["Premium Services", "Stunning Masterpieces", "Modern Design"],
      rating: 4.8,
      link: "https://landscaping-client-2.lovable.app/",
    },
    {
      id: 7,
      image: "/lovable-uploads/43625e49-562f-4e1c-b418-1609139fb7c0.png",
      alt: "Summit Landscaping - Grow Green, Live Better",
      title: "Summit Landscaping",
      location: "Portland, Oregon",
      features: ["Sustainable Paradise", "Portfolio Gallery", "15+ Years Experience"],
      rating: 4.9,
      link: "https://landscaping-client-7.lovable.app/",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-green-50 to-slate-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            Portfolio Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Websites That <span className="text-green-600">Convert Visitors</span>
            <br />Into Paying Customers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each website is crafted to generate leads, build trust, and showcase your landscaping expertise. 
            See how we've helped businesses like yours grow their customer base.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {clientSites.map((site) => (
              <CarouselItem
                key={site.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="group h-full">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full border border-white/50 backdrop-blur-sm group-hover:scale-[1.02] group-hover:-translate-y-2">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={site.image}
                        alt={site.alt}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=375&fit=crop&crop=center&auto=format";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      
                      {/* Hover overlay with link */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <a
                          href={site.link}
                          className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-green-50"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Live Site
                        </a>
                      </div>

                      {/* Rating badge */}
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold text-gray-800">{site.rating}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                          {site.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{site.location}</p>
                      </div>

                      {/* Features */}
                      <div className="space-y-2">
                        {site.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Bottom section */}
                      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-xs text-muted-foreground font-medium">
                          CASE STUDY
                        </span>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-xs text-green-600 font-medium">Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/50 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Your Professional Website?
            </h3>
            <p className="text-gray-600 mb-6">
              Join these successful landscaping businesses and start attracting more customers today.
            </p>
            <a
              href="#pricing-growth"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Start Your Project
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientDemoCarousel;