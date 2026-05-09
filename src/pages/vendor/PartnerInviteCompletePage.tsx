// FILE: src/pages/vendor/PartnerInviteCompletePage.tsx

import { useParams } from 'react-router-dom';
import { Building2, CheckCircle2, ShieldCheck, UploadCloud } from 'lucide-react';

import logo from '@/assets/logo.png';
import inviteHero from '@/assets/partner-portal/invite-partner-networking.png';

const inputCls =
  'w-full h-11 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring';

const textAreaCls =
  'w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring';

const Field = ({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) => (
  <div>
    <label className="text-xs tracking-wide uppercase text-foreground/60 mb-1.5 block">
      {label} {required && <span className="text-gold">*</span>}
    </label>
    {children}
  </div>
);

const formatInviteName = (slug = '') => {
  if (!slug) return 'Invited Partner';

  return slug
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const PartnerInviteCompletePage = () => {
  const { inviteSlug } = useParams();
  const partnerName = formatInviteName(inviteSlug);

  return (
    <div className="min-h-screen pt-16 md:pt-20 bg-background">
      <section className="relative overflow-hidden min-h-[420px] bg-[hsl(0,0%,8%)]">
        <img
          src={inviteHero}
          alt="Serene Passage International partner invitation"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/86 via-black/60 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-transparent to-black/25" />

        <div className="relative z-10 container py-14 min-h-[420px] flex items-center">
          <div className="max-w-3xl">
            <img
              src={logo}
              alt="Serene Passage International"
              className="h-20 w-auto mb-6 opacity-95"
            />

            <p className="text-[10px] tracking-[0.34em] uppercase text-gold mb-4">
              Partner Invitation
            </p>

            <h1 className="font-display text-4xl md:text-6xl text-cream leading-tight">
              Welcome, {partnerName}
            </h1>

            <p className="text-sm md:text-base text-cream/75 mt-5 max-w-2xl leading-relaxed">
              You’ve been invited to complete your Serene Passage International partner profile.
              This helps us better understand your company, your services, and the kinds of
              curated travel opportunities we may explore together.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-6 md:p-8 space-y-5">
              <div className="flex items-start gap-3">
                <Building2 className="text-gold shrink-0 mt-1" size={24} />
                <div>
                  <h2 className="font-display text-2xl text-card-foreground">
                    Company Information
                  </h2>
                  <p className="text-sm text-foreground/65 mt-1">
                    Please complete the core business details so Serene Passage can properly identify
                    and maintain the partnership relationship.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Company Name" required>
                  <input className={inputCls} defaultValue={partnerName !== 'Invited Partner' ? partnerName : ''} placeholder="Company / property name" required />
                </Field>

                <Field label="Brand / Property Name">
                  <input className={inputCls} placeholder="Resort, tour company, venue, etc." />
                </Field>

                <Field label="Main Company Phone" required>
                  <input className={inputCls} placeholder="+1 (000) 000-0000" required />
                </Field>

                <Field label="Main Company Email" required>
                  <input className={inputCls} placeholder="info@company.com" required />
                </Field>

                <Field label="Company Website">
                  <input className={inputCls} placeholder="https://www.company.com" />
                </Field>

                <Field label="Service Type" required>
                  <select className={inputCls} required>
                    <option value="">Select service type</option>
                    <option>Luxury Resort / Hotel</option>
                    <option>Destination Wedding Partner</option>
                    <option>Tour / Excursion Provider</option>
                    <option>Retreat Host / Wellness Partner</option>
                    <option>Cruise Partner</option>
                    <option>Transportation Partner</option>
                    <option>Tourism Board / Destination Partner</option>
                    <option>Other Travel Experience Partner</option>
                  </select>
                </Field>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-6 md:p-8 space-y-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-gold shrink-0 mt-1" size={24} />
                <div>
                  <h2 className="font-display text-2xl text-card-foreground">
                    Contact & Account Continuity
                  </h2>
                  <p className="text-sm text-foreground/65 mt-1">
                    Add both a primary and backup contact so the relationship is protected if team
                    members change roles later.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Primary Contact Name" required>
                  <input className={inputCls} placeholder="Full name" required />
                </Field>

                <Field label="Primary Contact Email" required>
                  <input className={inputCls} placeholder="contact@company.com" required />
                </Field>

                <Field label="Primary Contact Phone">
                  <input className={inputCls} placeholder="+1 (000) 000-0000" />
                </Field>

                <Field label="Primary Contact Title">
                  <input className={inputCls} placeholder="Sales Manager, Director, Owner, etc." />
                </Field>

                <Field label="Backup Contact Name">
                  <input className={inputCls} placeholder="Secondary contact" />
                </Field>

                <Field label="Backup Contact Email">
                  <input className={inputCls} placeholder="backup@company.com" />
                </Field>

                <Field label="Account Recovery Email">
                  <input className={inputCls} placeholder="partnerships@company.com" />
                </Field>

                <Field label="Authorized Reset Contact">
                  <input className={inputCls} placeholder="Who can approve access changes?" />
                </Field>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-6 md:p-8 space-y-5">
              <h2 className="font-display text-2xl text-card-foreground">
                Travel Opportunity Preview
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Destination / Region">
                  <input className={inputCls} placeholder="Jamaica, Caribbean, Mexico, Europe, etc." />
                </Field>

                <Field label="Best Fit">
                  <select className={inputCls}>
                    <option>Luxury Escapes</option>
                    <option>Destination Weddings</option>
                    <option>Romance Travel</option>
                    <option>Women’s Retreats</option>
                    <option>Group Travel</option>
                    <option>Wellness / Restoration</option>
                    <option>Excursions / Tours</option>
                  </select>
                </Field>
              </div>

              <Field label="Brief Description">
                <textarea
                  rows={5}
                  className={textAreaCls}
                  placeholder="Tell us about your company, experience, package, property, destination, or collaboration opportunity."
                />
              </Field>

              <Field label="Media / Website / Dropbox / Google Drive Links">
                <textarea
                  rows={4}
                  className={textAreaCls}
                  placeholder="Paste links to brochures, images, media kits, rate sheets, videos, or websites."
                />
              </Field>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button
                type="button"
                className="h-11 px-6 rounded-lg border border-border bg-card text-sm font-medium hover:bg-muted transition-colors"
              >
                Save Draft
              </button>

              <button
                type="submit"
                className="h-11 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 active:scale-[0.98] transition-all"
              >
                Complete Partner Profile
              </button>
            </div>
          </form>

          <aside className="space-y-4">
            <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-6">
              <CheckCircle2 className="text-gold mb-3" size={24} />
              <h3 className="font-display text-xl text-card-foreground">
                What Happens Next
              </h3>
              <p className="text-sm text-foreground/65 mt-2 leading-relaxed">
                Serene Passage will review your profile, learn more about your services, and identify
                possible alignment for future curated travel experiences.
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-6">
              <UploadCloud className="text-primary mb-3" size={24} />
              <h3 className="font-display text-xl text-card-foreground">
                Asset Sharing
              </h3>
              <p className="text-sm text-foreground/65 mt-2 leading-relaxed">
                You may share links to media kits, brochures, photos, videos, or rate sheets. Direct
                uploads will be added as the Partner Suite expands.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PartnerInviteCompletePage;