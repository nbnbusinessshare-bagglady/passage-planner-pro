import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

export const Footer = () => (
  <footer className="section-sage py-16">
    <div className="container">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16">
        <div className="flex-1">
          <img src={logo} alt="Serene Passages International" className="h-20 w-auto mb-4" />
          <p className="text-foreground/80 max-w-xs text-sm leading-relaxed">
            Curated travel experiences designed for connection, renewal, and unforgettable moments.
          </p>
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-display mb-4">Explore</h4>
          <div className="flex flex-col gap-2">
            <Link to="/womens-retreats" className="text-sm text-foreground/70 hover:text-primary transition-colors">Women's Retreats</Link>
            <Link to="/build-your-trip" className="text-sm text-foreground/70 hover:text-primary transition-colors">Build Your Trip</Link>
            <Link to="/travel-deals" className="text-sm text-foreground/70 hover:text-primary transition-colors">Travel Deals</Link>
            <Link to="/travel-info" className="text-sm text-foreground/70 hover:text-primary transition-colors">Travel Info</Link>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-display mb-4">Connect</h4>
          <div className="flex flex-col gap-2">
            <Link to="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">Contact Us</Link>
            <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Her Glow Travel Circle</a>
            <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Travel Deals Community</a>
            <Link to="/vendor/login" className="text-sm text-foreground/70 hover:text-primary transition-colors">Vendor Portal</Link>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-border text-center">
        <p className="text-xs text-foreground/50">
          © {new Date().getFullYear()} Serene Passages International. All rights reserved.
        </p>
        <p className="text-xs text-foreground/40 mt-1">Curated through trusted travel partnerships</p>
      </div>
    </div>
  </footer>
);
