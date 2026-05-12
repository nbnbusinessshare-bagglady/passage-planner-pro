// FILE: src/pages/vendor/PartnerInviteGatewayPage.tsx

import { useEffect, useState } from "react";
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

import { supabase } from "@/lib/supabase";

type InviteRecord = {
  businessName?: string;
  contactName?: string;
  contactEmail?: string;

  city?: string;
  region?: string;
  country?: string;

  businessCategory?: string;
  serviceCategory?: string;

  connectionSource?: string;

  inviteStatus?: string;

  inviteReference?: string;

  inviteSlug?: string;
};

export default function PartnerInviteGatewayPage() {
  const { inviteSlug } = useParams();

  const [loading, setLoading] = useState(true);

  const [showEmailSetup, setShowEmailSetup] =
    useState(false);

  const [inviteNotFound, setInviteNotFound] =
    useState(false);

  const [invitedPartner, setInvitedPartner] =
    useState<InviteRecord>({
      businessName: "",
      contactName: "",
      contactEmail: "",
      city: "",
      region: "",
      country: "",
      businessCategory: "",
      serviceCategory: "",
      connectionSource: "",
      inviteStatus: "Draft",
      inviteReference: "",
      inviteSlug: "",
    });

  useEffect(() => {
    const loadInvite = async () => {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from("partner_invites")
          .select("*")
          .eq("invite_slug", inviteSlug)
          .single();

        if (error || !data) {
          console.error(error);

          setInviteNotFound(true);

          setInvitedPartner({
            businessName: "Invited Partner Business",
            contactName: "Partner Contact",
            contactEmail: "partner@email.com",
            city: "Destination City",
            region: "Region",
            country: "",
            businessCategory: "Hospitality",
            serviceCategory: "",
            connectionSource: "",
            inviteStatus: "Draft",
            inviteReference:
              inviteSlug || "partner-invite",
            inviteSlug: inviteSlug || "",
          });

          return;
        }

        setInvitedPartner({
          businessName: data.business_name || "",
          contactName: data.contact_name || "",
          contactEmail: data.contact_email || "",

          city: data.address || "",
          region: "",
          country: "",

          businessCategory: data.industry || "",
          serviceCategory: "",

          connectionSource: data.met_source || "",

          inviteStatus: data.invite_status || "Draft",

          inviteReference:
            data.invite_slug || "partner-invite",

          inviteSlug: data.invite_slug || "",
        });
      } catch (err) {
        console.error(err);

        setInviteNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    loadInvite();
  }, [inviteSlug]);

  const inviteAlreadyActivated =
    invitedPartner.inviteStatus ===
    "Account Created";

  const displayEmail =
    invitedPartner.contactEmail ||
    "partner@email.com";

  const displayLocation = [
    invitedPartner.city,
    invitedPartner.region,
    invitedPartner.country,
  ]
    .filter(Boolean)
    .join(", ");

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-sm text-foreground/60">
          Loading invitation...
        </p>
      </main>
    );
  }

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
                This invite link could not be found.
                The page is currently showing a preview
                experience for the Serene Passage
                Partner Portal onboarding system.
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
                  {invitedPartner.inviteReference ||
                    inviteSlug ||
                    "partner-invite"}
                </p>

                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[#2f2f2f] md:text-6xl">
                  Welcome,{" "}
                  {invitedPartner.businessName}.
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f575c]">
                  You have been invited to join the
                  Serene Passage International Partner
                  Ecosystem — a curated collaboration
                  network designed for trusted
                  destination businesses, travel
                  services, hospitality providers, and
                  local experience partners.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() =>
                      setShowEmailSetup(true)
                    }
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
                      {displayLocation ||
                        "Destination location"}
                    </p>

                    <p>
                      <span className="font-semibold text-[#2f2f2f]">
                        Category:
                      </span>{" "}
                      {invitedPartner.businessCategory ||
                        "Travel / Hospitality"}
                    </p>

                    {invitedPartner.connectionSource && (
                      <p>
                        <span className="font-semibold text-[#2f2f2f]">
                          Connection:
                        </span>{" "}
                        {
                          invitedPartner.connectionSource
                        }
                      </p>
                    )}
                  </div>

                  <div className="mt-6 rounded-2xl bg-[#f8f3ec] p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#6f6044]" />

                      <p className="text-sm leading-6 text-[#6f666b]">
                        This link is connected to the
                        email used in your invitation.
                        Profile setup will require that
                        email for verification once
                        account creation is fully
                        connected.
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
                If this invite belongs to your business,
                please sign in.
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
                  Enter the email connected to this
                  invitation.
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
                defaultValue={
                  displayEmail !==
                  "partner@email.com"
                    ? displayEmail
                    : ""
                }
                placeholder="Enter the invited email address"
                className="h-12 w-full bg-transparent text-sm outline-none"
              />
            </div>

            <div className="mt-5 rounded-2xl bg-[#f8f3ec] p-4">
              <p className="text-sm leading-6 text-[#6f666b]">
                Next phase: Supabase Auth will allow
                partners to create secure accounts,
                verify invitation ownership, upload
                files, manage campaigns, and access
                their personalized collaboration
                dashboard.
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
                onClick={() =>
                  setShowEmailSetup(false)
                }
                className="inline-flex flex-1 items-center justify-center rounded-full border border-[#d8cdd3] bg-white px-6 py-3 text-sm font-semibold text-[#6f666b] shadow-sm transition hover:bg-[#f8f3ec]"
              >
                Cancel
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}