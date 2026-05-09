// FILE: src/pages/vendor/CampaignRequestsPage.tsx

import { SectionHeader } from '@/components/vendor/VendorLayout';
import { Button } from '@/components/ui/button';

import {
  HandHeart,
  MessageSquare,
  Sparkles,
  Users,
  Heart,
  Palmtree,
  CalendarHeart,
} from 'lucide-react';

import collaborationHero from '@/assets/partner-portal/experience-collaborations-dinner.png';

const collaborationTypes = [
  {
    title: 'Retreat Collaborations',
    description:
      'Wellness, women’s retreats, restoration weekends, and hosted group experiences.',
    icon: Heart,
  },
  {
    title: 'Destination Weddings',
    description:
      'Romance travel, wedding packages, venue partnerships, and celebration experiences.',
    icon: CalendarHeart,
  },
  {
    title: 'Luxury Escapes',
    description:
      'Resorts, villas, cruises, private experiences, and elevated vacation opportunities.',
    icon: Palmtree,
  },
  {
    title: 'Group Experiences',
    description:
      'Family trips, corporate groups, milestone travel, and curated destination gatherings.',
    icon: Users,
  },
];

const workflow = [
  'Idea Shared',
  'Reviewed',
  'Curated',
  'Approved',
  'Featured',
];

const sampleIdeas = [
  'Women’s wellness retreat weekend',
  'Destination wedding preview package',
  'Luxury group escape feature',
  'Romance travel seasonal collection',
];

const CampaignRequestsPage = () => {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl border border-border/60 shadow-sm min-h-[360px] bg-[hsl(0,0%,8%)]">
        <img
          src={collaborationHero}
          alt="Luxury collaboration dinner experience"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/55 to-black/18" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-black/20" />

        <div className="relative z-10 p-6 md:p-10 min-h-[360px] flex items-center">
          <div className="max-w-3xl">
            <p className="text-[10px] tracking-[0.32em] uppercase text-gold mb-4">
              Experience Collaborations
            </p>

            <h1 className="font-display text-3xl md:text-5xl text-cream leading-tight">
              Collaboration Opportunities
            </h1>

            <p className="text-sm md:text-base text-cream/75 mt-4 leading-relaxed max-w-2xl">
              Explore future ways your company may collaborate with Serene Passage International on curated experiences, retreats, romance travel, destination weddings, luxury escapes, and group journeys.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-6 md:p-8 bg-gradient-to-br from-card via-card to-cream">
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <div className="h-14 w-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
            <HandHeart className="text-gold" size={24} />
          </div>

          <div>
            <p className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2">
              Relationship-Driven Collaboration
            </p>

            <h2 className="font-display text-2xl text-card-foreground">
              From partner idea to curated client experience
            </h2>

            <p className="text-sm text-foreground/65 mt-2 max-w-3xl leading-relaxed">
              This section is designed to help partners share collaboration ideas that may become future Serene Passage features, hosted experiences, destination campaigns, or custom client journeys.
            </p>
          </div>
        </div>
      </div>

      <section>
        <SectionHeader
          eyebrow="Collaboration Types"
          title="Ways We May Work Together"
          description="Partners may share ideas across several travel and hospitality categories."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {collaborationTypes.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-card rounded-2xl border border-border/60 shadow-sm p-6"
              >
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-primary" />
                </div>

                <h3 className="font-display text-lg text-card-foreground">
                  {item.title}
                </h3>

                <p className="text-sm text-foreground/65 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-6">
        <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-4">
          Collaboration Workflow
        </p>

        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {workflow.map((step, index) => (
            <div key={step} className="flex items-center gap-2 shrink-0">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/70 bg-background text-xs text-foreground/75">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {step}
              </div>

              {index < workflow.length - 1 && (
                <span className="text-foreground/30">→</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <section>
        <SectionHeader
          eyebrow="Examples"
          title="Collaboration Ideas"
          description="These are examples of the kinds of opportunities partners may share for future review."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sampleIdeas.map((idea) => (
            <div
              key={idea}
              className="bg-card rounded-2xl border border-border/60 shadow-sm p-6"
            >
              <Sparkles size={18} className="text-gold mb-3" />

              <h3 className="font-display text-lg text-card-foreground">
                {idea}
              </h3>

              <p className="text-sm text-foreground/60 mt-2">
                Planned for future submission, review, and curated experience development.
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-lavender/15 border border-lavender/40 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <MessageSquare size={20} className="text-primary shrink-0" />

          <p className="text-sm text-foreground/75 leading-relaxed">
            During this early access phase, partners may discuss collaboration ideas directly with Serene Passage International. A structured collaboration request form will be added as the Partner Suite continues expanding.
          </p>

          <Button className="md:ml-auto bg-primary hover:bg-primary/90">
            Request Coming Soon
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CampaignRequestsPage;