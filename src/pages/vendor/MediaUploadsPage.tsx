// FILE: src/pages/vendor/MediaUploadsPage.tsx

import { SectionHeader } from '@/components/vendor/VendorLayout';
import { Button } from '@/components/ui/button';

import {
  UploadCloud,
  FileImage,
  FileVideo,
  FileText,
  Link2,
  Camera,
  FileSpreadsheet,
} from 'lucide-react';

import mediaHero from '@/assets/partner-portal/travel-asset-library-flatlay.png';

const assetTypes = [
  {
    title: 'Photography',
    description: 'Resort images, rooms, dining, excursions, weddings, retreats.',
    icon: Camera,
  },
  {
    title: 'Brochures & Flyers',
    description: 'PDF guides, package flyers, destination info, event materials.',
    icon: FileText,
  },
  {
    title: 'Videos',
    description: 'Property tours, destination reels, experience previews, testimonials.',
    icon: FileVideo,
  },
  {
    title: 'Rates & Details',
    description: 'Rate sheets, package notes, group terms, booking conditions.',
    icon: FileSpreadsheet,
  },
];

const categories = [
  'Resorts',
  'Destination Weddings',
  'Romance Travel',
  'Women’s Retreats',
  'Wellness',
  'Cruises',
  'Excursions',
  'Group Travel',
  'Luxury Experiences',
  'Transportation',
];

const sampleAssets = [
  {
    name: 'Resort exterior photos',
    type: 'JPG / PNG',
    category: 'Resorts',
  },
  {
    name: 'Wedding package brochure',
    type: 'PDF',
    category: 'Destination Weddings',
  },
  {
    name: 'Group rate sheet',
    type: 'PDF / XLS',
    category: 'Group Travel',
  },
  {
    name: 'Property video tour',
    type: 'MP4',
    category: 'Luxury Experiences',
  },
];

const MediaUploadsPage = () => {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl border border-border/60 shadow-sm min-h-[340px] bg-[hsl(0,0%,8%)]">
        <img
          src={mediaHero}
          alt="Luxury travel asset library flat lay"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

        <div className="relative z-10 p-6 md:p-10 min-h-[340px] flex items-center">
          <div className="max-w-2xl">
            <p className="text-[10px] tracking-[0.32em] uppercase text-gold mb-4">
              Travel Asset Library
            </p>

            <h1 className="font-display text-3xl md:text-5xl text-cream leading-tight">
              Upload Travel Assets
            </h1>

            <p className="text-sm md:text-base text-cream/75 mt-4 leading-relaxed">
              Share photography, brochures, videos, media kits, and supporting materials Serene Passage International may use to review and curate future client experiences.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-6 md:p-8">
        <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-2">
          Partner Materials
        </p>

        <h2 className="font-display text-2xl text-card-foreground">
          Add Your Media & Supporting Files
        </h2>

        <p className="text-sm text-foreground/65 mt-2 max-w-2xl leading-relaxed">
          This area is prepared for partner asset uploads. During early access, files may be shared directly with Serene Passage while the upload connection is being finalized.
        </p>

        <div className="border-2 border-dashed border-border rounded-xl p-10 text-center bg-background/40 hover:bg-background/70 transition-colors mt-6">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gold/10 mb-4">
            <UploadCloud className="text-gold" size={24} />
          </div>

          <p className="font-display text-lg text-card-foreground">
            Upload connection coming soon
          </p>

          <p className="text-sm text-foreground/60 mt-1">
            Accepted files will include JPG, PNG, PDF, MP4, and rate documents.
          </p>

          <Button className="mt-6 bg-gold hover:bg-gold/90 text-foreground">
            Upload Experience Assets
          </Button>
        </div>
      </div>

      <section>
        <SectionHeader
          eyebrow="Recommended"
          title="What Partners Should Share"
          description="The stronger the materials, the easier it is to represent the experience beautifully and accurately."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {assetTypes.map((item) => {
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

      <section>
        <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-3">
          Curated By Category
        </p>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-1.5 rounded-full border border-border/70 bg-card text-xs tracking-wide text-foreground/75"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Examples"
          title="Sample Asset Types"
          description="These examples help partners understand the kinds of materials that support better curation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sampleAssets.map((asset) => (
            <div
              key={asset.name}
              className="bg-card rounded-2xl border border-border/60 shadow-sm overflow-hidden"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-lavender/30 via-background to-sage/20 flex items-center justify-center">
                {asset.type.includes('MP4') ? (
                  <FileVideo className="text-foreground/40" size={38} />
                ) : asset.type.includes('PDF') || asset.type.includes('XLS') ? (
                  <FileText className="text-foreground/40" size={38} />
                ) : (
                  <FileImage className="text-foreground/40" size={38} />
                )}
              </div>

              <div className="p-4">
                <p className="font-display text-base text-card-foreground">
                  {asset.name}
                </p>

                <p className="text-[10px] tracking-[0.18em] uppercase text-gold mt-2">
                  {asset.category}
                </p>

                <p className="text-xs text-foreground/55 mt-1">
                  {asset.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-lavender/15 border border-lavender/40 rounded-2xl p-6">
        <div className="flex items-start gap-3">
          <Link2 size={18} className="text-primary shrink-0 mt-1" />

          <p className="text-sm text-foreground/75 leading-relaxed">
            During this early access phase, partners may also send Dropbox, Google Drive, media kit,
            or website links directly to Serene Passage International for review and organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediaUploadsPage;