import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

const steps = [
  { label: 'Destination', field: 'destination', placeholder: 'Where do you dream of going?', type: 'textarea' as const },
  { label: 'Budget', field: 'budget', placeholder: 'Select your budget range', type: 'select' as const, options: ['Under $1,500', '$1,500 – $2,500', '$2,500 – $4,000', '$4,000+'] },
  { label: 'Travelers', field: 'travelers', placeholder: 'How many travelers?', type: 'number' as const },
  { label: 'Dates', field: 'dates', placeholder: 'Preferred travel dates', type: 'text' as const },
  { label: 'Experience', field: 'experience', placeholder: 'What kind of experience are you seeking?', type: 'textarea' as const },
];

const BuildYourTripPage = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Record<string, string>>({});

  const current = steps[step];

  const handleChange = (value: string) => {
    setForm({ ...form, [current.field]: value });
  };

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 section-sage text-center">
        <div className="container">
          <ScrollReveal>
            <h1 className="text-3xl md:text-5xl font-display mb-4" style={{ lineHeight: 1.15 }}>
              Build Your Trip
            </h1>
            <p className="font-script text-xl md:text-2xl text-foreground/80">
              Tell Us Your Vision — We'll Handle the Rest
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container max-w-lg">
          <ScrollReveal>
            {/* Progress */}
            <div className="flex gap-1 mb-8">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-1.5 rounded-full transition-colors ${
                    i <= step ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>

            <p className="text-sm text-foreground/50 mb-2">Step {step + 1} of {steps.length}</p>
            <h2 className="text-2xl font-display mb-6">{current.label}</h2>

            {current.type === 'textarea' ? (
              <textarea
                value={form[current.field] || ''}
                onChange={(e) => handleChange(e.target.value)}
                placeholder={current.placeholder}
                className="w-full min-h-[120px] p-4 rounded-lg border border-border bg-card text-card-foreground resize-none focus:outline-none focus:ring-2 focus:ring-ring"
              />
            ) : current.type === 'select' ? (
              <div className="space-y-3">
                {current.options?.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleChange(opt)}
                    className={`w-full text-left p-4 rounded-lg border transition-all active:scale-[0.97] ${
                      form[current.field] === opt
                        ? 'border-primary bg-primary/5'
                        : 'border-border bg-card hover:border-primary/30'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <input
                type={current.type}
                value={form[current.field] || ''}
                onChange={(e) => handleChange(e.target.value)}
                placeholder={current.placeholder}
                className="w-full p-4 rounded-lg border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            )}

            <div className="flex gap-3 mt-8">
              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="flex-1 py-3.5 rounded-lg border border-border text-foreground font-medium hover:bg-muted active:scale-[0.97] transition-all"
                >
                  Back
                </button>
              )}
              <button
                onClick={() => step < steps.length - 1 ? setStep(step + 1) : alert('Thank you! We will be in touch.')}
                className="flex-1 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 active:scale-[0.97] transition-all"
              >
                {step < steps.length - 1 ? 'Continue' : '✨ Start Planning'}
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default BuildYourTripPage;
