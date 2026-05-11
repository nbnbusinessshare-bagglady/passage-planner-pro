// FILE: src/pages/vendor/MediaUploadsPage.tsx

import { useEffect, useState } from "react";

import { SectionHeader, StatusBadge } from "@/components/vendor/VendorLayout";
import { Button } from "@/components/ui/button";

import {
  AlertCircle,
  Camera,
  CheckCircle2,
  Clock3,
  FileImage,
  FileSpreadsheet,
  FileText,
  FileVideo,
  Globe2,
  ImagePlus,
  Link2,
  MessageSquareText,
  Save,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  Wand2,
} from "lucide-react";

import mediaHero from "@/assets/partner-portal/travel-asset-library-flatlay.png";

const assetTypes = [
  {
    title: "Photography",
    description:
      "Resorts, excursions, dining, transportation, wellness, weddings, retreats, and destination imagery.",
    icon: Camera,
  },
  {
    title: "Brochures & Flyers",
    description:
      "PDF brochures, menus, event flyers, package details, destination materials, and media kits.",
    icon: FileText,
  },
  {
    title: "Videos",
    description:
      "Experience previews, walkthroughs, reels, testimonials, property tours, and promotional clips.",
    icon: FileVideo,
  },
  {
    title: "Rates & Operational Details",
    description:
      "Rate sheets, capacity information, booking notes, pickup zones, schedules, or collaboration details.",
    icon: FileSpreadsheet,
  },
];

const categories = [
  "Resorts",
  "Destination Weddings",
  "Women’s Retreats",
  "Excursions",
  "Transportation",
  "Dining Experiences",
  "Luxury Experiences",
  "Wellness",
  "Entertainment",
  "Group Travel",
];

const messages = [
  {
    from: "Serene Passage",
    title: "Please update pickup timing",
    note: "The group arrival schedule changed. Please revise the transfer timing sheet.",
    urgent: true,
  },
  {
    from: "Partner",
    title: "Updated destination brochure uploaded",
    note: "Added revised flyer and group pricing attachment for review.",
    urgent: false,
  },
];

type UploadRecord = {
  assetName: string;
  category: string;
  assetType: string;
  externalLink: string;
  notes: string;
  status: string;
  createdAt: string;
};

const inputCls =
  "h-11 w-full rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

const textAreaCls =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

const MediaUploadsPage = () => {
  const [uploads, setUploads] = useState<UploadRecord[]>([]);

  const [form, setForm] = useState({
    assetName: "",
    category: "",
    assetType: "",
    externalLink: "",
    notes: "",
  });

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("spi-partner-assets") || "[]"
    );

    setUploads(saved.reverse());
  }, []);

  const update = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const saveAsset = () => {
    const existing = JSON.parse(
      localStorage.getItem("spi-partner-assets") || "[]"
    );

    const newAsset = {
      ...form,
      status: "Submitted",
      createdAt: new Date().toISOString(),
    };

    const updated = [...existing, newAsset];

    localStorage.setItem(
      "spi-partner-assets",
      JSON.stringify(updated)
    );

    setUploads(updated.reverse());

    setForm({
      assetName: "",
      category: "",
      assetType: "",
      externalLink: "",
      notes: "",
    });

    alert("Asset information saved for review.");
  };

  return (
    <div className="space-y-8">
      <section className="relative min-h-[360px] overflow-hidden rounded-3xl border border-border/60 bg-[hsl(0,0%,8%)] shadow-sm">
        <img
          src={mediaHero}
          alt="Luxury travel asset library flat lay"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

        <div className="relative z-10 flex min-h-[360px] items-center p-6 md:p-10">
          <div className="max-w-3xl">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-black/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Partner Collaboration Assets
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80 backdrop-blur">
                <Globe2 className="h-4 w-4" />
                International Partner Media
              </div>
            </div>

            <h1 className="font-display text-3xl leading-tight text-cream md:text-5xl">
              Media, Documents & Collaboration Files
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-cream/75 md:text-base">
              Upload experience assets, brochures, menus, pricing details,
              videos, flyers, operational documents, and collaboration
              materials Serene Passage may review, revise, organize, and curate
              for future traveler experiences.
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm md:p-8">
          <div className="flex items-start gap-3">
            <UploadCloud className="mt-1 shrink-0 text-gold" size={24} />

            <div>
              <h2 className="font-display text-2xl text-card-foreground">
                Asset Submission Workspace
              </h2>

              <p className="mt-1 text-sm leading-6 text-foreground/65">
                Upload systems are being prepared for future cloud storage.
                During this phase, partners can organize and submit asset
                records, links, and upload notes for review.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-5">
            <div className="rounded-2xl border-2 border-dashed border-border bg-background/40 p-10 text-center transition-colors hover:bg-background/70">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                <UploadCloud className="text-gold" size={28} />
              </div>

              <p className="font-display text-xl text-card-foreground">
                Full upload storage coming next
              </p>

              <p className="mx-auto mt-2 max-w-lg text-sm leading-7 text-foreground/60">
                Future backend infrastructure will support direct uploads,
                Supabase Storage integration, media review workflows, approvals,
                revisions, and collaborative file management.
              </p>

              <Button className="mt-6 bg-gold text-foreground hover:bg-gold/90">
                <ImagePlus className="mr-2 h-4 w-4" />
                Upload Assets
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-foreground/60">
                  Asset Name
                </label>

                <input
                  className={inputCls}
                  value={form.assetName}
                  onChange={(e) =>
                    update("assetName", e.target.value)
                  }
                  placeholder="Wedding brochure, retreat photos, etc."
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-foreground/60">
                  Asset Category
                </label>

                <select
                  className={inputCls}
                  value={form.category}
                  onChange={(e) =>
                    update("category", e.target.value)
                  }
                >
                  <option value="">Select Category</option>

                  {categories.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-foreground/60">
                  Asset Type
                </label>

                <input
                  className={inputCls}
                  value={form.assetType}
                  onChange={(e) =>
                    update("assetType", e.target.value)
                  }
                  placeholder="PDF, JPG, MP4, Menu, Flyer, etc."
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-foreground/60">
                  External Asset Link
                </label>

                <input
                  className={inputCls}
                  value={form.externalLink}
                  onChange={(e) =>
                    update("externalLink", e.target.value)
                  }
                  placeholder="Google Drive, Dropbox, WeTransfer, etc."
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-foreground/60">
                Asset Notes
              </label>

              <textarea
                rows={5}
                className={textAreaCls}
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                placeholder="Describe what is included, what should be reviewed, revision requests, traveler relevance, pricing details, etc."
              />
            </div>

            <button
              type="button"
              onClick={saveAsset}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              <Save size={16} />
              Save Asset Record
            </button>

            <div className="rounded-2xl bg-muted/30 p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={18}
                  className="mt-1 shrink-0 text-primary"
                />

                <p className="text-sm leading-7 text-foreground/70">
                  Future backend logic: uploads should connect to the partner
                  account, service category, destination location, revision
                  requests, approval workflow, and communication history.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm md:p-8">
          <div className="flex items-start gap-3">
            <MessageSquareText
              className="mt-1 shrink-0 text-primary"
              size={22}
            />

            <div>
              <h2 className="font-display text-2xl text-card-foreground">
                Partner Communication Center
              </h2>

              <p className="mt-1 text-sm leading-6 text-foreground/65">
                Future messaging should allow partners and Serene Passage to
                exchange notes, revisions, attachments, approvals, requests,
                and urgent collaboration details.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.title}
                className="rounded-2xl border border-border/60 bg-background p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
                      {message.from}
                    </p>

                    <h3 className="mt-1 font-display text-lg text-card-foreground">
                      {message.title}
                    </h3>
                  </div>

                  {message.urgent && (
                    <div className="inline-flex items-center gap-2 rounded-full bg-rose/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-rose-700">
                      <AlertCircle className="h-3.5 w-3.5" />
                      Urgent Review
                    </div>
                  )}
                </div>

                <p className="mt-3 text-sm leading-7 text-foreground/65">
                  {message.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section>
        <SectionHeader
          eyebrow="Recommended Assets"
          title="What Partners Should Share"
          description="The stronger and more organized the materials, the easier it becomes for Serene Passage to represent the experience beautifully and accurately."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {assetTypes.map((item) => {
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

      <section>
        <SectionHeader
          eyebrow="Saved Asset Records"
          title="Temporary Upload Tracking"
          description="Until cloud uploads are connected, asset records and links are temporarily stored in local browser storage."
        />

        {uploads.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-border bg-muted/20 p-10 text-center">
            <UploadCloud className="mx-auto mb-4 text-primary" size={32} />

            <h3 className="font-display text-2xl text-card-foreground">
              No asset records saved yet.
            </h3>

            <p className="mt-3 text-sm text-foreground/65">
              Saved upload records will appear here after partner submissions.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {uploads.map((asset, index) => (
              <div
                key={`${asset.assetName}-${index}`}
                className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm"
              >
                <div className="aspect-[4/2] bg-gradient-to-br from-lavender/30 via-background to-sage/20 flex items-center justify-center">
                  {asset.assetType.includes("MP4") ? (
                    <FileVideo className="text-foreground/40" size={42} />
                  ) : asset.assetType.includes("PDF") ? (
                    <FileText className="text-foreground/40" size={42} />
                  ) : (
                    <FileImage className="text-foreground/40" size={42} />
                  )}
                </div>

                <div className="p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-gold">
                        {asset.category}
                      </p>

                      <h3 className="mt-2 font-display text-xl text-card-foreground">
                        {asset.assetName}
                      </h3>
                    </div>

                    <StatusBadge
                      status={
                        asset.status as
                          | "Submitted"
                          | "Reviewed"
                          | "Curated"
                          | "Approved"
                      }
                    />
                  </div>

                  <p className="mt-3 text-sm leading-7 text-foreground/65">
                    {asset.notes}
                  </p>

                  {asset.externalLink && (
                    <div className="mt-4 rounded-xl border border-border bg-muted/20 p-3">
                      <p className="text-xs uppercase tracking-wide text-foreground/50">
                        External Link
                      </p>

                      <p className="mt-2 break-all text-sm text-primary">
                        {asset.externalLink}
                      </p>
                    </div>
                  )}

                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-xs text-foreground/50">
                      {asset.assetType}
                    </p>

                    <p className="text-xs text-foreground/50">
                      {new Date(asset.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <div className="rounded-[2rem] border border-lavender/40 bg-lavender/10 p-6">
        <div className="flex items-start gap-3">
          <Link2
            size={18}
            className="mt-1 shrink-0 text-primary"
          />

          <div>
            <p className="font-medium text-card-foreground">
              External asset links are supported during early development.
            </p>

            <p className="mt-2 text-sm leading-7 text-foreground/75">
              During early access phases, partners may also provide Google
              Drive, Dropbox, WeTransfer, media kit, cloud storage, or website
              links directly to Serene Passage for review and organization until
              full upload infrastructure is connected.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] border border-border/60 bg-muted/20 p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
            <Clock3 className="mb-4 text-primary" size={22} />

            <h3 className="font-display text-lg text-card-foreground">
              Revision Tracking
            </h3>

            <p className="mt-2 text-sm leading-7 text-foreground/65">
              Partners and Serene Passage should eventually track requested
              revisions, approvals, timing updates, and finalized materials.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
            <CheckCircle2 className="mb-4 text-primary" size={22} />

            <h3 className="font-display text-lg text-card-foreground">
              Final Approval
            </h3>

            <p className="mt-2 text-sm leading-7 text-foreground/65">
              Final approved materials may later be marked as curated assets
              for traveler-facing packages, promotions, and campaigns.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
            <Wand2 className="mb-4 text-gold" size={22} />

            <h3 className="font-display text-lg text-card-foreground">
              Future AI Assistance
            </h3>

            <p className="mt-2 text-sm leading-7 text-foreground/65">
              Uploaded media and details may later support AI-assisted
              promotional copy, package creation, and collaborative experience
              marketing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaUploadsPage;