// FILE: src/components/vendor/VendorLayout.tsx

import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  BarChart3,
  Building2,
  CalendarHeart,
  ClipboardList,
  Compass,
  FileSearch,
  Globe2,
  HandHeart,
  Handshake,
  Images,
  LayoutDashboard,
  MailPlus,
  MapPin,
  Megaphone,
  Settings,
  ShieldCheck,
  Sparkles,
  Users,
  Wand2,
} from "lucide-react";

const adminNavItems = [
  {
    to: "/admin",
    label: "Admin Dashboard",
    icon: BarChart3,
    end: true,
  },
  {
    to: "/admin/invites/new",
    label: "Create Partner Invite",
    icon: MailPlus,
  },
  {
    to: "/admin/invites",
    label: "Saved Invite Queue",
    icon: ClipboardList,
  },
  {
    to: "/admin/review",
    label: "Admin Review",
    icon: FileSearch,
  },
];

const partnerNavItems = [
  {
    to: "/vendor",
    label: "Partner Dashboard",
    icon: LayoutDashboard,
    end: true,
  },
  {
    to: "/vendor/submit",
    label: "Partner Profile",
    icon: Building2,
  },
  {
    to: "/vendor/media",
    label: "Media & Assets",
    icon: Images,
  },
  {
    to: "/vendor/campaigns",
    label: "Campaign Requests",
    icon: Megaphone,
  },
  {
    to: "/vendor/promotions",
    label: "Promotions & Packages",
    icon: Compass,
  },
  {
    to: "/vendor/events",
    label: "Destination Events",
    icon: CalendarHeart,
  },
  {
    to: "/vendor/relationships",
    label: "Partner Relationships",
    icon: Handshake,
  },
  {
    to: "/vendor/industry",
    label: "Destination Intelligence",
    icon: Globe2,
  },
  {
    to: "/vendor/ai-generator",
    label: "Future AI Systems",
    icon: Wand2,
  },
  {
    to: "/vendor/settings",
    label: "Settings",
    icon: Settings,
  },
];

export const VendorLayout = () => {
  const location = useLocation();

  const renderNavItem = (item: {
    to: string;
    label: string;
    icon: React.ElementType;
    end?: boolean;
  }) => {
    const Icon = item.icon;

    const active = item.end
      ? location.pathname === item.to
      : location.pathname.startsWith(item.to);

    return (
      <NavLink
        key={item.to}
        to={item.to}
        end={item.end}
        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
          active
            ? "bg-primary/10 font-medium text-primary"
            : "text-foreground/70 hover:bg-muted hover:text-foreground"
        }`}
      >
        <Icon size={16} />
        {item.label}
      </NavLink>
    );
  };

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      <div className="container py-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="shrink-0 lg:w-72">
            <div className="sticky top-24 rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
              <div className="mb-1 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gold" />

                <span className="text-[10px] uppercase tracking-[0.18em] text-foreground/60">
                  Owner & Partner Portal
                </span>
              </div>

              <h2 className="font-display text-2xl text-card-foreground">
                Partner Ecosystem
              </h2>

              <p className="mt-2 text-[12px] leading-relaxed text-foreground/55">
                A curated collaboration platform for trusted hospitality,
                tourism, destination, transportation, wellness, wedding, and
                experience partners.
              </p>

              <div className="mt-5 rounded-2xl border border-gold/20 bg-gradient-to-br from-[#f8f3ec] via-[#f5f0ea] to-[#f3edf1] p-4">
                <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-gold">
                  Current Phase
                </p>

                <p className="text-sm font-medium text-card-foreground">
                  Early Ecosystem Operations
                </p>

                <p className="mt-1 text-[11px] leading-relaxed text-foreground/55">
                  Serene Passage is actively building partner capture,
                  onboarding, media review, campaign request, and future AI
                  coordination systems.
                </p>
              </div>

              <div className="mt-5 rounded-2xl border border-border/60 bg-muted/30 p-4">
                <div className="flex items-start gap-3">
                  <Sparkles
                    size={18}
                    className="mt-0.5 shrink-0 text-gold"
                  />

                  <div>
                    <h3 className="text-sm font-semibold text-card-foreground">
                      Future AI Coordination
                    </h3>

                    <p className="mt-1 text-[11px] leading-relaxed text-foreground/55">
                      Planned AI tools may help partners and Serene Passage
                      collaborate on destination packages, pricing, campaigns,
                      traveler experiences, and ecosystem opportunities.
                    </p>
                  </div>
                </div>
              </div>

              <nav className="mt-6 flex flex-col gap-5">
                <div>
                  <div className="mb-2 flex items-center gap-2 px-2">
                    <ShieldCheck size={14} className="text-gold" />

                    <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                      Owner Back Office
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    {adminNavItems.map(renderNavItem)}
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2 px-2">
                    <Users size={14} className="text-gold" />

                    <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                      Partner Portal
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    {partnerNavItems.map(renderNavItem)}
                  </div>
                </div>
              </nav>

              <div className="mt-6 border-t border-border/60 pt-6">
                <div className="mb-4 rounded-2xl border border-border/60 bg-background p-4">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={18}
                      className="mt-0.5 shrink-0 text-primary"
                    />

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/55">
                        Ecosystem Vision
                      </p>

                      <p className="mt-2 text-[11px] leading-relaxed text-foreground/60">
                        Organizing destination relationships by service,
                        location, readiness, and collaboration potential to
                        create stronger travel experiences.
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/"
                  className="flex items-center gap-2 text-xs text-foreground/60 transition-colors hover:text-primary"
                >
                  <ArrowLeft size={12} />
                  Back to public website
                </Link>
              </div>
            </div>
          </aside>

          <main className="min-w-0 flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export type CollabStatus =
  | "Draft"
  | "Submitted"
  | "Reviewed"
  | "Curated"
  | "Needs Revision"
  | "Approved"
  | "Featured Experience";

export const StatusBadge = ({
  status,
}: {
  status: CollabStatus;
}) => {
  const styles: Record<CollabStatus, string> = {
    Draft: "bg-muted text-foreground/70",
    Submitted: "bg-lavender/30 text-primary",
    Reviewed: "bg-lavender/40 text-primary",
    Curated: "bg-sage/30 text-foreground",
    "Needs Revision": "bg-rose/30 text-foreground",
    Approved: "bg-sage/40 text-foreground",
    "Featured Experience": "bg-gold/25 text-foreground",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide ${styles[status]}`}
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
  <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div>
      {eyebrow && (
        <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-gold">
          {eyebrow}
        </p>
      )}

      <h1 className="font-display text-2xl text-card-foreground md:text-3xl">
        {title}
      </h1>

      {description && (
        <p className="mt-2 max-w-xl text-sm text-foreground/70">
          {description}
        </p>
      )}
    </div>

    {action}
  </div>
);