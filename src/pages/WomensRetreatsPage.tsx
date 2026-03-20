import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import sedonaImg from '@/assets/sedona-retreat.jpg';
import costaricaImg from '@/assets/costarica-retreat.jpg';
import anguillaImg from '@/assets/anguilla-beach.jpg';
import turksImg from '@/assets/turks-caicos.jpg';
import cartagenaImg from '@/assets/cartagena-culture.jpg';
import grenadaImg from '@/assets/grenada.jpg';

interface RetreatProps {
  title: string;
  locations: string;
  description: string;
  images: string[];
  pricing: { group: string; range: string }[];
  color: string;
}

const RetreatCard = ({ title, locations, description, images, pricing, color }: RetreatProps) => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <ScrollReveal>
      <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        {/* Image slideshow */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={images[currentImg]}
            alt={title}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImg(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentImg ? 'bg-card scale-110' : 'bg-card/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-6 md:p-8">
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${color}`}>
            {locations}
          </div>
          <h3 className="text-2xl font-display mb-2">{title}</h3>
          <p className="text-foreground/70 mb-6">{description}</p>

          <div className="space-y-3 mb-6">
            {pricing.map((p) => (
              <div key={p.group} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                <span className="text-sm text-foreground/60">{p.group}</span>
                <span className="font-medium text-gold">{p.range}</span>
              </div>
            ))}
          </div>

          <button className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 active:scale-[0.97] transition-all">
            Reserve Your Spot
          </button>
        </div>
      </div>
    </ScrollReveal>
  );
};

const WomensRetreatsPage = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 md:py-24 section-lavender text-center">
        <div className="container">
          <ScrollReveal>
            <h1 className="text-3xl md:text-5xl font-display mb-4" style={{ lineHeight: 1.15 }}>
              Women's Retreats
            </h1>
            <p className="font-script text-xl md:text-2xl text-foreground/80 max-w-lg mx-auto">
              Curated experiences designed around how you want to feel
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Retreats */}
      <section className="py-12 md:py-20">
        <div className="container max-w-3xl space-y-12">
          <RetreatCard
            title="🌿 Glow Reset Escape"
            locations="Sedona / Costa Rica"
            description="Peace, clarity, reset, healing — immerse yourself in nature's embrace and rediscover your inner glow."
            images={[sedonaImg, costaricaImg]}
            pricing={[
              { group: '10 travelers', range: '$2,200 – $2,600' },
              { group: '20 travelers', range: '$1,900 – $2,300' },
            ]}
            color="bg-secondary/20 text-secondary"
          />

          <RetreatCard
            title="🌴 Soft Life Getaway"
            locations="Anguilla / Turks & Caicos"
            description="Ease, luxury, beauty, relaxation — surrender to pristine waters and world-class indulgence."
            images={[anguillaImg, turksImg]}
            pricing={[
              { group: '10 travelers', range: '$2,800 – $3,400' },
              { group: '20 travelers', range: '$2,400 – $2,900' },
            ]}
            color="bg-accent/20 text-accent"
          />

          <RetreatCard
            title="🌺 Radiance Escape"
            locations="Grenada / Cartagena"
            description="Fun, connection, vibrant experiences — feel alive through culture, color, and joyful adventure."
            images={[grenadaImg, cartagenaImg]}
            pricing={[
              { group: '10 travelers', range: '$2,000 – $2,500' },
              { group: '20 travelers', range: '$1,700 – $2,200' },
            ]}
            color="bg-primary/15 text-primary"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 section-sage">
        <div className="container max-w-2xl">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-display text-center mb-10">How It Works</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {[
              'Each trip requires a minimum of 10 travelers',
              'A deposit secures your spot on the retreat',
              'If the minimum is reached, the trip moves forward as planned',
              'If the minimum is not met, you may transfer to another trip',
              'Alternatively, receive a full refund minus a 15% planning fee',
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="flex items-start gap-3 bg-card rounded-xl p-4">
                  <div className="w-6 h-6 rounded-md bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7L6 10L11 4" stroke="hsl(276, 25%, 57%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-sm text-foreground/80">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WomensRetreatsPage;
