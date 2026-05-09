// FILE: src/pages/vendor/VendorSubmitPage.tsx

import { Upload, ShieldCheck } from 'lucide-react';
import { SectionHeader } from '@/components/vendor/VendorLayout';

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <label className="text-xs tracking-wide uppercase text-foreground/60 mb-1.5 block">{label}</label>
    {children}
  </div>
);

const inputCls =
  'w-full h-11 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring';

const textAreaCls =
  'w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring';

const VendorSubmitPage = () => {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Travel Opportunity"
        title="Submit Travel Opportunity"
        description="Share your company details, contact information, and travel opportunity so Serene Passage International can review it for future curated client experiences."
      />

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-6 md:p-8 space-y-5">
          <h2 className="font-display text-xl text-card-foreground">Company Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Legal Business / Company Name">
              <input className={inputCls} placeholder="Example: Blue Horizon Resort Group" />
            </Field>

            <Field label="Brand / Property Name">
              <input className={inputCls} placeholder="Example: Blue Horizon Villas Jamaica" />
            </Field>

            <Field label="Main Company Phone Number">
              <input className={inputCls} placeholder="+1 (000) 000-0000" />
            </Field>

            <Field label="Main Company Email">
              <input className={inputCls} placeholder="info@company.com" />
            </Field>

            <Field label="Department">
              <input className={inputCls} placeholder="Sales, Groups, Weddings, Tourism, Partnerships" />
            </Field>

            <Field label="Company Website">
              <input className={inputCls} placeholder="https://www.company.com" />
            </Field>
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-6 md:p-8 space-y-5">
          <h2 className="font-display text-xl text-card-foreground">Primary Contact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Primary Contact Name">
              <input className={inputCls} placeholder="Full name" />
            </Field>

            <Field label="Primary Contact Title">
              <input className={inputCls} placeholder="Sales Manager, Partnership Director, etc." />
            </Field>

            <Field label="Primary Contact Email">
              <input className={inputCls} placeholder="contact@company.com" />
            </Field>

            <Field label="Primary Contact Phone">
              <input className={inputCls} placeholder="+1 (000) 000-0000" />
            </Field>
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-6 md:p-8 space-y-5">
          <div className="flex items-start gap-3">
            <ShieldCheck className="text-gold mt-1 shrink-0" size={22} />
            <div>
              <h2 className="font-display text-xl text-card-foreground">Backup Contact & Account Continuity</h2>
              <p className="text-sm text-foreground/65 mt-1">
                This helps protect the company account if the primary contact changes roles, leaves the company,
                or used an email the company can no longer access.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Backup Contact Name">
              <input className={inputCls} placeholder="Full name" />
            </Field>

            <Field label="Backup Contact Title / Department">
              <input className={inputCls} placeholder="General Manager, Sales Office, Partnerships, etc." />
            </Field>

            <Field label="Backup Contact Email">
              <input className={inputCls} placeholder="backup@company.com" />
            </Field>

            <Field label="Backup Contact Phone">
              <input className={inputCls} placeholder="+1 (000) 000-0000" />
            </Field>

            <Field label="Account Recovery Email">
              <input className={inputCls} placeholder="admin@company.com or partnerships@company.com" />
            </Field>

            <Field label="Authorized Reset Contact">
              <input className={inputCls} placeholder="Who can approve future account access changes?" />
            </Field>
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-6 md:p-8 space-y-5">
          <h2 className="font-display text-xl text-card-foreground">Travel Opportunity Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Destination">
              <input className={inputCls} placeholder="Jamaica, Costa Rica, Greece, Dubai, etc." />
            </Field>

            <Field label="Experience Type">
              <select className={inputCls}>
                <option>Luxury Resort / Hotel</option>
                <option>Destination Wedding</option>
                <option>Romance Travel</option>
                <option>Wellness Retreat</option>
                <option>Women’s Retreat</option>
                <option>Group Travel</option>
                <option>Cruise</option>
                <option>Excursion</option>
                <option>Cultural Experience</option>
                <option>Transportation / Transfers</option>
                <option>Destination Event</option>
              </select>
            </Field>

            <Field label="Available Travel Dates">
              <input className={inputCls} placeholder="Example: March–June 2026 or year-round" />
            </Field>

            <Field label="Group Capacity / Availability">
              <input className={inputCls} placeholder="Example: 10–50 guests, 20 rooms, private group capacity" />
            </Field>

            <Field label="Partner Rate / Net Rate Notes">
              <input className={inputCls} placeholder="Example: net rate, group rate, seasonal rate, commissionable rate" />
            </Field>

            <Field label="Booking / Hold Deadline">
              <input className={inputCls} placeholder="Example: Must confirm by May 15, 2026" />
            </Field>
          </div>

          <Field label="Opportunity Summary">
            <textarea
              rows={5}
              className={textAreaCls}
              placeholder="Describe the opportunity, package, property, destination, retreat, cruise, event, or experience being offered."
            />
          </Field>

          <Field label="Included Features / Inclusions">
            <textarea
              rows={4}
              className={textAreaCls}
              placeholder="Rooms, meals, transfers, excursions, spa, private events, wedding inclusions, group perks, upgrades, etc."
            />
          </Field>

          <Field label="Special Terms / Notes for Serene Passage">
            <textarea
              rows={4}
              className={textAreaCls}
              placeholder="Minimum group size, blackout dates, preferred booking process, commission details, payment terms, or other important notes."
            />
          </Field>
        </div>

        <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-6 md:p-8 space-y-5">
          <h2 className="font-display text-xl text-card-foreground">Assets & Supporting Materials</h2>

          <Field label="Upload Experience Assets">
            <div className="border-2 border-dashed border-border rounded-xl p-8 text-center bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer">
              <Upload className="mx-auto text-foreground/40 mb-2" size={28} />
              <p className="text-sm text-foreground/70">
                Drop photos, brochures, flyers, rate sheets, videos, or media kits
              </p>
              <p className="text-xs text-foreground/50 mt-1">
                JPG, PNG, PDF, MP4 · Upload connection coming soon
              </p>
            </div>
          </Field>

          <Field label="Preferred Curation Style">
            <select className={inputCls}>
              <option>Luxury Editorial Feature</option>
              <option>Destination Wedding Feature</option>
              <option>Women’s Retreat Collaboration</option>
              <option>Wellness / Restoration Experience</option>
              <option>Group Travel Feature</option>
              <option>Romance Travel Edit</option>
              <option>Seasonal Promotion</option>
            </select>
          </Field>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <button
            type="button"
            className="h-11 px-6 rounded-lg border border-border bg-card text-sm font-medium hover:bg-muted transition-colors"
          >
            Save as Draft
          </button>

          <button
            type="submit"
            className="h-11 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 active:scale-[0.98] transition-all"
          >
            Submit for Curation
          </button>
        </div>
      </form>
    </div>
  );
};

export default VendorSubmitPage;