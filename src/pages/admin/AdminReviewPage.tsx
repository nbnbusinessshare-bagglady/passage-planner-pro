// FILE: src/pages/admin/AdminReviewPage.tsx

import { useEffect, useMemo, useState } from "react";

import {
  AlertCircle,
  BarChart3,
  Check,
  Eye,
  FileImage,
  FileSearch,
  FileText,
  FileVideo,
  Globe2,
  MailQuestion,
  Megaphone,
  MousePointerClick,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UploadCloud,
  UserPlus,
  Users,
  Wand2,
} from "lucide-react";

import { SectionHeader, StatusBadge } from "@/components/vendor/VendorLayout";

type PartnerProfile = {
  legalBusinessName?: string;
  publicBusinessName?: string;
  businessType?: string;
  serviceCategory?: string;
  country?: string;
  cityRegion?: string;
  groupCapacity?: string;
  businessOverview?: string;
  primaryContactName?: string;
  primaryContactTitle?: string;
  primaryContactEmail?: string;
  primaryContactPhone?: string;
  collaborationInterests?: string[];
  submissionStatus?: "Draft" | "Submitted";
  savedAt?: string;
};

type AssetRecord = {
  assetName: string;
  category: string;
  assetType: string;
  externalLink: string;
  notes: string;
  status: string;
  createdAt: string;
};

type CampaignRequest = {
  title: string;
  partner: string;
  category: string;
  destination: string;
  campaignType: string;
  proposedDates: string;
  groupSize: string;
  notes: string;
  aiIdeas: string;
  status: string;
  urgent: boolean;
  createdAt: string;
};

const analytics = [
  { label: "Website Sessions", value: "—", note: "Connect GA4" },
  { label: "Top Traffic Source", value: "—", note: "GA4 acquisition" },
  { label: "Traveler Leads", value: "—", note: "Formspree/Supabase" },
  { label: "Portal Interactions", value: "—", note: "Future event tracking" },
];

const AdminReviewPage = () => {
  const [profiles, setProfiles] = useState<PartnerProfile[]>([]);
  const [assets, setAssets] = useState<AssetRecord[]>([]);
  const [campaigns, setCampaigns] = useState<CampaignRequest[]>([]);

  useEffect(() => {
    const savedProfiles = JSON.parse(
      localStorage.getItem("spi-partner-profiles") || "[]"
    );

    const savedAssets = JSON.parse(
      localStorage.getItem("spi-partner-assets") || "[]"
    );

    const savedCampaigns = JSON.parse(
      localStorage.getItem("spi-campaign-requests") || "[]"
    );

    setProfiles(savedProfiles.reverse());
    setAssets(savedAssets.reverse());
    setCampaigns(savedCampaigns.reverse());
  }, []);

  const stats = useMemo(() => {
    const submittedProfiles = profiles.filter(
      (item) => item.submissionStatus === "Submitted"
    ).length;

    const urgentCampaigns = campaigns.filter(
      (item) => item.urgent
    ).length;

    return [
      {
        label: "Partner Profiles",
        value: profiles.length.toString(),
        icon: UserPlus,
      },
      {
        label: "Asset Records",
        value: assets.length.toString(),
        icon: UploadCloud,
      },
      {
        label: "Campaign Requests",
        value: campaigns.length.toString(),
        icon: Megaphone,
      },
      {
        label: "Urgent Reviews",
        value: urgentCampaigns.toString(),
        icon: AlertCircle,
      },
      {
        label: "Submitted Profiles",
        value: submittedProfiles.toString(),
        icon: ShieldCheck,
      },
    ];
  }, [profiles, assets, campaigns]);

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Owner Console"
        title="Admin Review & Ecosystem Operations"
        description="Review partners, media assets, campaign requests, collaboration opportunities, and future ecosystem activity."
      />

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm"
            >
              <Icon className="mb-3 text-primary" size={22} />

              <p className="text-xs uppercase tracking-wider text-foreground/60">
                {item.label}
              </p>

              <p className="mt-2 font-display text-3xl text-card-foreground">
                {item.value}
              </p>
            </div>
          );
        })}
      </section>

      <section className="rounded-[2rem] border border-gold/20 bg-gradient-to-br from-[#f8f3ec] via-[#f5f0ea] to-[#f3edf1] p-6 shadow-sm md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-gold">
              <BarChart3 className="h-4 w-4" />
              Ecosystem Operations Center
            </div>

            <h2 className="font-display text-2xl text-card-foreground md:text-3xl">
              Serene Passage relationship management lives here.
            </h2>

            <p className="mt-4 text-sm leading-7 text-foreground/70 md:text-base">
              This dashboard is evolving into the operational center for
              partner onboarding, campaign reviews, destination opportunities,
              uploads, collaboration approvals, analytics, and future AI-assisted
              travel ecosystem coordination.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-white/70 p-5">
            <Sparkles className="mb-3 text-gold" size={22} />

            <h3 className="font-display text-lg text-card-foreground">
              Future AI Ecosystem Layer
            </h3>

            <p className="mt-2 text-sm leading-6 text-foreground/65">
              Future AI systems may help organize partners, identify destination
              opportunities, assist with package logic, optimize timing, and
              coordinate collaboration recommendations.
            </p>
          </div>
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Analytics Preview"
          title="Website & Ecosystem Metrics"
          description="Placeholder analytics until GA4, Supabase, event tracking, and backend systems are connected."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {analytics.map((item, index) => {
            const Icon =
              index === 0
                ? Users
                : index === 1
                  ? TrendingUp
                  : index === 2
                    ? MailQuestion
                    : MousePointerClick;

            return (
              <div
                key={item.label}
                className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm"
              >
                <Icon className="mb-3 text-gold" size={22} />

                <p className="text-xs uppercase tracking-wider text-foreground/60">
                  {item.label}
                </p>

                <p className="mt-2 font-display text-3xl text-card-foreground">
                  {item.value}
                </p>

                <p className="mt-2 text-xs text-foreground/55">
                  {item.note}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Partner Review"
          title="Submitted Partner Profiles"
          description="Review partner onboarding submissions, destination services, contacts, and collaboration readiness."
        />

        {profiles.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-border bg-muted/20 p-10 text-center">
            <ShieldCheck className="mx-auto mb-4 text-primary" size={32} />

            <h3 className="font-display text-2xl text-card-foreground">
              No partner profiles submitted yet.
            </h3>
          </div>
        ) : (
          <div className="space-y-5">
            {profiles.map((item, index) => (
              <article
                key={`${item.publicBusinessName}-${index}`}
                className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr]">
                  <div className="flex min-h-[260px] flex-col justify-between bg-gradient-to-br from-lavender/30 via-cream to-rose/20 p-6">
                    <div>
                      <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-gold">
                        {item.submissionStatus || "Draft"}
                      </p>

                      <h3 className="font-display text-2xl leading-tight text-card-foreground">
                        {item.publicBusinessName ||
                          item.legalBusinessName ||
                          "Unnamed Business"}
                      </h3>

                      <p className="mt-2 text-sm text-foreground/70">
                        {item.cityRegion || "Destination Region"},{" "}
                        {item.country || "Country"}
                      </p>

                      <div className="mt-5 space-y-2 text-sm text-foreground/65">
                        <p>
                          <span className="font-medium text-card-foreground">
                            Type:
                          </span>{" "}
                          {item.businessType || "—"}
                        </p>

                        <p>
                          <span className="font-medium text-card-foreground">
                            Category:
                          </span>{" "}
                          {item.serviceCategory || "—"}
                        </p>

                        <p>
                          <span className="font-medium text-card-foreground">
                            Capacity:
                          </span>{" "}
                          {item.groupCapacity || "—"}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-[11px] text-foreground/60">
                      Saved:{" "}
                      {item.savedAt
                        ? new Date(item.savedAt).toLocaleString()
                        : "—"}
                    </p>
                  </div>

                  <div className="space-y-5 p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-2xl text-card-foreground">
                          Business Overview
                        </h3>

                        <p className="mt-3 max-w-4xl text-sm leading-7 text-foreground/75">
                          {item.businessOverview ||
                            "No overview provided yet."}
                        </p>
                      </div>

                      <StatusBadge
                        status={
                          item.submissionStatus === "Submitted"
                            ? "Submitted"
                            : "Needs Revision"
                        }
                      />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.collaborationInterests?.map((interest) => (
                        <span
                          key={interest}
                          className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs text-gold"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <button className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-card px-4 text-xs font-medium transition-colors hover:bg-muted">
                        <Eye size={13} />
                        View Profile
                      </button>

                      <button className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-card px-4 text-xs font-medium transition-colors hover:bg-muted">
                        <RotateCcw size={13} />
                        Request Info
                      </button>

                      <button className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-sage/40 px-4 text-xs font-medium text-foreground transition-colors hover:bg-sage/60">
                        <Check size={13} />
                        Mark Verified
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section>
        <SectionHeader
          eyebrow="Asset Reviews"
          title="Submitted Media & Upload Records"
          description="Review uploaded media references, brochures, destination materials, and collaboration assets."
        />

        {assets.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-border bg-muted/20 p-10 text-center">
            <UploadCloud className="mx-auto mb-4 text-primary" size={32} />

            <h3 className="font-display text-2xl text-card-foreground">
              No asset records submitted yet.
            </h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {assets.map((asset, index) => (
              <div
                key={`${asset.assetName}-${index}`}
                className="rounded-[2rem] border border-border/60 bg-card shadow-sm overflow-hidden"
              >
                <div className="aspect-[4/2] bg-gradient-to-br from-lavender/30 via-background to-sage/20 flex items-center justify-center">
                  {asset.assetType.includes("MP4") ? (
                    <FileVideo size={42} className="text-foreground/40" />
                  ) : asset.assetType.includes("PDF") ? (
                    <FileText size={42} className="text-foreground/40" />
                  ) : (
                    <FileImage size={42} className="text-foreground/40" />
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-gold">
                        {asset.category}
                      </p>

                      <h3 className="mt-2 font-display text-xl text-card-foreground">
                        {asset.assetName}
                      </h3>
                    </div>

                    <StatusBadge
                      status={
                        asset.status as
                          | "Submitted"
                          | "Reviewed"
                          | "Curated"
                          | "Approved"
                      }
                    />
                  </div>

                  <p className="mt-4 text-sm leading-7 text-foreground/65">
                    {asset.notes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <SectionHeader
          eyebrow="Campaign Requests"
          title="Collaboration & Experience Proposals"
          description="Review destination ideas, group experiences, package concepts, and urgent partnership opportunities."
        />

        {campaigns.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-border bg-muted/20 p-10 text-center">
            <Megaphone className="mx-auto mb-4 text-primary" size={32} />

            <h3 className="font-display text-2xl text-card-foreground">
              No collaboration requests submitted yet.
            </h3>
          </div>
        ) : (
          <div className="space-y-4">
            {campaigns.map((campaign, index) => (
              <div
                key={`${campaign.title}-${index}`}
                className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-gold">
                      {campaign.partner}
                    </p>

                    <h3 className="mt-2 font-display text-2xl text-card-foreground">
                      {campaign.title}
                    </h3>

                    <p className="mt-2 text-sm text-foreground/60">
                      {campaign.destination}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    {campaign.urgent && (
                      <div className="inline-flex items-center gap-2 rounded-full bg-rose/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-rose-700">
                        <AlertCircle className="h-3.5 w-3.5" />
                        Urgent Review
                      </div>
                    )}

                    <StatusBadge
                      status={
                        campaign.status as
                          | "Draft"
                          | "Submitted"
                          | "Reviewed"
                          | "Curated"
                          | "Approved"
                          | "Featured Experience"
                      }
                    />
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-foreground/70">
                  {campaign.notes}
                </p>

                {campaign.aiIdeas && (
                  <div className="mt-5 rounded-2xl border border-gold/20 bg-gold/5 p-4">
                    <div className="flex items-start gap-3">
                      <Wand2
                        size={18}
                        className="mt-1 shrink-0 text-gold"
                      />

                      <div>
                        <p className="text-xs uppercase tracking-wide text-gold">
                          Future AI Collaboration Notes
                        </p>

                        <p className="mt-2 text-sm leading-7 text-foreground/70">
                          {campaign.aiIdeas}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default AdminReviewPage;