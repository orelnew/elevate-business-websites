
import { useEffect } from "react";
import Pricing from "../components/Pricing";

const Index = () => {
  useEffect(() => {
    // SEO: title, description, canonical
    const title = "Business Website Pricing | Professional Web Development Plans";
    document.title = title;

    const desc =
      "Compare business website plans, monthly pricing, setup fees, and included maintenance. Professional web development services for all business types.";
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
    canonical.href = window.location.origin;
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sr-only">
        <h1>Business Website Pricing</h1>
      </header>
      <main>
        <Pricing />
      </main>
    </div>
  );
};

export default Index;
