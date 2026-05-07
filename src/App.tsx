import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import HomePage from "./pages/HomePage";
import WomensRetreatsPage from "./pages/WomensRetreatsPage";
import BuildYourTripPage from "./pages/BuildYourTripPage";
import TravelDealsPage from "./pages/TravelDealsPage";
import TravelInfoPage from "./pages/TravelInfoPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import VendorLoginPage from "./pages/vendor/VendorLoginPage";
import VendorDashboardPage from "./pages/vendor/VendorDashboardPage";
import VendorSubmitPage from "./pages/vendor/VendorSubmitPage";
import AIGeneratorPage from "./pages/vendor/AIGeneratorPage";
import AdminReviewPage from "./pages/admin/AdminReviewPage";
import { VendorLayout } from "./components/vendor/VendorLayout";
import VendorStubPage from "./pages/vendor/VendorStubPage";
import MediaUploadsPage from "./pages/vendor/MediaUploadsPage";
import CampaignRequestsPage from "./pages/vendor/CampaignRequestsPage";
import SettingsPage from "./pages/vendor/SettingsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/womens-retreats" element={<WomensRetreatsPage />} />
            <Route path="/build-your-trip" element={<BuildYourTripPage />} />
            <Route path="/travel-deals" element={<TravelDealsPage />} />
            <Route path="/travel-info" element={<TravelInfoPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/vendor/login" element={<VendorLoginPage />} />
            <Route element={<VendorLayout />}>
              <Route path="/vendor" element={<VendorDashboardPage />} />
              <Route path="/vendor/submit" element={<VendorSubmitPage />} />
              <Route path="/vendor/ai-generator" element={<AIGeneratorPage />} />
              <Route path="/vendor/events" element={<VendorStubPage />} />
              <Route path="/vendor/promotions" element={<VendorStubPage />} />
              <Route path="/vendor/media" element={<MediaUploadsPage />} />
              <Route path="/vendor/campaigns" element={<CampaignRequestsPage />} />
              <Route path="/vendor/settings" element={<SettingsPage />} />
              <Route path="/admin/review" element={<AdminReviewPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
