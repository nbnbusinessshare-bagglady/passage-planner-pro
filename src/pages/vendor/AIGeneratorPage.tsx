import { Sparkles, Copy } from 'lucide-react';
import { SectionHeader } from '@/components/vendor/VendorLayout';

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <label className="text-xs tracking-wide uppercase text-foreground/60 mb-1.5 block">{label}</label>
    {children}
  </div>
);

const inputCls = 'w-full h-11 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring';

const outputs = [
  {
    label: 'Flyer Headline',
    body: 'Sedona, Reimagined — A Soul Reset for Women Who Lead.',
  },
  {
    label: 'CTA Copy',
    body: 'Reserve your sanctuary · Only 8 spaces remain for spring.',
  },
  {
    label: 'Instagram Caption',
    body: 'Sunrise on the red rocks. Stillness on the inside. ✨ Seven days of rest, ritual, and reconnection — designed for women who give endlessly. Spring 2026 · link in bio.',
  },
  {
    label: 'Facebook Post',
    body: 'There is a version of you waiting in Sedona — softer, slower, fully your own. Join us March 14–20 for an intimate retreat under desert skies. Limited to 8 women.',
  },
  {
    label: 'Email Promo Copy',
    body: 'Dear traveler, this spring we\'re inviting you somewhere quiet. Seven days of vortex meditation, candlelit dinners, and long mornings with nowhere to be. Sedona is calling — will you answer?',
  },
  {
    label: 'Landing Page Intro',
    body: 'A retreat for the woman who has been carrying everything. Sedona\'s ancient red rock, paired with intimate ritual and elevated comfort, becomes the backdrop for a deeper homecoming.',
  },
];

const AIGeneratorPage = () => {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="AI Studio"
        title="Campaign Generator"
        description="Tell us the soul of your trip. We'll draft the words to share it with the world."
      />

      <div className="grid grid-cols-1 xl:grid-cols-[380px_1fr] gap-6">
        {/* Input Panel */}
        <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-6 space-y-4 h-fit xl:sticky xl:top-24">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-gold" />
            <h2 className="font-display text-lg text-card-foreground">Trip Inputs</h2>
          </div>
          <Field label="Destination"><input className={inputCls} placeholder="Sedona, Arizona" /></Field>
          <Field label="Audience">
            <select className={inputCls}>
              <option>Women 35–55, professional</option>
              <option>Couples, luxury seekers</option>
              <option>Solo travelers, soulful</option>
              <option>Multi-generational families</option>
            </select>
          </Field>
          <Field label="Emotional Tone">
            <select className={inputCls}>
              <option>Calming & restorative</option>
              <option>Bold & adventurous</option>
              <option>Romantic & intimate</option>
              <option>Cultural & soulful</option>
            </select>
          </Field>
          <Field label="Trip Type">
            <select className={inputCls}>
              <option>Wellness Retreat</option>
              <option>Cultural Immersion</option>
              <option>Luxury Villa</option>
              <option>Festival Travel</option>
            </select>
          </Field>
          <Field label="Dates"><input className={inputCls} placeholder="Mar 14 – 20, 2026" /></Field>
          <Field label="Package Highlights">
            <textarea
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Vortex meditation, private chef, spa rituals, sunrise hikes…"
            />
          </Field>
          <button className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 active:scale-[0.98] transition-all">
            <Sparkles size={15} /> Generate Campaign
          </button>
        </div>

        {/* Output Preview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-[10px] tracking-[0.22em] uppercase text-gold">Preview</p>
            <span className="text-xs text-foreground/50">Sample output · refresh to regenerate</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {outputs.map((o) => (
              <div key={o.label} className="bg-card rounded-2xl border border-border/60 shadow-sm p-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[10px] tracking-[0.18em] uppercase text-primary font-medium">{o.label}</p>
                  <button className="text-foreground/40 hover:text-primary transition-colors" aria-label="Copy">
                    <Copy size={13} />
                  </button>
                </div>
                <p className="font-script text-base text-card-foreground leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIGeneratorPage;