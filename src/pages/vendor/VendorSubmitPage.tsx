import { Upload } from 'lucide-react';
import { SectionHeader } from '@/components/vendor/VendorLayout';

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <label className="text-xs tracking-wide uppercase text-foreground/60 mb-1.5 block">{label}</label>
    {children}
  </div>
);

const inputCls = 'w-full h-11 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring';

const VendorSubmitPage = () => {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Travel Opportunity"
        title="Submit Travel Opportunity"
        description="Share the details of your offering. Our travel curators will collaborate with you to shape it into a customer-facing experience."
      />

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-6 md:p-8 space-y-5">
          <h2 className="font-display text-lg text-card-foreground">Partner & Destination</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Travel Partner"><input className={inputCls} placeholder="Maison Voyage" /></Field>
            <Field label="Destination"><input className={inputCls} placeholder="Sedona, Arizona" /></Field>
            <Field label="Experience Type">
              <select className={inputCls}>
                <option>Wellness Retreat</option>
                <option>Cultural Immersion</option>
                <option>Luxury Villa / Resort</option>
                <option>Romance Travel</option>
                <option>Excursion</option>
                <option>Cruise</option>
                <option>Wedding</option>
                <option>Group Experience</option>
                <option>Destination Event</option>
              </select>
            </Field>
            <Field label="Dates"><input className={inputCls} placeholder="Mar 14 – 20, 2026" /></Field>
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-6 md:p-8 space-y-5">
          <h2 className="font-display text-lg text-card-foreground">Experience Details</h2>
          <Field label="Exclusive Partner Rate">
            <input className={inputCls} placeholder="$3,200 – $4,800 per traveler · partner net rate" />
          </Field>
          <Field label="Experience Story">
            <textarea
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Describe the soul of this journey — what makes it unforgettable…"
            />
          </Field>
          <Field label="Included Moments">
            <textarea
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Sunrise hikes, private chef dinners, vortex meditation, spa rituals…"
            />
          </Field>
        </div>

        <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-6 md:p-8 space-y-5">
          <h2 className="font-display text-lg text-card-foreground">Assets & Curation Preferences</h2>
          <Field label="Upload Experience Assets">
            <div className="border-2 border-dashed border-border rounded-xl p-8 text-center bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer">
              <Upload className="mx-auto text-foreground/40 mb-2" size={28} />
              <p className="text-sm text-foreground/70">Drop editorial photography, brochures, or video</p>
              <p className="text-xs text-foreground/50 mt-1">JPG, PNG, PDF, MP4 · Up to 50 MB each</p>
            </div>
          </Field>
          <Field label="Preferred Curation Style">
            <select className={inputCls}>
              <option>Editorial & Storytelling</option>
              <option>Exclusive Luxury Feature</option>
              <option>Women's Retreat Collaboration</option>
              <option>Cultural Spotlight</option>
              <option>Seasonal Collection</option>
              <option>Romance Travel Edit</option>
            </select>
          </Field>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <button type="button" className="h-11 px-6 rounded-lg border border-border bg-card text-sm font-medium hover:bg-muted transition-colors">
            Save as Draft
          </button>
          <button type="submit" className="h-11 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 active:scale-[0.98] transition-all">
            Submit for Curation
          </button>
        </div>
      </form>
    </div>
  );
};

export default VendorSubmitPage;