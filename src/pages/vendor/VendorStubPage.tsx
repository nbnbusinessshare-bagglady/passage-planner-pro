import { useLocation } from 'react-router-dom';
import { SectionHeader } from '@/components/vendor/VendorLayout';
import { Sparkles, CalendarHeart, Tag, Handshake, Globe2, MapPin, Award, Users } from 'lucide-react';

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-card rounded-2xl border border-border/60 shadow-sm p-6 ${className}`}>{children}</div>
);

const EventsView = () => {
  const events = [
    { title: 'Her Glow Brunch + Preview Night', date: 'Feb 22, 2026', location: 'Atlanta, GA', tag: 'Partner Showcase' },
    { title: 'Caribbean Edit · Travel Edit Showcase', date: 'Apr 11, 2026', location: 'Virtual', tag: 'Destination Spotlight' },
    { title: 'Sedona Wellness Preview', date: 'May 09, 2026', location: 'Sedona, AZ', tag: 'Retreat Collaboration' },
  ];
  return (
    <div className="space-y-4">
      {events.map((e) => (
        <Card key={e.title}>
          <div className="flex items-start gap-4">
            <div className="h-11 w-11 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
              <CalendarHeart size={18} className="text-gold" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-1">{e.tag}</p>
              <h3 className="font-display text-lg text-card-foreground">{e.title}</h3>
              <p className="text-xs text-foreground/60 mt-1">{e.date} · {e.location}</p>
            </div>
            <button className="text-xs tracking-wide uppercase text-primary hover:underline">Share Destination Experience</button>
          </div>
        </Card>
      ))}
    </div>
  );
};

const PromotionsView = () => {
  const promos = [
    { title: 'Spring Wellness Collection', window: 'Mar – May 2026', note: 'Co-curated seasonal feature with our wellness partners.' },
    { title: 'Summer Caribbean Romance Edit', window: 'Jun – Aug 2026', note: 'Romance travel highlights across resort partners.' },
    { title: 'Winter Cultural Escapes', window: 'Nov – Feb 2026', note: 'Cultural immersion features curated by destination.' },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {promos.map((p) => (
        <Card key={p.title}>
          <div className="flex items-start gap-3">
            <Tag size={18} className="text-gold mt-1 shrink-0" />
            <div className="flex-1">
              <h3 className="font-display text-lg text-card-foreground">{p.title}</h3>
              <p className="text-[11px] tracking-[0.18em] uppercase text-foreground/55 mt-1">{p.window}</p>
              <p className="text-sm text-foreground/70 mt-3 leading-relaxed">{p.note}</p>
              <button className="mt-4 text-xs tracking-wide uppercase text-primary hover:underline">Share Seasonal Promotion</button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

const RelationshipsView = () => {
  const tiers = [
    { label: 'Preferred Partner Tier', value: 'Curator Circle', icon: Award },
    { label: 'Destination Specialties', value: 'Sedona · Cartagena · Anguilla', icon: MapPin },
    { label: 'Collaboration History', value: '14 curated experiences', icon: Handshake },
    { label: 'Active Travelers Reached', value: '2,481 this season', icon: Users },
  ];
  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-card to-cream">
        <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-2">Relationship Status</p>
        <h3 className="font-display text-2xl text-card-foreground">Maison Voyage · Trusted Destination Partner</h3>
        <p className="font-script text-lg text-foreground/70 mt-2">Collaborating with Serene Passage since 2024</p>
        <p className="text-sm text-foreground/70 mt-4 max-w-2xl leading-relaxed">
          Exclusive travel opportunities curated through meaningful industry relationships.
          Your contributions help shape elevated, customer-facing experiences worldwide.
        </p>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tiers.map((t) => {
          const Icon = t.icon;
          return (
            <Card key={t.label}>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full border border-gold/40 flex items-center justify-center text-gold shrink-0">
                  <Icon size={16} />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.22em] uppercase text-foreground/55">{t.label}</p>
                  <p className="font-display text-lg text-card-foreground mt-1">{t.value}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const IndustryView = () => {
  const events = [
    { title: 'IADWP Jamaica 2026', date: 'May 2026', region: 'Montego Bay, Jamaica', note: 'Destination weddings & romance travel networking.' },
    { title: 'Virtuoso Travel Week', date: 'Aug 2026', region: 'Las Vegas, NV', note: 'Global luxury hospitality partnerships and curated showcases.' },
    { title: 'ILTM Cannes', date: 'Dec 2026', region: 'Cannes, France', note: 'International luxury travel market — destination collaborations.' },
    { title: 'Caribbean Travel Marketplace', date: 'Jan 2027', region: 'Bahamas', note: 'Caribbean tourism boards & resort partnerships.' },
  ];
  return (
    <div className="space-y-6">
      <Card>
        <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-2">Global Collaborations</p>
        <h3 className="font-display text-xl text-card-foreground">Where we gather, listen, and build relationships</h3>
        <p className="text-sm text-foreground/70 mt-3 max-w-2xl leading-relaxed">
          Serene Passage International invests in meaningful presence across the global travel
          industry — building trusted relationships with tourism boards, resort groups, and
          destination experts who help shape our curated experiences.
        </p>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((e) => (
          <Card key={e.title}>
            <div className="flex items-start gap-3">
              <Globe2 size={18} className="text-gold mt-1 shrink-0" />
              <div>
                <h4 className="font-display text-lg text-card-foreground">{e.title}</h4>
                <p className="text-[11px] tracking-[0.18em] uppercase text-foreground/55 mt-1">{e.date} · {e.region}</p>
                <p className="text-sm text-foreground/70 mt-3 leading-relaxed">{e.note}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const titles: Record<string, { eyebrow: string; title: string; description: string; render?: () => React.ReactNode }> = {
  '/vendor/events': {
    eyebrow: 'Destination Events',
    title: 'Destination Events',
    description: 'Curated travel events shared with our partner network.',
    render: EventsView,
  },
  '/vendor/promotions': {
    eyebrow: 'Seasonal Promotions',
    title: 'Seasonal Promotions',
    description: 'Share seasonal opportunities to be curated into customer-facing collections.',
    render: PromotionsView,
  },
  '/vendor/relationships': {
    eyebrow: 'Partnership',
    title: 'Partner Relationships',
    description: 'Your standing within the Serene Passage curator network.',
    render: RelationshipsView,
  },
  '/vendor/industry': {
    eyebrow: 'Global Network',
    title: 'Industry Events & Partnerships',
    description: 'Conferences, tourism partnerships, and destination relationships we cultivate worldwide.',
    render: IndustryView,
  },
};

const VendorStubPage = () => {
  const { pathname } = useLocation();
  const meta = titles[pathname] ?? { eyebrow: 'Coming Soon', title: 'Section', description: 'This view is being curated.' };
  return (
    <div className="space-y-6">
      <SectionHeader eyebrow={meta.eyebrow} title={meta.title} description={meta.description} />
      {meta.render ? (
        meta.render()
      ) : (
        <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-12 text-center">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gold/10 mb-4">
            <Sparkles className="text-gold" size={20} />
          </div>
          <p className="font-script text-xl text-foreground/70">This section is being curated.</p>
        </div>
      )}
    </div>
  );
};

export default VendorStubPage;
