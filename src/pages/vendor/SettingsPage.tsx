// FILE: src/pages/vendor/SettingsPage.tsx

import { SectionHeader } from "@/components/vendor/VendorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  BadgeCheck,
  Bell,
  Building2,
  Globe2,
  KeyRound,
  Languages,
  LockKeyhole,
  MailCheck,
  ShieldCheck,
  UserRoundCog,
} from "lucide-react";

const Card = ({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) => (
  <section className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm md:p-8">
    <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-gold">
      {eyebrow}
    </p>

    <h2 className="font-display text-2xl text-card-foreground">{title}</h2>

    {description && (
      <p className="mt-2 max-w-2xl text-sm leading-6 text-foreground/65">
        {description}
      </p>
    )}

    <div className="mt-6">{children}</div>
  </section>
);

const Field = ({
  label,
  children,
  description,
}: {
  label: string;
  children: React.ReactNode;
  description?: string;
}) => (
  <div className="space-y-1.5">
    <Label className="text-xs uppercase tracking-[0.18em] text-foreground/60">
      {label}
    </Label>

    {children}

    {description && (
      <p className="text-xs leading-5 text-foreground/50">{description}</p>
    )}
  </div>
);

const Toggle = ({
  label,
  description,
  defaultChecked,
}: {
  label: string;
  description: string;
  defaultChecked?: boolean;
}) => (
  <div className="flex items-start justify-between gap-4 border-b border-border/50 py-3 last:border-0">
    <div>
      <p className="text-sm font-medium text-card-foreground">{label}</p>
      <p className="mt-0.5 text-xs leading-5 text-foreground/55">
        {description}
      </p>
    </div>

    <Switch defaultChecked={defaultChecked} />
  </div>
);

const SettingsPage = () => {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Partner Account"
        title="Account Settings & Partner Preferences"
        description="Manage account access, email verification, language preferences, logo/name permissions, notifications, and partner visibility settings."
      />

      <section className="rounded-[2rem] border border-gold/20 bg-gradient-to-br from-[#f8f3ec] via-[#f5f0ea] to-[#f3edf1] p-6 shadow-sm md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-gold">
              <BadgeCheck className="h-4 w-4" />
              Partner Member Record
            </div>

            <h2 className="font-display text-2xl text-card-foreground md:text-3xl">
              Your Serene Passage partner member details.
            </h2>

            <p className="mt-4 text-sm leading-7 text-foreground/70 md:text-base">
              This area will eventually display your partner member ID,
              invitation status, account verification, and business review
              details connected to your Serene Passage profile.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-white/70 p-5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-gold">
              Partner Member ID
            </p>

            <p className="mt-2 break-all font-mono text-lg text-card-foreground">
              SPI-INV-GEN-INT-PART-00000
            </p>

            <p className="mt-3 text-xs leading-5 text-foreground/55">
              Placeholder only. Future IDs should identify invite type,
              business category, country/location, verification confidence, and
              unique partner number.
            </p>
          </div>
        </div>
      </section>

      <Card
        eyebrow="Section A"
        title="Account Access & Verification"
        description="Partners should verify email access, maintain secure login credentials, and keep recovery details updated."
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-muted/20 p-5">
            <MailCheck className="mb-4 text-primary" size={22} />

            <h3 className="font-display text-lg text-card-foreground">
              Email Verification
            </h3>

            <p className="mt-2 text-sm leading-6 text-foreground/65">
              Please verify your email address to activate full partner portal
              access and receive important account messages.
            </p>

            <Button className="mt-5 rounded-full bg-primary px-5">
              Resend Verification Email
            </Button>
          </div>

          <div className="rounded-2xl border border-border/60 bg-muted/20 p-5">
            <KeyRound className="mb-4 text-primary" size={22} />

            <h3 className="font-display text-lg text-card-foreground">
              Username & Password
            </h3>

            <p className="mt-2 text-sm leading-6 text-foreground/65">
              Manage login details, update your password, or request support if
              your username or account email needs to be recovered.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button variant="outline" className="rounded-full">
                Change Password
              </Button>

              <Button variant="ghost" className="rounded-full">
                Forgot Username
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <Card
        eyebrow="Section B"
        title="Partner Profile Basics"
        description="These details help Serene Passage maintain accurate partner records and organize future collaboration opportunities."
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Field label="Business Name">
            <Input placeholder="Example: Island Pearl Excursions" />
          </Field>

          <Field label="Public / Brand Name">
            <Input placeholder="Example: Island Pearl Tours" />
          </Field>

          <Field label="Contact Person">
            <Input placeholder="Full name" />
          </Field>

          <Field label="Email">
            <Input type="email" placeholder="hello@business.com" />
          </Field>

          <Field label="Phone">
            <Input placeholder="+1 (555) 123-4567" />
          </Field>

          <Field label="Website">
            <Input placeholder="https://" />
          </Field>

          <Field label="City">
            <Input placeholder="Montego Bay" />
          </Field>

          <Field label="State / Province / Parish / Region">
            <Input placeholder="St. James Parish" />
          </Field>

          <Field label="Country">
            <Input placeholder="Jamaica" />
          </Field>

          <Field label="Postal Code">
            <Input placeholder="Postal code / ZIP" />
          </Field>

          <div className="md:col-span-2">
            <Field label="Business Address">
              <Input placeholder="Business address" />
            </Field>
          </div>
        </div>
      </Card>

      <Card
        eyebrow="Section C"
        title="Business & Service Settings"
        description="These settings help the system organize partners by category, service type, and destination relevance."
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Field label="Business Type">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select business type" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="llc">LLC</SelectItem>
                <SelectItem value="corporation">Corporation</SelectItem>
                <SelectItem value="partnership">Partnership</SelectItem>
                <SelectItem value="sole-proprietor">Sole Proprietor</SelectItem>
                <SelectItem value="independent-vendor">
                  Independent Vendor
                </SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Primary Business Category">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="hotel-resort">Hotel / Resort</SelectItem>
                <SelectItem value="excursion">Excursion / Tour</SelectItem>
                <SelectItem value="restaurant">Restaurant / Dining</SelectItem>
                <SelectItem value="transportation">Transportation</SelectItem>
                <SelectItem value="wedding">Destination Wedding</SelectItem>
                <SelectItem value="wellness">Wellness / Spa</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="local-vendor">Local Vendor</SelectItem>
                <SelectItem value="tourism">Tourism / Hospitality</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Service Category">
            <Input placeholder="VIP transfers, excursions, dining, event support, etc." />
          </Field>

          <Field label="Other Locations / Areas Served">
            <Input placeholder="Nearby hotels, cities, resorts, regions, airports, or service areas" />
          </Field>

          <div className="md:col-span-2">
            <Field label="Service Notes">
              <Textarea
                rows={4}
                placeholder="Share helpful details about how your business serves travelers, groups, retreats, weddings, or destination experiences."
              />
            </Field>
          </div>
        </div>
      </Card>

      <Card
        eyebrow="Section D"
        title="Logo, Name & Marketing Permission"
        description="Partners should confirm how Serene Passage may reference their name, logo, images, or materials in website and social media content."
      >
        <div className="divide-y divide-border/50">
          <Toggle
            label="Allow Serene Passage to display our business name"
            description="Your business name may appear in partner-related website, package, or collaboration materials."
            defaultChecked
          />

          <Toggle
            label="Allow Serene Passage to display our logo"
            description="Your logo may be used in approved partner listings, promotional materials, or collaboration previews."
          />

          <Toggle
            label="Allow Serene Passage to share approved images/media"
            description="Only approved partner media should be used in public-facing marketing or travel experience materials."
          />

          <Toggle
            label="Require final approval before public use"
            description="Request final partner confirmation before Serene Passage shares public-facing branded materials."
            defaultChecked
          />
        </div>
      </Card>

      <Card
        eyebrow="Section E"
        title="Language, Region & Communication"
        description="International partners may eventually use translated instructions, localized labels, and region-specific onboarding support."
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Field label="Preferred Language">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="french">French</SelectItem>
                <SelectItem value="portuguese">Portuguese</SelectItem>
                <SelectItem value="italian">Italian</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Preferred Region Format">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select region format" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="caribbean">Caribbean</SelectItem>
                <SelectItem value="latin-america">Latin America</SelectItem>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="global">Global / Other</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>

        <div className="mt-6 rounded-2xl border border-border/60 bg-muted/30 p-5">
          <div className="flex items-start gap-3">
            <Languages className="mt-1 shrink-0 text-primary" size={20} />

            <p className="text-sm leading-7 text-foreground/65">
              Future portal expansion should support translated onboarding,
              instructions, emails, profile fields, and account messages for
              international destination partners.
            </p>
          </div>
        </div>
      </Card>

      <Card
        eyebrow="Section F"
        title="Notification Preferences"
        description="Choose how Serene Passage communicates profile updates, revisions, collaboration requests, and review activity."
      >
        <div className="divide-y divide-border/50">
          <Toggle
            label="Email verification and account messages"
            description="Receive important account setup, verification, and recovery emails."
            defaultChecked
          />

          <Toggle
            label="Profile review updates"
            description="Be notified when Serene Passage reviews or updates your profile status."
            defaultChecked
          />

          <Toggle
            label="Revision requests"
            description="Get a message when Serene Passage requests updated details, files, or clarification."
            defaultChecked
          />

          <Toggle
            label="Collaboration opportunities"
            description="Receive notices about possible destination packages, group trips, weddings, retreats, or campaigns."
            defaultChecked
          />

          <Toggle
            label="Urgent review alerts"
            description="Receive higher-priority communication when timing-sensitive materials or opportunities need attention."
            defaultChecked
          />

          <Toggle
            label="Monthly relationship summary"
            description="A future monthly digest of collaboration activity, uploaded materials, and opportunity notes."
          />
        </div>
      </Card>

      <Card
        eyebrow="Section G"
        title="Account Recovery & Continuity"
        description="Business relationships should not depend on one employee or one email address."
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Field label="Backup Contact Name">
            <Input placeholder="Secondary contact" />
          </Field>

          <Field label="Backup Contact Email">
            <Input type="email" placeholder="backup@business.com" />
          </Field>

          <Field label="Backup Contact Phone">
            <Input placeholder="+1 (555) 123-4567" />
          </Field>

          <Field label="Authorized Account Recovery Contact">
            <Input placeholder="Who may approve account access changes?" />
          </Field>
        </div>

        <div className="mt-6 rounded-2xl border border-border/60 bg-muted/30 p-5">
          <div className="flex items-start gap-3">
            <UserRoundCog className="mt-1 shrink-0 text-primary" size={20} />

            <p className="text-sm leading-7 text-foreground/65">
              Future account recovery should allow Serene Passage to verify a
              company representative before updating login access, contact
              ownership, or partner account credentials.
            </p>
          </div>
        </div>
      </Card>

      <Card
        eyebrow="Section H"
        title="Visibility & Profile Actions"
        description="Control basic visibility preferences and request owner review when account details are updated."
      >
        <div className="divide-y divide-border/50">
          <Toggle
            label="Show profile in internal partner searches"
            description="Allows Serene Passage to find your business when building destination packages."
            defaultChecked
          />

          <Toggle
            label="Available for curated package consideration"
            description="Allows your business to be considered for traveler-facing packages, campaigns, and collaborations."
            defaultChecked
          />

          <Toggle
            label="Available for urgent opportunities"
            description="Allows Serene Passage to contact you for time-sensitive requests."
          />
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full bg-gold text-foreground hover:bg-gold/90">
            Save Settings
          </Button>

          <Button variant="outline" className="rounded-full">
            Request Profile Review
          </Button>

          <Button variant="ghost" className="rounded-full text-destructive hover:text-destructive">
            Deactivate Partner Profile
          </Button>
        </div>
      </Card>

      <div className="rounded-[2rem] border border-border/60 bg-muted/20 p-6">
        <div className="flex items-start gap-3">
          <LockKeyhole className="mt-1 shrink-0 text-primary" size={20} />

          <p className="text-sm leading-7 text-foreground/70">
            Future backend logic should protect owner/admin-only review labels,
            business verification notes, internal risk decisions, and partner
            confidence statuses from being shown publicly inside the standard
            partner settings view.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;