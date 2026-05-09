import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const VendorLoginPage = () => {
  return (
    <div className="min-h-screen pt-16 md:pt-20 flex items-center justify-center bg-[hsl(0,0%,8%)] text-cream">
      <div className="container max-w-md py-16">
        <div className="text-center mb-10">
          <img src={logo} alt="Serene Passages" className="h-16 w-auto mx-auto mb-6 opacity-90" />
          <p className="text-[10px] tracking-[0.32em] uppercase text-gold mb-3">Invitation Only</p>
          <h1 className="font-display text-4xl text-cream mb-3">Travel Partner Portal</h1>
          <p className="font-script text-lg text-cream/70">
            A curated collaboration space for our trusted travel partners
          </p>
        </div>

        <div className="bg-[hsl(0,0%,12%)] rounded-2xl border border-gold/20 p-8 shadow-2xl">
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-[10px] tracking-[0.22em] uppercase text-cream/60 mb-2 block">Partner Email</label>
              <input
                type="email"
                placeholder="partner@yourbrand.com"
                className="w-full h-12 px-4 rounded-md bg-transparent border border-cream/15 text-cream placeholder:text-cream/30 text-sm focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <label className="text-[10px] tracking-[0.22em] uppercase text-cream/60 mb-2 block">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full h-12 px-4 rounded-md bg-transparent border border-cream/15 text-cream placeholder:text-cream/30 text-sm focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <Link
              to="/vendor"
              className="mt-2 w-full h-12 inline-flex items-center justify-center rounded-md bg-gold text-[hsl(0,0%,8%)] text-xs tracking-[0.22em] uppercase font-semibold hover:bg-gold/90 active:scale-[0.99] transition-all"
            >
              Enter Partner Suite
            </Link>
            <a href="#" className="text-xs text-center text-cream/50 hover:text-gold transition-colors">
              Forgot password?
            </a>
          </form>

          <div className="mt-7 pt-6 border-t border-cream/10 text-center">
            <a href="#" className="text-xs tracking-[0.18em] uppercase text-gold hover:underline">
              Apply to Become a Travel Partner →
            </a>
          </div>
        </div>

        <p className="text-center text-[11px] text-cream/40 mt-6 tracking-wide">
          Exclusive opportunities curated through meaningful industry relationships
        </p>
      </div>
    </div>
  );
};

export default VendorLoginPage;