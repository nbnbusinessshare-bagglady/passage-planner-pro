import { SectionHeader, StatusBadge, type CollabStatus } from '@/components/vendor/VendorLayout';
import { Button } from '@/components/ui/button';
import { UploadCloud, FileImage, FileVideo, FileText, Eye, Link2 } from 'lucide-react';

type MediaStatus = 'Ready' | 'Pending Review' | 'Needs Replacement';

type Category =
  | 'Resorts'
  | 'Wellness Retreats'
  | 'Romance Travel'
  | 'Excursions'
  | 'Cruises'
  | 'Weddings'
  | 'Group Experiences'
  | 'Destination Events'
  | 'Luxury Experiences';

const categories: Category[] = [
  'Resorts',
  'Wellness Retreats',
  'Romance Travel',
  'Excursions',
  'Cruises',
  'Weddings',
  'Group Experiences',
  'Destination Events',
  'Luxury Experiences',
];

const media: { name: string; type: string; size: string; status: MediaStatus; category: Category }[] = [
  { name: 'Sedona-retreat-view.jpg', type: 'JPG', size: '4.2 MB', status: 'Ready', category: 'Wellness Retreats' },
  { name: 'Caribbean-villa-tour.mp4', type: 'MP4', size: '38.1 MB', status: 'Pending Review', category: 'Resorts' },
  { name: 'Spring2026-brochure.pdf', type: 'PDF', size: '6.8 MB', status: 'Ready', category: 'Luxury Experiences' },
  { name: 'Cartagena-dinner-night.jpg', type: 'JPG', size: '3.5 MB', status: 'Needs Replacement', category: 'Destination Events' },
  { name: 'Anguilla-sunset.jpg', type: 'JPG', size: '5.1 MB', status: 'Ready', category: 'Romance Travel' },
  { name: 'Wellness-retreat-room.jpg', type: 'JPG', size: '4.7 MB', status: 'Pending Review', category: 'Wellness Retreats' },
];

const iconFor = (type: string) => {
  if (type === 'MP4') return FileVideo;
  if (type === 'PDF') return FileText;
  return FileImage;
};

const statusMap: Record<MediaStatus, CollabStatus> = {
  Ready: 'Approved',
  'Pending Review': 'Submitted',
  'Needs Replacement': 'Needs Revision',
};

const MediaUploadsPage = () => {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Editorial Library"
        title="Travel Asset Library"
        description="Upload and organize editorial visuals across our luxury travel categories — ready for curation into customer-facing experiences."
      />

      {/* Upload card */}
      <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-6 md:p-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] tracking-[0.22em] uppercase text-gold">Step One</span>
        </div>
        <h2 className="font-display text-xl text-card-foreground mb-4">Upload Experience Assets</h2>
        <div className="border-2 border-dashed border-border rounded-xl p-10 text-center bg-background/40 hover:bg-background/70 transition-colors">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gold/10 mb-4">
            <UploadCloud className="text-gold" size={22} />
          </div>
          <p className="font-display text-lg text-card-foreground">Drag & drop your files here</p>
          <p className="text-sm text-foreground/60 mt-1">or click to browse from your device</p>
          <div className="mt-5 flex flex-col items-center gap-1 text-xs text-foreground/55">
            <span>Accepted formats: JPG, PNG, PDF, MP4</span>
            <span>Up to 50 MB each</span>
          </div>
          <Button className="mt-6 bg-gold hover:bg-gold/90 text-foreground">Upload Experience Assets</Button>
        </div>
      </div>

      {/* Categories */}
      <div>
        <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-3">Curated By Category</p>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <span
              key={c}
              className="px-4 py-1.5 rounded-full border border-border/70 bg-card text-xs tracking-wide text-foreground/75 hover:border-gold/60 hover:text-gold transition-colors cursor-pointer"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Media grid */}
      <div>
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-1">Your Library</p>
            <h2 className="font-display text-xl text-card-foreground">Travel Asset Library</h2>
          </div>
          <span className="text-xs text-foreground/55">{media.length} editorial assets</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {media.map((m) => {
            const Icon = iconFor(m.type);
            return (
              <div
                key={m.name}
                className="bg-card rounded-2xl border border-border/60 shadow-sm overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-lavender/30 via-background to-sage/20 flex items-center justify-center">
                  <Icon className="text-foreground/40" size={42} />
                </div>
                <div className="p-4 flex-1 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium text-card-foreground truncate" title={m.name}>
                      {m.name}
                    </p>
                    <StatusBadge status={statusMap[m.status]} />
                  </div>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-gold">{m.category}</p>
                  <div className="flex items-center gap-3 text-[11px] text-foreground/55">
                    <span className="px-2 py-0.5 rounded-full bg-muted">{m.type}</span>
                    <span>{m.size}</span>
                  </div>
                  <div className="flex gap-2 mt-auto pt-2">
                    <Button variant="outline" size="sm" className="flex-1 h-8 text-xs">
                      <Eye size={12} /> Preview
                    </Button>
                    <Button size="sm" className="flex-1 h-8 text-xs bg-primary hover:bg-primary/90">
                      <Link2 size={12} /> Attach
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Usage notes */}
      <div className="bg-lavender/15 border border-lavender/40 rounded-2xl p-6">
        <p className="text-[10px] tracking-[0.22em] uppercase text-primary mb-2">A Gentle Note</p>
        <p className="text-sm text-foreground/75 leading-relaxed">
          Share editorial photography, brochures, and video that allow Serene Passage International
          to thoughtfully curate your destination into elevated, customer-facing travel experiences.
        </p>
      </div>
    </div>
  );
};

export default MediaUploadsPage;