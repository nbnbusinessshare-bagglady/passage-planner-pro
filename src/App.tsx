// FILE: src/App.tsx

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
import GroupTripPage from "./pages/GroupTripPage";
import NotFound from "./pages/NotFound";

import VendorLoginPage from "./pages/vendor/VendorLoginPage";
import VendorDashboardPage from "./pages/vendor/VendorDashboardPage";
import VendorInvitePage from "./pages/vendor/VendorInvitePage";
import PartnerOnboardingPage from "./pages/vendor/PartnerOnboardingPage";
import PartnerInviteGatewayPage from "./pages/vendor/PartnerInviteGatewayPage";
import PartnerInterestPage from "./pages/vendor/PartnerInterestPage";
import PartnerJoinPage from "./pages/vendor/PartnerJoinPage";
import VendorSubmitPage from "./pages/vendor/VendorSubmitPage";
import AIGeneratorPage from "./pages/vendor/AIGeneratorPage";
import VendorStubPage from "./pages/vendor/VendorStubPage";
import MediaUploadsPage from "./pages/vendor/MediaUploadsPage";
import CampaignRequestsPage from "./pages/vendor/CampaignRequestsPage";
import SettingsPage from "./pages/vendor/SettingsPage";
import PartnerPortalLandingPage from "./pages/vendor/PartnerPortalLandingPage";

import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminInvitePage from "./pages/admin/AdminInvitePage";
import AdminReviewPage from "./pages/admin/AdminReviewPage";
import AdminInviteQueuePage from "./pages/admin/AdminInviteQueuePage";

import { VendorLayout } from "./components/vendor/VendorLayout";

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
            <Route path="/group-trips" element={<GroupTripPage />} />
            <Route path="/group-travel" element={<GroupTripPage />} />
            <Route path="/build-your-trip" element={<BuildYourTripPage />} />
            <Route path="/travel-deals" element={<TravelDealsPage />} />
            <Route path="/travel-info" element={<TravelInfoPage />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route path="/partner-portal" element={<PartnerPortalLandingPage />} />
            <Route path="/partner-onboarding" element={<PartnerOnboardingPage />} />
            <Route path="/partner-invite/:inviteSlug" element={<PartnerInviteGatewayPage />} />
            <Route path="/partner-join" element={<PartnerJoinPage />} />
            <Route path="/partner-interest" element={<PartnerInterestPage />} />
            <Route path="/vendor/login" element={<VendorLoginPage />} />

            <Route element={<VendorLayout />}>
              {/* Owner / Admin Back Office */}
              <Route path="/admin" element={<AdminDashboardPage />} />
              <Route path="/admin/invites/new" element={<AdminInvitePage />} />
              <Route path="/admin/review" element={<AdminReviewPage />} />
              <Route path="/admin/invites" element={<AdminInviteQueuePage />} />

              {/* Partner / Vendor Portal */}
              <Route path="/vendor" element={<VendorDashboardPage />} />
              <Route path="/vendor/invite" element={<VendorInvitePage />} />
              <Route path="/vendor/submit" element={<VendorSubmitPage />} />
              <Route path="/vendor/ai-generator" element={<AIGeneratorPage />} />
              <Route path="/vendor/events" element={<VendorStubPage />} />
              <Route path="/vendor/promotions" element={<VendorStubPage />} />
              <Route path="/vendor/media" element={<MediaUploadsPage />} />
              <Route path="/vendor/campaigns" element={<CampaignRequestsPage />} />
              <Route path="/vendor/relationships" element={<VendorStubPage />} />
              <Route path="/vendor/industry" element={<VendorStubPage />} />
              <Route path="/vendor/settings" element={<SettingsPage />} />
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