// FILE: src/pages/vendor/PartnerInviteGatewayPage.tsx

import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe2,
  KeyRound,
  Languages,
  LockKeyhole,
  Mail,
  Sparkles,
  UserPlus,
  Users,
} from "lucide-react";

type InviteRecord = {
  businessName?: string;
  contactName?: string;
  contactEmail?: string;
  email?: string;
  city?: string;
  region?: string;
  country?: string;
  businessCategory?: string;
  serviceCategory?: string;
  connectionSource?: string;
  inviteStatus?: string;
  inviteReference?: string;
  inviteLink?: string;
};

export default function PartnerInviteGatewayPage() {
  const { inviteSlug } = useParams();
  const [showEmailSetup, setShowEmailSetup] = useState(false);

  const savedInvites = useMemo<InviteRecord[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("spi-partner-invites") || "[]");
    } catch {
      return [];
    }
  }, []);

  const matchedInvite = useMemo(() => {
    return savedInvites.find((invite) =>
      invite.inviteLink?.includes(inviteSlug || "")
    );
  }, [savedInvites, inviteSlug]);

  const invitedPartner: InviteRecord = matchedInvite || {
    businessName: "Invited Partner Business",
    contactName: "Partner Contact",
    contactEmail: "partner@email.com",
    city: "Destination City",
    region: "Region",
    country: "",
    businessCategory: "Hospitality",
    serviceCategory: "",
    connectionSource: "",
    inviteStatus: "unused",
    inviteReference: inviteSlug || "partner-invite",
  };

  const inviteNotFound = !matchedInvite;

  const inviteAlreadyActivated =
    invitedPartner.inviteStatus === "Account Created";

  const displayEmail =
    invitedPartner.contactEmail || invitedPartner.email || "partner@email.com";

  const displayLocation = [
    invitedPartner.city,
    invitedPartner.region,
    invitedPartner.country,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f3ec] via-[#f3edf1] to-[#e9ddbf] px-6 py-20 md:px-10 md:py-28">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#dcc79b] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          {inviteNotFound && (
            <div className="mb-8 rounded-[2rem] border border-[#d8cdd3] bg-white/75 p-6 shadow-sm backdrop-blur">
              <h2 className="text-2xl font-semibold text-[#2f2f2f]">
                Invitation Preview Mode
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#6f666b]">
                This invite link was not found in this browser’s temporary saved
                invite list. If this is a real invitation, it may have been
                created on another device or will connect once the Supabase
                database is added. For now, this page is showing the partner
                invitation experience preview.
              </p>
            </div>
          )}

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dcc79b]/60 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6f6044] shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Serene Passage Partner Invitation
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

          {!inviteAlreadyActivated ? (
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="mb-4 text-sm font-medium text-[#6f6044]">
                  Invite reference:{" "}
                  {invitedPartner.inviteReference || inviteSlug || "partner-invite"}
                </p>

                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[#2f2f2f] md:text-6xl">
                  Welcome, {invitedPartner.businessName}.
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f575c]">
                  You have been invited to join the Serene Passage International
                  Partner Ecosystem — a curated collaboration network designed
                  for trusted destination businesses, travel services,
                  hospitality providers, and local experience partners.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setShowEmailSetup(true)}
                    className="inline-flex items-center justify-center rounded-full bg-[#6f6044] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#5d5038]"
                  >
                    Complete Profile & Registration Setup
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>

                  <Link
                    to="/partner-onboarding"
                    className="inline-flex items-center justify-center rounded-full border border-[#d8cdd3] bg-white/75 px-6 py-3 text-sm font-semibold text-[#6f666b] shadow-sm transition hover:bg-white"
                  >
                    View Onboarding First
                  </Link>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/70 bg-white/65 p-6 shadow-xl backdrop-blur">
                <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9ddbf] text-[#6f6044]">
                      <Building2 className="h-6 w-6" />
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#2f2f2f]">
                        Invitation Details
                      </h2>
                      <p className="text-sm text-[#6f666b]">
                        Connected to this partner invite.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-[#5f575c]">
                    <p>
                      <span className="font-semibold text-[#2f2f2f]">
                        Business:
                      </span>{" "}
                      {invitedPartner.businessName}
                    </p>

                    <p>
                      <span className="font-semibold text-[#2f2f2f]">
                        Contact:
                      </span>{" "}
                      {invitedPartner.contactName}
                    </p>

                    <p>
                      <span className="font-semibold text-[#2f2f2f]">
                        Email:
                      </span>{" "}
                      {displayEmail}
                    </p>

                    <p>
                      <span className="font-semibold text-[#2f2f2f]">
                        Location:
                      </span>{" "}
                      {displayLocation || "Destination location"}
                    </p>

                    <p>
                      <span className="font-semibold text-[#2f2f2f]">
                        Category:
                      </span>{" "}
                      {invitedPartner.businessCategory || "Travel / Hospitality"}
                    </p>

                    {invitedPartner.connectionSource && (
                      <p>
                        <span className="font-semibold text-[#2f2f2f]">
                          Connection:
                        </span>{" "}
                        {invitedPartner.connectionSource}
                      </p>
                    )}
                  </div>

                  <div className="mt-6 rounded-2xl bg-[#f8f3ec] p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#6f6044]" />
                      <p className="text-sm leading-6 text-[#6f666b]">
                        This link is connected to the email used in your
                        invitation. Profile setup will require that email for
                        verification once account creation is fully connected.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/70 bg-white/75 p-8 text-center shadow-xl backdrop-blur md:p-12">
              <LockKeyhole className="mx-auto mb-5 h-10 w-10 text-[#6f6044]" />

              <h1 className="text-3xl font-semibold text-[#2f2f2f] md:text-5xl">
                This invitation has already been activated.
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#6f666b]">
                If this invite belongs to your business, please sign in. If this
                link was shared with you, choose the option that best describes
                you.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Link
                  to="/vendor/login"
                  className="inline-flex items-center justify-center rounded-full bg-[#6f6044] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#5d5038]"
                >
                  Partner Login
                </Link>

                <Link
                  to="/partner-onboarding"
                  className="inline-flex items-center justify-center rounded-full border border-[#d8cdd3] bg-white px-6 py-3 text-sm font-semibold text-[#6f666b] shadow-sm transition hover:bg-[#f8f3ec]"
                >
                  View Onboarding
                </Link>

                <Link
                  to="/partner-join"
                  className="inline-flex items-center justify-center rounded-full border border-[#d8cdd3] bg-white px-6 py-3 text-sm font-semibold text-[#6f666b] shadow-sm transition hover:bg-[#f8f3ec]"
                >
                  Join as New Partner
                </Link>

                <Link
                  to="/travel-deals"
                  className="inline-flex items-center justify-center rounded-full border border-[#d8cdd3] bg-white px-6 py-3 text-sm font-semibold text-[#6f666b] shadow-sm transition hover:bg-[#f8f3ec]"
                >
                  I Am a Traveler
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {showEmailSetup && (
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-lg rounded-[2rem] bg-white p-6 shadow-2xl md:p-8">
            <div className="mb-5 flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e9ddbf] text-[#6f6044]">
                <KeyRound className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2f2f2f]">
                  Verify Your Invitation Email
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#6f666b]">
                  Enter the email connected to this invitation. If it matches
                  the invite record, the system will send account setup
                  instructions once authentication is connected.
                </p>
              </div>
            </div>

            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#6f666b]">
              Invitation Email
            </label>

            <div className="flex items-center gap-2 rounded-xl border border-[#d8cdd3] bg-white px-4">
              <Mail className="h-4 w-4 text-[#6f666b]" />
              <input
                type="email"
                defaultValue={displayEmail !== "partner@email.com" ? displayEmail : ""}
                placeholder="Enter the invited email address"
                className="h-12 w-full bg-transparent text-sm outline-none"
              />
            </div>

            <div className="mt-5 rounded-2xl bg-[#f8f3ec] p-4">
              <p className="text-sm leading-6 text-[#6f666b]">
                Current MVP step: this button previews the future account setup
                process. Next, Supabase Auth will allow partners to create a
                secure login, verify email access, and complete their profile.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/vendor/login"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-[#6f6044] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#5d5038]"
              >
                Continue to Partner Login
              </Link>

              <button
                type="button"
                onClick={() => setShowEmailSetup(false)}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-[#d8cdd3] bg-white px-6 py-3 text-sm font-semibold text-[#6f666b] shadow-sm transition hover:bg-[#f8f3ec]"
              >
                Cancel
              </button>
            </div>
          </div>
        </section>
      )}

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-[#e2dce1] bg-white p-6 shadow-sm">
            <UserPlus className="mb-4 h-6 w-6 text-[#6f6044]" />
            <h3 className="text-xl font-semibold text-[#2f2f2f]">
              Account Setup
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#6f666b]">
              Create secure access using the email connected to your invitation.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#e2dce1] bg-white p-6 shadow-sm">
            <Building2 className="mb-4 h-6 w-6 text-[#6f6044]" />
            <h3 className="text-xl font-semibold text-[#2f2f2f]">
              Complete Profile
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#6f666b]">
              Share business, service, location, and collaboration details for
              Serene Passage review.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#e2dce1] bg-white p-6 shadow-sm">
            <Users className="mb-4 h-6 w-6 text-[#6f6044]" />
            <h3 className="text-xl font-semibold text-[#2f2f2f]">
              Partner Collaboration
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#6f666b]">
              Once your profile is complete, your portal sections will support
              the services most relevant to your business.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#2f2f2f] px-6 py-14 text-white md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#e9ddbf]">
              <Globe2 className="h-4 w-4" />
              Not the invited business?
            </div>

            <h2 className="text-3xl font-semibold">
              Choose the path that fits you.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
              If this link was shared with you, you can still explore partner
              membership or continue as a traveler.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/partner-join"
              className="inline-flex items-center justify-center rounded-full bg-[#e9ddbf] px-6 py-3 text-sm font-semibold text-[#2f2f2f] transition hover:bg-[#dcc79b]"
            >
              Join as New Partner
            </Link>

            <Link
              to="/travel-deals"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              I Am a Traveler
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}