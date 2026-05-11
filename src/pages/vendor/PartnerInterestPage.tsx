// FILE: src/pages/vendor/PartnerInterestPage.tsx

import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe2,
  Handshake,
  Languages,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

const interestTypes = [
  "I provide travel, hospitality, or destination services.",
  "I operate a local business travelers may enjoy.",
  "I offer transportation, safety, dining, entertainment, tours, or experiences.",
  "I represent a hotel, resort, villa, tourism board, or event venue.",
  "I am not sure where I fit, but I would like Serene Passage to review my information.",
];

export default function PartnerInterestPage() {
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
              <MessageSquareText className="h-4 w-4" />
              Partner Portal Inquiry
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
                Not sure where your business fits?
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f575c]">
                Share your details with Serene Passage. If your business,
                service, location, or experience may support curated travel, we
                can review your information and recommend the best next step.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#partner-inquiry-form"
                  className="inline-flex items-center justify-center rounded-full bg-[#6f6044] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#5d5038]"
                >
                  Send Partner Inquiry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <Link
                  to="/partner-join"
                  className="inline-flex items-center justify-center rounded-full border border-[#d8cdd3] bg-white/75 px-6 py-3 text-sm font-semibold text-[#6f666b] shadow-sm transition hover:bg-white"
                >
                  Create Partner Account Instead
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white/65 p-6 shadow-xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
                <Handshake className="mb-4 h-8 w-8 text-[#6f6044]" />

                <h2 className="text-2xl font-semibold text-[#2f2f2f]">
                  Inquiry before account setup
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#6f666b]">
                  This path is for businesses, local providers, or destination
                  contacts who want Serene Passage to review their information
                  before creating a full partner profile.
                </p>

                <div className="mt-6 rounded-2xl bg-[#f8f3ec] p-4">
                  <p className="text-sm leading-6 text-[#6f666b]">
                    If there is a strong fit, Serene Passage may send a partner
                    invite link or recommend that you continue through the
                    partner account setup process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6f6044]">
              Who Should Use This Page
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#2f2f2f] md:text-4xl">
              A softer path for possible ecosystem partners.
            </h2>

            <p className="mt-4 text-base leading-7 text-[#6f666b]">
              This inquiry page is not for travelers looking to book trips. It
              is for businesses or destination-based service providers who may
              support travel experiences but are not ready to create a full
              partner profile yet.
            </p>

            <div className="mt-8 space-y-3">
              {interestTypes.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-[#e2dce1] bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#6f6044]" />
                  <p className="text-sm leading-6 text-[#5f575c]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <form
            id="partner-inquiry-form"
            className="rounded-[2rem] border border-[#e2dce1] bg-white p-6 shadow-sm md:p-8"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="mb-6">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#e9ddbf] bg-[#f8f3ec] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6f6044]">
                <Send className="h-4 w-4" />
                Inquiry Details
              </div>

              <h2 className="text-2xl font-semibold text-[#2f2f2f]">
                Tell us about your business or service.
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#6f666b]">
                This form should later send to Serene Passage as a Partner
                Portal Inquiry. No partner account is created from this page.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#6f666b]">
                  Business / Organization Name
                </label>
                <div className="flex items-center gap-2 rounded-xl border border-[#d8cdd3] bg-white px-4">
                  <Building2 className="h-4 w-4 text-[#6f666b]" />
                  <input
                    className="h-12 w-full bg-transparent text-sm outline-none"
                    placeholder="Business name"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#6f666b]">
                  Contact Name
                </label>
                <input
                  className="h-12 w-full rounded-xl border border-[#d8cdd3] bg-white px-4 text-sm outline-none"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#6f666b]">
                  Email
                </label>
                <div className="flex items-center gap-2 rounded-xl border border-[#d8cdd3] bg-white px-4">
                  <Mail className="h-4 w-4 text-[#6f666b]" />
                  <input
                    type="email"
                    className="h-12 w-full bg-transparent text-sm outline-none"
                    placeholder="email@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#6f666b]">
                  Phone
                </label>
                <div className="flex items-center gap-2 rounded-xl border border-[#d8cdd3] bg-white px-4">
                  <Phone className="h-4 w-4 text-[#6f666b]" />
                  <input
                    className="h-12 w-full bg-transparent text-sm outline-none"
                    placeholder="+1 (000) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#6f666b]">
                  City / Region
                </label>
                <div className="flex items-center gap-2 rounded-xl border border-[#d8cdd3] bg-white px-4">
                  <MapPin className="h-4 w-4 text-[#6f666b]" />
                  <input
                    className="h-12 w-full bg-transparent text-sm outline-none"
                    placeholder="City, state, parish, province, or region"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#6f666b]">
                  Country
                </label>
                <div className="flex items-center gap-2 rounded-xl border border-[#d8cdd3] bg-white px-4">
                  <Globe2 className="h-4 w-4 text-[#6f666b]" />
                  <input
                    className="h-12 w-full bg-transparent text-sm outline-none"
                    placeholder="Country"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#6f666b]">
                  Website / Social Link
                </label>
                <input
                  className="h-12 w-full rounded-xl border border-[#d8cdd3] bg-white px-4 text-sm outline-none"
                  placeholder="Website, Instagram, Facebook, TripAdvisor, etc."
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#6f666b]">
                  What type of business or service do you provide?
                </label>
                <input
                  className="h-12 w-full rounded-xl border border-[#d8cdd3] bg-white px-4 text-sm outline-none"
                  placeholder="Example: excursion company, café, driver, resort, photographer, local guide"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#6f666b]">
                  How do you think you may fit into destination experiences?
                </label>
                <textarea
                  rows={5}
                  className="w-full rounded-xl border border-[#d8cdd3] bg-white px-4 py-3 text-sm outline-none"
                  placeholder="Tell us what you offer, who you serve, where you operate, and how you may support travelers, groups, retreats, weddings, or destination experiences."
                />
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-[#f8f3ec] p-4">
              <p className="text-sm leading-6 text-[#6f666b]">
                Future connection: this inquiry should route to the owner under
                Partner Portal Inquiries. If aligned, Serene Passage may send an
                invite link or recommend creating a partner account.
              </p>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#6f6044] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#5d5038]"
            >
              Send Partner Inquiry
              <Send className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      <section className="bg-[#2f2f2f] px-6 py-14 text-white md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#e9ddbf]">
              <Sparkles className="h-4 w-4" />
              Know you are ready?
            </div>

            <h2 className="text-3xl font-semibold">
              You can create a partner profile instead.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
              Businesses that already know they are part of the destination
              experience ecosystem may continue directly to partner account
              setup.
            </p>
          </div>

          <Link
            to="/partner-join"
            className="inline-flex items-center justify-center rounded-full bg-[#e9ddbf] px-6 py-3 text-sm font-semibold text-[#2f2f2f] transition hover:bg-[#dcc79b]"
          >
            Join as Partner
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}