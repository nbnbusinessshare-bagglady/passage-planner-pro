// FILE: src/data/partnerPortalBuildPlan.ts

export const partnerPortalBuildPlan = {
  currentPhase: "Frontend structure complete / backend planning phase",

  frontendPagesCreated: [
    {
      route: "/partner-portal",
      file: "src/pages/vendor/PartnerPortalLandingPage.tsx",
      purpose:
        "Public-facing partner ecosystem landing page explaining why businesses should partner with Serene Passage.",
    },
    {
      route: "/partner-invite/:inviteSlug",
      file: "src/pages/vendor/PartnerInviteGatewayPage.tsx",
      purpose:
        "Invite-specific gateway page that recognizes invited partners and routes them to onboarding or account/profile setup.",
    },
    {
      route: "/partner-onboarding",
      file: "src/pages/vendor/PartnerOnboardingPage.tsx",
      purpose:
        "General onboarding overview explaining portal sections, account setup, partner expectations, and ecosystem structure.",
    },
    {
      route: "/partner-join",
      file: "src/pages/vendor/PartnerJoinPage.tsx",
      purpose:
        "Self-registered partner path for businesses that did not receive an invite but are part of the destination experience ecosystem.",
    },
    {
      route: "/partner-interest",
      file: "src/pages/vendor/PartnerInterestPage.tsx",
      purpose:
        "Inquiry-only path for people/businesses unsure whether they fit the partner ecosystem.",
    },
    {
      route: "/vendor",
      file: "src/pages/vendor/VendorDashboardPage.tsx",
      purpose:
        "Partner dashboard showing profile steps, categorization, collaboration path, AI expansion, and relationship continuity.",
    },
    {
      route: "/vendor/invite",
      file: "src/pages/vendor/VendorInvitePage.tsx",
      purpose:
        "Owner/admin invite creator for generating partner invite references, invite links, and manual email copy.",
    },
    {
      route: "/vendor/submit",
      file: "src/pages/vendor/VendorSubmitPage.tsx",
      purpose:
        "Partner profile completion page collecting business, service, location, contact, collaboration, and media details.",
    },
    {
      route: "/vendor/media",
      file: "src/pages/vendor/MediaUploadsPage.tsx",
      purpose:
        "Media, documents, attachments, urgent review, revision, and approval workflow placeholder.",
    },
    {
      route: "/vendor/campaigns",
      file: "src/pages/vendor/CampaignRequestsPage.tsx",
      purpose:
        "Collaboration requests, campaign concepts, revision flow, approval flow, and future AI package collaboration.",
    },
    {
      route: "/vendor/ai-generator",
      file: "src/pages/vendor/AIGeneratorPage.tsx",
      purpose:
        "AI Collaboration Studio for partner offer copy, campaign concepts, Serene Passage-branded materials, and future usage limits.",
    },
    {
      route: "/vendor/settings",
      file: "src/pages/vendor/SettingsPage.tsx",
      purpose:
        "Partner settings for account access, email verification, language, permissions, notifications, recovery, and member ID placeholder.",
    },
    {
      route: "/admin/review",
      file: "src/pages/admin/AdminReviewPage.tsx",
      purpose:
        "Owner review center for partner review, inquiries, verification notes, internal confidence labels, and analytics placeholders.",
    },
  ],

  requiredFrontendNextSteps: [
    "Confirm all routes render without errors.",
    "Confirm all buttons navigate to the correct pages.",
    "Replace placeholder invite data with backend invite lookup later.",
    "Add real form handling after Supabase is connected.",
    "Add protected-route logic once authentication is added.",
    "Separate owner/admin routes from partner routes after real auth exists.",
    "Connect PartnerInterestPage to Formspree first if Supabase is not ready.",
  ],

  coreBackendTables: [
    {
      table: "partner_invites",
      purpose:
        "Stores owner-created invite details, invite references, invite slugs, connected business/contact info, status, and used date.",
    },
    {
      table: "partner_profiles",
      purpose:
        "Stores registered partner business profile, access type, member ID, service category, location, contact data, and permissions.",
    },
    {
      table: "partner_inquiries",
      purpose:
        "Stores inquiry-only submissions from people/businesses unsure whether they fit the ecosystem.",
    },
    {
      table: "partner_assets",
      purpose:
        "Stores uploaded media, documents, links, review status, urgent flags, revision notes, and ownership.",
    },
    {
      table: "partner_messages",
      purpose:
        "Stores partner/admin messages, attachments, urgent indicators, and resolved status.",
    },
    {
      table: "collaboration_requests",
      purpose:
        "Stores campaign/package/collaboration ideas, status, revisions, approvals, group size, dates, and internal notes.",
    },
  ],

  futureBackendTables: [
    "partner_auth_profiles",
    "partner_verification_notes",
    "partner_activity_log",
    "partner_ai_usage",
    "partner_brand_permissions",
    "owner_admin_notes",
    "analytics_events",
    "customer_accounts",
    "customer_memberships",
    "customer_itineraries",
  ],

  partnerAccessLogic: {
    invitedPartner:
      "Owner creates invite. Invite link recognizes the business/contact/email. Account setup requires the invited email. Once used, link becomes activated and redirects future users to login, onboarding, new partner join, or traveler path.",
    selfJoinedPartner:
      "Business creates account without invite. System stores access type as self_joined and generates member/reference ID showing they joined without invite.",
    inquiryOnly:
      "Potential partner submits inquiry without creating account. Owner reviews fit. If aligned, owner may send invite link or recommend self-join.",
    traveler:
      "Non-partner users are routed to traveler-facing pages such as travel deals, groups, retreats, build-your-trip, or contact.",
  },

  inviteStatusFlow: [
    "created",
    "sent",
    "clicked",
    "account_created",
    "profile_started",
    "profile_complete",
    "owner_review_needed",
    "active",
  ],

  profileStatusFlow: [
    "account_setup_pending",
    "email_verification_pending",
    "profile_incomplete",
    "profile_complete",
    "owner_review_needed",
    "active",
    "inactive",
  ],

  internalBusinessConfidenceLabels: [
    "not_reviewed",
    "verified_business",
    "vetted_local_vendor",
    "needs_more_information",
    "could_not_verify",
    "proceed_with_caution",
    "do_not_use",
    "preferred_partner",
  ],

  ownerOnlyNotes:
    "Business confidence labels, risk notes, verification conclusions, and caution/disclaimer decisions should be visible only to owner/admin users, not standard partner accounts.",

  memberIdFormat: {
    pattern:
      "SPI-[ACCESS]-[CATEGORY]-[COUNTRY]-[CITY]-[CONFIDENCE]-[UNIQUE_NUMBER]",
    examples: [
      "SPI-INV-HOT-JAM-MBJ-VB-00041",
      "SPI-JWI-EXC-JAM-NEG-VLV-00112",
      "SPI-JWI-FOD-MEX-CUN-CTV-00208",
    ],
  },

  businessVerificationApproach: [
    "Collect business name and public/brand name.",
    "Collect checkbox-style business type such as LLC, corporation, partnership, sole proprietor, independent vendor, or other.",
    "Collect business address, city, state/province/parish/region, postal code, and country.",
    "Collect website and social links.",
    "Collect business category and service category.",
    "Collect other locations or areas served.",
    "Allow optional document/media uploads.",
    "Owner manually reviews digital footprint, website, location, documents, public profiles, and communication history.",
  ],

  aiUsagePlan: {
    freePartnerUsage:
      "Allow each registered partner 2–3 complimentary monthly Serene Passage-branded collaborative AI generations.",
    requiredBrandInclusion:
      "Partner AI outputs inside the portal should include Serene Passage where the generated material is for shared/collaborative offers.",
    pricingRule:
      "Public-facing offer prices should not be generated or published without Serene Passage margin/percentage included.",
    futureAisionLabsUpsell:
      "Partners who want a general-purpose or privately branded AI system for their own business can be referred to Aision Labs for custom AI tools or branded automation.",
  },

  analyticsPlan: {
    dashboardName: "Owner Console: Analytics & Partner Review Dashboard",
    firstMetrics: [
      "Website sessions",
      "Top traffic sources",
      "Contact form leads",
      "Partner portal clicks",
      "Invite link clicks",
      "Partner profile completions",
      "Partner inquiries",
      "Collaboration requests",
    ],
    futureIntegrations: [
      "Google Analytics 4",
      "Google Tag Manager",
      "Formspree",
      "Supabase",
      "Vercel Analytics",
      "Meta Pixel",
      "future booking/payment tools",
    ],
  },

  recommendedBackendBuildOrder: [
    "Create Supabase project.",
    "Set up auth for owner/admin and partners.",
    "Create partner_invites table.",
    "Connect VendorInvitePage to save invite records.",
    "Create partner_profiles table.",
    "Connect PartnerJoinPage and VendorSubmitPage to partner profile records.",
    "Create partner_inquiries table.",
    "Connect PartnerInterestPage inquiry form.",
    "Create partner_assets table and Supabase storage bucket.",
    "Connect MediaUploadsPage to file uploads.",
    "Create partner_messages table.",
    "Create collaboration_requests table.",
    "Add owner/admin review actions.",
    "Add analytics event tracking.",
    "Add AI usage tracking.",
  ],
};