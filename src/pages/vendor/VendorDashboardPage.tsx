import { Link } from 'react-router-dom';
import { Plus, Package, Calendar, Tag, Image as ImageIcon, Megaphone, BarChart3, MessageSquare } from 'lucide-react';
import { SectionHeader, StatusBadge } from '@/components/vendor/VendorLayout';

const packages = [
  { title: 'Sedona Soul Reset', destination: 'Sedona, AZ', status: 'Approved' as const, dates: 'Mar 14 – 20, 2026' },
  { title: 'Costa Rica Wellness Week', destination: 'Nosara, Costa Rica', status: 'Submitted' as const, dates: 'May 02 – 09, 2026' },
  { title: 'Anguilla Private Villa Escape', destination: 'Anguilla', status: 'Needs Revision' as const, dates: 'Jun 18 – 24, 2026' },
  { title: 'Cartagena Cultural Immersion', destination: 'Cartagena, Colombia', status: 'Draft' as const, dates: 'TBD' },
];

const events = [
  { title: 'Her Glow Brunch + Preview Night', date: 'Feb 22, 2026', location: 'Atlanta, GA' },
  { title: 'Vendor Showcase: Caribbean Edit', date: 'Apr 11, 2026', location: 'Virtual' },
];

const promotions = [
  { title: 'Spring Retreat — Save 15%', code: 'SERENE15', expires: 'Apr 30, 2026' },
  { title: 'Refer a Sister — $200 Credit', code: 'SISTER200', expires: 'Ongoing' },
];

const media = [
  { name: 'Sedona-hero-01.jpg', size: '4.2 MB' },
  { name: 'Nosara-villa-tour.mp4', size: '38 MB' },
  { name: 'Brochure-Spring2026.pdf', size: '6.1 MB' },
  { name: 'Anguilla-sunset.jpg', size: '3.8 MB' },
];

const requests = [
  { title: 'Spring Wellness Co-promotion', status: 'Submitted' as const, updated: '2 days ago' },
  { title: 'Homepage Feature: Sedona Reset', status: 'Approved' as const, updated: '1 week ago' },
];

const analytics = [
  { label: 'Profile Views', value: '2,481', delta: '+12%' },
  { label: 'Inquiries', value: '47', delta: '+5%' },
  { label: 'Saved Offers', value: '184', delta: '+22%' },
];

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-card rounded-2xl border border-border/60 shadow-sm p-6 ${className}`}>{children}</div>
);

const VendorDashboardPage = () => {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <Card className="bg-gradient-to-br from-card to-cream">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-2">Welcome back</p>
            <h1 className="font-display text-3xl md:text-4xl text-card-foreground">Good morning, Maison Voyage</h1>
            <p className="font-script text-lg text-foreground/70 mt-2">Your curated travel command center</p>
          </div>
          <Link
            to="/vendor/submit"
            className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 active:scale-[0.98] transition-all"
          >
            <Plus size={16} /> Submit New Travel Offer
          </Link>
        </div>
      </Card>

      {/* Analytics strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {analytics.map((a) => (
          <Card key={a.label}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-foreground/60">{a.label}</p>
                <p className="font-display text-3xl text-card-foreground mt-2">{a.value}</p>
              </div>
              <span className="text-xs font-medium text-sage bg-sage/20 px-2 py-1 rounded-full">{a.delta}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* My Packages */}
      <section>
        <SectionHeader eyebrow="Curated Offers" title="My Packages" description="Travel experiences you've crafted for our community." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {packages.map((p) => (
            <Card key={p.title}>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Package size={18} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-lg text-card-foreground">{p.title}</h3>
                    <StatusBadge status={p.status} />
                  </div>
                  <p className="text-sm text-foreground/70 mt-1">{p.destination}</p>
                  <p className="text-xs text-foreground/50 mt-1">{p.dates}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Events + Promotions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <section>
          <SectionHeader eyebrow="On the Horizon" title="Upcoming Events" />
          <div className="space-y-3">
            {events.map((e) => (
              <Card key={e.title}>
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-primary shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-display text-base text-card-foreground">{e.title}</h4>
                    <p className="text-xs text-foreground/60 mt-0.5">{e.date} · {e.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader eyebrow="Active Offers" title="Promotions" />
          <div className="space-y-3">
            {promotions.map((p) => (
              <Card key={p.code}>
                <div className="flex items-center gap-3">
                  <Tag size={18} className="text-gold shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-display text-base text-card-foreground">{p.title}</h4>
                    <p className="text-xs text-foreground/60 mt-0.5">
                      Code <span className="font-mono text-foreground/80">{p.code}</span> · Expires {p.expires}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Media */}
      <section>
        <SectionHeader eyebrow="Library" title="Uploaded Media" description="Photography, brochures, and video assets." />
        <Card>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {media.map((m) => (
              <div key={m.name} className="aspect-square rounded-xl bg-muted/60 border border-border/60 flex flex-col items-center justify-center p-3 text-center">
                <ImageIcon size={22} className="text-foreground/40 mb-2" />
                <p className="text-[11px] text-foreground/70 truncate w-full">{m.name}</p>
                <p className="text-[10px] text-foreground/50 mt-0.5">{m.size}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Campaign Requests + Messages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <section>
          <SectionHeader eyebrow="Workflow" title="Campaign Requests" />
          <div className="space-y-3">
            {requests.map((r) => (
              <Card key={r.title}>
                <div className="flex items-center gap-3">
                  <Megaphone size={18} className="text-primary shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-display text-base text-card-foreground">{r.title}</h4>
                      <StatusBadge status={r.status} />
                    </div>
                    <p className="text-xs text-foreground/50 mt-1">Updated {r.updated}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader eyebrow="Communication" title="Messages" />
          <Card>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-rose/30 flex items-center justify-center shrink-0">
                <MessageSquare size={16} className="text-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-card-foreground">
                  <span className="font-medium">Travel Strategist:</span> Loved the Sedona shots — let's tweak the captions.
                </p>
                <p className="text-xs text-foreground/50 mt-1">Yesterday at 3:41 PM</p>
              </div>
            </div>
          </Card>
          <Card className="mt-3">
            <div className="flex items-center gap-3">
              <BarChart3 size={18} className="text-sage shrink-0" />
              <p className="text-sm text-foreground/70">View full performance analytics in the Insights tab (coming soon).</p>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default VendorDashboardPage;