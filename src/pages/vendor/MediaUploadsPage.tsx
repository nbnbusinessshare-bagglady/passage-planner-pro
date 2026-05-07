import { SectionHeader, StatusBadge } from '@/components/vendor/VendorLayout';
import { Button } from '@/components/ui/button';
import { UploadCloud, FileImage, FileVideo, FileText, Eye, Link2 } from 'lucide-react';

type MediaStatus = 'Ready' | 'Pending Review' | 'Needs Replacement';

const media: { name: string; type: string; size: string; status: MediaStatus }[] = [
  { name: 'Sedona-retreat-view.jpg', type: 'JPG', size: '4.2 MB', status: 'Ready' },
  { name: 'Caribbean-villa-tour.mp4', type: 'MP4', size: '38.1 MB', status: 'Pending Review' },
  { name: 'Spring2026-brochure.pdf', type: 'PDF', size: '6.8 MB', status: 'Ready' },
  { name: 'Cartagena-dinner-night.jpg', type: 'JPG', size: '3.5 MB', status: 'Needs Replacement' },
  { name: 'Anguilla-sunset.jpg', type: 'JPG', size: '5.1 MB', status: 'Ready' },
  { name: 'Wellness-retreat-room.jpg', type: 'JPG', size: '4.7 MB', status: 'Pending Review' },
];

const iconFor = (type: string) => {
  if (type === 'MP4') return FileVideo;
  if (type === 'PDF') return FileText;
  return FileImage;
};

const statusMap: Record<MediaStatus, 'Approved' | 'Submitted' | 'Needs Revision'> = {
  Ready: 'Approved',
  'Pending Review': 'Submitted',
  'Needs Replacement': 'Needs Revision',
};

const MediaUploadsPage = () => {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Library"
        title="Media Uploads"
        description="Upload, organize, and prepare travel visuals for campaign review."
      />

      {/* Upload card */}
      <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-6 md:p-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] tracking-[0.22em] uppercase text-gold">Step One</span>
        </div>
        <h2 className="font-display text-xl text-card-foreground mb-4">Upload New Media</h2>
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
          <Button className="mt-6 bg-gold hover:bg-gold/90 text-foreground">Upload Media</Button>
        </div>
      </div>

      {/* Media grid */}
      <div>
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-1">Your Library</p>
            <h2 className="font-display text-xl text-card-foreground">Media Library</h2>
          </div>
          <span className="text-xs text-foreground/55">{media.length} files</span>
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
          Upload images, brochures, and videos that help Serene Passage create polished campaign previews,
          travel offers, and customer-facing promotions.
        </p>
      </div>
    </div>
  );
};

export default MediaUploadsPage;