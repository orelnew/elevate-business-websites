import { useEffect } from "react";
import Pricing from "../components/Pricing";

const PricingOnly = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Plumber Website Pricing | Monthly Care Included";

    const ensureMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    ensureMeta(
      "description",
      "Transparent plumber website pricing. Monthly fee includes domain & hosting management, 24/7 monitoring, security updates, daily backups, and speed optimization."
    );

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${window.location.origin}/pricing`);

    // Basic JSON-LD for service/offers
    const ld = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Plumber Website Plans",
      serviceType: "Website design and hosting for plumbers",
      areaServed: "Worldwide",
      offers: [
        { "@type": "Offer", name: "Start", price: "39", priceCurrency: "USD", url: `${window.location.origin}/pricing` },
        { "@type": "Offer", name: "Growth", price: "49", priceCurrency: "USD", url: `${window.location.origin}/pricing#growth-plan` },
        { "@type": "Offer", name: "Pro", price: "79", priceCurrency: "USD", url: `${window.location.origin}/pricing` }
      ]
    } as const;

    const scriptId = "pricing-jsonld";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(ld);

    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <main>
      <h1 className="sr-only">Plumber Website Pricing – Growth Plan Highlight</h1>
      <Pricing />
    </main>
  );
};

export default PricingOnly;
