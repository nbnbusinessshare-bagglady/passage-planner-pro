// FILE: src/pages/HomePage.tsx

import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Sparkles, Compass, Tag, Users, MapPin, Heart } from 'lucide-react';

import heroVideo from '@/assets/home/serene-passage-hero-loop.mp4';
import sedonaImg from '@/assets/sedona-retreat.jpg';
import anguillaImg from '@/assets/anguilla-beach.jpg';
import cartagenaImg from '@/assets/cartagena-culture.jpg';
import costaricaImg from '@/assets/costarica-retreat.jpg';

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[hsl(34,33%,93%)] pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-card to-[hsl(38,45%,86%)]" />

        <div className="relative z-10 container py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <p className="text-[10px] md:text-xs tracking-[0.34em] uppercase text-gold mb-5 animate-fade-up">
                Original Journeys. Meaningful Connections.
              </p>

              <h1
                className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold mb-5 animate-fade-up"
                style={{ color: 'hsl(0, 0%, 12%)', lineHeight: 1.05 }}
              >
                Travel Experiences Curated for You
              </h1>

              <p className="font-script text-2xl md:text-3xl text-foreground/70 mb-4 animate-fade-up">
                Escape. Explore. Experience.
              </p>

              <p className="text-sm md:text-base max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed text-foreground/70 animate-fade-up">
                Thoughtfully crafted escapes and group journeys designed around what matters most to you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-up">
                <Link
                  to="/build-your-trip"
                  className="inline-flex items-center justify-center min-w-[190px] py-3.5 px-7 rounded-full bg-primary text-primary-foreground text-sm tracking-[0.14em] uppercase font-medium hover:opacity-90 transition-all"
                >
                  Start Your Journey
                </Link>

                <Link
                  to="/travel-deals"
                  className="inline-flex items-center justify-center min-w-[190px] py-3.5 px-7 rounded-full border border-gold/70 text-gold text-sm tracking-[0.14em] uppercase font-medium hover:bg-gold hover:text-primary-foreground transition-all"
                >
                  Explore Experiences
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto lg:mx-0">
                {[
                  { to: '/womens-retreats', label: "Women's Retreats" },
                  { to: '/build-your-trip', label: 'Build Your Trip' },
                  { to: '/travel-deals', label: 'Curated Packages' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="rounded-2xl bg-card/80 border border-border/60 px-4 py-4 text-center shadow-sm hover:border-gold/50 hover:shadow-md transition-all"
                  >
                    <span className="text-[10px] tracking-[0.2em] uppercase text-gold">
                      Explore
                    </span>

                    <p className="font-display text-base text-card-foreground mt-1">
                      {item.label}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Video */}
            <div className="relative lg:scale-[1.08] xl:scale-[1.12] origin-center">
              <div className="relative rounded-[2.2rem] overflow-hidden border border-gold/25 shadow-[0_30px_90px_-24px_rgba(0,0,0,0.38)] bg-black">
                <video
                  className="w-full aspect-[16/10] object-cover"
                  src={heroVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />

                {/* Cinematic luxury overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-black/10 pointer-events-none" />
              </div>

              {/* Subtle luxury frame glow */}
              <div className="absolute inset-0 rounded-[2.2rem] ring-1 ring-gold/20 pointer-events-none" />

              {/* Soft background glow */}
              <div className="absolute -inset-6 bg-gold/5 blur-3xl -z-10 rounded-full" />
            </div>
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
              {
                to: '/womens-retreats',
                Icon: Sparkles,
                title: "Women's Retreats",
                desc: 'Curated experiences designed for women who crave connection and renewal',
              },
              {
                to: '/build-your-trip',
                Icon: Compass,
                title: 'Build Your Trip',
                desc: 'Share your vision and let us craft the perfect custom itinerary',
              },
              {
                to: '/travel-deals',
                Icon: Tag,
                title: 'Curated Packages',
                desc: "Exclusive travel experiences and handpicked opportunities from trusted partners",
              },
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

                  <p className="text-[13px] leading-relaxed text-foreground/70">
                    {card.desc}
                  </p>
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
              {
                Icon: Heart,
                title: 'Her Glow Travel Circle',
                desc: 'A sacred space for women who travel with intention',
              },
              {
                Icon: Users,
                title: 'Build Your Dream Trip',
                desc: 'Connect with fellow travelers planning their next adventure',
              },
              {
                Icon: MapPin,
                title: 'Travel Deals & Getaways',
                desc: 'Be the first to know about exclusive limited-time offers',
              },
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
              <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-2">
                Curated · Approved · Ready
              </p>

              <h2 className="text-3xl md:text-4xl font-display mb-3">
                This Season's Travel Edit
              </h2>

              <p className="font-script text-lg text-foreground/70">
                A handpicked preview of our partners' newest journeys
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                img: sedonaImg,
                tag: 'Featured Destination',
                title: 'Sedona Soul Reset',
                meta: 'Spring 2026 · 8 spaces',
                desc: 'Vortex meditation, sunrise hikes, and desert-sky dinners.',
              },
              {
                img: anguillaImg,
                tag: 'Limited-Time Package',
                title: 'Anguilla Villa Escape',
                meta: 'Save 15% · Through April',
                desc: 'Beachfront villa with private chef and sunset sail.',
              },
              {
                img: costaricaImg,
                tag: "Women's Retreat",
                title: 'Costa Rica Wellness Week',
                meta: 'May 2–9, 2026',
                desc: 'Yoga, jungle hikes, and oceanfront restoration.',
              },
              {
                img: cartagenaImg,
                tag: 'Cultural Festival',
                title: 'Cartagena Cultural Immersion',
                meta: 'April · Limited capacity',
                desc: 'Old-city walking tours and candlelit courtyard nights.',
              },
            ].map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 80}>
                <article className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/60 h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={d.img}
                      alt={d.title}
                      className="w-full h-full object-cover"
                    />

                    <span className="absolute top-3 left-3 bg-card/95 backdrop-blur px-3 py-1 rounded-full text-[10px] tracking-[0.18em] uppercase text-primary font-medium">
                      {d.tag}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-xl text-card-foreground">
                      {d.title}
                    </h3>

                    <p className="text-xs text-foreground/60 mt-1">
                      {d.meta}
                    </p>

                    <p className="text-sm text-foreground/75 mt-3 flex-1">
                      {d.desc}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-2 mt-5">
  <Link
    to="/travel-deals"
    className="flex-1 h-10 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-all inline-flex items-center justify-center"
  >
    View Details
  </Link>

  <Link
    to="/group-travel"
    className="flex-1 h-10 rounded-lg border border-border bg-card text-xs font-medium hover:bg-muted transition-colors inline-flex items-center justify-center"
  >
    Plan Group Trip
  </Link>

  <Link
    to="/contact"
    className="flex-1 h-10 rounded-lg bg-gold/90 text-primary-foreground text-xs font-medium hover:bg-gold transition-colors inline-flex items-center justify-center"
  >
    Join Interest List
  </Link>
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