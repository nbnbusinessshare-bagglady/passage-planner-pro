// FILE: src/pages/admin/AdminInvitePage.tsx

import { useMemo, useState } from "react";
import {
  Building2,
  Copy,
  FileUp,
  Globe2,
  Languages,
  Mail,
  MapPin,
  MessageSquareText,
  Save,
  ShieldCheck,
  Sparkles,
  UserPlus,
} from "lucide-react";

import { SectionHeader } from "@/components/vendor/VendorLayout";
import { supabase } from "@/lib/supabase";
import inviteHero from "@/assets/partner-portal/invite-partner-networking.png";

const inputCls =
  "w-full h-11 px-4 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring";

const textAreaCls =
  "w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring";

const selectCls =
  "w-full h-11 px-4 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring";

const Field = ({
  label,
  required,
  children,
  description,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  description?: string;
}) => (
  <div>
    <label className="text-xs tracking-[0.18em] uppercase text-foreground/60 mb-1.5 block">
      {label} {required && <span className="text-gold">*</span>}
    </label>

    {children}

    {description && (
      <p className="mt-2 text-xs leading-5 text-foreground/50">
        {description}
      </p>
    )}
  </div>
);

const AdminInvitePage = () => {
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    businessName: "",
    contactName: "",
    contactEmail: "",
    phone: "",
    city: "",
    region: "",
    country: "",
    businessCategory: "",
    serviceCategory: "",
    connectionSource: "Travel Convention",
    notes: "",
    quickNotes: "",
    inviteStatus: "Draft",
  });

  const update = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const inviteReference = useMemo(() => {
    const biz =
      form.businessName
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "")
        .slice(0, 4) || "PART";

    const cat =
      form.businessCategory
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "")
        .slice(0, 3) || "GEN";

    const country =
      form.country
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "")
        .slice(0, 3) || "INT";

    const random = Math.floor(1000 + Math.random() * 9000);

    return `SPI-INV-${cat}-${country}-${biz}-${random}`;
  }, [form.businessName, form.businessCategory, form.country]);

  const inviteSlug = useMemo(() => {
    const slug =
      form.businessName
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") || "partner";

    return `${slug}-${inviteReference.toLowerCase()}`;
  }, [form.businessName, inviteReference]);

  const inviteLink = `${window.location.origin}/partner-invite/${inviteSlug}`;

  const textMessage = `Hi ${
    form.contactName || "[Partner Contact]"
  }, this is Kim with Serene Passage International. Thank you for connecting with me regarding ${
    form.businessName || "[Business Name]"
  }.

Your Partner Preview invitation will be sent shortly.

Invitation Link:
${inviteLink}

Please check your inbox or spam folder just in case.`;

  const emailBody = `Hello ${form.contactName || "[Partner Contact]"},

It was truly a pleasure connecting with you and learning more about ${
    form.businessName || "[Business Name]"
  }.

Based on our conversation and the services you provide, I believe there may be a strong alignment between your business and the types of thoughtful, elevated, and curated destination experiences Serene Passage International is continuing to build for our travelers and groups.

Your invitation reference:
${inviteReference}

Partner invitation link:
${inviteLink}

We look forward to learning more about your business and exploring meaningful ways we may be able to collaborate moving forward.

Warm regards,

Kim
Founder & Travel Strategist
Serene Passage International`;

  const copyEmail = async () => {
    await navigator.clipboard.writeText(emailBody);
    alert("Invitation email copied.");
  };

  const copyText = async () => {
    await navigator.clipboard.writeText(textMessage);
    alert("Text message copied.");
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(inviteLink);
    alert("Invitation link copied.");
  };

  const saveInvite = async () => {
    if (!form.businessName || !form.contactName || !form.businessCategory) {
      alert("Please complete Business Name, Contact Person, and Business Category.");
      return;
    }

    try {
      setSaving(true);

      const invitePayload = {
        business_name: form.businessName,
        contact_name: form.contactName,
        contact_email: form.contactEmail,
        contact_phone: form.phone,
        industry: form.businessCategory,
        address: [form.city, form.region, form.country]
          .filter(Boolean)
          .join(", "),
        invite_slug: inviteSlug,
        invite_status: form.inviteStatus,
        met_source: form.connectionSource,
        notes: `Service Category: ${form.serviceCategory}

Quick Notes:
${form.quickNotes}

Relationship Notes:
${form.notes}`,
      };

      const { error } = await supabase
        .from("partner_invites")
        .insert([invitePayload]);

      if (error) {
        console.error(error);
        alert("Supabase save failed. Check console for details.");
        return;
      }

      const existing = JSON.parse(
        localStorage.getItem("spi-partner-invites") || "[]"
      );

      const updated = [
        ...existing,
        {
          ...form,
          inviteReference,
          inviteLink,
          inviteSlug,
          createdAt: new Date().toISOString(),
        },
      ];

      localStorage.setItem("spi-partner-invites", JSON.stringify(updated));

      alert("Partner invite saved successfully.");

      setForm({
        businessName: "",
        contactName: "",
        contactEmail: "",
        phone: "",
        city: "",
        region: "",
        country: "",
        businessCategory: "",
        serviceCategory: "",
        connectionSource: "Travel Convention",
        notes: "",
        quickNotes: "",
        inviteStatus: "Draft",
      });
    } catch (err) {
      console.error(err);
      alert("Unexpected error saving invite.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl border border-border/60 shadow-sm min-h-[380px] bg-[hsl(0,0%,8%)]">
        <img
          src={inviteHero}
          alt="Luxury hospitality networking conversation"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

        <div className="relative z-10 p-6 md:p-10 min-h-[380px] flex items-center">
          <div className="max-w-3xl">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-black/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Owner Back Office
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80 backdrop-blur">
                <Languages className="h-4 w-4" />
                Partner Capture System
              </div>
            </div>

            <h1 className="font-display text-3xl md:text-5xl text-cream leading-tight">
              Partner Invite & Capture System
            </h1>

            <p className="text-sm md:text-base text-cream/75 mt-5 leading-relaxed max-w-2xl">
              Capture relationship details, generate private onboarding links,
              organize follow-up, and prepare destination partners for the
              Serene Passage ecosystem.
            </p>
          </div>
        </div>
      </section>

      <SectionHeader
        eyebrow="Partner Intake"
        title="Partner Relationship Details"
        description="Create and organize partner invitations, relationship notes, onboarding links, and future collaboration opportunities."
      />

      <div className="bg-card rounded-[2rem] border border-border/60 shadow-sm p-6 md:p-8 space-y-6">
        <div className="flex items-start gap-3">
          <UserPlus className="text-gold shrink-0 mt-1" size={24} />

          <div>
            <h2 className="font-display text-2xl text-card-foreground">
              Partner Information
            </h2>

            <p className="text-sm text-foreground/65 mt-1 leading-6">
              These details help organize ecosystem relationships, onboarding,
              and future collaboration opportunities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Business Name" required>
            <input
              className={inputCls}
              value={form.businessName}
              onChange={(e) => update("businessName", e.target.value)}
            />
          </Field>

          <Field label="Contact Person" required>
            <input
              className={inputCls}
              value={form.contactName}
              onChange={(e) => update("contactName", e.target.value)}
            />
          </Field>

          <Field label="Contact Email">
            <input
              className={inputCls}
              value={form.contactEmail}
              onChange={(e) => update("contactEmail", e.target.value)}
            />
          </Field>

          <Field label="Phone Number">
            <input
              className={inputCls}
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </Field>

          <Field label="Country">
            <input
              className={inputCls}
              value={form.country}
              onChange={(e) => update("country", e.target.value)}
            />
          </Field>

          <Field label="City">
            <input
              className={inputCls}
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
            />
          </Field>

          <Field label="Region / Parish">
            <input
              className={inputCls}
              value={form.region}
              onChange={(e) => update("region", e.target.value)}
            />
          </Field>

          <Field label="Business Category" required>
            <select
              className={selectCls}
              value={form.businessCategory}
              onChange={(e) => update("businessCategory", e.target.value)}
            >
              <option value="">Select category</option>
              <option>Hotel / Resort</option>
              <option>Restaurant / Dining</option>
              <option>Transportation</option>
              <option>Excursion / Tour</option>
              <option>Wellness / Spa</option>
              <option>Entertainment</option>
              <option>Tourism / Hospitality</option>
              <option>Other</option>
            </select>
          </Field>

          <Field label="Service Category">
            <input
              className={inputCls}
              value={form.serviceCategory}
              onChange={(e) => update("serviceCategory", e.target.value)}
            />
          </Field>

          <Field label="Connection Source">
            <select
              className={selectCls}
              value={form.connectionSource}
              onChange={(e) => update("connectionSource", e.target.value)}
            >
              <option>Travel Convention</option>
              <option>Hotel / Resort Visit</option>
              <option>Restaurant / Café</option>
              <option>Beach / Local Outing</option>
              <option>Excursion / Tour</option>
              <option>Referral</option>
              <option>Personal Connection</option>
              <option>Online Research</option>
              <option>Other</option>
            </select>
          </Field>

          <Field label="Invite Status">
            <select
              className={selectCls}
              value={form.inviteStatus}
              onChange={(e) => update("inviteStatus", e.target.value)}
            >
              <option>Draft</option>
              <option>Ready To Send</option>
              <option>Email Sent</option>
              <option>Text Sent</option>
              <option>Reminder Sent</option>
              <option>Account Created</option>
              <option>Needs Follow-Up</option>
            </select>
          </Field>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-card rounded-[2rem] border border-border/60 shadow-sm p-6 md:p-8 space-y-6">
          <div className="flex items-start gap-3">
            <FileUp className="text-primary shrink-0 mt-1" size={22} />

            <div>
              <h2 className="font-display text-2xl text-card-foreground">
                Upload Contact File
              </h2>

              <p className="text-sm text-foreground/65 mt-1 leading-6">
                Upload a contact export, PDF, screenshot, or saved business
                contact file for future organization and review.
              </p>
            </div>
          </div>

          <input type="file" className={inputCls} />

          <Field
            label="Quick Voice / Text Notes"
            description="Use labeled formatting such as: Business Name:, Industry:, Category:, Contact Person:, Email:, Phone:"
          >
            <textarea
              rows={10}
              className={textAreaCls}
              value={form.quickNotes}
              onChange={(e) => update("quickNotes", e.target.value)}
            />
          </Field>

          <Field label="Relationship Notes">
            <textarea
              rows={6}
              className={textAreaCls}
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
            />
          </Field>
        </div>

        <div className="space-y-6">
          <div className="bg-card rounded-[2rem] border border-border/60 shadow-sm p-6 md:p-8 space-y-6">
            <div className="flex items-start gap-3">
              <ShieldCheck
                className="text-primary shrink-0 mt-1"
                size={22}
              />

              <div>
                <h2 className="font-display text-2xl text-card-foreground">
                  Generated Invite
                </h2>

                <p className="text-sm text-foreground/65 mt-1 leading-6">
                  Generate and organize onboarding links for future ecosystem
                  partners.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-gold/20 bg-gradient-to-br from-[#f8f3ec] via-[#f5f0ea] to-[#f3edf1] p-5">
              <p className="text-[10px] uppercase tracking-[0.22em] text-gold mb-2">
                Invitation Reference
              </p>

              <p className="font-mono text-lg text-card-foreground break-all">
                {inviteReference}
              </p>
            </div>

            <Field label="Generated Invitation Link">
              <div className="flex gap-2">
                <input className={inputCls} value={inviteLink} readOnly />

                <button
                  type="button"
                  onClick={copyLink}
                  className="h-11 w-11 shrink-0 rounded-xl border border-border bg-card hover:bg-muted transition-colors inline-flex items-center justify-center"
                >
                  <Copy size={16} />
                </button>
              </div>
            </Field>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={saveInvite}
                disabled={saving}
                className="h-11 px-5 rounded-xl bg-primary text-primary-foreground text-sm font-medium inline-flex items-center gap-2 disabled:opacity-50"
              >
                <Save size={16} />
                {saving ? "Saving..." : "Save Invite"}
              </button>

              <button
                type="button"
                onClick={copyLink}
                className="h-11 px-5 rounded-xl border border-border bg-card text-sm font-medium inline-flex items-center gap-2"
              >
                <Copy size={16} />
                Copy Link
              </button>
            </div>
          </div>

          <div className="bg-card rounded-[2rem] border border-border/60 shadow-sm p-6 md:p-8 space-y-5">
            <div className="flex items-start gap-3">
              <Mail className="text-gold shrink-0 mt-1" size={22} />

              <div>
                <h2 className="font-display text-2xl text-card-foreground">
                  Generated Follow-Up
                </h2>

                <p className="text-sm text-foreground/65 mt-1 leading-6">
                  Copy and send relationship follow-up messaging directly from
                  the owner console.
                </p>
              </div>
            </div>

            <Field label="Invitation Email">
              <textarea
                rows={12}
                className={textAreaCls}
                value={emailBody}
                readOnly
              />
            </Field>

            <Field label="Text Message Follow-Up">
              <textarea
                rows={8}
                className={textAreaCls}
                value={textMessage}
                readOnly
              />
            </Field>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={copyEmail}
                className="h-11 px-5 rounded-xl border border-border bg-card text-sm font-medium inline-flex items-center gap-2"
              >
                <Mail size={16} />
                Copy Email
              </button>

              <button
                type="button"
                onClick={copyText}
                className="h-11 px-5 rounded-xl border border-border bg-card text-sm font-medium inline-flex items-center gap-2"
              >
                <MessageSquareText size={16} />
                Copy Text
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="rounded-[2rem] border border-border/60 bg-muted/20 p-6 md:p-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
            <Building2 className="mb-4 text-primary" size={22} />

            <h3 className="font-display text-lg text-card-foreground">
              Relationship Capture
            </h3>

            <p className="mt-2 text-sm leading-7 text-foreground/65">
              Organize relationship details and prepare ecosystem onboarding
              invitations from one operational dashboard.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
            <MapPin className="mb-4 text-primary" size={22} />

            <h3 className="font-display text-lg text-card-foreground">
              Destination Organization
            </h3>

            <p className="mt-2 text-sm leading-7 text-foreground/65">
              Categorize partners by business type, destination, service area,
              and ecosystem relevance.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
            <Globe2 className="mb-4 text-primary" size={22} />

            <h3 className="font-display text-lg text-card-foreground">
              Future AI Ecosystem
            </h3>

            <p className="mt-2 text-sm leading-7 text-foreground/65">
              This system is being prepared for future AI-assisted destination
              collaboration, campaign creation, and ecosystem intelligence
              tools.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminInvitePage;