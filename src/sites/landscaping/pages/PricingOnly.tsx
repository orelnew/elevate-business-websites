import { useEffect } from "react";
import Pricing from "../components/Pricing";

const PricingOnly = () => {
  useEffect(() => {
    // SEO: title, description, canonical
    const title = "Landscaping Website Pricing | Plans & Setup";
    document.title = title;

    const desc =
      "Compare landscaping website plans, monthly pricing, setup fees, and included maintenance. Subscribe securely.";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = desc;

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/pricing`;
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sr-only">
        <h1>Landscaping Website Pricing</h1>
      </header>
      <main>
        <Pricing />
      </main>
    </div>
  );
};

export default PricingOnly;
