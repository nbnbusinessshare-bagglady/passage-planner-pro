// FILE: src/pages/vendor/CampaignRequestsPage.tsx

import { useEffect, useState } from "react";

import { SectionHeader, StatusBadge } from "@/components/vendor/VendorLayout";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

import {
  AlertCircle,
  ArrowRight,
  CalendarHeart,
  CheckCircle2,
  Clock3,
  FileCheck2,
  HandHeart,
  Heart,
  Languages,
  MessageSquareText,
  Palmtree,
  Save,
  ShieldCheck,
  Sparkles,
  Users,
  Wand2,
} from "lucide-react";

import collaborationHero from "@/assets/partner-portal/experience-collaborations-dinner.png";

const collaborationTypes = [
  {
    title: "Retreat Collaborations",
    description:
      "Wellness, restoration, women’s retreats, hosted experiences, and transformational group travel.",
    icon: Heart,
  },
  {
    title: "Destination Weddings",
    description:
      "Venue partnerships, curated wedding experiences, romance travel, and celebration-focused collaborations.",
    icon: CalendarHeart,
  },
  {
    title: "Luxury Escapes",
    description:
      "Resorts, villas, elevated dining, private experiences, and curated luxury destination offerings.",
    icon: Palmtree,
  },
  {
    title: "Group Experiences",
    description:
      "Corporate groups, milestone trips, hosted events, family travel, and curated destination gatherings.",
    icon: Users,
  },
];

const workflow = [
  "Idea Shared",
  "Under Review",
  "Revision Requested",
  "Curated",
  "Approved",
  "Featured Experience",
];

const sampleIdeas = [
  "Destination wedding experience bundle",
  "Luxury women’s retreat package",
  "VIP airport arrival + excursion experience",
  "Group dining + nightlife collaboration",
  "Hosted cultural immersion experience",
  "Seasonal romance travel collection",
];

const categories = [
  "Destination Wedding",
  "Women’s Retreat",
  "Luxury Travel",
  "Transportation",
  "Dining Experience",
  "Excursion",
  "Group Travel",
  "Wellness Experience",
  "Seasonal Campaign",
  "VIP Experience",
];

type CampaignRequest = {
  id?: string;
  title: string;
  partner: string;
  category: string;
  destination: string;
  campaignType: string;
  proposedDates: string;
  groupSize: string;
  notes: string;
  aiIdeas: string;
  status: string;
  urgent: boolean;
  createdAt: string;
};

const inputCls =
  "h-11 w-full rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

const textAreaCls =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

const CampaignRequestsPage = () => {
  const [saving, setSaving] = useState(false);
  const [requests, setRequests] = useState<CampaignRequest[]>([]);

  const [form, setForm] = useState({
    title: "",
    partner: "",
    category: "",
    destination: "",
    campaignType: "",
    proposedDates: "",
    groupSize: "",
    notes: "",
    aiIdeas: "",
    urgent: false,
  });

  useEffect(() => {
    const loadRequests = async () => {
      try {
        const { data, error } = await supabase
          .from("campaign_requests")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error(error);

          const saved = JSON.parse(
            localStorage.getItem("spi-campaign-requests") || "[]"
          );

          setRequests(saved.reverse());
          return;
        }

        const formatted: CampaignRequest[] =
          data?.map((item: any) => ({
            id: item.id,
            title: item.title || "",
            partner: item.partner || "",
            category: item.category || "",
            destination: item.destination || "",
            campaignType: item.campaign_type || "",
            proposedDates: item.proposed_dates || "",
            groupSize: item.group_size || "",
            notes: item.notes || "",
            aiIdeas: item.ai_ideas || "",
            status: item.status || "Submitted",
            urgent: Boolean(item.urgent),
            createdAt: item.created_at,
          })) || [];

        setRequests(formatted);
      } catch (err) {
        console.error(err);
      }
    };

    loadRequests();
  }, []);

  const update = (key: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const resetForm = () => {
    setForm({
      title: "",
      partner: "",
      category: "",
      destination: "",
      campaignType: "",
      proposedDates: "",
      groupSize: "",
      notes: "",
      aiIdeas: "",
      urgent: false,
    });
  };

  const saveRequest = async () => {
    if (!form.title || !form.partner || !form.category) {
      alert("Please complete Title, Partner/Business Name, and Campaign Category.");
      return;
    }

    try {
      setSaving(true);

      const payload = {
        title: form.title,
        partner: form.partner,
        category: form.category,
        destination: form.destination,
        campaign_type: form.campaignType,
        proposed_dates: form.proposedDates,
        group_size: form.groupSize,
        notes: form.notes,
        ai_ideas: form.aiIdeas,
        urgent: form.urgent,
        status: "Submitted",
      };

      const { error } = await supabase
        .from("campaign_requests")
        .insert([payload]);

      if (error) {
        console.error(error);
        alert("Supabase campaign request save failed. Check console for details.");
        return;
      }

      const existing = JSON.parse(
        localStorage.getItem("spi-campaign-requests") || "[]"
      );

      const newRequest = {
        ...form,
        status: "Submitted",
        createdAt: new Date().toISOString(),
      };

      const updated = [...existing, newRequest];

      localStorage.setItem("spi-campaign-requests", JSON.stringify(updated));

      setRequests([...updated].reverse());
      resetForm();

      alert("Campaign request submitted for review.");
    } catch (err) {
      console.error(err);
      alert("Unexpected error saving campaign request.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8">
      <section className="relative min-h-[360px] overflow-hidden rounded-3xl border border-border/60 bg-[hsl(0,0%,8%)] shadow-sm">
        <img
          src={collaborationHero}
          alt="Luxury collaboration dinner experience"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/55 to-black/18" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-black/20" />

        <div className="relative z-10 flex min-h-[360px] items-center p-6 md:p-10">
          <div className="max-w-3xl">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-black/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Collaboration Ecosystem
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80 backdrop-blur">
                <Languages className="h-4 w-4" />
                International Partner Collaboration
              </div>
            </div>

            <h1 className="font-display text-3xl leading-tight text-cream md:text-5xl">
              Collaboration Requests & Experience Development
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-cream/75 md:text-base">
              Share destination ideas, partnership opportunities, package
              concepts, hosted experiences, seasonal campaigns, and collaborative
              travel experiences Serene Passage may review, revise, curate, and
              feature for future travelers and groups.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm md:p-8">
        <div className="flex items-start gap-3">
          <HandHeart className="mt-1 text-gold" size={22} />

          <div>
            <h2 className="font-display text-2xl text-card-foreground">
              Submit Collaboration Request
            </h2>

            <p className="mt-2 text-sm leading-7 text-foreground/65">
              Share partnership opportunities, travel concepts, destination
              packages, hosted experiences, and seasonal collaboration ideas.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-foreground/60">
              Campaign / Experience Title
            </label>

            <input
              className={inputCls}
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              placeholder="Luxury Wellness Escape Weekend"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-foreground/60">
              Partner / Business Name
            </label>

            <input
              className={inputCls}
              value={form.partner}
              onChange={(e) => update("partner", e.target.value)}
              placeholder="Blue Horizon Resort"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-foreground/60">
              Campaign Category
            </label>

            <select
              className={inputCls}
              value={form.category}
              onChange={(e) => update("category", e.target.value)}
            >
              <option value="">Select Category</option>
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-foreground/60">
              Destination
            </label>

            <input
              className={inputCls}
              value={form.destination}
              onChange={(e) => update("destination", e.target.value)}
              placeholder="Montego Bay, Jamaica"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-foreground/60">
              Campaign Type
            </label>

            <input
              className={inputCls}
              value={form.campaignType}
              onChange={(e) => update("campaignType", e.target.value)}
              placeholder="Group package, seasonal offer, VIP experience..."
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-foreground/60">
              Proposed Dates / Timing
            </label>

            <input
              className={inputCls}
              value={form.proposedDates}
              onChange={(e) => update("proposedDates", e.target.value)}
              placeholder="June 2026, Summer Campaign, Holiday Season..."
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-foreground/60">
              Estimated Group Size
            </label>

            <input
              className={inputCls}
              value={form.groupSize}
              onChange={(e) => update("groupSize", e.target.value)}
              placeholder="20–100 travelers"
            />
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-border bg-muted/20 px-4 py-3">
            <input
              type="checkbox"
              checked={form.urgent}
              onChange={(e) => update("urgent", e.target.checked)}
            />

            <div>
              <p className="text-sm font-medium text-card-foreground">
                Urgent Review Request
              </p>

              <p className="text-xs text-foreground/55">
                Mark if timing-sensitive or event-related.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-foreground/60">
            Collaboration Notes
          </label>

          <textarea
            rows={5}
            className={textAreaCls}
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
            placeholder="Describe the experience, package structure, logistics, destination value, traveler expectations, included services, etc."
          />
        </div>

        <div className="mt-5">
          <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-foreground/60">
            Future AI Assistance Ideas
          </label>

          <textarea
            rows={4}
            className={textAreaCls}
            value={form.aiIdeas}
            onChange={(e) => update("aiIdeas", e.target.value)}
            placeholder="Ideas for future AI package generation, marketing assistance, traveler matching, timing optimization, cross-promotions, etc."
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            disabled={saving}
            onClick={saveRequest}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 disabled:opacity-50"
          >
            <Save size={16} />
            {saving ? "Submitting..." : "Submit Collaboration Request"}
          </button>

          <Button variant="outline" disabled={saving}>
            Save Draft
          </Button>
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Collaboration Types"
          title="Ways We May Work Together"
          description="Partners may eventually collaborate across multiple destination and hospitality categories."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {collaborationTypes.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Icon size={20} className="text-primary" />
                </div>

                <h3 className="font-display text-lg text-card-foreground">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-foreground/65">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm">
        <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-gold">
          Collaboration Workflow
        </p>

        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {workflow.map((step, index) => (
            <div key={step} className="flex shrink-0 items-center gap-2">
              <div className="flex items-center gap-2 rounded-full border border-border/70 bg-background px-3 py-1.5 text-xs text-foreground/75">
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
          eyebrow="Saved Collaboration Requests"
          title="Collaboration Request Tracking"
          description="Requests are now connected to Supabase and can later support review, revision, approval, and feature workflows."
        />

        {requests.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-border bg-muted/20 p-10 text-center">
            <MessageSquareText className="mx-auto mb-4 text-primary" size={32} />

            <h3 className="font-display text-2xl text-card-foreground">
              No collaboration requests submitted yet.
            </h3>

            <p className="mt-3 text-sm text-foreground/65">
              Submitted collaboration concepts will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {requests.map((request, index) => (
              <div
                key={`${request.title}-${index}`}
                className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-gold">
                      {request.partner}
                    </p>

                    <h3 className="mt-1 font-display text-xl text-card-foreground">
                      {request.title}
                    </h3>

                    <p className="mt-2 text-sm text-foreground/60">
                      {request.destination}
                    </p>

                    <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/65">
                      {request.notes}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    {request.urgent && (
                      <div className="inline-flex items-center gap-2 rounded-full bg-rose/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-rose-700">
                        <AlertCircle className="h-3.5 w-3.5" />
                        Urgent Review
                      </div>
                    )}

                    <StatusBadge
                      status={
                        request.status as
                          | "Draft"
                          | "Submitted"
                          | "Reviewed"
                          | "Curated"
                          | "Needs Revision"
                          | "Approved"
                          | "Featured Experience"
                      }
                    />
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70">
                    {request.category}
                  </span>

                  <span className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70">
                    {request.groupSize}
                  </span>

                  <span className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70">
                    {request.proposedDates}
                  </span>
                </div>

                {request.aiIdeas && (
                  <div className="mt-5 rounded-2xl border border-gold/20 bg-gold/5 p-4">
                    <div className="flex items-start gap-3">
                      <Wand2 size={18} className="mt-1 shrink-0 text-gold" />

                      <div>
                        <p className="text-xs uppercase tracking-wide text-gold">
                          Future AI Collaboration Notes
                        </p>

                        <p className="mt-2 text-sm leading-7 text-foreground/70">
                          {request.aiIdeas}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <p className="mt-5 text-xs text-foreground/50">
                  Submitted:{" "}
                  {request.createdAt
                    ? new Date(request.createdAt).toLocaleString()
                    : "—"}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <SectionHeader
          eyebrow="Experience Concepts"
          title="Sample Collaboration Ideas"
          description="These represent the types of destination experiences that may evolve into future curated offerings."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {sampleIdeas.map((idea) => (
            <div
              key={idea}
              className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <Sparkles size={18} className="mb-3 text-gold" />

              <h3 className="font-display text-lg text-card-foreground">
                {idea}
              </h3>

              <p className="mt-2 text-sm leading-7 text-foreground/60">
                Future collaboration requests may support package planning,
                seasonal campaigns, hosted experiences, retreat concepts,
                transportation coordination, dining integration, and more.
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="rounded-[2rem] border border-lavender/40 bg-lavender/10 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <MessageSquareText size={20} className="shrink-0 text-primary" />

          <p className="text-sm leading-7 text-foreground/75">
            Future collaboration requests should support threaded discussions,
            revision tracking, shared attachments, urgent flags, approval
            history, and internal Serene Passage notes connected to each
            experience concept.
          </p>

          <Button className="bg-primary hover:bg-primary/90 md:ml-auto">
            Collaboration Workflow Expanding
          </Button>
        </div>
      </div>

      <div className="rounded-[2rem] border border-border/60 bg-muted/20 p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
            <Clock3 className="mb-4 text-primary" size={22} />

            <h3 className="font-display text-lg text-card-foreground">
              Review Workflow
            </h3>

            <p className="mt-2 text-sm leading-7 text-foreground/65">
              Requests should move through review, revision, curation, approval,
              and feature stages.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
            <FileCheck2 className="mb-4 text-primary" size={22} />

            <h3 className="font-display text-lg text-card-foreground">
              Final Approval
            </h3>

            <p className="mt-2 text-sm leading-7 text-foreground/65">
              Approved concepts may later become traveler-facing destination
              experiences or featured campaigns.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
            <ShieldCheck className="mb-4 text-primary" size={22} />

            <h3 className="font-display text-lg text-card-foreground">
              Trusted Collaboration
            </h3>

            <p className="mt-2 text-sm leading-7 text-foreground/65">
              Collaboration requests should remain connected to verified partner
              profiles and destination categories.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
            <Wand2 className="mb-4 text-gold" size={22} />

            <h3 className="font-display text-lg text-card-foreground">
              Future AI Collaboration
            </h3>

            <p className="mt-2 text-sm leading-7 text-foreground/65">
              Future AI tools may help generate collaborative package concepts,
              promotional copy, scheduling ideas, and experience recommendations.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-gold">
              Future Expansion
            </p>

            <h2 className="font-display text-2xl text-card-foreground">
              AI-assisted collaborative experience development
            </h2>

            <p className="mt-3 text-sm leading-7 text-foreground/65">
              As the ecosystem grows, Serene Passage plans to explore future
              AI-assisted collaboration tools capable of helping partners and
              Serene Passage create destination packages, timing structures,
              group coordination ideas, transportation concepts, and curated
              promotional experiences.
            </p>
          </div>

          <Button className="rounded-full bg-gold px-6 text-foreground hover:bg-gold/90">
            Explore Future Collaboration Tools
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CampaignRequestsPage;