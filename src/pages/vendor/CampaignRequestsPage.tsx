import { SectionHeader, StatusBadge, type CollabStatus } from '@/components/vendor/VendorLayout';
import { Button } from '@/components/ui/button';
import { Eye, MessageSquare, Copy } from 'lucide-react';

const summary: { label: string; count: number; tone: string }[] = [
  { label: 'Drafts', count: 2, tone: 'bg-muted' },
  { label: 'Submitted', count: 3, tone: 'bg-lavender/30' },
  { label: 'In Curation', count: 1, tone: 'bg-rose/30' },
  { label: 'Featured Experiences', count: 5, tone: 'bg-gold/25' },
];

const campaigns: {
  title: string;
  vendor: string;
  destination: string;
  status: CollabStatus;
  updated: string;
  description: string;
}[] = [
  {
    title: 'Spring Wellness Co-curation',
    vendor: 'Maison Voyage',
    destination: 'Sedona, Arizona',
    status: 'Submitted',
    updated: '2 days ago',
    description: 'A collaborative wellness escape pairing desert sound baths with curated spa rituals.',
  },
  {
    title: 'Travel Edit Feature: Sedona Reset',
    vendor: 'Maison Voyage',
    destination: 'Sedona, Arizona',
    status: 'Featured Experience',
    updated: '1 week ago',
    description: 'Editorial feature for the homepage Travel Edit highlighting the Sedona reset experience.',
  },
  {
    title: 'Cartagena Cultural Immersion',
    vendor: 'Casa Luz',
    destination: 'Cartagena, Colombia',
    status: 'Needs Revision',
    updated: 'Yesterday',
    description: 'Multi-day cultural itinerary featuring private dinners, dance, and old town immersion.',
  },
];

const stages = ['Draft', 'Submitted', 'Reviewed', 'Curated', 'Approved', 'Featured Experience'];

const CampaignRequestsPage = () => {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Collaboration"
        title="Experience Collaborations"
        description="Track collaborative work between your team and our travel curators — from first idea to featured experience."
      />

      {/* Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {summary.map((s) => (
          <div key={s.label} className="bg-card rounded-2xl border border-border/60 shadow-sm p-5">
            <p className="text-[10px] tracking-[0.22em] uppercase text-foreground/55">{s.label}</p>
            <div className="flex items-end justify-between mt-3">
              <p className="font-display text-3xl text-card-foreground">{s.count}</p>
              <span className={`h-2 w-2 rounded-full ${s.tone.split(' ')[0]}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Workflow bar */}
      <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-6">
        <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-4">Collaboration Journey</p>
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {stages.map((s, i) => (
            <div key={s} className="flex items-center gap-2 shrink-0">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/70 bg-background text-xs text-foreground/75">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {s}
              </div>
              {i < stages.length - 1 && <span className="text-foreground/30">→</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Campaign list */}
      <div className="space-y-4">
        <div>
          <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-1">Active Collaborations</p>
          <h2 className="font-display text-xl text-card-foreground">Curated Experience Requests</h2>
        </div>
        {campaigns.map((c) => (
          <div
            key={c.title}
            className="bg-card rounded-2xl border border-border/60 shadow-sm p-6 flex flex-col lg:flex-row lg:items-center gap-5"
          >
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="font-display text-lg text-card-foreground">{c.title}</h3>
                <StatusBadge status={c.status} />
              </div>
              <p className="text-sm text-foreground/70 mb-3">{c.description}</p>
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-foreground/55">
                <span>Travel Partner: <span className="text-foreground/75">{c.vendor}</span></span>
                <span>Destination: <span className="text-foreground/75">{c.destination}</span></span>
                <span>Updated: <span className="text-foreground/75">{c.updated}</span></span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 lg:flex-col lg:w-44">
              <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                <Eye size={14} /> View Preview
              </Button>
              <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                <MessageSquare size={14} /> Curator Notes
              </Button>
              <Button variant="ghost" size="sm" className="flex-1 lg:flex-none">
                <Copy size={14} /> Duplicate
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignRequestsPage;