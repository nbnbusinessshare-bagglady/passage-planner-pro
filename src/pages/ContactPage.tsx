// FILE: src/pages/ContactPage.tsx

import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', interest: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 section-lavender text-center">
        <div className="container">
          <ScrollReveal>
            <h1 className="text-3xl md:text-5xl font-display mb-4" style={{ lineHeight: 1.15 }}>
              Contact Us
            </h1>
            <p className="font-script text-xl md:text-2xl text-foreground/80">
              We'd love to hear from you
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container max-w-lg">
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-1.5">Name</label>
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
                <label className="block text-sm font-medium text-foreground/70 mb-1.5">Email</label>
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
                <label className="block text-sm font-medium text-foreground/70 mb-1.5">Travel Interest</label>
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
                <label className="block text-sm font-medium text-foreground/70 mb-1.5">Message</label>
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
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;