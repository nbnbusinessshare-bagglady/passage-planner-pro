// FILE: src/components/vendor/VendorLayout.tsx

import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Compass,
  CalendarHeart,
  Tag,
  Images,
  HandHeart,
  Settings,
  Sparkles,
  ShieldCheck,
  ArrowLeft,
  Globe2,
  Handshake,
  MailPlus,
} from 'lucide-react';

const navItems = [
  { to: '/vendor', label: 'Partner Suite', icon: LayoutDashboard, end: true },
  { to: '/vendor/invite', label: 'Invite Partner', icon: MailPlus },
  { to: '/vendor/submit', label: 'Travel Opportunities', icon: Compass },
  { to: '/vendor/media', label: 'Travel Asset Library', icon: Images },
  { to: '/vendor/campaigns', label: 'Experience Collaborations', icon: HandHeart },
  { to: '/vendor/events', label: 'Destination Events', icon: CalendarHeart },
  { to: '/vendor/promotions', label: 'Seasonal Promotions', icon: Tag },
  { to: '/vendor/ai-generator', label: 'Experience Builder Studio', icon: Sparkles },
  { to: '/vendor/relationships', label: 'Partner Relationships', icon: Handshake },
  { to: '/vendor/industry', label: 'Industry Events & Partnerships', icon: Globe2 },
  { to: '/vendor/settings', label: 'Settings', icon: Settings },
  { to: '/admin/review', label: 'Curation Review', icon: ShieldCheck },
];

export const VendorLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 shrink-0">
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/60 sticky top-24">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-2 w-2 rounded-full bg-gold" />
                <span className="text-[10px] tracking-[0.18em] uppercase text-foreground/60">
                  Invitation Only
                </span>
              </div>

              <h2 className="font-display text-xl text-card-foreground mb-1">
                Travel Partner Portal
              </h2>

              <p className="text-[11px] text-foreground/55 leading-relaxed mb-5">
                A curated collaboration space for trusted travel, hospitality, and destination partners.
              </p>

              <div className="rounded-xl border border-gold/20 bg-gold/5 p-3 mb-5">
                <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-1">
                  Partner Status
                </p>
                <p className="text-sm font-medium text-card-foreground">
                  Early Access Network
                </p>
                <p className="text-[11px] text-foreground/55 mt-1">
                  Private invitation and onboarding phase.
                </p>
              </div>

              <nav className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = item.end
                    ? location.pathname === item.to
                    : location.pathname.startsWith(item.to);

                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.end}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                        active
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-foreground/70 hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      <Icon size={16} />
                      {item.label}
                    </NavLink>
                  );
                })}
              </nav>

              <div className="mt-6 pt-6 border-t border-border/60">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-xs text-foreground/60 hover:text-primary transition-colors"
                >
                  <ArrowLeft size={12} /> Back to public site
                </Link>
              </div>
            </div>
          </aside>

          <main className="flex-1 min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export type CollabStatus =
  | 'Draft'
  | 'Submitted'
  | 'Reviewed'
  | 'Curated'
  | 'Needs Revision'
  | 'Approved'
  | 'Featured Experience';

export const StatusBadge = ({ status }: { status: CollabStatus }) => {
  const styles: Record<CollabStatus, string> = {
    Draft: 'bg-muted text-foreground/70',
    Submitted: 'bg-lavender/30 text-primary',
    Reviewed: 'bg-lavender/40 text-primary',
    Curated: 'bg-sage/30 text-foreground',
    'Needs Revision': 'bg-rose/30 text-foreground',
    Approved: 'bg-sage/40 text-foreground',
    'Featured Experience': 'bg-gold/25 text-foreground',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide ${styles[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {status}
    </span>
  );
};

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) => (
  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
    <div>
      {eyebrow && (
        <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-2">
          {eyebrow}
        </p>
      )}
      <h1 className="font-display text-2xl md:text-3xl text-card-foreground">
        {title}
      </h1>
      {description && (
        <p className="text-sm text-foreground/70 mt-2 max-w-xl">
          {description}
        </p>
      )}
    </div>
    {action}
  </div>
);