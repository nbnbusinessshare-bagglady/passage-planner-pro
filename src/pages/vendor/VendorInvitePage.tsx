// FILE: src/pages/vendor/VendorInvitePage.tsx

import { useMemo, useState } from 'react';
import { Copy, Mail, UserPlus } from 'lucide-react';
import { SectionHeader } from '@/components/vendor/VendorLayout';

import inviteHero from '@/assets/partner-portal/invite-partner-networking.png';

const inputCls =
  'w-full h-11 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring';

const textAreaCls =
  'w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring';

const Field = ({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) => (
  <div>
    <label className="text-xs tracking-wide uppercase text-foreground/60 mb-1.5 block">
      {label} {required && <span className="text-gold">*</span>}
    </label>
    {children}
  </div>
);

const VendorInvitePage = () => {
  const [form, setForm] = useState({
    companyName: '',
    contactName: '',
    contactEmail: '',
    phone: '',
    serviceType: '',
    destination: '',
    whereMet: 'LOVE Caribbean / Conference',
    notes: '',
  });

  const update = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const inviteLink = useMemo(() => {
    const slug =
      form.companyName
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '') || 'partner';

    return `${window.location.origin}/partner-invite/${slug}`;
  }, [form.companyName]);

  const emailBody = `Hello ${form.contactName || '[Contact Name]'},

I truly enjoyed connecting with you and learning more about ${form.companyName || '[Their Company]'}.

From our conversation, it felt like there was a natural alignment between what you offer and the kinds of thoughtful, elevated experiences Serene Passage International is continuing to create for our clients.

As I shared during our conversation, I’m currently developing the Serene Passage International Partner Suite/Portal to help strengthen relationships, collaboration, and future opportunities with our travel and hospitality partners.

Below is your personal invitation link to access the Partner Suite:

${inviteLink}

I’ve also included a brief attachment to help refresh your memory about the portal, its purpose, and some of the features and collaboration opportunities being developed.

I look forward to staying connected and exploring ways we may be able to build a meaningful and mutually beneficial relationship moving forward.

Warm regards,

[Your Name]
Founder & Travel Strategist
Serene Passage International

Escape. Explore. Experience.

[Website] | [Phone Number] | [Email]`;

  const copyEmail = async () => {
    await navigator.clipboard.writeText(emailBody);
    alert('Invitation email copied.');
  };

  const openEmail = () => {
    const subject = encodeURIComponent('Wonderful Connecting With You — Partner Invitation');
    const body = encodeURIComponent(emailBody);
    window.location.href = `mailto:${form.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl border border-border/60 shadow-sm min-h-[340px] bg-[hsl(0,0%,8%)]">
        <img
          src={inviteHero}
          alt="Luxury hospitality networking conversation"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

        <div className="relative z-10 p-6 md:p-10 min-h-[340px] flex items-center">
          <div className="max-w-2xl">
            <p className="text-[10px] tracking-[0.32em] uppercase text-gold mb-4">
              Partner Invitation
            </p>

            <h1 className="font-display text-3xl md:text-5xl text-cream leading-tight">
              Invite Travel Partner
            </h1>

            <p className="text-sm md:text-base text-cream/75 mt-4 leading-relaxed">
              Quickly capture a partner’s basic information and generate a personalized invitation email during or after networking conversations.
            </p>
          </div>
        </div>
      </section>

      <SectionHeader
        eyebrow="Quick Intake"
        title="Partner Contact Details"
        description="Company name, contact name, email, phone, and service type are used to personalize the invitation."
      />

      <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-6 md:p-8 space-y-5">
        <div className="flex items-start gap-3">
          <UserPlus className="text-gold shrink-0 mt-1" size={24} />
          <div>
            <h2 className="font-display text-xl text-card-foreground">Relationship Intake</h2>
            <p className="text-sm text-foreground/65 mt-1">
              Use this during conferences, supplier meetings, networking conversations, or casual destination connections.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Company Name" required>
            <input className={inputCls} value={form.companyName} onChange={(e) => update('companyName', e.target.value)} placeholder="Company / property name" required />
          </Field>

          <Field label="Contact Name" required>
            <input className={inputCls} value={form.contactName} onChange={(e) => update('contactName', e.target.value)} placeholder="Full name" required />
          </Field>

          <Field label="Contact Email" required>
            <input className={inputCls} value={form.contactEmail} onChange={(e) => update('contactEmail', e.target.value)} placeholder="contact@company.com" required />
          </Field>

          <Field label="Phone Number">
            <input className={inputCls} value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+1 (000) 000-0000" />
          </Field>

          <Field label="Service Type">
            <input className={inputCls} value={form.serviceType} onChange={(e) => update('serviceType', e.target.value)} placeholder="Resort, wedding, retreat, tour, cruise, etc." />
          </Field>

          <Field label="Destination / Region">
            <input className={inputCls} value={form.destination} onChange={(e) => update('destination', e.target.value)} placeholder="Jamaica, Caribbean, Mexico, etc." />
          </Field>

          <Field label="Where You Met">
            <input className={inputCls} value={form.whereMet} onChange={(e) => update('whereMet', e.target.value)} />
          </Field>

          <Field label="Conversation Notes">
            <input className={inputCls} value={form.notes} onChange={(e) => update('notes', e.target.value)} placeholder="Quick reminder about the conversation" />
          </Field>
        </div>
      </div>

      <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-6 md:p-8 space-y-5">
        <Field label="Generated Invitation Link">
          <input className={inputCls} value={inviteLink} readOnly />
        </Field>

        <Field label="Generated Email">
          <textarea rows={16} className={textAreaCls} value={emailBody} readOnly />
        </Field>

        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <button onClick={copyEmail} className="h-11 px-6 rounded-lg border border-border bg-card text-sm font-medium hover:bg-muted transition-colors inline-flex items-center justify-center gap-2">
            <Copy size={16} /> Copy Invitation Email
          </button>

          <button onClick={openEmail} className="h-11 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all inline-flex items-center justify-center gap-2">
            <Mail size={16} /> Open Email Draft
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorInvitePage;