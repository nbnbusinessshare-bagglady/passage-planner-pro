// FILE: src/pages/vendor/VendorDashboardPage.tsx

import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CalendarHeart,
  CheckCircle2,
  Compass,
  Globe2,
  HandHeart,
  Handshake,
  Images,
  MapPin,
  Megaphone,
  Plus,
  ShieldCheck,
  Sparkles,
  UserRoundCog,
  Wand2,
} from "lucide-react";

import { SectionHeader } from "@/components/vendor/VendorLayout";
import dashboardHero from "@/assets/partner-portal/dashboard-private-hospitality-lounge.png";

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`rounded-2xl border border-border/60 bg-card p-6 shadow-sm ${className}`}>
    {children}
  </div>
);

const quickStart = [
  {
    title: "Complete Partner Profile",
    description:
      "Add your business type, service category, destination location, contacts, and collaboration interests.",
    icon: Building2,
    to: "/vendor/submit",
  },
  {
    title: "Submit Offers & Opportunities",
    description:
      "Share promotions, seasonal specials, group rates, destination packages, or special partner opportunities.",
    icon: Megaphone,
    to: "/vendor/promotions",
  },
  {
    title: "Upload Travel Assets",
    description:
      "Add photos, brochures, flyers, menus, rate sheets, videos, media kits, or destination materials.",
    icon: Images,
    to: "/vendor/media",
  },
  {
    title: "Explore AI Collaboration",
    description:
      "Use future AI tools to help shape promotions, package language, group experiences, and campaign ideas.",
    icon: Wand2,
    to: "/vendor/ai-generator",
  },
];

const collaborationAreas = [
  "Destination weddings",
  "Women’s retreats",
  "Luxury group travel",
  "Dining experiences",
  "Excursions and tours",
  "Transportation coordination",
  "Wellness experiences",
  "Entertainment and nightlife",
];

const comingSoon = [
  "AI Package Matrix Builder",
  "Partner Opportunity Matching",
  "Destination Collaboration Calendar",
  "Partner Analytics",
  "Featured Campaign Requests",
  "Customer Group Matching",
];

const setupSteps = [
  "Complete partner profile",
  "Upload media or brochures",
  "Add destination/service details",
  "Submit collaboration interests",
];

const VendorDashboardPage = () => {
  return (
    <div className="space-y-8">
      <section className="relative min-h-[430px] overflow-hidden rounded-3xl border border-border/60 bg-[hsl(0,0%,8%)] shadow-sm">
        <img
          src={dashboardHero}
          alt="Luxury hospitality lounge for Serene Passage partner collaboration"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />

        <div className="relative z-10 flex min-h-[430px] items-center p-6 md:p-10 lg:p-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-gold">
              Partner Ecosystem Suite
            </p>

            <h1 className="font-display text-3xl leading-tight text-cream md:text-5xl lg:text-6xl">
              Welcome to the Serene Passage Partner Ecosystem
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-cream/75 md:text-base">
              A relationship-driven workspace for trusted travel partners,
              destination vendors, hospitality brands, local experience
              providers, and service professionals helping Serene Passage curate
              travel with confidence, connection, and care.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/vendor/submit"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-gold px-5 text-sm font-semibold text-[hsl(0,0%,8%)] transition-all hover:bg-gold/90 active:scale-[0.98]"
              >
                <Plus size={16} />
                Complete Partner Profile
              </Link>

              <Link
                to="/vendor/ai-generator"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-gold/60 px-5 text-sm font-medium text-gold transition-all hover:bg-gold/10"
              >
                <Sparkles size={15} />
                Explore AI Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-gold/20 bg-gradient-to-br from-[#f8f3ec] via-[#f5f0ea] to-[#f3edf1]">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-gold shadow-sm">
              <ShieldCheck size={22} />
            </div>

            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-gold">
                Partner Setup Progress
              </p>

              <h2 className="font-display text-2xl text-card-foreground">
                Your onboarding profile is being prepared.
              </h2>

              <p className="mt-3 text-sm leading-7 text-foreground/70">
                The Serene Passage ecosystem uses partner profiles, destination
                data, uploads, and collaboration details to organize future
                travel opportunities, curated packages, and relationship-driven
                experiences.
              </p>

              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between text-xs text-foreground/55">
                  <span>Partner onboarding completion</span>
                  <span>25%</span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-white/70">
                  <div className="h-full w-1/4 rounded-full bg-gold" />
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Compass size={22} />
            </div>

            <div className="w-full">
              <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-primary">
                Recommended Next Steps
              </p>

              <h2 className="font-display text-2xl text-card-foreground">
                Complete your relationship profile.
              </h2>

              <div className="mt-5 space-y-3">
                {setupSteps.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/20 px-4 py-3"
                  >
                    <CheckCircle2 size={16} className="shrink-0 text-gold" />

                    <p className="text-sm text-foreground/75">{item}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/vendor/submit"
                className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
              >
                Continue Setup
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <SectionHeader
          eyebrow="Start Here"
          title="Build Your Partner Profile"
          description="The portal is being designed to organize partners by business type, service category, location, and collaboration potential so Serene Passage can match the right services to the right destination experiences."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {quickStart.map((item) => {
            const Icon = item.icon;

            return (
              <Link key={item.title} to={item.to}>
                <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon size={20} className="text-primary" />
                    </div>

                    <div>
                      <h3 className="font-display text-lg text-card-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-foreground/65">
                        {item.description}
                      </p>

                      <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        Open
                        <ArrowRight size={13} />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Ecosystem Intelligence"
          title="How Serene Passage Categorizes Partners"
          description="Each partner is organized by business type, service category, destination location, and collaboration opportunity. This is what allows the platform to eventually support smarter package building and AI-assisted destination coordination."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card>
            <Building2 className="mb-4 text-primary" size={24} />
            <h3 className="font-display text-lg text-card-foreground">
              Business Type
            </h3>
            <p className="mt-2 text-sm leading-6 text-foreground/65">
              Hotels, resorts, excursions, restaurants, transportation,
              weddings, entertainment, wellness, tourism boards, and local
              experience providers.
            </p>
          </Card>

          <Card>
            <Handshake className="mb-4 text-primary" size={24} />
            <h3 className="font-display text-lg text-card-foreground">
              Service Category
            </h3>
            <p className="mt-2 text-sm leading-6 text-foreground/65">
              The service category helps determine future portal features,
              package logic, promotional tools, and collaboration opportunities.
            </p>
          </Card>

          <Card>
            <MapPin className="mb-4 text-primary" size={24} />
            <h3 className="font-display text-lg text-card-foreground">
              Destination Location
            </h3>
            <p className="mt-2 text-sm leading-6 text-foreground/65">
              Partners are mapped by country, city, region, nearby hotels,
              destination zones, and local travel relevance.
            </p>
          </Card>
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Collaboration Path"
          title="How Opportunities Become Curated Experiences"
          description="The long-term goal is to help Serene Passage and its partners build intelligent destination experiences around real traveler needs, group schedules, events, weddings, retreats, and local opportunities."
        />

        <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
          {["Profile", "Opportunity", "Review", "Curate", "Feature"].map(
            (step) => (
              <Card key={step} className="text-center">
                <p className="font-display text-lg text-card-foreground">
                  {step}
                </p>
                <p className="mt-1 text-[11px] text-foreground/55">
                  Partner workflow
                </p>
              </Card>
            )
          )}
        </div>
      </section>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <section>
          <SectionHeader
            eyebrow="Destination Collaboration"
            title="Current Partnership Interests"
          />

          <div className="space-y-3">
            {collaborationAreas.map((item) => (
              <Card key={item}>
                <div className="flex items-center gap-3">
                  <HandHeart size={18} className="shrink-0 text-primary" />
                  <p className="text-sm text-foreground/75">{item}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Business Continuity"
            title="Relationship Protection"
            description="Serene Passage values long-term partner relationships. The portal will collect company-level and backup contact information so relationships are not lost when staff members change."
          />

          <Card>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start gap-3">
                <ShieldCheck size={20} className="mt-1 shrink-0 text-gold" />
                <div>
                  <h3 className="font-display text-lg text-card-foreground">
                    Verified Company-Level Information
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/65">
                    Business name, main phone, department, website, and
                    official company email help maintain relationship continuity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <UserRoundCog size={20} className="mt-1 shrink-0 text-primary" />
                <div>
                  <h3 className="font-display text-lg text-card-foreground">
                    Backup Contact Support
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/65">
                    Secondary contacts help protect access if the original
                    representative changes roles, leaves the company, or loses
                    email access.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>

      <section>
        <SectionHeader
          eyebrow="AI-Assisted Growth"
          title="Future Partner Intelligence Tools"
          description="These features are planned as the partner ecosystem grows. They are designed to help Serene Passage and its partners create better campaigns, smarter packages, and stronger destination experiences."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {comingSoon.map((item) => (
            <Card key={item}>
              <Sparkles size={18} className="mb-3 text-gold" />
              <h3 className="font-display text-base text-card-foreground">
                {item}
              </h3>
              <p className="mt-2 text-xs text-foreground/55">
                Planned ecosystem feature
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-gold/20 bg-gradient-to-br from-[#f8f3ec] via-[#f5f0ea] to-[#f3edf1] p-6 shadow-sm md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-gold">
              <CalendarHeart className="h-4 w-4" />
              Example Collaboration Scenario
            </div>

            <h2 className="font-display text-2xl text-card-foreground md:text-3xl">
              One group trip can create opportunities for many partners.
            </h2>

            <p className="mt-4 text-sm leading-7 text-foreground/70 md:text-base">
              When Serene Passage coordinates a destination wedding, retreat, or
              group trip, nearby partners may be considered for excursions,
              dining, transportation, wellness, entertainment, cultural
              experiences, and other curated additions.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-white/70 p-5">
            <Globe2 className="mb-3 text-primary" size={22} />
            <p className="text-sm leading-7 text-foreground/70">
              Future AI tools may help compare timing, group size, location,
              service capacity, pricing, and traveler preferences so
              collaborative packages can be built in a way that benefits the
              traveler, the partner, and Serene Passage.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VendorDashboardPage;