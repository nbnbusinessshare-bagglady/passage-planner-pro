import { useLocation } from 'react-router-dom';
import { SectionHeader } from '@/components/vendor/VendorLayout';
import { Sparkles } from 'lucide-react';

const titles: Record<string, { eyebrow: string; title: string; description: string }> = {
  '/vendor/events': { eyebrow: 'Calendar', title: 'Events', description: 'Showcase, schedule, and manage curated travel events.' },
  '/vendor/promotions': { eyebrow: 'Active Offers', title: 'Promotions', description: 'Craft limited-time offers and partner promotions.' },
  '/vendor/media': { eyebrow: 'Library', title: 'Media Uploads', description: 'Upload editorial photography, videos, and brochures.' },
  '/vendor/campaigns': { eyebrow: 'Workflow', title: 'Campaign Requests', description: 'Track collaboration requests with our travel strategists.' },
  '/vendor/settings': { eyebrow: 'Account', title: 'Settings', description: 'Manage brand details, contacts, and notification preferences.' },
};

const VendorStubPage = () => {
  const { pathname } = useLocation();
  const meta = titles[pathname] ?? { eyebrow: 'Coming Soon', title: 'Section', description: 'This view is being curated.' };
  return (
    <div className="space-y-6">
      <SectionHeader eyebrow={meta.eyebrow} title={meta.title} description={meta.description} />
      <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-12 text-center">
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gold/10 mb-4">
          <Sparkles className="text-gold" size={20} />
        </div>
        <p className="font-script text-xl text-foreground/70">This section is being curated.</p>
        <p className="text-sm text-foreground/50 mt-2">Placeholder content — connect data later.</p>
      </div>
    </div>
  );
};

export default VendorStubPage;
