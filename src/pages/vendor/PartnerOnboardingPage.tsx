// FILE: src/pages/vendor/PartnerOnboardingPage.tsx

import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileText,
  Globe2,
  Handshake,
  Images,
  Languages,
  LayoutDashboard,
  MailCheck,
  MapPin,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Wand2,
} from "lucide-react";

const steps = [
  {
    icon: MailCheck,
    title: "Account Setup",
    text: "Use the email connected to your invitation or partner registration to create secure access and verify your account.",
  },
  {
    icon: Building2,
    title: "Complete Your Partner Profile",
    text: "Add business name, public brand name, contact details, service category, location, and areas served.",
  },
  {
    icon: MapPin,
    title: "Add Destination Details",
    text: "Share where your business operates, nearby hotels or service zones, and any other locations you serve.",
  },
  {
    icon: Images,
    title: "Upload Media & Documents",
    text: "Upload images, menus, brochures, rate sheets, flyers, licensing details, or other supporting materials.",
  },
  {
    icon: MessageSquareText,
    title: "Communicate with Serene Passage",
    text: "Use messages, notes, attachments, urgent review flags, and revision requests as the portal expands.",
  },
  {
    icon: Wand2,
    title: "Use AI Collaboration Tools",
    text: "Future tools may help create Serene Passage-aligned offers, promotional copy, campaign ideas, and package concepts.",
  },
];

const portalSections = [
  "Partner Dashboard",
  "Partner Profile",
  "Media & Assets",
  "Collaborations",
  "Promotions & Packages",
  "Destination Events",
  "Partner Relationships",
  "Destination Intelligence",
  "AI Collaboration Studio",
  "Settings",
];

export default function PartnerOnboardingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f3ec] via-[#f3edf1] to-[#e9ddbf] px-6 py-20 md:px-10 md:py-28">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#dcc79b] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dcc79b]/60 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6f6044] shadow-sm backdrop-blur">
              <Handshake className="h-4 w-4" />
              Partner Onboarding
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-xs font-medium text-[#6f666b] shadow-sm backdrop-blur">
              <Languages className="h-4 w-4" />
              Language / Region
              <select className="bg-transparent text-xs outline-none">
                <option>English</option>
                <option>Español</option>
                <option>Français</option>
                <option>Português</option>
              </select>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[#2f2f2f] md:text-6xl">
                Welcome to the Serene Passage Partner Ecosystem.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f575c]">
                This onboarding overview explains how invited partners and
                self-registered partner members use the portal, complete their
                profile, upload materials, communicate with Serene Passage, and
                participate in future destination collaboration opportunities.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/vendor/submit"
                  className="inline-flex items-center justify-center rounded-full bg-[#6f6044] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#5d5038]"
                >
                  Continue to Profile Setup
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  to="/partner-join"
                  className="inline-flex items-center justify-center rounded-full border border-[#d8cdd3] bg-white/75 px-6 py-3 text-sm font-semibold text-[#6f666b] shadow-sm transition hover:bg-white"
                >
                  Join Without Invite
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white/65 p-6 shadow-xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
                <Sparkles className="mb-4 h-8 w-8 text-[#6f6044]" />

                <h2 className="text-2xl font-semibold text-[#2f2f2f]">
                  What this portal is designed to do
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#6f666b]">
                  The Partner Portal is being developed as a private
                  collaboration space where Serene Passage can organize trusted
                  businesses by service, location, travel relevance, media,
                  offers, and destination opportunities.
                </p>

                <div className="mt-6 rounded-2xl bg-[#f8f3ec] p-4">
                  <p className="text-sm leading-6 text-[#6f666b]">
                    Each partner may use different portal sections depending on
                    their industry. A resort, café, wedding vendor, excursion
                    provider, and transportation company may not need the same
                    tools — the system will eventually guide each partner to the
                    most relevant areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6f6044]">
              Onboarding Flow
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#2f2f2f] md:text-4xl">
              From account setup to collaboration readiness.
            </h2>

            <p className="mt-4 text-base leading-7 text-[#6f666b]">
              The onboarding process is designed to feel clear and polished, not
              like a formal application. Serene Passage collects the details
              needed to understand your business, confirm legitimacy, and match
              you to the right destination opportunities.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="rounded-[2rem] border border-[#e2dce1] bg-white p-6 shadow-sm"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9ddbf] text-[#6f6044]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-[#2f2f2f]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#6f666b]">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8f3] px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6f6044]">
              Portal Sections
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#2f2f2f] md:text-4xl">
              Not every partner uses every tool.
            </h2>

            <p className="mt-4 text-base leading-7 text-[#6f666b]">
              Each business will eventually see or prioritize the areas that fit
              their service category. A destination wedding partner may use
              collaboration and events tools. A restaurant may focus on group
              dining offers. A transportation provider may focus on locations,
              capacity, and pickup zones.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {portalSections.map((section) => (
              <div
                key={section}
                className="flex items-center gap-3 rounded-2xl border border-[#e2dce1] bg-white p-4 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#6f6044]" />

                <p className="text-sm font-medium text-[#2f2f2f]">
                  {section}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-[#e2dce1] bg-white p-6 shadow-sm">
            <ShieldCheck className="mb-4 h-7 w-7 text-[#6f6044]" />

            <h3 className="text-xl font-semibold text-[#2f2f2f]">
              Business Confidence
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#6f666b]">
              Serene Passage may review business names, addresses, websites,
              public profiles, uploaded materials, and digital footprint to help
              determine partner fit and confidence level.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#e2dce1] bg-white p-6 shadow-sm">
            <FileText className="mb-4 h-7 w-7 text-[#6f6044]" />

            <h3 className="text-xl font-semibold text-[#2f2f2f]">
              Documents & Media
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#6f666b]">
              Partners may upload media, brochures, menus, flyers, service
              details, licenses, destination documents, or other helpful
              materials.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#e2dce1] bg-white p-6 shadow-sm">
            <Globe2 className="mb-4 h-7 w-7 text-[#6f6044]" />

            <h3 className="text-xl font-semibold text-[#2f2f2f]">
              International Access
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#6f666b]">
              The portal is being designed with international partners in mind,
              including future language support and flexible location-based
              business information.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#2f2f2f] px-6 py-16 text-white md:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#e9ddbf]">
              <LayoutDashboard className="h-4 w-4" />
              Ready to continue?
            </div>

            <h2 className="text-3xl font-semibold md:text-4xl">
              Complete your profile to help Serene Passage understand where you
              fit in the travel ecosystem.
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70">
              Once your profile is complete, the portal can better organize your
              business by service category, location, collaboration potential,
              and future destination opportunities.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6">
            <h3 className="text-xl font-semibold text-[#e9ddbf]">
              Continue to the next step
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/70">
              Profile setup will include business details, contact information,
              service category, locations served, media/documents, and
              collaboration information.
            </p>

            <Link
              to="/vendor/submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#e9ddbf] px-6 py-3 text-sm font-semibold text-[#2f2f2f] transition hover:bg-[#dcc79b]"
            >
              Continue to Profile Setup
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}