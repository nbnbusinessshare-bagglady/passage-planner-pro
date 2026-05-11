// FILE: src/pages/admin/AdminInviteQueuePage.tsx

import { useEffect, useState } from "react";
import {
  ClipboardList,
  Copy,
  ExternalLink,
  Mail,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";

import { SectionHeader } from "@/components/vendor/VendorLayout";

type InviteRecord = {
  businessName: string;
  contactName: string;
  contactEmail: string;
  phone: string;
  country: string;
  businessCategory: string;
  connectionSource: string;
  inviteStatus: string;
  inviteReference: string;
  inviteLink: string;
  createdAt: string;
};

const AdminInviteQueuePage = () => {
  const [invites, setInvites] = useState<InviteRecord[]>([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("spi-partner-invites") || "[]"
    );

    setInvites(saved.reverse());
  }, []);

  const copyLink = async (link: string) => {
    await navigator.clipboard.writeText(link);
    alert("Invite link copied.");
  };

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Partner Queue"
        title="Saved Partner Invites"
        description="Review saved invitations, relationship statuses, onboarding links, and future partner opportunities."
      />

      <section className="rounded-[2rem] border border-border/60 bg-card p-6 md:p-8 shadow-sm">
        <div className="flex items-start gap-3">
          <ClipboardList className="text-primary shrink-0 mt-1" size={24} />

          <div>
            <h2 className="font-display text-2xl text-card-foreground">
              Invite Queue
            </h2>

            <p className="mt-2 text-sm leading-7 text-foreground/65">
              Saved partner invitations are stored here temporarily until the
              Supabase ecosystem database is connected.
            </p>
          </div>
        </div>
      </section>

      {invites.length === 0 ? (
        <section className="rounded-[2rem] border border-dashed border-border bg-muted/20 p-10 text-center">
          <ShieldCheck className="mx-auto text-primary mb-4" size={32} />

          <h3 className="font-display text-2xl text-card-foreground">
            No saved partner invites yet.
          </h3>

          <p className="mt-3 text-sm text-foreground/65">
            Saved partner invitations will appear here after they are created
            and stored from the Partner Invite & Capture System.
          </p>
        </section>
      ) : (
        <div className="grid gap-5">
          {invites.map((invite, index) => (
            <article
              key={`${invite.inviteReference}-${index}`}
              className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm"
            >
              <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
                <div className="space-y-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-gold">
                      Invitation Reference
                    </p>

                    <h2 className="mt-2 font-display text-2xl text-card-foreground">
                      {invite.businessName || "Unnamed Business"}
                    </h2>

                    <p className="mt-1 text-sm text-foreground/55">
                      {invite.inviteReference}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-foreground/50">
                        Contact
                      </p>

                      <p className="mt-1 text-sm text-card-foreground">
                        {invite.contactName || "—"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-foreground/50">
                        Email
                      </p>

                      <p className="mt-1 text-sm text-card-foreground break-all">
                        {invite.contactEmail || "—"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-foreground/50">
                        Phone
                      </p>

                      <p className="mt-1 text-sm text-card-foreground">
                        {invite.phone || "—"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-foreground/50">
                        Category
                      </p>

                      <p className="mt-1 text-sm text-card-foreground">
                        {invite.businessCategory || "—"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-foreground/50">
                        Connection Source
                      </p>

                      <p className="mt-1 text-sm text-card-foreground">
                        {invite.connectionSource || "—"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-foreground/50">
                        Status
                      </p>

                      <p className="mt-1 inline-flex rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                        {invite.inviteStatus || "Draft"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="xl:w-[340px] space-y-4">
                  <div className="rounded-2xl border border-border/60 bg-muted/20 p-4">
                    <p className="text-xs uppercase tracking-wide text-foreground/50">
                      Invitation Link
                    </p>

                    <p className="mt-2 break-all text-sm text-card-foreground">
                      {invite.inviteLink}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => copyLink(invite.inviteLink)}
                      className="h-11 px-4 rounded-xl border border-border bg-card text-sm font-medium inline-flex items-center gap-2"
                    >
                      <Copy size={15} />
                      Copy Link
                    </button>

                    <a
                      href={invite.inviteLink}
                      target="_blank"
                      rel="noreferrer"
                      className="h-11 px-4 rounded-xl bg-primary text-primary-foreground text-sm font-medium inline-flex items-center gap-2"
                    >
                      <ExternalLink size={15} />
                      Open Invite
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button className="h-10 px-4 rounded-xl border border-border bg-card text-xs font-medium inline-flex items-center gap-2">
                      <Mail size={14} />
                      Email Sent
                    </button>

                    <button className="h-10 px-4 rounded-xl border border-border bg-card text-xs font-medium inline-flex items-center gap-2">
                      <MessageSquareText size={14} />
                      Text Sent
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminInviteQueuePage;