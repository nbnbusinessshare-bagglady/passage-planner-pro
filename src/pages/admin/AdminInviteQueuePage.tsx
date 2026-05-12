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

import { supabase } from "@/lib/supabase";

type InviteRecord = {
  id?: string;

  businessName: string;
  contactName: string;
  contactEmail: string;
  phone: string;

  country: string;

  businessCategory: string;
  connectionSource: string;

  inviteStatus: string;

  inviteReference?: string;

  inviteLink: string;

  createdAt: string;
};

const AdminInviteQueuePage = () => {
  const [loading, setLoading] = useState(true);

  const [invites, setInvites] = useState<InviteRecord[]>([]);

  useEffect(() => {
    const loadInvites = async () => {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from("partner_invites")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error(error);

          const saved = JSON.parse(
            localStorage.getItem("spi-partner-invites") || "[]"
          );

          setInvites(saved.reverse());

          return;
        }

        const formatted: InviteRecord[] =
          data?.map((item: any) => ({
            id: item.id,

            businessName: item.business_name || "",
            contactName: item.contact_name || "",
            contactEmail: item.contact_email || "",
            phone: item.contact_phone || "",

            country: item.address || "",

            businessCategory: item.industry || "",
            connectionSource: item.met_source || "",

            inviteStatus: item.invite_status || "Draft",

            inviteReference:
              item.invite_slug || "SPI-INVITE",

            inviteLink: `${window.location.origin}/partner-invite/${item.invite_slug}`,

            createdAt: item.created_at,
          })) || [];

        setInvites(formatted);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadInvites();
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

      <section className="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm md:p-8">
        <div className="flex items-start gap-3">
          <ClipboardList
            className="mt-1 shrink-0 text-primary"
            size={24}
          />

          <div>
            <h2 className="font-display text-2xl text-card-foreground">
              Invite Queue
            </h2>

            <p className="mt-2 text-sm leading-7 text-foreground/65">
              Partner invitations are now connected to the
              Serene Passage ecosystem database and can
              eventually support onboarding automation,
              invite tracking, account creation, and
              relationship management workflows.
            </p>
          </div>
        </div>
      </section>

      {loading ? (
        <section className="rounded-[2rem] border border-border/60 bg-card p-10 text-center shadow-sm">
          <p className="text-sm text-foreground/60">
            Loading partner invites...
          </p>
        </section>
      ) : invites.length === 0 ? (
        <section className="rounded-[2rem] border border-dashed border-border bg-muted/20 p-10 text-center">
          <ShieldCheck
            className="mx-auto mb-4 text-primary"
            size={32}
          />

          <h3 className="font-display text-2xl text-card-foreground">
            No saved partner invites yet.
          </h3>

          <p className="mt-3 text-sm text-foreground/65">
            Saved partner invitations will appear here after
            they are created from the Partner Invite &
            Capture System.
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

                    <p className="mt-1 text-sm text-foreground/55 break-all">
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

                      <p className="mt-1 break-all text-sm text-card-foreground">
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

                <div className="space-y-4 xl:w-[340px]">
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
                      className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card px-4 text-sm font-medium"
                    >
                      <Copy size={15} />
                      Copy Link
                    </button>

                    <a
                      href={invite.inviteLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground"
                    >
                      <ExternalLink size={15} />
                      Open Invite
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-card px-4 text-xs font-medium">
                      <Mail size={14} />
                      Email Sent
                    </button>

                    <button className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-card px-4 text-xs font-medium">
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