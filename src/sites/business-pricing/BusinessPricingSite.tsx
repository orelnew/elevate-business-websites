import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PurchaseSuccessful from "./pages/PurchaseSuccessful";
import Privacy from "./pages/Privacy";
import PricingOnly from "./pages/PricingOnly";

const queryClient = new QueryClient();

const BusinessPricingSite = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/purchase-successful" element={<PurchaseSuccessful />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/pricing" element={<PricingOnly />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default BusinessPricingSite;