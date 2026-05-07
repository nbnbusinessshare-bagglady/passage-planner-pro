import { Check, RotateCcw, Eye } from 'lucide-react';
import { SectionHeader, StatusBadge } from '@/components/vendor/VendorLayout';

const submissions = [
  {
    vendor: 'Maison Voyage',
    title: 'Sedona Soul Reset',
    destination: 'Sedona, AZ · Mar 14–20, 2026',
    status: 'Submitted' as const,
    excerpt:
      'Seven days of vortex meditation, sunrise hikes, and private chef dinners under desert skies. Designed for women rediscovering stillness.',
  },
  {
    vendor: 'Casa Luz',
    title: 'Cartagena Cultural Immersion',
    destination: 'Cartagena, Colombia · Apr 04–10, 2026',
    status: 'Needs Revision' as const,
    excerpt:
      'Old-city walking tours, salsa nights at hidden venues, and a candlelit dinner inside a 17th-century courtyard.',
  },
  {
    vendor: 'Atelier Nomade',
    title: 'Anguilla Private Villa Escape',
    destination: 'Anguilla · Jun 18–24, 2026',
    status: 'Submitted' as const,
    excerpt:
      'Beachfront villa with private chef, daily yoga, and a sunset catamaran sail. Capped at 8 guests for intimacy.',
  },
];

const AdminReviewPage = () => {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Strategist Console"
        title="Campaign Review Center"
        description="Refine, approve, and publish vendor submissions with care."
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Pending Review', value: '6' },
          { label: 'Awaiting Revision', value: '2' },
          { label: 'Approved This Week', value: '11' },
        ].map((s) => (
          <div key={s.label} className="bg-card rounded-2xl border border-border/60 shadow-sm p-5">
            <p className="text-xs uppercase tracking-wider text-foreground/60">{s.label}</p>
            <p className="font-display text-3xl text-card-foreground mt-2">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-5">
        {submissions.map((s) => (
          <article key={s.title} className="bg-card rounded-2xl border border-border/60 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr]">
              {/* Preview */}
              <div className="bg-gradient-to-br from-lavender/30 via-cream to-rose/20 p-6 flex flex-col justify-between min-h-[200px]">
                <div>
                  <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-2">Campaign Preview</p>
                  <h3 className="font-display text-xl text-card-foreground leading-tight">{s.title}</h3>
                  <p className="font-script text-sm text-foreground/70 mt-1">{s.destination}</p>
                </div>
                <p className="text-[11px] text-foreground/60 mt-4">by {s.vendor}</p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm text-foreground/80 leading-relaxed">{s.excerpt}</p>
                  <StatusBadge status={s.status} />
                </div>

                <div>
                  <label className="text-xs tracking-wide uppercase text-foreground/60 mb-1.5 block">
                    Revision Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Share refinements, suggested copy edits, or imagery guidance…"
                    className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  <button className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg border border-border bg-card text-xs font-medium hover:bg-muted transition-colors">
                    <RotateCcw size={13} /> Request Revision
                  </button>
                  <button className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-sage/40 text-foreground text-xs font-medium hover:bg-sage/60 transition-colors">
                    <Check size={13} /> Approve Campaign
                  </button>
                  <button className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-all">
                    <Eye size={13} /> Move to Public Preview
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AdminReviewPage;