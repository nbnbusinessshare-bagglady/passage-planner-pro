// FILE: src/pages/vendor/PartnerPortalLandingPage.tsx

import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Globe2,
  Handshake,
  MapPin,
  Megaphone,
  Sparkles,
  Users,
  Wand2,
} from "lucide-react";

const partnerTypes = [
  "Hotels & Resorts",
  "Excursion Providers",
  "Transportation Services",
  "Restaurants & Cafés",
  "Wedding & Event Vendors",
  "Wellness & Retreat Providers",
  "Tourism Boards",
  "Local Experience Creators",
];

const benefits = [
  {
    icon: Users,
    title: "Qualified Traveler Opportunities",
    text: "Connect with travelers, groups, retreats, weddings, and curated trip opportunities that match your services.",
  },
  {
    icon: MapPin,
    title: "Destination-Based Visibility",
    text: "Be organized by location, service type, and collaboration potential so Serene Passage can match you to the right travel experiences.",
  },
  {
    icon: Wand2,
    title: "AI-Assisted Package Development",
    text: "Future tools will help generate polished promotions, package ideas, timing options, and collaborative destination experiences.",
  },
  {
    icon: Megaphone,
    title: "Collaborative Marketing",
    text: "Participate in destination campaigns, featured experiences, group travel opportunities, and curated package promotions.",
  },
];

const howItWorks = [
  "Submit your business profile and service details.",
  "Serene Passage reviews your location, category, and collaboration fit.",
  "Your services are matched to travel opportunities, groups, retreats, weddings, or curated packages.",
  "Future AI tools help structure promotions, package ideas, and partner collaborations.",
];

export default function PartnerPortalLandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f3ec] via-[#f3edf1] to-[#e9ddbf] px-6 py-20 md:px-10 md:py-28">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#dcc79b] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dcc79b]/60 bg-white/70 px-4 py-2 text-sm font-medium text-[#6f6044] shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Serene Passage Partner Ecosystem
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[#2f2f2f] md:text-6xl">
              Partner with a travel brand built on confidence, connection, and
              care.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f575c]">
              Serene Passage International is building a luxury travel
              collaboration ecosystem where trusted destination partners,
              service providers, and experience creators work together to
              curate safer, smarter, and more meaningful travel experiences.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/vendor/submit"
                className="inline-flex items-center justify-center rounded-full bg-[#6f6044] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#5d5038]"
              >
                Request Partner Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                to="/vendor/login"
                className="inline-flex items-center justify-center rounded-full border border-[#d8cdd3] bg-white/70 px-6 py-3 text-sm font-semibold text-[#6f666b] shadow-sm transition hover:bg-white"
              >
                Existing Partner Login
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/60 p-6 shadow-xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9ddbf] text-[#6f6044]">
                  <Handshake className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#2f2f2f]">
                    Collaboration Over Transactions
                  </h2>
                  <p className="text-sm text-[#6f666b]">
                    Built for destination relationships.
                  </p>
                </div>
              </div>

              <p className="text-sm leading-7 text-[#5f575c]">
                Our goal is to connect trusted partners into curated travel
                experiences — from hotels and excursions to cafés,
                transportation, wellness, weddings, entertainment, and local
                destination services.
              </p>

              <div className="mt-6 grid gap-3">
                <div className="rounded-2xl bg-[#f8f3ec] p-4">
                  <p className="text-sm font-semibold text-[#2f2f2f]">
                    Categorized by service
                  </p>
                  <p className="mt-1 text-sm text-[#6f666b]">
                    So each partner receives relevant tools and opportunities.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f3edf1] p-4">
                  <p className="text-sm font-semibold text-[#2f2f2f]">
                    Organized by location
                  </p>
                  <p className="mt-1 text-sm text-[#6f666b]">
                    So destination packages can be built intelligently.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f8f3ec] p-4">
                  <p className="text-sm font-semibold text-[#2f2f2f]">
                    Enhanced by AI
                  </p>
                  <p className="mt-1 text-sm text-[#6f666b]">
                    So promotions, packages, and collaborations can move faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6f6044]">
              Who We Partner With
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2f2f2f] md:text-4xl">
              The full ecosystem behind memorable travel.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#6f666b]">
              Serene Passage values major travel providers and the local
              businesses that give each destination its personality, safety,
              hospitality, flavor, and emotional experience.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partnerTypes.map((type) => (
              <div
                key={type}
                className="rounded-3xl border border-[#e2dce1] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <Building2 className="mb-4 h-6 w-6 text-[#6f6044]" />
                <p className="font-semibold text-[#2f2f2f]">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8f3] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6f6044]">
              Partner Benefits
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2f2f2f] md:text-4xl">
              Designed to create opportunity before, during, and after the trip.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-[2rem] border border-[#eadfce] bg-white p-7 shadow-sm"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9ddbf] text-[#6f6044]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-[#2f2f2f]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#6f666b]">
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6f6044]">
              How Collaboration Works
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2f2f2f] md:text-4xl">
              From business profile to curated destination opportunity.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#6f666b]">
              The portal is being designed to classify each partner by business,
              service, location, and collaboration potential. This helps Serene
              Passage build smarter destination packages for travelers and
              better opportunities for partners.
            </p>
          </div>

          <div className="space-y-4">
            {howItWorks.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-3xl border border-[#e2dce1] bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6f6044] text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="pt-2 text-sm leading-7 text-[#5f575c]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2f2f2f] px-6 py-16 text-white md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-[#e9ddbf]">
              <Globe2 className="h-4 w-4" />
              Luxury Travel Collaboration Ecosystem
            </div>

            <h2 className="text-3xl font-semibold md:text-4xl">
              Built for partners who want to be part of better travel
              experiences.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-white/75">
              Serene Passage is serious about growing into a leading travel
              experience curation service for international travel. We are
              building relationships with the businesses that make destinations
              feel safer, richer, more connected, and more memorable.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6">
            <h3 className="text-xl font-semibold text-[#e9ddbf]">
              Future Portal Capabilities
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-white/75">
              <li>• Partner profile and onboarding storage</li>
              <li>• Service and destination categorization</li>
              <li>• Promotions and special offer submissions</li>
              <li>• Campaign and media upload requests</li>
              <li>• AI-assisted marketing and package creation</li>
              <li>• Collaborative destination package opportunities</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#e2dce1] bg-white p-8 text-center shadow-sm md:p-12">
          <h2 className="text-3xl font-semibold text-[#2f2f2f] md:text-4xl">
            Ready to explore partnership opportunities?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6f666b]">
            Share your business details so Serene Passage can learn where your
            services fit within future destination experiences, group travel,
            retreats, weddings, and curated packages.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/vendor/submit"
              className="inline-flex items-center justify-center rounded-full bg-[#6f6044] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#5d5038]"
            >
              Start Partner Submission
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#d8cdd3] bg-white px-6 py-3 text-sm font-semibold text-[#6f666b] shadow-sm transition hover:bg-[#f8f3ec]"
            >
              Contact Serene Passage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}