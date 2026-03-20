import { ScrollReveal } from '@/components/ScrollReveal';
import { useEffect, useState } from 'react';

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
    time.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: true });

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 section-sage text-center">
        <div className="container">
          <ScrollReveal>
            <h1 className="text-3xl md:text-5xl font-display mb-4" style={{ lineHeight: 1.15 }}>
              Travel Info
            </h1>
            <p className="font-script text-xl md:text-2xl text-foreground/80">
              Stay informed for your next journey
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container max-w-3xl space-y-16">
          {/* Travel Alerts */}
          <ScrollReveal>
            <h2 className="text-2xl font-display mb-6">✈️ Travel Alerts</h2>
            <div className="bg-card rounded-xl p-6 border border-border">
              <p className="text-foreground/60 text-sm">No active travel alerts at this time. Check back for important updates regarding your destinations.</p>
            </div>
          </ScrollReveal>

          {/* World Clocks */}
          <ScrollReveal>
            <h2 className="text-2xl font-display mb-6">🌎 World Clocks</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {clocks.map((c) => (
                <div key={c.city} className="bg-card rounded-xl p-5 text-center border border-border">
                  <p className="text-sm text-foreground/50 mb-1">{c.city}</p>
                  <p className="text-2xl font-display tabular-nums">{formatTime(c.tz)}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Weather */}
          <ScrollReveal>
            <h2 className="text-2xl font-display mb-6">🌡️ Destination Weather</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {weather.map((w) => (
                <div key={w.city} className="bg-card rounded-xl p-5 text-center border border-border">
                  <p className="text-sm text-foreground/50 mb-1">{w.city}</p>
                  <p className="text-2xl font-display">{w.temp}</p>
                  <p className="text-xs text-foreground/40 mt-1">{w.condition}</p>
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
