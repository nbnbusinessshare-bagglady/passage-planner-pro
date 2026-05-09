// FILE: src/pages/vendor/VendorStubPage.tsx

import { useLocation } from 'react-router-dom';
import {
  Sparkles,
  CalendarHeart,
  Tag,
  Handshake,
  Globe2,
  Clock,
  LockKeyhole,
} from 'lucide-react';

import { SectionHeader } from '@/components/vendor/VendorLayout';

import destinationEventsHero from '@/assets/partner-portal/destination-events-showcase.png';
import partnerRelationshipsHero from '@/assets/partner-portal/partner-relationships-meeting.png';
import industryPartnershipsHero from '@/assets/partner-portal/industry-partnerships-global-network.png';

type PageMeta = {
  eyebrow: string;
  title: string;
  description: string;
  icon: React.ElementType;
  image?: string;
  features: string[];
};

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-card rounded-2xl border border-border/60 shadow-sm p-6 ${className}`}>
    {children}
  </div>
);

const pageContent: Record<string, PageMeta> = {
  '/vendor/events': {
    eyebrow: 'Early Access',
    title: 'Destination Events',
    description:
      'This section will help partners share events, showcases, hosted experiences, and destination-specific opportunities for future Serene Passage collections.',
    icon: CalendarHeart,
    image: destinationEventsHero,
    features: [
      'Destination showcases',
      'Retreat preview events',
      'Wedding and romance travel events',
      'Partner-hosted experiences',
    ],
  },
  '/vendor/promotions': {
    eyebrow: 'Early Access',
    title: 'Seasonal Promotions',
    description:
      'This section will support seasonal partner offers, special rates, limited-time promotions, and curated travel campaigns.',
    icon: Tag,
    features: [
      'Seasonal rates and offers',
      'Limited-time packages',
      'Group travel promotions',
      'Luxury escape campaigns',
    ],
  },
  '/vendor/relationships': {
    eyebrow: 'Early Access',
    title: 'Partner Relationships',
    description:
      'This section will help Serene Passage track partner status, company contacts, collaboration history, and long-term relationship opportunities.',
    icon: Handshake,
    image: partnerRelationshipsHero,
    features: [
      'Partner status tracking',
      'Primary and backup contacts',
      'Follow-up notes',
      'Account reset support',
    ],
  },
  '/vendor/industry': {
    eyebrow: 'Early Access',
    title: 'Industry Events & Partnerships',
    description:
      'This section will organize conference connections, tourism board relationships, destination wedding events, supplier meetings, and travel industry opportunities.',
    icon: Globe2,
    image: industryPartnershipsHero,
    features: [
      'Conference contacts',
      'Tourism board relationships',
      'Supplier meetings',
      'Destination partnership notes',
    ],
  },
};

const defaultMeta: PageMeta = {
  eyebrow: 'Coming Soon',
  title: 'Partner Feature',
  description: 'This section is being developed as part of the Serene Passage Partner Suite.',
  icon: Sparkles,
  features: ['Partner tools', 'Collaboration support', 'Curated workflow', 'Future expansion'],
};

const VendorStubPage = () => {
  const { pathname } = useLocation();
  const meta: PageMeta = pageContent[pathname] ?? defaultMeta;
  const Icon = meta.icon;

  return (
    <div className="space-y-8">
      {meta.image ? (
        <section className="relative overflow-hidden rounded-3xl border border-border/60 shadow-sm min-h-[340px] bg-[hsl(0,0%,8%)]">
          <img src={meta.image} alt={meta.title} className="absolute inset-0 h-full w-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/55 to-black/18" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-black/20" />

          <div className="relative z-10 p-6 md:p-10 min-h-[340px] flex items-center">
            <div className="max-w-3xl">
              <p className="text-[10px] tracking-[0.32em] uppercase text-gold mb-4">{meta.eyebrow}</p>
              <h1 className="font-display text-3xl md:text-5xl text-cream leading-tight">{meta.title}</h1>
              <p className="text-sm md:text-base text-cream/75 mt-4 leading-relaxed max-w-2xl">
                {meta.description}
              </p>
            </div>
          </div>
        </section>
      ) : (
        <SectionHeader eyebrow={meta.eyebrow} title={meta.title} description={meta.description} />
      )}

      <Card className="bg-gradient-to-br from-card via-card to-cream">
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <div className="h-14 w-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
            <Icon className="text-gold" size={24} />
          </div>

          <div className="flex-1">
            <p className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2">
              Partner Suite Expansion
            </p>
            <h2 className="font-display text-2xl text-card-foreground">
              This feature is being prepared for partner rollout.
            </h2>
            <p className="text-sm text-foreground/65 mt-2 max-w-2xl leading-relaxed">
              Serene Passage International is currently developing this section to support a more organized,
              professional, and relationship-driven partner experience.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {meta.features.map((feature) => (
          <Card key={feature}>
            <div className="flex items-start gap-3">
              <Sparkles size={17} className="text-gold shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg text-card-foreground">{feature}</h3>
                <p className="text-sm text-foreground/60 mt-1">
                  Planned as part of the expanded partner collaboration workflow.
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-center gap-3">
            <Clock size={18} className="text-primary shrink-0" />
            <div>
              <h3 className="font-display text-lg text-card-foreground">Early Access Phase</h3>
              <p className="text-sm text-foreground/60">Some partner tools are being introduced in stages.</p>
            </div>
          </div>

          <div className="md:ml-auto flex items-center gap-2 rounded-full bg-muted px-4 py-2">
            <LockKeyhole size={14} className="text-foreground/50" />
            <span className="text-xs tracking-wide uppercase text-foreground/55">Coming Soon</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default VendorStubPage;