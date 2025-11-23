import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import ArtificialIntelligence from "./pages/ArtificialIntelligence";
import WebDevelopment from "./pages/WebDevelopment";
import UIUXDesign from "./pages/UIUXDesign";
import DevOps from "./pages/DevOps";
import BusinessAnalysis from "./pages/BusinessAnalysis";
import CMSDevelopment from "./pages/CMSDevelopment";
import ITSupportServices from "./pages/ITSupportServices";
import ProjectManagement from "./pages/ProjectManagement";
import QualityAssurance from "./pages/QualityAssurance";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/uiux-design" element={<UIUXDesign />} />
          <Route path="/devops" element={<DevOps />} />
          <Route path="/cms-development" element={<CMSDevelopment />} />
          <Route path="/it-support" element={<ITSupportServices />} />
          <Route path="/project-management" element={<ProjectManagement />} />
          <Route path="/quality-assurance" element={<QualityAssurance />} />
          <Route path="/business-analysis" element={<BusinessAnalysis />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
