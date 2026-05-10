// FILE: src/pages/TravelInfoPage.tsx

import { ScrollReveal } from '@/components/ScrollReveal';
import { useEffect, useState } from 'react';

import travelInfoHero from '@/assets/heroes/travel-info-hero.jpg';

const clocks = [
  { city: 'New York', tz: 'America/New_York' },
  { city: 'London', tz: 'Europe/London' },
  { city: 'Dubai', tz: 'Asia/Dubai' },
  { city: 'Jamaica', tz: 'America/Jamaica' },
];

const weather = [
  { city: 'Cancún', temp: '31°C', condition: '☀️ Sunny' },
  { city: 'Sedona', temp: '24°C', condition: '⛅ Partly Cloudy' },
  { city: 'Anguilla', temp: '29°C', condition: '🌤️ Clear' },
  { city: 'Grenada', temp: '28°C', condition: '🌦️ Showers' },
];

const TravelInfoPage = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (tz: string) =>
    time.toLocaleTimeString('en-US', {
      timeZone: tz,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/35 z-10" />

        <img
          src={travelInfoHero}
          alt="Travel information hero"
          className="w-full h-[340px] md:h-[420px] object-cover"
        />

        <div className="absolute inset-0 z-20 flex items-start justify-center pt-12 md:pt-16">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-2xl text-center mx-auto">
                <p className="text-[11px] tracking-[0.28em] uppercase text-white/70 mb-4">
                  Global Essentials
                </p>

                <h1
                  className="text-4xl md:text-6xl font-display text-white mb-5"
                  style={{ lineHeight: 1.05 }}
                >
                  Travel Info
                </h1>

                <p className="font-script text-2xl md:text-3xl text-white/85">
                  Know before you go
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="container max-w-5xl space-y-16">
          {/* Travel Alerts */}
          <ScrollReveal>
            <div>
              <h2 className="text-2xl font-display mb-6">
                ✈️ Travel Alerts
              </h2>

              <div className="bg-card rounded-2xl p-7 border border-border shadow-sm">
                <p className="text-foreground/65 leading-relaxed">
                  No active travel alerts at this time. Continue checking this
                  page for destination advisories, documentation updates,
                  weather concerns, and important travel notices.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* World Clocks */}
          <ScrollReveal>
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-display">
                  🌍 World Clocks
                </h2>

                <span className="text-xs uppercase tracking-[0.22em] text-foreground/40">
                  Live Time Zones
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {clocks.map((c) => (
                  <div
                    key={c.city}
                    className="bg-card rounded-2xl p-6 text-center border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <p className="text-sm text-foreground/45 mb-2">
                      {c.city}
                    </p>

                    <p className="text-3xl font-display tabular-nums">
                      {formatTime(c.tz)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Weather */}
          <ScrollReveal>
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-display">
                  🌤 Destination Weather
                </h2>

                <span className="text-xs uppercase tracking-[0.22em] text-foreground/40">
                  Popular Destinations
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {weather.map((w) => (
                  <div
                    key={w.city}
                    className="bg-card rounded-2xl p-6 text-center border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <p className="text-sm text-foreground/45 mb-2">
                      {w.city}
                    </p>

                    <p className="text-3xl font-display">
                      {w.temp}
                    </p>

                    <p className="text-xs text-foreground/40 mt-2">
                      {w.condition}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Additional Info */}
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  title: 'Currency Exchange',
                  text: 'Stay aware of international currency rates before departure.',
                },
                {
                  title: 'Travel Documentation',
                  text: 'Review passport, REAL ID, visa, and entry requirements.',
                },
                {
                  title: 'Destination Tips',
                  text: 'Helpful insights, etiquette, and regional travel guidance.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-2xl border border-border p-6 shadow-sm"
                >
                  <h3 className="font-display text-xl mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-foreground/65 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default TravelInfoPage;