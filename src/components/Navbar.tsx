// FILE: src/components/Navbar.tsx

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
  { to: '/womens-retreats', label: "Women's Retreats" },
  { to: '/group-trips', label: 'Group Trips' },
  { to: '/travel-deals', label: 'Curated Packages' },
  { to: '/build-your-trip', label: 'Build Your Trip' },
  { to: '/travel-info', label: 'Travel Info' },
  { to: '/contact', label: 'Contact' },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/60">
      <div className="container flex items-center justify-between h-24">
        <Link to="/" className="flex items-center shrink-0 mr-8">
          <img
            src={logo}
            alt="Serene Passage International"
            className="h-20 md:h-24 w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center justify-center flex-1 gap-6 xl:gap-8">
          {navItems.map((link) => {
            const active =
              location.pathname === link.to ||
              (link.to === '/group-trips' && location.pathname === '/group-travel');

            return (
              <Link
                key={link.label}
                to={link.to}
                className={`inline-flex items-center gap-1 text-[12px] xl:text-[13px] font-semibold tracking-[0.14em] uppercase transition-colors hover:text-gold ${
                  active ? 'text-gold' : 'text-foreground/65'
                }`}
              >
                {link.label}
                {link.children && <ChevronDown size={12} className="opacity-50" />}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block ml-8 shrink-0">
          <Link
            to="/partner-portal"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gold/80 text-gold text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-gold hover:text-primary-foreground transition-colors"
          >
            Partner Portal
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground active:scale-95 transition-transform"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-card border-t border-border/60 animate-fade-in max-h-[calc(100vh-6rem)] overflow-y-auto">
          <div className="container py-4 flex flex-col">
            {navItems.map((link) => {
              const active =
                location.pathname === link.to ||
                (link.to === '/group-trips' && location.pathname === '/group-travel');

              return (
                <div key={link.label} className="border-b border-border/40 last:border-0">
                  <div className="flex items-center justify-between">
                    <Link
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={`flex-1 py-3 text-sm font-medium tracking-[0.08em] uppercase ${
                        active ? 'text-gold' : 'text-foreground/85'
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
              );
            })}

            <Link
              to="/partner-portal"
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