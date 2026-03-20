import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import heroImg from '@/assets/hero-travel.jpg';

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
              className="w-full py-4 px-6 rounded-lg bg-primary text-primary-foreground font-medium text-center hover:opacity-90 active:scale-[0.97] transition-all"
            >
              🌸 Explore Women's Retreats
            </Link>
            <Link
              to="/build-your-trip"
              className="w-full py-4 px-6 rounded-lg bg-secondary text-secondary-foreground font-medium text-center hover:opacity-90 active:scale-[0.97] transition-all"
            >
              🌍 Plan Your Trip
            </Link>
            <Link
              to="/travel-deals"
              className="w-full py-4 px-6 rounded-lg bg-gold text-primary-foreground font-medium text-center hover:opacity-90 active:scale-[0.97] transition-all"
            >
              💸 View Travel Deals
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
              { to: '/womens-retreats', emoji: '🌸', title: "Women's Retreats", desc: 'Curated experiences designed for women who crave connection and renewal' },
              { to: '/build-your-trip', emoji: '🌍', title: 'Build Your Trip', desc: 'Share your vision and let us craft the perfect custom itinerary' },
              { to: '/travel-deals', emoji: '💸', title: 'Travel Deals', desc: 'Exclusive rates on luxury getaways you won\'t find anywhere else' },
            ].map((card, i) => (
              <ScrollReveal key={card.to} delay={i * 100}>
                <Link
                  to={card.to}
                  className="block bg-card rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow active:scale-[0.97] transition-transform"
                >
                  <span className="text-5xl mb-4 block">{card.emoji}</span>
                  <h3 className="text-xl font-display mb-2">{card.title}</h3>
                  <p className="text-sm text-foreground/70">{card.desc}</p>
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
              { title: 'Her Glow Travel Circle', desc: 'A sacred space for women who travel with intention' },
              { title: 'Build Your Dream Trip', desc: 'Connect with fellow travelers planning their next adventure' },
              { title: 'Travel Deals & Getaways', desc: 'Be the first to know about exclusive limited-time offers' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <a
                  href="#"
                  className="flex items-center gap-4 bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow active:scale-[0.98] transition-transform"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-display text-lg">SP</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg">{item.title}</h3>
                    <p className="text-sm text-foreground/60">{item.desc}</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
