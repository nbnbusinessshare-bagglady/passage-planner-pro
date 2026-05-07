import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Sparkles, Compass, Tag, Users, MapPin, Heart } from 'lucide-react';
import heroImg from '@/assets/hero-travel.jpg';
import sedonaImg from '@/assets/sedona-retreat.jpg';
import anguillaImg from '@/assets/anguilla-beach.jpg';
import cartagenaImg from '@/assets/cartagena-culture.jpg';
import costaricaImg from '@/assets/costarica-retreat.jpg';

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Luxury travel experience"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 container text-center px-6 py-24">
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold mb-4 animate-fade-up"
            style={{ color: 'hsl(34, 33%, 93%)', lineHeight: 1.1 }}
          >
            Curated Journeys for Every Soul
          </h1>
          <p
            className="font-script text-2xl md:text-3xl mb-10 animate-fade-up"
            style={{ color: 'hsl(34, 33%, 93%, 0.9)', animationDelay: '150ms' }}
          >
            Escape. Explore. Experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto animate-fade-up" style={{ animationDelay: '300ms' }}>
            <Link
              to="/womens-retreats"
              className="w-full py-3.5 px-6 rounded-full bg-card/95 backdrop-blur text-foreground text-sm tracking-[0.14em] uppercase font-medium text-center border border-gold/40 hover:bg-gold hover:text-primary-foreground hover:border-gold transition-all"
            >
              Explore Women's Retreats
            </Link>
            <Link
              to="/build-your-trip"
              className="w-full py-3.5 px-6 rounded-full bg-card/95 backdrop-blur text-foreground text-sm tracking-[0.14em] uppercase font-medium text-center border border-gold/40 hover:bg-gold hover:text-primary-foreground hover:border-gold transition-all"
            >
              Plan Your Trip
            </Link>
            <Link
              to="/travel-deals"
              className="w-full py-3.5 px-6 rounded-full bg-gold text-primary-foreground text-sm tracking-[0.14em] uppercase font-medium text-center hover:opacity-90 transition-all"
            >
              View Travel Deals
            </Link>
          </div>
        </div>
      </section>

      {/* How would you like to travel? */}
      <section className="py-16 md:py-24 section-cream">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display text-center mb-12">
              How would you like to travel?
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { to: '/womens-retreats', Icon: Sparkles, title: "Women's Retreats", desc: 'Curated experiences designed for women who crave connection and renewal' },
              { to: '/build-your-trip', Icon: Compass, title: 'Build Your Trip', desc: 'Share your vision and let us craft the perfect custom itinerary' },
              { to: '/travel-deals', Icon: Tag, title: 'Travel Deals', desc: "Exclusive rates on luxury getaways you won't find anywhere else" },
            ].map((card, i) => (
              <ScrollReveal key={card.to} delay={i * 100}>
                <Link
                  to={card.to}
                  className="group block bg-card rounded-2xl p-7 text-center border border-border/60 shadow-[0_2px_24px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.12)] hover:border-gold/40 transition-all"
                >
                  <span className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-colors">
                    <card.Icon size={22} strokeWidth={1.4} />
                  </span>
                  <h3 className="text-lg font-display mb-2">{card.title}</h3>
                  <p className="text-[13px] leading-relaxed text-foreground/70">{card.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 md:py-20 section-lavender">
        <div className="container text-center max-w-2xl">
          <ScrollReveal>
            <p className="font-script text-2xl md:text-3xl text-card-foreground mb-4">
              "Secure your experience with confidence"
            </p>
            <p className="text-foreground/70 text-sm">
              Every journey is curated through trusted travel partnerships, ensuring quality, safety, and unforgettable memories.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 md:py-24 section-cream">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display text-center mb-10">
              Join Our Travel Community
            </h2>
          </ScrollReveal>
          <div className="flex flex-col gap-4">
            {[
              { Icon: Heart, title: 'Her Glow Travel Circle', desc: 'A sacred space for women who travel with intention' },
              { Icon: Users, title: 'Build Your Dream Trip', desc: 'Connect with fellow travelers planning their next adventure' },
              { Icon: MapPin, title: 'Travel Deals & Getaways', desc: 'Be the first to know about exclusive limited-time offers' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <a
                  href="#"
                  className="group flex items-center gap-4 bg-card rounded-2xl p-5 border border-border/60 shadow-[0_2px_24px_-12px_rgba(0,0,0,0.08)] hover:border-gold/40 hover:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.12)] transition-all"
                >
                  <div className="w-12 h-12 rounded-full border border-gold/40 text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-primary-foreground transition-colors">
                    <item.Icon size={18} strokeWidth={1.4} />
                  </div>
                  <div>
                    <h3 className="font-display text-base">{item.title}</h3>
                    <p className="text-[13px] text-foreground/60">{item.desc}</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Public Travel Deals Preview */}
      <section className="py-16 md:py-24 section-sage">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-2">Curated · Approved · Ready</p>
              <h2 className="text-3xl md:text-4xl font-display mb-3">This Season's Travel Edit</h2>
              <p className="font-script text-lg text-foreground/70">
                A handpicked preview of our partners' newest journeys
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { img: sedonaImg, tag: 'Featured Destination', title: 'Sedona Soul Reset', meta: 'Spring 2026 · 8 spaces', desc: 'Vortex meditation, sunrise hikes, and desert-sky dinners.' },
              { img: anguillaImg, tag: 'Limited-Time Package', title: 'Anguilla Villa Escape', meta: 'Save 15% · Through April', desc: 'Beachfront villa with private chef and sunset sail.' },
              { img: costaricaImg, tag: "Women's Retreat", title: 'Costa Rica Wellness Week', meta: 'May 2–9, 2026', desc: 'Yoga, jungle hikes, and oceanfront restoration.' },
              { img: cartagenaImg, tag: 'Cultural Festival', title: 'Cartagena Cultural Immersion', meta: 'April · Limited capacity', desc: 'Old-city walking tours and candlelit courtyard nights.' },
            ].map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 80}>
                <article className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/60 h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={d.img} alt={d.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 bg-card/95 backdrop-blur px-3 py-1 rounded-full text-[10px] tracking-[0.18em] uppercase text-primary font-medium">
                      {d.tag}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-xl text-card-foreground">{d.title}</h3>
                    <p className="text-xs text-foreground/60 mt-1">{d.meta}</p>
                    <p className="text-sm text-foreground/75 mt-3 flex-1">{d.desc}</p>
                    <div className="flex flex-col sm:flex-row gap-2 mt-5">
                      <button className="flex-1 h-10 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-all">
                        View Details
                      </button>
                      <button className="flex-1 h-10 rounded-lg border border-border bg-card text-xs font-medium hover:bg-muted transition-colors">
                        Request This Trip
                      </button>
                      <button className="flex-1 h-10 rounded-lg bg-gold/90 text-primary-foreground text-xs font-medium hover:bg-gold transition-colors">
                        Join Interest List
                      </button>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
