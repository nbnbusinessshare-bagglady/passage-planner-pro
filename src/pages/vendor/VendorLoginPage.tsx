import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';

const VendorLoginPage = () => {
  return (
    <div className="min-h-screen pt-16 md:pt-20 flex items-center justify-center section-cream">
      <div className="container max-w-md py-16">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 mb-4">
            <Lock className="text-primary" size={22} />
          </div>
          <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-2">Private Access</p>
          <h1 className="font-display text-3xl md:text-4xl text-card-foreground mb-3">Vendor Portal</h1>
          <p className="font-script text-lg text-foreground/70">
            A curated space for our trusted travel partners
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-sm border border-border/60 p-8">
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-xs tracking-wide uppercase text-foreground/60 mb-1.5 block">Email</label>
              <input
                type="email"
                placeholder="vendor@yourbrand.com"
                className="w-full h-11 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-xs tracking-wide uppercase text-foreground/60 mb-1.5 block">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full h-11 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <Link
              to="/vendor"
              className="mt-2 w-full h-11 inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 active:scale-[0.98] transition-all"
            >
              Enter Portal
            </Link>
            <a href="#" className="text-xs text-center text-foreground/60 hover:text-primary transition-colors">
              Forgot password?
            </a>
          </form>

          <div className="mt-6 pt-6 border-t border-border/60 text-center">
            <p className="text-xs text-foreground/60">
              Not yet a partner?{' '}
              <a href="#" className="text-primary font-medium hover:underline">Apply for collaboration</a>
            </p>
          </div>
        </div>

        <p className="text-center text-[11px] text-foreground/50 mt-6">
          Curated through trusted travel partnerships · Secure access
        </p>
      </div>
    </div>
  );
};

export default VendorLoginPage;