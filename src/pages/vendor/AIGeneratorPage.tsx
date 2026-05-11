// FILE: src/pages/vendor/AIGeneratorPage.tsx

import {
  AlertCircle,
  Bot,
  BrainCircuit,
  Copy,
  FileText,
  Gift,
  Globe2,
  ImagePlus,
  Layers3,
  LockKeyhole,
  Megaphone,
  Network,
  Sparkles,
  TrendingUp,
  Wand2,
} from "lucide-react";

import { SectionHeader } from "@/components/vendor/VendorLayout";

const Field = ({
  label,
  children,
  description,
}: {
  label: string;
  children: React.ReactNode;
  description?: string;
}) => (
  <div>
    <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-foreground/60">
      {label}
    </label>

    {children}

    {description && (
      <p className="mt-2 text-xs leading-5 text-foreground/50">
        {description}
      </p>
    )}
  </div>
);

const inputCls =
  "h-11 w-full rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

const textAreaCls =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

const outputs = [
  {
    label: "Collaborative Offer Headline",
    body: "Jamaica, Curated Together — A Private Island Escape with Local Flavor, Seamless Transfers, and Serene Passage Guest Support.",
  },
  {
    label: "Partner + Serene Passage Promo Copy",
    body: "Created in collaboration with Serene Passage International, this experience connects trusted local hospitality with curated travel planning for guests who want beauty without the overwhelm.",
  },
  {
    label: "Ecosystem Opportunity Insight",
    body: "Potential cross-sell opportunities identified between transportation, dining, excursions, and destination wedding traveler groups.",
  },
  {
    label: "Suggested Traveler Segment",
    body: "High compatibility with luxury group travelers, hosted retreats, destination wedding guests, and celebration-focused experiences.",
  },
  {
    label: "Operational Coordination Notes",
    body: "Recommend confirming timing overlap between airport arrivals, excursion scheduling, transportation availability, and guest capacity.",
  },
  {
    label: "Future Pricing Intelligence",
    body: "Future pricing systems may recommend dynamic pricing adjustments, margin alignment, seasonal opportunity analysis, and bundled experience optimization.",
  },
];

const aiSystems = [
  {
    icon: BrainCircuit,
    title: "Travel Intelligence Engine",
    text: "Future systems may analyze destination patterns, traveler behavior, seasonal demand, operational timing, and partnership opportunities.",
  },
  {
    icon: Wand2,
    title: "Collaborative Package Generator",
    text: "Generate destination packages using hotels, transportation, excursions, dining, wellness, and hosted experience combinations.",
  },
  {
    icon: TrendingUp,
    title: "Pricing Optimization",
    text: "Future AI systems may help optimize pricing structures, margins, package profitability, and traveler value alignment.",
  },
  {
    icon: Network,
    title: "Ecosystem Recommendation Layer",
    text: "AI may eventually identify partnership opportunities and recommend ideal ecosystem collaborations between businesses.",
  },
];

const infrastructureCards = [
  {
    icon: Gift,
    title: "Partner Collaboration Layer",
    text: "Partners may eventually receive limited collaborative AI usage inside the Serene Passage ecosystem.",
  },
  {
    icon: LockKeyhole,
    title: "Protected Brand Logic",
    text: "Future pricing and offer systems should preserve Serene Passage structure, approval logic, and partner safeguards.",
  },
  {
    icon: ImagePlus,
    title: "Media + Campaign Generation",
    text: "Future systems may generate social content, campaigns, package descriptions, email copy, landing pages, and traveler messaging.",
  },
  {
    icon: Layers3,
    title: "Future White-Label SaaS",
    text: "The long-term infrastructure may eventually evolve into licensable AI systems through Aision Labs.",
  },
];

const AIGeneratorPage = () => {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Future AI Infrastructure"
        title="Travel Intelligence & Ecosystem Collaboration Systems"
        description="A future AI-powered ecosystem layer being designed to support destination partnerships, collaborative travel experiences, pricing intelligence, operational coordination, and scalable travel relationship systems."
      />

      <section className="rounded-[2rem] border border-gold/20 bg-gradient-to-br from-[#f8f3ec] via-[#f5f0ea] to-[#f3edf1] p-6 shadow-sm md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-gold">
              <Sparkles className="h-4 w-4" />
              Aision Labs Infrastructure Direction
            </div>

            <h2 className="font-display text-2xl text-card-foreground md:text-4xl">
              This is not simply a chatbot or content tool.
            </h2>

            <p className="mt-5 text-sm leading-7 text-foreground/70 md:text-base">
              The long-term vision is the development of a collaborative
              AI-powered travel intelligence ecosystem capable of helping
              destination partners, travel brands, hospitality providers,
              transportation services, experience vendors, and curated
              travel ecosystems coordinate more effectively together.
            </p>

            <p className="mt-5 text-sm leading-7 text-foreground/70 md:text-base">
              This future infrastructure may eventually support collaborative
              package generation, pricing intelligence, traveler experience
              recommendations, operational timing coordination, destination
              relationship mapping, campaign generation, and ecosystem growth
              opportunities across multiple travel sectors.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-white/70 p-5">
            <Bot className="mb-3 text-primary" size={22} />

            <h3 className="font-display text-xl text-card-foreground">
              Future White-Label Opportunity
            </h3>

            <p className="mt-2 text-sm leading-7 text-foreground/65">
              Long-term, portions of this infrastructure may eventually evolve
              into licensable Aision Labs technology for travel brands,
              agencies, hospitality groups, destination operators, or other
              experience-based businesses seeking collaborative AI systems.
            </p>
          </div>
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="AI System Areas"
          title="Planned Intelligence Layers"
          description="These systems represent the larger infrastructure direction behind the future AI ecosystem."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {aiSystems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Icon size={20} className="text-primary" />
                </div>

                <h3 className="font-display text-xl text-card-foreground">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-foreground/65">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[420px_1fr]">
        <div className="h-fit space-y-5 rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm xl:sticky xl:top-24">
          <div className="flex items-center gap-2">
            <BrainCircuit size={18} className="text-gold" />

            <h2 className="font-display text-xl text-card-foreground">
              Future Ecosystem Inputs
            </h2>
          </div>

          <Field label="Partner Business Name">
            <input
              className={inputCls}
              placeholder="Island Pearl Excursions"
            />
          </Field>

          <Field label="Destination / Service Area">
            <input
              className={inputCls}
              placeholder="Montego Bay, Jamaica"
            />
          </Field>

          <Field label="Partner Service Type">
            <select className={inputCls}>
              <option>Excursion / Tour</option>
              <option>Hotel / Resort</option>
              <option>Transportation / Transfers</option>
              <option>Restaurant / Dining</option>
              <option>Destination Wedding Vendor</option>
              <option>Luxury Experience Provider</option>
              <option>Wellness / Retreat</option>
            </select>
          </Field>

          <Field label="Traveler Audience">
            <select className={inputCls}>
              <option>Luxury Travelers</option>
              <option>Destination Wedding Guests</option>
              <option>Women’s Retreat Groups</option>
              <option>Corporate Groups</option>
              <option>Hosted Experiences</option>
              <option>Couples / Romance Travelers</option>
            </select>
          </Field>

          <Field label="Offer / Experience Summary">
            <textarea
              rows={5}
              className={textAreaCls}
              placeholder="Describe transportation, accommodations, dining, excursions, wellness, VIP access, guest perks, timing, or destination experiences."
            />
          </Field>

          <Field
            label="Pricing / Operational Notes"
            description="Future pricing systems may eventually analyze operational efficiency, package alignment, margin logic, and collaborative pricing structures."
          >
            <textarea
              rows={4}
              className={textAreaCls}
              placeholder="Net rates, operational timing, availability windows, seasonal opportunities, partner requirements, etc."
            />
          </Field>

          <button className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-[0.98]">
            <Sparkles size={15} />
            Generate Ecosystem Intelligence Preview
          </button>

          <p className="text-center text-xs leading-5 text-foreground/50">
            Current phase: conceptual infrastructure preview and ecosystem
            positioning only.
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {infrastructureCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm"
                >
                  <Icon className="mb-3 text-primary" size={20} />

                  <h3 className="font-display text-lg text-card-foreground">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-foreground/65">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-[10px] uppercase tracking-[0.22em] text-gold">
                Ecosystem Intelligence Preview
              </p>

              <span className="text-xs text-foreground/50">
                Conceptual AI output examples
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {outputs.map((output) => (
                <div
                  key={output.label}
                  className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
                      {output.label}
                    </p>

                    <button
                      className="text-foreground/40 transition-colors hover:text-primary"
                      aria-label="Copy"
                    >
                      <Copy size={13} />
                    </button>
                  </div>

                  <p className="text-sm leading-7 text-card-foreground">
                    {output.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <section className="rounded-[2rem] border border-border/60 bg-muted/20 p-6">
            <div className="flex items-start gap-3">
              <Megaphone className="mt-1 shrink-0 text-gold" size={22} />

              <div>
                <h3 className="font-display text-xl text-card-foreground">
                  Future Collaborative Workflow
                </h3>

                <p className="mt-2 text-sm leading-7 text-foreground/65">
                  Future systems may eventually support partner review flows,
                  AI-assisted package coordination, collaboration approvals,
                  destination recommendations, campaign generation, traveler
                  segmentation, timing optimization, and operational support
                  across the ecosystem.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-gold/20 bg-gold/5 p-6">
            <div className="flex items-start gap-3">
              <Globe2
                className="mt-1 shrink-0 text-gold"
                size={22}
              />

              <div>
                <h3 className="font-display text-xl text-card-foreground">
                  Long-Term Direction
                </h3>

                <p className="mt-2 text-sm leading-7 text-foreground/70">
                  The broader direction is the development of a scalable travel
                  intelligence ecosystem capable of supporting destination
                  relationships, collaborative business growth, operational
                  coordination, package creation, and curated traveler
                  experiences across multiple sectors within the travel industry.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AIGeneratorPage;