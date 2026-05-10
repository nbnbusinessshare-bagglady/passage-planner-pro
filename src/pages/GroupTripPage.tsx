// FILE: src/pages/GroupTripPage.tsx

import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Users, CalendarDays, Map, HeartHandshake } from 'lucide-react';

import groupTravelHero from '@/assets/heroes/group-travel-hero.jpg';

const GroupTripPage = () => {
  return (
    <div className="pt-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />

        <img
          src={groupTravelHero}
          alt="Group travel experiences"
          className="w-full h-[340px] md:h-[430px] object-cover"
        />

        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-2xl">
                <p className="text-[11px] tracking-[0.28em] uppercase text-white/75 mb-4">
                  Shared Journeys · Curated Together
                </p>

                <h1
                  className="text-4xl md:text-6xl font-display text-white mb-5"
                  style={{ lineHeight: 1.05 }}
                >
                  Group Travel Made Beautifully Simple
                </h1>

                <p className="font-script text-2xl md:text-3xl text-white/90">
                  Gather your people. We’ll shape the experience.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 section-cream">
        <div className="container max-w-3xl text-center">
          <ScrollReveal>
            <p className="text-sm md:text-base text-foreground/70 leading-relaxed mb-8">
              Whether you’re planning a birthday escape, couples getaway, family celebration,
              class reunion, corporate retreat, wedding group, or destination experience,
              Serene Passage helps organize the details so your group can enjoy the journey.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm tracking-[0.14em] uppercase font-medium hover:opacity-90 transition-all"
            >
              Start a Group Inquiry
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display text-center mb-12">
              Perfect For
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { Icon: Users, title: 'Friends & Family', text: 'Celebrations, reunions, and meaningful shared escapes.' },
              { Icon: HeartHandshake, title: 'Couples & Weddings', text: 'Destination weddings, anniversaries, romance trips, and wedding guest travel.' },
              { Icon: CalendarDays, title: 'Corporate & Class Trips', text: 'Retreats, team travel, alumni groups, and milestone gatherings.' },
              { Icon: Map, title: 'Custom Groups', text: 'Private itineraries designed around your group’s vision, style, and budget.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="bg-card rounded-2xl p-6 border border-border/60 shadow-sm h-full">
                  <div className="w-12 h-12 rounded-full bg-gold/40 text-gold flex items-center justify-center mb-5">
                    <item.Icon size={20} strokeWidth={1.5} />
                  </div>

                  <h3 className="font-display text-lg mb-2">{item.title}</h3>

                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 section-sage">
        <div className="container max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display mb-5">
              How Group Planning Works
            </h2>

            <p className="text-foreground/70 mb-10">
              We start with your group size, travel style, destination ideas, budget range,
              dates, and experience goals. From there, Serene Passage helps shape the best
              path forward.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {[
                'Share your group vision',
                'Review curated options',
                'Confirm details and next steps',
              ].map((step, i) => (
                <div key={step} className="bg-card rounded-2xl p-5 border border-border/60">
                  <p className="text-xs tracking-[0.22em] uppercase text-gold mb-2">
                    Step {i + 1}
                  </p>

                  <p className="font-display text-lg">{step}</p>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm tracking-[0.14em] uppercase font-medium hover:opacity-90 transition-all"
            >
              Plan a Group Trip
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default GroupTripPage;