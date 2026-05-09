// FILE: src/pages/vendor/VendorDashboardPage.tsx

import { Link } from 'react-router-dom';
import {
  Plus,
  Building2,
  Compass,
  Images,
  HandHeart,
  Sparkles,
  ShieldCheck,
  Globe2,
  ClipboardCheck,
  UserRoundCog,
  CalendarHeart,
} from 'lucide-react';

import { SectionHeader } from '@/components/vendor/VendorLayout';
import dashboardHero from '@/assets/partner-portal/dashboard-private-hospitality-lounge.png';

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-card rounded-2xl border border-border/60 shadow-sm p-6 ${className}`}>{children}</div>
);

const quickStart = [
  {
    title: 'Complete Business Profile',
    description: 'Add company name, main phone number, department, primary contact, and backup contact.',
    icon: Building2,
  },
  {
    title: 'Submit Travel Opportunity',
    description: 'Share packages, rates, destination offers, retreats, cruises, group travel, or event opportunities.',
    icon: Compass,
  },
  {
    title: 'Upload Travel Assets',
    description: 'Add photos, brochures, flyers, videos, resort media, and promotional materials.',
    icon: Images,
  },
  {
    title: 'Review Next Steps',
    description: 'Understand how Serene Passage reviews, curates, and converts partner offers into client experiences.',
    icon: ClipboardCheck,
  },
];

const comingSoon = [
  'Curated Experience Studio',
  'AI Campaign Builder',
  'Partner Analytics',
  'Relationship Management Suite',
  'Featured Offer Review',
  'Partner Tier Tracking',
];

const VendorDashboardPage = () => {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl border border-border/60 shadow-sm min-h-[430px] bg-[hsl(0,0%,8%)]">
        <img
          src={dashboardHero}
          alt="Luxury hospitality lounge for Serene Passage partner collaboration"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />

        <div className="relative z-10 p-6 md:p-10 lg:p-12 min-h-[430px] flex items-center">
          <div className="max-w-3xl">
            <p className="text-[10px] tracking-[0.32em] uppercase text-gold mb-4">
              Invitation Only Partner Suite
            </p>

            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-cream leading-tight">
              Welcome to the Serene Passage International Partner Suite
            </h1>

            <p className="text-sm md:text-base text-cream/75 mt-5 max-w-2xl leading-relaxed">
              A private collaboration workspace for trusted resorts, hotels, cruise partners,
              tourism professionals, destination wedding suppliers, retreat hosts, tour operators,
              and luxury experience partners.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-7">
              <Link
                to="/vendor/submit"
                className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg bg-gold text-[hsl(0,0%,8%)] text-sm font-semibold hover:bg-gold/90 active:scale-[0.98] transition-all"
              >
                <Plus size={16} /> Submit Travel Opportunity
              </Link>

              <Link
                to="/vendor/media"
                className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg border border-gold/60 text-gold text-sm font-medium hover:bg-gold/10 transition-all"
              >
                <Images size={15} /> Upload Travel Assets
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Start Here"
          title="Partner Onboarding"
          description="Use these first steps to help Serene Passage understand your company, contacts, offers, and collaboration opportunities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickStart.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title}>
                <div className="flex gap-4">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-primary" />
                  </div>

                  <div>
                    <h3 className="font-display text-lg text-card-foreground">{item.title}</h3>
                    <p className="text-sm text-foreground/65 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Business Continuity"
          title="Company Access & Contact Protection"
          description="Large companies often have changing contacts. Serene Passage collects business-level details so the partnership does not depend on one employee email."
        />

        <Card>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <ShieldCheck className="text-gold mb-3" size={22} />
              <h3 className="font-display text-lg text-card-foreground">Main Company Contact</h3>
              <p className="text-sm text-foreground/65 mt-1">
                Business name, main phone number, department, and general email should be captured.
              </p>
            </div>

            <div>
              <UserRoundCog className="text-primary mb-3" size={22} />
              <h3 className="font-display text-lg text-card-foreground">Backup Contact</h3>
              <p className="text-sm text-foreground/65 mt-1">
                Add a secondary contact in case the original representative changes roles or leaves.
              </p>
            </div>

            <div>
              <Building2 className="text-primary mb-3" size={22} />
              <h3 className="font-display text-lg text-card-foreground">Account Reset Request</h3>
              <p className="text-sm text-foreground/65 mt-1">
                Admin-assisted reset support will allow a verified company representative to update access later.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <SectionHeader
          eyebrow="Collaboration Path"
          title="How Opportunities Become Curated Experiences"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {['Draft', 'Submitted', 'Reviewed', 'Curated', 'Featured'].map((step) => (
            <Card key={step} className="text-center">
              <p className="font-display text-lg text-card-foreground">{step}</p>
              <p className="text-[11px] text-foreground/55 mt-1">Partner workflow</p>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <section>
          <SectionHeader eyebrow="Featured Focus" title="Current Partnership Interests" />

          <div className="space-y-3">
            {[
              'Destination wedding and romance travel partners',
              'Luxury resorts and private villa partners',
              'Women’s retreat and wellness experience partners',
              'Cruise, excursion, and cultural immersion partners',
            ].map((item) => (
              <Card key={item}>
                <div className="flex items-center gap-3">
                  <HandHeart size={18} className="text-primary shrink-0" />
                  <p className="text-sm text-foreground/75">{item}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader eyebrow="Industry Relationships" title="Events & Partnerships" />

          <Card>
            <div className="flex items-start gap-3">
              <CalendarHeart size={20} className="text-gold shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg text-card-foreground">Destination & Supplier Networking</h3>
                <p className="text-sm text-foreground/65 mt-1 leading-relaxed">
                  Serene Passage International may use this portal to organize opportunities gathered from
                  destination showcases, tourism boards, supplier meetings, destination wedding events,
                  and travel industry conferences.
                </p>
              </div>
            </div>
          </Card>

          <Card className="mt-3">
            <div className="flex items-center gap-3">
              <Globe2 size={18} className="text-primary shrink-0" />
              <p className="text-sm text-foreground/70">
                Example focus: IADWP, Love Caribbean, resort showcases, tourism partnerships, and retreat collaborations.
              </p>
            </div>
          </Card>
        </section>
      </div>

      <section>
        <SectionHeader
          eyebrow="Coming Soon"
          title="Partner Suite Expansion"
          description="These tools are part of the planned portal experience and may appear as under-construction features while the partner network is being developed."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {comingSoon.map((item) => (
            <Card key={item}>
              <Sparkles size={18} className="text-gold mb-3" />
              <h3 className="font-display text-base text-card-foreground">{item}</h3>
              <p className="text-xs text-foreground/55 mt-2">Under construction</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VendorDashboardPage;