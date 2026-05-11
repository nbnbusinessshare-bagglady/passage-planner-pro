// FILE: src/components/Navbar.tsx

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import logo from "@/assets/logo.png";

type NavItem = {
  to: string;
  label: string;
  children?: { to: string; label: string }[];
};

const navItems: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/womens-retreats", label: "Women's Retreats" },
  { to: "/group-trips", label: "Group Trips" },
  { to: "/travel-deals", label: "Curated Packages" },
  { to: "/build-your-trip", label: "Build Your Trip" },
  { to: "/travel-info", label: "Travel Info" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-card/95 backdrop-blur-md">
      <div className="container flex h-24 items-center justify-between">
        <Link to="/" className="mr-8 flex shrink-0 items-center">
          <img
            src={logo}
            alt="Serene Passage International"
            className="h-20 w-auto object-contain md:h-24"
          />
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-8">
          {navItems.map((link) => {
            const active =
              location.pathname === link.to ||
              (link.to === "/group-trips" &&
                location.pathname === "/group-travel");

            return (
              <Link
                key={link.label}
                to={link.to}
                className={`inline-flex items-center gap-1 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors xl:text-[13px] ${
                  active
                    ? "text-gold"
                    : "text-foreground/65 hover:text-gold"
                }`}
              >
                {link.label}

                {link.children && (
                  <ChevronDown size={12} className="opacity-50" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/admin"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/70 transition-all hover:border-gold/50 hover:text-gold"
          >
            <ShieldCheck size={14} />
            Owner Portal
          </Link>

          <Link
            to="/partner-portal"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/80 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            <Sparkles size={14} />
            Partner Portal
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="p-2 text-foreground transition-transform active:scale-95 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-6rem)] overflow-y-auto border-t border-border/60 bg-card animate-fade-in lg:hidden">
          <div className="container flex flex-col py-4">
            {navItems.map((link) => {
              const active =
                location.pathname === link.to ||
                (link.to === "/group-trips" &&
                  location.pathname === "/group-travel");

              return (
                <div
                  key={link.label}
                  className="border-b border-border/40 last:border-0"
                >
                  <div className="flex items-center justify-between">
                    <Link
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={`flex-1 py-3 text-sm font-medium uppercase tracking-[0.08em] ${
                        active
                          ? "text-gold"
                          : "text-foreground/85"
                      }`}
                    >
                      {link.label}
                    </Link>

                    {link.children && (
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === link.label
                              ? null
                              : link.label
                          )
                        }
                        className="p-2 text-foreground/60"
                        aria-label="Expand"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            mobileExpanded === link.label
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {link.children &&
                    mobileExpanded === link.label && (
                      <div className="flex flex-col gap-1 pb-3 pl-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.to}
                            onClick={() => setOpen(false)}
                            className="py-1.5 text-xs text-foreground/70 transition-colors hover:text-gold"
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
              to="/admin"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/75"
            >
              <ShieldCheck size={13} />
              Owner Portal
            </Link>

            <Link
              to="/partner-portal"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-gold/70 px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-gold"
            >
              <Sparkles size={13} />
              Partner Portal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};