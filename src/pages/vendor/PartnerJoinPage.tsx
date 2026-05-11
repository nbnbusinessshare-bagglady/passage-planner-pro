// FILE: src/pages/vendor/PartnerJoinPage.tsx

import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe2,
  Handshake,
  Languages,
  MapPin,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  UserPlus,
} from "lucide-react";

const partnerTypes = [
  "Hotels, resorts, villas, and boutique stays",
  "Excursion, tour, and destination activity providers",
  "Restaurants, cafés, chefs, and group dining experiences",
  "Transportation, airport transfer, limo, and private driver services",
  "Destination wedding, event, and celebration vendors",
  "Wellness, spa, retreat, and restoration experience providers",
  "Entertainment, nightlife, cultural, and local experience businesses",
  "Local shops, community vendors, guides, and destination support services",
];

const profileDetails = [
  "Business name and public/brand name",
  "Business type checkbox, such as LLC, corporation, partnership, sole proprietor, independent vendor, or other",
  "Contact name, phone, email, website, and social media links",
  "Business address, city, state/province/parish/region, postal code, and country",
  "Primary business category and service category",
  "Other locations, areas, hotels, resorts, or regions served",
  "Business overview, services offered, and how you may fit into destination experiences",
  "Optional uploads such as documents, media, menus, flyers, licenses, brochures, or service materials",
];

export default function PartnerJoinPage() {
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
              <UserPlus className="h-4 w-4" />
              Join the Partner Ecosystem
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
                Join as a destination experience partner.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f575c]">
                If your business supports travel, hospitality, events, dining,
                transportation, culture, safety, wellness, or destination
                experiences, you may create a partner account even if you did
                not receive a direct invitation from Serene Passage.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/vendor/submit"
                  className="inline-flex items-center justify-center rounded-full bg-[#6f6044] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#5d5038]"
                >
                  Create Partner Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  to="/partner-interest"
                  className="inline-flex items-center justify-center rounded-full border border-[#d8cdd3] bg-white/75 px-6 py-3 text-sm font-semibold text-[#6f666b] shadow-sm transition hover:bg-white"
                >
                  Not Sure Where You Fit?
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white/65 p-6 shadow-xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
                <Handshake className="mb-4 h-8 w-8 text-[#6f6044]" />

                <h2 className="text-2xl font-semibold text-[#2f2f2f]">
                  Self-registered partner member
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#6f666b]">
                  Accounts created without an invitation will be marked
                  internally as self-registered partner members. This simply
                  helps Serene Passage understand how the relationship began and
                  review your business details, services, location, and
                  collaboration potential.
                </p>

                <div className="mt-6 rounded-2xl bg-[#f8f3ec] p-4">
                  <p className="text-sm leading-6 text-[#6f666b]">
                    Once your profile is complete, Serene Passage can review
                    your business information, destination fit, service areas,
                    documents, digital presence, and potential travel
                    collaboration opportunities.
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
              Who This Is For
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#2f2f2f] md:text-4xl">
              Businesses that help shape real destination experiences.
            </h2>

            <p className="mt-4 text-base leading-7 text-[#6f666b]">
              Serene Passage values both established travel brands and local
              destination businesses that help travelers experience a place with
              confidence, connection, and care.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {partnerTypes.map((type) => (
              <div
                key={type}
                className="flex items-start gap-3 rounded-[2rem] border border-[#e2dce1] bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#6f6044]" />

                <p className="text-sm leading-7 text-[#5f575c]">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8f3] px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6f6044]">
              What You’ll Share
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#2f2f2f] md:text-4xl">
              Business-friendly information for review and collaboration.
            </h2>

            <p className="mt-4 text-base leading-7 text-[#6f666b]">
              This is not meant to feel like a formal application. The goal is
              to help Serene Passage understand your business, verify your
              presence where possible, and identify how you may fit into
              destination experiences.
            </p>
          </div>

          <div className="grid gap-3">
            {profileDetails.map((detail) => (
              <div
                key={detail}
                className="rounded-2xl border border-[#e2dce1] bg-white p-4 shadow-sm"
              >
                <p className="text-sm leading-6 text-[#5f575c]">{detail}</p>
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
              Business Confidence Review
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#6f666b]">
              Serene Passage may review business names, addresses, websites,
              public profiles, documents, media, references, or digital
              footprint before using a partner in curated travel experiences.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#e2dce1] bg-white p-6 shadow-sm">
            <MapPin className="mb-4 h-7 w-7 text-[#6f6044]" />

            <h3 className="text-xl font-semibold text-[#2f2f2f]">
              Location & Service Matching
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#6f666b]">
              Your location, areas served, nearby hotels, and service category
              help Serene Passage understand which destination packages or group
              opportunities may fit.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#e2dce1] bg-white p-6 shadow-sm">
            <Globe2 className="mb-4 h-7 w-7 text-[#6f6044]" />

            <h3 className="text-xl font-semibold text-[#2f2f2f]">
              International Partner Access
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#6f666b]">
              The portal is being designed for international destination
              partners, including future language support and flexible
              country-based business information.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#2f2f2f] px-6 py-16 text-white md:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#e9ddbf]">
              <Sparkles className="h-4 w-4" />
              Ready to create your partner profile?
            </div>

            <h2 className="text-3xl font-semibold md:text-4xl">
              Create a partner account so Serene Passage can learn where your
              business fits.
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70">
              Self-registered partners are welcome, but Serene Passage will
              still review business information before including any business in
              curated travel experiences, promotions, or client-facing packages.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6">
            <Building2 className="mb-4 h-7 w-7 text-[#e9ddbf]" />

            <h3 className="text-xl font-semibold text-[#e9ddbf]">
              Continue to Partner Profile
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/70">
              Your account will be connected to a partner member reference and
              marked for Serene Passage review once your profile is complete.
            </p>

            <Link
              to="/vendor/submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#e9ddbf] px-6 py-3 text-sm font-semibold text-[#2f2f2f] transition hover:bg-[#dcc79b]"
            >
              Create Partner Profile
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              to="/partner-interest"
              className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Send Inquiry Instead
              <MessageSquareText className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}