import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, Plus, Sparkles, ShieldCheck, ArrowLeft } from 'lucide-react';

const navItems = [
  { to: '/vendor', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/vendor/submit', label: 'New Submission', icon: Plus },
  { to: '/vendor/ai-generator', label: 'AI Campaign Studio', icon: Sparkles },
  { to: '/admin/review', label: 'Admin Review', icon: ShieldCheck },
];

export const VendorLayout = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/60 sticky top-24">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-2 w-2 rounded-full bg-gold" />
                <span className="text-[10px] tracking-[0.18em] uppercase text-foreground/60">Private Portal</span>
              </div>
              <h2 className="font-display text-xl text-card-foreground mb-6">Vendor Suite</h2>
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

          {/* Main */}
          <main className="flex-1 min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export const StatusBadge = ({ status }: { status: 'Draft' | 'Submitted' | 'Needs Revision' | 'Approved' }) => {
  const styles: Record<string, string> = {
    Draft: 'bg-muted text-foreground/70',
    Submitted: 'bg-lavender/30 text-primary',
    'Needs Revision': 'bg-rose/30 text-foreground',
    Approved: 'bg-sage/40 text-foreground',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide ${styles[status]}`}>
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
        <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-2">{eyebrow}</p>
      )}
      <h1 className="font-display text-2xl md:text-3xl text-card-foreground">{title}</h1>
      {description && <p className="text-sm text-foreground/70 mt-2 max-w-xl">{description}</p>}
    </div>
    {action}
  </div>
);