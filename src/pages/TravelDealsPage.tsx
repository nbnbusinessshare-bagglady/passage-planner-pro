import { ScrollReveal } from '@/components/ScrollReveal';
import dealResort from '@/assets/deal-resort.jpg';
import dealOverwater from '@/assets/deal-overwater.jpg';
import anguillaImg from '@/assets/anguilla-beach.jpg';
import turksImg from '@/assets/turks-caicos.jpg';
import grenadaImg from '@/assets/grenada.jpg';
import sedonaImg from '@/assets/sedona-retreat.jpg';

const deals = [
  { destination: 'Cancún, Mexico', image: dealResort, regular: '$2,300', our: '$1,850', tag: 'Hot Deal' },
  { destination: 'Maldives Overwater Villa', image: dealOverwater, regular: '$4,200', our: '$3,450', tag: 'Limited' },
  { destination: 'Anguilla Beach Escape', image: anguillaImg, regular: '$2,800', our: '$2,150', tag: 'New' },
  { destination: 'Turks & Caicos Retreat', image: turksImg, regular: '$3,100', our: '$2,490', tag: 'Popular' },
  { destination: 'Grenada Island Hop', image: grenadaImg, regular: '$1,900', our: '$1,420', tag: 'Value' },
  { destination: 'Sedona Wellness Escape', image: sedonaImg, regular: '$1,600', our: '$1,190', tag: 'Trending' },
];

const TravelDealsPage = () => {
  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 section-cream text-center">
        <div className="container">
          <ScrollReveal>
            <h1 className="text-3xl md:text-5xl font-display mb-4" style={{ lineHeight: 1.15 }}>
              Travel Deals
            </h1>
            <p className="font-script text-xl md:text-2xl text-foreground/80">
              Exclusive Deals & Limited-Time Getaways
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal, i) => (
              <ScrollReveal key={deal.destination} delay={i * 80}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={deal.image} alt={deal.destination} className="w-full h-full object-cover" />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gold text-primary-foreground text-xs font-semibold">
                      {deal.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg mb-3">{deal.destination}</h3>
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-foreground/40 line-through text-sm">{deal.regular}</span>
                      <span className="text-2xl font-semibold text-gold">{deal.our}</span>
                    </div>
                    <button className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 active:scale-[0.97] transition-all">
                      View Deal
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelDealsPage;
