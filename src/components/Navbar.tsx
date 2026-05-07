import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.png';

type NavItem = {
  to: string;
  label: string;
  children?: { to: string; label: string }[];
};

const navItems: NavItem[] = [
  { to: '/', label: 'Home' },
  {
    to: '/womens-retreats',
    label: "Women's Retreats",
    children: [
      { to: '/womens-retreats#her-glow', label: 'Her Glow Retreats' },
      { to: '/womens-retreats#wellness', label: 'Wellness Escapes' },
      { to: '/womens-retreats#soft-life', label: 'Soft Life Experiences' },
    ],
  },
  {
    to: '/build-your-trip',
    label: 'Group Trips',
    children: [
      { to: '/build-your-trip#friends-family', label: 'Friends & Family Travel' },
      { to: '/build-your-trip#couples', label: 'Couples Escapes' },
      { to: '/build-your-trip#celebration', label: 'Celebration Trips' },
    ],
  },
  {
    to: '/travel-deals',
    label: 'Curated Packages',
    children: [
      { to: '/travel-deals#featured', label: 'Featured Packages' },
      { to: '/travel-deals#luxury', label: 'Luxury Escapes' },
      { to: '/travel-deals#international', label: 'International Experiences' },
    ],
  },
  {
    to: '/build-your-trip',
    label: 'Build Your Dream Trip',
    children: [
      { to: '/build-your-trip#couples', label: 'Couples Travel' },
      { to: '/build-your-trip#family', label: 'Family Travel' },
      { to: '/build-your-trip#solo', label: 'Solo Travel' },
      { to: '/build-your-trip#honeymoons', label: 'Honeymoons' },
    ],
  },
  {
    to: '/travel-deals',
    label: 'Featured Offers',
    children: [
      { to: '/travel-deals#limited', label: 'Limited-Time Offers' },
      { to: '/travel-deals#trending', label: 'Trending Destinations' },
      { to: '/travel-deals#vendors', label: 'Vendor Spotlights' },
    ],
  },
  {
    to: '/travel-info',
    label: 'Travel Info',
    children: [
      { to: '/travel-info#tips', label: 'Travel Tips' },
      { to: '/travel-info#faqs', label: 'FAQs' },
      { to: '/travel-info#passport', label: 'Passport Guidance' },
      { to: '/travel-info#payment', label: 'Payment Options' },
    ],
  },
  { to: '/contact', label: 'Contact' },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/60">
      <div className="container flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Serene Passages International"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((link) => {
            const active = location.pathname === link.to;
            return (
              <div key={link.label} className="relative group">
                <Link
                  to={link.to}
                  className={`inline-flex items-center gap-1 px-2 xl:px-3 py-2 text-[12px] xl:text-[13px] font-medium tracking-[0.08em] uppercase transition-colors hover:text-gold ${
                    active ? 'text-gold' : 'text-foreground/80'
                  }`}
                >
                  {link.label}
                  {link.children && <ChevronDown size={12} className="opacity-60" />}
                </Link>
                {link.children && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-card border border-border/60 rounded-lg shadow-xl py-2 min-w-[220px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          className="block px-4 py-2 text-[12px] tracking-wide text-foreground/75 hover:text-gold hover:bg-muted/50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Partner Portal */}
        <div className="hidden lg:block">
          <Link
            to="/vendor/login"
            className="inline-flex items-center px-4 py-2 rounded-full border border-gold/70 text-gold text-[11px] tracking-[0.18em] uppercase font-medium hover:bg-gold hover:text-primary-foreground transition-colors"
          >
            Partner Portal
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground active:scale-95 transition-transform"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-card border-t border-border/60 animate-fade-in max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="container py-4 flex flex-col">
            {navItems.map((link) => (
              <div key={link.label} className="border-b border-border/40 last:border-0">
                <div className="flex items-center justify-between">
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`flex-1 py-3 text-sm font-medium tracking-[0.08em] uppercase ${
                      location.pathname === link.to ? 'text-gold' : 'text-foreground/85'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === link.label ? null : link.label)
                      }
                      className="p-2 text-foreground/60"
                      aria-label="Expand"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          mobileExpanded === link.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>
                {link.children && mobileExpanded === link.label && (
                  <div className="pb-3 pl-3 flex flex-col gap-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        onClick={() => setOpen(false)}
                        className="py-1.5 text-xs text-foreground/70 hover:text-gold transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/vendor/login"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center px-4 py-2.5 rounded-full border border-gold/70 text-gold text-[11px] tracking-[0.18em] uppercase font-medium"
            >
              Partner Portal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};