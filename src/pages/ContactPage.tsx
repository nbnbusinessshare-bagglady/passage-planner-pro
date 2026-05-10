// FILE: src/pages/ContactPage.tsx

import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

import contactHero from '@/assets/heroes/contact-hero.jpg';

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xqengbep', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', interest: '', message: '' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/25 z-10" />

        <img
          src={contactHero}
          alt="Contact Serene Passage"
          className="w-full h-[320px] md:h-[400px] object-cover"
        />

        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-2xl">
                <p className="text-[11px] tracking-[0.28em] uppercase text-white/75 mb-4">
                  Start the Conversation
                </p>

                <h1
                  className="text-4xl md:text-6xl font-display text-white mb-5"
                  style={{ lineHeight: 1.05 }}
                >
                  Contact Us
                </h1>

                <p className="font-script text-2xl md:text-3xl text-white/90">
                  Tell us where your next chapter begins.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 md:py-20">
        <div className="container max-w-lg">
          <ScrollReveal>
            {submitted ? (
              <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-sm">
                <h2 className="text-2xl font-display mb-3">Message Sent</h2>
                <p className="text-foreground/70">
                  Thank you for reaching out. A member of the Serene Passage team will contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full p-4 rounded-lg border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-[#DCC79B]"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full p-4 rounded-lg border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-[#DCC79B]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-1.5">
                    Travel Interest
                  </label>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full p-4 rounded-lg border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-[#DCC79B]"
                  >
                    <option value="">Select an interest</option>
                    <option>Women's Retreats</option>
                    <option>Custom Trip</option>
                    <option>Travel Deals</option>
                    <option>Group Travel</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full min-h-[120px] p-4 rounded-lg border border-border bg-card text-card-foreground resize-none focus:outline-none focus:ring-2 focus:ring-[#DCC79B]"
                    placeholder="Tell us about your dream travel experience..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg bg-[#E2DCE1] text-[#6F666B] font-medium text-lg hover:bg-[#D8CDD3] active:scale-[0.97] transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;