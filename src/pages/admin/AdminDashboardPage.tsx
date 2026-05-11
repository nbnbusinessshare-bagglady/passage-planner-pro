// FILE: src/pages/admin/AdminDashboardPage.tsx

import { useEffect, useMemo, useState } from "react";

import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  ClipboardList,
  FileSearch,
  FolderOpen,
  Globe2,
  Handshake,
  ImageUp,
  MailPlus,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Users,
  Wand2,
} from "lucide-react";

import { SectionHeader } from "@/components/vendor/VendorLayout";

const quickActions = [
  {
    title: "Create Partner Invite",
    description:
      "Capture a business contact, generate a private invite link, and prepare email/text follow-up workflows.",
    href: "/admin/invites/new",
    icon: MailPlus,
    label: "Open Invite System",
  },
  {
    title: "Saved Invite Queue",
    description:
      "Review drafted invites, sent invitations, pending follow-ups, and ecosystem onboarding progress.",
    href: "/admin/invites",
    icon: ClipboardList,
    label: "Open Invite Queue",
  },
  {
    title: "Partner Reviews",
    description:
      "Review partner submissions, destination services, collaboration interests, and verification readiness.",
    href: "/admin/review",
    icon: FileSearch,
    label: "Review Partners",
  },
  {
    title: "Media & Upload Records",
    description:
      "Review uploaded brochures, media assets, videos, menus, promotional materials, and destination content.",
    href: "/vendor/media",
    icon: ImageUp,
    label: "Review Media Assets",
  },
  {
    title: "Campaign Requests",
    description:
      "Review destination concepts, group travel ideas, promotions, retreats, and partnership opportunities.",
    href: "/vendor/campaigns",
    icon: Megaphone,
    label: "Review Campaigns",
  },
  {
    title: "Future AI Systems",
    description:
      "Prepare future AI-powered travel coordination, package generation, recommendation systems, and ecosystem intelligence.",
    href: "/vendor/ai-generator",
    icon: BrainCircuit,
    label: "Explore AI Layer",
  },
];

const ecosystemAreas = [
  {
    title: "Partner Ecosystem",
    description:
      "Hotels, excursions, transportation providers, wellness partners, restaurants, tourism boards, and destination collaborators.",
    icon: Handshake,
  },
  {
    title: "Traveler Experiences",
    description:
      "Curated destination experiences, group travel, destination weddings, retreats, luxury escapes, and hosted experiences.",
    icon: Globe2,
  },
  {
    title: "AI Collaboration Layer",
    description:
      "Future AI tools for package generation, ecosystem recommendations, pricing support, scheduling logic, and campaign creation.",
    icon: Wand2,
  },
];

const AdminDashboardPage = () => {
  const [inviteCount, setInviteCount] = useState(0);
  const [profileCount, setProfileCount] = useState(0);
  const [assetCount, setAssetCount] = useState(0);
  const [campaignCount, setCampaignCount] = useState(0);
  const [urgentCount, setUrgentCount] = useState(0);

  useEffect(() => {
    const invites = JSON.parse(
      localStorage.getItem("spi-partner-invites") || "[]"
    );

    const profiles = JSON.parse(
      localStorage.getItem("spi-partner-profiles") || "[]"
    );

    const assets = JSON.parse(
      localStorage.getItem("spi-partner-assets") || "[]"
    );

    const campaigns = JSON.parse(
      localStorage.getItem("spi-campaign-requests") || "[]"
    );

    const urgent = campaigns.filter(
      (item: { urgent?: boolean }) => item.urgent
    ).length;

    setInviteCount(invites.length);
    setProfileCount(profiles.length);
    setAssetCount(assets.length);
    setCampaignCount(campaigns.length);
    setUrgentCount(urgent);
  }, []);

  const stats = useMemo(
    () => [
      {
        label: "Invited Partners",
        value: inviteCount.toString(),
        note: "Invite queue records",
        icon: Users,
      },
      {
        label: "Partner Profiles",
        value: profileCount.toString(),
        note: "Submitted onboarding profiles",
        icon: ShieldCheck,
      },
      {
        label: "Uploaded Assets",
        value: assetCount.toString(),
        note: "Media & upload records",
        icon: FolderOpen,
      },
      {
        label: "Campaign Requests",
        value: campaignCount.toString(),
        note: "Collaboration opportunities",
        icon: Megaphone,
      },
      {
        label: "Urgent Reviews",
        value: urgentCount.toString(),
        note: "Priority requests",
        icon: AlertCircle,
      },
      {
        label: "Portal Activity",
        value: (
          inviteCount +
          profileCount +
          assetCount +
          campaignCount
        ).toString(),
        note: "Temporary ecosystem activity",
        icon: BarChart3,
      },
    ],
    [
      inviteCount,
      profileCount,
      assetCount,
      campaignCount,
      urgentCount,
    ]
  );

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Owner Back Office"
        title="Serene Passage Ecosystem Operations"
        description="Manage partner growth, destination collaboration, uploaded assets, campaign requests, and future AI-assisted ecosystem tools."
      />

      <section className="rounded-[2rem] border border-gold/20 bg-gradient-to-br from-[#f8f3ec] via-[#f5f0ea] to-[#f3edf1] p-6 shadow-sm md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-gold">
              <Sparkles className="h-4 w-4" />
              Ecosystem Control Center
            </div>

            <h1 className="font-display text-3xl text-card-foreground md:text-5xl leading-tight">
              Welcome to the Serene Passage Owner Console.
            </h1>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-foreground/70 md:text-base">
              This operational dashboard is designed to help Serene Passage
              manage destination relationships, partner onboarding,
              collaboration opportunities, uploaded assets, campaign requests,
              and future AI-powered travel ecosystem coordination.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-white/70 p-5">
            <BrainCircuit className="mb-3 text-gold" size={22} />

            <h3 className="font-display text-xl text-card-foreground">
              Future Aision Labs Infrastructure
            </h3>

            <p className="mt-2 text-sm leading-7 text-foreground/65">
              This platform is being designed as the foundation for future
              travel intelligence systems, package generation tools,
              ecosystem recommendation engines, and collaborative AI workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
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

              <p className="mt-2 text-xs text-foreground/50">
                {item.note}
              </p>
            </div>
          );
        })}
      </section>

      <section>
        <SectionHeader
          eyebrow="Quick Actions"
          title="Owner Workflow Tools"
          description="Manage invitations, onboarding, uploads, campaigns, and ecosystem collaboration from one operational workspace."
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {quickActions.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="text-primary" size={24} />
                </div>

                <h2 className="font-display text-2xl text-card-foreground">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-foreground/65">
                  {item.description}
                </p>

                <a
                  href={item.href}
                  className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
                >
                  {item.label}
                  <ArrowRight size={15} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Operational Ecosystem"
          title="Core System Areas"
          description="The Serene Passage ecosystem is evolving into a relationship-driven destination collaboration network."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {ecosystemAreas.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10">
                  <Icon className="text-gold" size={20} />
                </div>

                <h3 className="font-display text-xl text-card-foreground">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-foreground/65">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm md:p-8">
        <div className="flex items-start gap-4">
          <Bot className="mt-1 shrink-0 text-primary" size={26} />

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-foreground/55">
              Future AI Expansion
            </p>

            <h2 className="mt-2 font-display text-2xl text-card-foreground">
              AI collaboration systems will eventually operate here.
            </h2>

            <p className="mt-3 text-sm leading-7 text-foreground/65">
              Future systems may include AI-powered package creation,
              destination recommendations, traveler experience matching,
              campaign optimization, pricing intelligence, collaboration
              coordination, content generation, and ecosystem relationship
              analysis through Aision Labs infrastructure.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Travel Intelligence",
                "Package Builder",
                "Pricing Optimization",
                "Recommendation Engine",
                "Campaign Generation",
                "Ecosystem AI",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs text-gold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboardPage;