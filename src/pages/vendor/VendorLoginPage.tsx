// FILE: src/pages/vendor/VendorLoginPage.tsx

import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Building2,
  Globe2,
  HandHeart,
  KeyRound,
} from "lucide-react";

import logo from "@/assets/logo.png";
import loginHero from "@/assets/partner-portal/partner-portal-hero-luxury-lobby.png";

const VendorLoginPage = () => {
  return (
    <div className="min-h-screen pt-16 md:pt-20 bg-[hsl(0,0%,8%)] text-cream relative overflow-hidden">
      <img
        src={loginHero}
        alt="Luxury hospitality lobby for Serene Passage International Partner Suite"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_top_right,_hsl(var(--gold)),_transparent_38%)]" />

      <div className="relative container max-w-6xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[10px] tracking-[0.34em] uppercase text-gold mb-4">
              Invitation Only Partner Network
            </p>

            <img
              src={logo}
              alt="Serene Passage International"
              className="h-20 w-auto mb-6 opacity-95"
            />

            <h1 className="font-display text-4xl md:text-6xl leading-tight text-cream">
              Travel Partner Suite
            </h1>

            <p className="font-script text-xl text-gold/85 mt-4">
              Curated relationships. Elevated experiences.
            </p>

            <p className="text-base text-cream/75 mt-6 leading-relaxed max-w-xl">
              Serene Passage International is building a trusted network of
              global travel, hospitality, wellness, romance, retreat, cruise,
              and destination experience partners focused on thoughtfully
              curated client journeys.
            </p>

            <div className="space-y-4 mt-10">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <Building2 size={18} className="text-gold" />
                </div>

                <div>
                  <h3 className="font-display text-lg text-cream">
                    Trusted Partnership Network
                  </h3>

                  <p className="text-sm text-cream/65 mt-1 leading-relaxed">
                    Designed for resorts, destination wedding suppliers,
                    retreat hosts, tourism partners, excursion providers,
                    and curated luxury travel experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <HandHeart size={18} className="text-gold" />
                </div>

                <div>
                  <h3 className="font-display text-lg text-cream">
                    Relationship-Driven Collaboration
                  </h3>

                  <p className="text-sm text-cream/65 mt-1 leading-relaxed">
                    Travel opportunities are reviewed and curated into
                    personalized client experiences through trusted supplier
                    relationships.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <Globe2 size={18} className="text-gold" />
                </div>

                <div>
                  <h3 className="font-display text-lg text-cream">
                    Global Destination Growth
                  </h3>

                  <p className="text-sm text-cream/65 mt-1 leading-relaxed">
                    Partnerships may support destination showcases,
                    tourism boards, retreat collaborations, and industry
                    networking opportunities worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[hsl(0,0%,10%)]/85 rounded-3xl border border-gold/20 p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-11 w-11 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <ShieldCheck size={18} className="text-gold" />
                </div>

                <div>
                  <p className="text-[10px] tracking-[0.24em] uppercase text-gold">
                    Secure Access
                  </p>

                  <h2 className="font-display text-2xl text-cream">
                    Partner Access & Account Setup
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-cream/60">
                    Invited partners may log in, continue account setup, or
                    prepare onboarding access using the email connected to their
                    invitation.
                  </p>
                </div>
              </div>

              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label className="text-[10px] tracking-[0.22em] uppercase text-cream/60 mb-2 block">
                    Partner Email
                  </label>

                  <input
                    type="email"
                    placeholder="partner@company.com"
                    className="w-full h-12 px-4 rounded-md bg-black/20 border border-cream/15 text-cream placeholder:text-cream/30 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] tracking-[0.22em] uppercase text-cream/60 mb-2 block">
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full h-12 px-4 rounded-md bg-black/20 border border-cream/15 text-cream placeholder:text-cream/30 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <Link
                  to="/vendor"
                  className="mt-2 w-full h-12 inline-flex items-center justify-center rounded-md bg-gold text-[hsl(0,0%,8%)] text-xs tracking-[0.22em] uppercase font-semibold hover:bg-gold/90 active:scale-[0.99] transition-all"
                >
                  Continue to Partner Access
                </Link>

                <button
                  type="button"
                  className="text-xs text-center text-cream/55 hover:text-gold transition-colors"
                >
                  Forgot password?
                </button>
              </form>

              <div className="mt-6 rounded-2xl border border-gold/20 bg-gold/5 p-5">
                <div className="flex items-start gap-3">
                  <KeyRound className="mt-1 h-5 w-5 shrink-0 text-gold" />

                  <div>
                    <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-2">
                      Invitation Setup Notice
                    </p>

                    <p className="text-sm leading-7 text-cream/70">
                      If you recently received a Serene Passage invitation link,
                      your onboarding setup will be connected to the email
                      associated with your partner invitation. Future account
                      verification, uploads, and collaboration access will be
                      tied to that relationship profile.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-7 border-t border-cream/10">
                <div className="text-center">
                  <p className="text-xs text-cream/55 leading-relaxed mb-4">
                    Interested in becoming a trusted Serene Passage
                    International travel partner?
                  </p>

                  <Link
                    to="/partner-interest"
                    className="inline-flex items-center justify-center h-11 px-6 rounded-md border border-gold/35 text-gold text-xs tracking-[0.22em] uppercase font-medium hover:bg-gold/10 transition-all"
                  >
                    Request Partner Consideration
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-center text-[11px] text-cream/45 mt-6 tracking-wide leading-relaxed">
              Exclusive travel opportunities curated through meaningful global
              hospitality and destination relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorLoginPage;