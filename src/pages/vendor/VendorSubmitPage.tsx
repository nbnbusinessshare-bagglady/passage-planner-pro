// FILE: src/pages/vendor/VendorSubmitPage.tsx

import { useState } from "react";
import {
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Globe2,
  Handshake,
  MapPin,
  Save,
  ShieldCheck,
  Sparkles,
  Upload,
  Wand2,
} from "lucide-react";

import { SectionHeader } from "@/components/vendor/VendorLayout";
import { supabase } from "@/lib/supabase";

const Field = ({
  label,
  children,
  description,
}: {
  label: string;
  children: React.ReactNode;
  description?: string;
}) => (
  <div>
    <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-foreground/60">
      {label}
    </label>

    {children}

    {description && (
      <p className="mt-2 text-xs leading-5 text-foreground/50">
        {description}
      </p>
    )}
  </div>
);

const inputCls =
  "h-11 w-full rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

const textAreaCls =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

const businessTypes = [
  "Hotel",
  "Resort",
  "Villa",
  "Excursion Company",
  "Transportation Provider",
  "Wedding Vendor",
  "Restaurant / Café",
  "Spa / Wellness Provider",
  "Entertainment Company",
  "Tourism Board",
  "Retreat Host",
  "Photographer / Media",
  "Cruise Partner",
  "Airline Partner",
  "Local Experience Provider",
  "Security / Safety Service",
];

const serviceCategories = [
  "Luxury Hospitality",
  "Destination Weddings",
  "Group Travel",
  "Women’s Retreats",
  "Wellness Experiences",
  "Transportation & Transfers",
  "Excursions & Activities",
  "Dining Experiences",
  "Nightlife & Entertainment",
  "Cultural Experiences",
  "VIP / Concierge Services",
  "Security & Traveler Support",
  "Seasonal Promotions",
  "Event Coordination",
];

const collaborationInterests = [
  "Destination Weddings",
  "Retreat Partnerships",
  "Group Travel",
  "Luxury Curated Packages",
  "Seasonal Promotions",
  "Cruise Add-On Experiences",
  "VIP Transportation",
  "Dining Collaborations",
  "Wellness Experiences",
  "Cultural Immersion Experiences",
];

const VendorSubmitPage = () => {
  const [saving, setSaving] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const [form, setForm] = useState({
    legalBusinessName: "",
    publicBusinessName: "",
    mainPhone: "",
    mainEmail: "",
    website: "",
    department: "",
    businessType: "",
    serviceCategory: "",
    country: "",
    cityRegion: "",
    nearbyProperties: "",
    serviceArea: "",
    transportationAccess: "",
    groupCapacity: "",
    businessOverview: "",
    specialRates: "",
    travelerExperience: "",
    collaborationStyle: "",
    seasonalNotes: "",
    primaryContactName: "",
    primaryContactTitle: "",
    primaryContactEmail: "",
    primaryContactPhone: "",
    backupContactName: "",
    backupContactEmail: "",
    ownerNotes: "",
  });

  const update = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  const resetForm = () => {
    setForm({
      legalBusinessName: "",
      publicBusinessName: "",
      mainPhone: "",
      mainEmail: "",
      website: "",
      department: "",
      businessType: "",
      serviceCategory: "",
      country: "",
      cityRegion: "",
      nearbyProperties: "",
      serviceArea: "",
      transportationAccess: "",
      groupCapacity: "",
      businessOverview: "",
      specialRates: "",
      travelerExperience: "",
      collaborationStyle: "",
      seasonalNotes: "",
      primaryContactName: "",
      primaryContactTitle: "",
      primaryContactEmail: "",
      primaryContactPhone: "",
      backupContactName: "",
      backupContactEmail: "",
      ownerNotes: "",
    });

    setSelectedInterests([]);
  };

  const saveProfile = async (status: "Draft" | "Submitted") => {
    try {
      setSaving(true);

      const payload = {
        legal_business_name: form.legalBusinessName,
        public_business_name: form.publicBusinessName,
        business_type: form.businessType,
        service_category: form.serviceCategory,
        country: form.country,
        city_region: form.cityRegion,
        group_capacity: form.groupCapacity,
        business_overview: `Business Overview:
${form.businessOverview}

Special Rates / Promotions:
${form.specialRates}

Traveler Experience:
${form.travelerExperience}

Preferred Collaboration Style:
${form.collaborationStyle}

Availability / Seasonal Notes:
${form.seasonalNotes}

Nearby Hotels / Resorts:
${form.nearbyProperties}

Primary Service Area:
${form.serviceArea}

Transportation Access:
${form.transportationAccess}

Primary Department:
${form.department}

Website:
${form.website}

Media / Document Notes:
${form.ownerNotes}

Backup Contact:
${form.backupContactName}
${form.backupContactEmail}`,
        primary_contact_name: form.primaryContactName,
        primary_contact_title: form.primaryContactTitle,
        primary_contact_email: form.primaryContactEmail || form.mainEmail,
        primary_contact_phone: form.primaryContactPhone || form.mainPhone,
        collaboration_interests: selectedInterests,
        submission_status: status,
      };

      const { error } = await supabase.from("partner_profiles").insert([payload]);

      if (error) {
        console.error(error);
        alert("Supabase profile save failed. Check console for details.");
        return;
      }

      const existing = JSON.parse(
        localStorage.getItem("spi-partner-profiles") || "[]"
      );

      const updatedProfile = {
        ...form,
        collaborationInterests: selectedInterests,
        submissionStatus: status,
        savedAt: new Date().toISOString(),
      };

      localStorage.setItem(
        "spi-partner-profiles",
        JSON.stringify([...existing, updatedProfile])
      );

      alert(
        status === "Submitted"
          ? "Partner profile submitted for Serene Passage review."
          : "Partner profile draft saved."
      );

      if (status === "Submitted") {
        resetForm();
      }
    } catch (err) {
      console.error(err);
      alert("Unexpected error saving profile.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Partner Ecosystem Onboarding"
        title="Partner Submission & Collaboration Profile"
        description="Help Serene Passage International understand your business, destination services, collaboration opportunities, and how your company fits within curated travel experiences."
      />

      <section className="rounded-[2rem] border border-gold/20 bg-gradient-to-br from-[#f8f3ec] via-[#f5f0ea] to-[#f3edf1] p-6 shadow-sm md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-gold">
              <Handshake className="h-4 w-4" />
              Luxury Travel Collaboration Ecosystem
            </div>

            <h2 className="font-display text-2xl text-card-foreground md:text-3xl">
              This is more than a vendor application.
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/70 md:text-base">
              Serene Passage International is building a relationship-driven
              travel ecosystem designed to connect trusted partners into curated
              destination experiences. This profile helps us understand your
              services, location, specialties, collaboration interests, and how
              your business may fit into future travel opportunities.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-white/70 p-5">
            <Sparkles className="mb-3 text-gold" size={22} />

            <h3 className="font-display text-lg text-card-foreground">
              Review-Ready Partner Profile
            </h3>

            <p className="mt-2 text-sm leading-6 text-foreground/65">
              Once submitted, this information will help the Serene Passage
              owner review your business, understand your services, organize
              collaboration potential, and prepare future ecosystem placement.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
          <CheckCircle2 className="mb-3 text-primary" size={22} />

          <h3 className="font-display text-lg text-card-foreground">
            Step 1: Business Details
          </h3>

          <p className="mt-2 text-sm leading-6 text-foreground/65">
            Share who you are, where you operate, and how travelers experience
            your services.
          </p>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
          <Upload className="mb-3 text-primary" size={22} />

          <h3 className="font-display text-lg text-card-foreground">
            Step 2: Assets & Notes
          </h3>

          <p className="mt-2 text-sm leading-6 text-foreground/65">
            Uploads are coming next. For now, describe key brochures, photos,
            rates, and documents that should be shared.
          </p>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
          <ClipboardCheck className="mb-3 text-primary" size={22} />

          <h3 className="font-display text-lg text-card-foreground">
            Step 3: Owner Review
          </h3>

          <p className="mt-2 text-sm leading-6 text-foreground/65">
            Serene Passage reviews partner fit, service quality, destination
            relevance, and collaboration potential.
          </p>
        </div>
      </section>

      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
        <section className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm md:p-8">
          <div className="mb-6 flex items-start gap-3">
            <Building2 className="mt-1 text-primary" size={22} />

            <div>
              <h2 className="font-display text-2xl text-card-foreground">
                Business Information
              </h2>

              <p className="mt-1 text-sm text-foreground/65">
                Basic business details and company structure.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="Legal Business Name">
              <input
                className={inputCls}
                value={form.legalBusinessName}
                onChange={(e) => update("legalBusinessName", e.target.value)}
                placeholder="Example: Blue Horizon Hospitality Group"
              />
            </Field>

            <Field label="Brand / Public Business Name">
              <input
                className={inputCls}
                value={form.publicBusinessName}
                onChange={(e) => update("publicBusinessName", e.target.value)}
                placeholder="Example: Blue Horizon Jamaica"
              />
            </Field>

            <Field label="Main Business Phone Number">
              <input
                className={inputCls}
                value={form.mainPhone}
                onChange={(e) => update("mainPhone", e.target.value)}
                placeholder="+1 (000) 000-0000"
              />
            </Field>

            <Field label="Main Business Email">
              <input
                className={inputCls}
                value={form.mainEmail}
                onChange={(e) => update("mainEmail", e.target.value)}
                placeholder="info@company.com"
              />
            </Field>

            <Field label="Business Website">
              <input
                className={inputCls}
                value={form.website}
                onChange={(e) => update("website", e.target.value)}
                placeholder="https://www.company.com"
              />
            </Field>

            <Field label="Primary Department">
              <input
                className={inputCls}
                value={form.department}
                onChange={(e) => update("department", e.target.value)}
                placeholder="Partnerships, Weddings, Sales, Tourism, etc."
              />
            </Field>

            <Field label="Business Type">
              <select
                className={inputCls}
                value={form.businessType}
                onChange={(e) => update("businessType", e.target.value)}
              >
                <option value="">Select Business Type</option>
                {businessTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </Field>

            <Field label="Primary Service Category">
              <select
                className={inputCls}
                value={form.serviceCategory}
                onChange={(e) => update("serviceCategory", e.target.value)}
              >
                <option value="">Select Service Category</option>
                {serviceCategories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </Field>
          </div>
        </section>

        <section className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm md:p-8">
          <div className="mb-6 flex items-start gap-3">
            <MapPin className="mt-1 text-primary" size={22} />

            <div>
              <h2 className="font-display text-2xl text-card-foreground">
                Destination & Location Information
              </h2>

              <p className="mt-1 text-sm text-foreground/65">
                Help Serene Passage understand where your services operate and
                which destinations you support.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="Country">
              <input
                className={inputCls}
                value={form.country}
                onChange={(e) => update("country", e.target.value)}
                placeholder="Jamaica, Greece, Costa Rica, etc."
              />
            </Field>

            <Field label="City / Region">
              <input
                className={inputCls}
                value={form.cityRegion}
                onChange={(e) => update("cityRegion", e.target.value)}
                placeholder="Montego Bay, Negril, Santorini, etc."
              />
            </Field>

            <Field label="Nearby Hotels / Resorts">
              <input
                className={inputCls}
                value={form.nearbyProperties}
                onChange={(e) => update("nearbyProperties", e.target.value)}
                placeholder="List nearby properties or destination zones"
              />
            </Field>

            <Field label="Primary Service Area">
              <input
                className={inputCls}
                value={form.serviceArea}
                onChange={(e) => update("serviceArea", e.target.value)}
                placeholder="Airport zone, resort corridor, city center, etc."
              />
            </Field>

            <Field label="Transportation Access">
              <input
                className={inputCls}
                value={form.transportationAccess}
                onChange={(e) => update("transportationAccess", e.target.value)}
                placeholder="Airport transfers, shuttle zones, pickup areas"
              />
            </Field>

            <Field label="Group Capacity">
              <input
                className={inputCls}
                value={form.groupCapacity}
                onChange={(e) => update("groupCapacity", e.target.value)}
                placeholder="Example: 10–150 guests"
              />
            </Field>
          </div>
        </section>

        <section className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm md:p-8">
          <div className="mb-6 flex items-start gap-3">
            <Globe2 className="mt-1 text-primary" size={22} />

            <div>
              <h2 className="font-display text-2xl text-card-foreground">
                Services & Collaboration Opportunities
              </h2>

              <p className="mt-1 text-sm text-foreground/65">
                Help us understand how your services may fit within curated
                travel experiences.
              </p>
            </div>
          </div>

          <Field
            label="Business Overview"
            description="Describe your company, destination experience, and what makes your services unique."
          >
            <textarea
              rows={5}
              className={textAreaCls}
              value={form.businessOverview}
              onChange={(e) => update("businessOverview", e.target.value)}
              placeholder="Share details about your services, hospitality style, experiences, specialties, and what travelers can expect."
            />
          </Field>

          <div className="mt-6">
            <label className="mb-4 block text-xs uppercase tracking-[0.18em] text-foreground/60">
              Collaboration Interests
            </label>

            <div className="flex flex-wrap gap-3">
              {collaborationInterests.map((interest) => {
                const selected = selectedInterests.includes(interest);

                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`rounded-full border px-4 py-2 text-sm transition-all ${
                      selected
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground/70 hover:border-primary/40 hover:bg-muted"
                    }`}
                  >
                    {interest}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="Special Rates / Promotions">
              <textarea
                rows={4}
                className={textAreaCls}
                value={form.specialRates}
                onChange={(e) => update("specialRates", e.target.value)}
                placeholder="Share any preferred partner pricing, promotions, packages, or seasonal opportunities."
              />
            </Field>

            <Field label="Traveler Experience Details">
              <textarea
                rows={4}
                className={textAreaCls}
                value={form.travelerExperience}
                onChange={(e) => update("travelerExperience", e.target.value)}
                placeholder="Describe the type of experience travelers receive from your services."
              />
            </Field>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="Preferred Collaboration Style">
              <select
                className={inputCls}
                value={form.collaborationStyle}
                onChange={(e) => update("collaborationStyle", e.target.value)}
              >
                <option value="">Select Collaboration Style</option>
                <option>Destination Weddings</option>
                <option>Luxury Group Travel</option>
                <option>Wellness Retreats</option>
                <option>Excursion Partnerships</option>
                <option>Dining Collaborations</option>
                <option>Transportation Partnerships</option>
                <option>Seasonal Campaigns</option>
              </select>
            </Field>

            <Field label="Availability / Seasonal Notes">
              <input
                className={inputCls}
                value={form.seasonalNotes}
                onChange={(e) => update("seasonalNotes", e.target.value)}
                placeholder="Year-round, seasonal, event-based, etc."
              />
            </Field>
          </div>
        </section>

        <section className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm md:p-8">
          <div className="mb-6 flex items-start gap-3">
            <ShieldCheck className="mt-1 text-gold" size={22} />

            <div>
              <h2 className="font-display text-2xl text-card-foreground">
                Business Continuity & Backup Contacts
              </h2>

              <p className="mt-1 text-sm text-foreground/65">
                Protecting partnership continuity beyond one employee or
                representative.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="Primary Contact Name">
              <input
                className={inputCls}
                value={form.primaryContactName}
                onChange={(e) => update("primaryContactName", e.target.value)}
                placeholder="Full name"
              />
            </Field>

            <Field label="Primary Contact Title">
              <input
                className={inputCls}
                value={form.primaryContactTitle}
                onChange={(e) => update("primaryContactTitle", e.target.value)}
                placeholder="Sales Director, Partnership Manager, etc."
              />
            </Field>

            <Field label="Primary Contact Email">
              <input
                className={inputCls}
                value={form.primaryContactEmail}
                onChange={(e) => update("primaryContactEmail", e.target.value)}
                placeholder="contact@company.com"
              />
            </Field>

            <Field label="Primary Contact Phone">
              <input
                className={inputCls}
                value={form.primaryContactPhone}
                onChange={(e) => update("primaryContactPhone", e.target.value)}
                placeholder="+1 (000) 000-0000"
              />
            </Field>

            <Field label="Backup Contact Name">
              <input
                className={inputCls}
                value={form.backupContactName}
                onChange={(e) => update("backupContactName", e.target.value)}
                placeholder="Secondary contact"
              />
            </Field>

            <Field label="Backup Contact Email">
              <input
                className={inputCls}
                value={form.backupContactEmail}
                onChange={(e) => update("backupContactEmail", e.target.value)}
                placeholder="backup@company.com"
              />
            </Field>
          </div>
        </section>

        <section className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm md:p-8">
          <div className="mb-6 flex items-start gap-3">
            <Upload className="mt-1 text-primary" size={22} />

            <div>
              <h2 className="font-display text-2xl text-card-foreground">
                Media & Supporting Assets
              </h2>

              <p className="mt-1 text-sm text-foreground/65">
                Upload tools will support destination media, brochures, rate
                sheets, videos, and promotional assets.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-dashed border-border bg-muted/20 p-10 text-center transition-colors hover:bg-muted/40">
            <Upload className="mx-auto mb-4 text-foreground/40" size={32} />

            <p className="text-sm font-medium text-foreground/75">
              Upload functionality coming next
            </p>

            <p className="mt-2 text-xs leading-6 text-foreground/50">
              JPG, PNG, PDF, MP4, brochures, destination photos, rate sheets,
              media kits, promotional videos, and package documents.
            </p>
          </div>

          <Field
            label="Media / Document Notes"
            description="Until upload storage is connected, list any files, images, brochures, rates, menus, or documents you plan to provide."
          >
            <textarea
              rows={5}
              className={textAreaCls}
              value={form.ownerNotes}
              onChange={(e) => update("ownerNotes", e.target.value)}
              placeholder="Example: I can provide resort photos, group menu, wedding brochure, excursion rates, transportation zones, media kit..."
            />
          </Field>
        </section>

        <section className="rounded-[2rem] border border-gold/20 bg-gradient-to-br from-[#f8f3ec] via-[#f5f0ea] to-[#f3edf1] p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-gold">
                <Wand2 className="h-4 w-4" />
                Future AI Collaboration Layer
              </div>

              <h2 className="font-display text-2xl text-card-foreground md:text-3xl">
                Helping partners collaborate more intelligently.
              </h2>

              <p className="mt-4 text-sm leading-7 text-foreground/70 md:text-base">
                Future portal tools may help partners generate promotions,
                identify collaboration opportunities, participate in curated
                destination packages, and build more coordinated travel
                experiences.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                disabled={saving}
                onClick={() => saveProfile("Draft")}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 text-sm font-medium transition-colors hover:bg-muted disabled:opacity-50"
              >
                <Save size={16} />
                {saving ? "Saving..." : "Save Draft"}
              </button>

              <button
                type="button"
                disabled={saving}
                onClick={() => saveProfile("Submitted")}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
              >
                <ClipboardCheck size={16} />
                {saving ? "Submitting..." : "Submit Partner Profile"}
              </button>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default VendorSubmitPage;