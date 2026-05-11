// FILE: src/data/partnerPortalSchema.ts

export type PartnerAccessType =
  | "invited"
  | "self_joined"
  | "inquiry_only";

export type PartnerAccountStatus =
  | "invite_created"
  | "invite_clicked"
  | "account_setup_pending"
  | "email_verification_pending"
  | "profile_incomplete"
  | "profile_complete"
  | "owner_review_needed"
  | "active"
  | "inactive";

export type InternalBusinessConfidence =
  | "not_reviewed"
  | "verified_business"
  | "vetted_local_vendor"
  | "needs_more_information"
  | "could_not_verify"
  | "proceed_with_caution"
  | "do_not_use"
  | "preferred_partner";

export type PartnerProfile = {
  id: string;
  memberId: string;
  accessType: PartnerAccessType;
  accountStatus: PartnerAccountStatus;
  internalConfidence: InternalBusinessConfidence;

  businessName: string;
  businessType?: "llc" | "corporation" | "partnership" | "sole_proprietor" | "independent_vendor" | "other";
  publicBrandName?: string;

  contactName: string;
  phone?: string;
  email: string;

  businessAddress?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;

  website?: string;
  socialLinks?: string[];

  primaryBusinessCategory?: string;
  serviceCategory?: string;
  otherLocationsServed?: string[];

  servicesOverview?: string;
  destinationFitNotes?: string;

  preferredLanguage?: "en" | "es" | "fr" | "pt" | "it";
  preferredRegionFormat?: string;

  allowNameUse?: boolean;
  allowLogoUse?: boolean;
  allowMediaUse?: boolean;
  requiresFinalApprovalBeforePublicUse?: boolean;

  createdAt: string;
  updatedAt: string;
};

export type PartnerInvite = {
  id: string;
  inviteReference: string;
  inviteSlug: string;
  inviteLink: string;

  businessName: string;
  contactName: string;
  contactEmail: string;
  phone?: string;
  city?: string;
  region?: string;
  country?: string;

  businessCategory?: string;
  serviceCategory?: string;
  whereConnected?: string;
  ownerNotes?: string;

  status:
    | "created"
    | "sent"
    | "clicked"
    | "account_created"
    | "expired"
    | "cancelled";

  usedAt?: string;
  createdAt: string;
};

export type PartnerInquiry = {
  id: string;
  businessName?: string;
  contactName: string;
  email: string;
  phone?: string;

  city?: string;
  region?: string;
  country?: string;
  websiteOrSocial?: string;

  businessOrServiceType?: string;
  message: string;

  status:
    | "new"
    | "reviewed"
    | "invite_recommended"
    | "join_recommended"
    | "not_aligned"
    | "closed";

  ownerNotes?: string;
  createdAt: string;
};

export type PartnerAsset = {
  id: string;
  partnerId: string;

  fileName: string;
  fileType: "image" | "video" | "pdf" | "document" | "spreadsheet" | "link" | "other";
  category?: string;
  url?: string;

  status:
    | "submitted"
    | "reviewed"
    | "needs_revision"
    | "approved"
    | "curated"
    | "featured";

  uploadedBy: "partner" | "serene_passage";
  urgentReview?: boolean;
  notes?: string;

  createdAt: string;
};

export type PartnerMessage = {
  id: string;
  partnerId: string;

  senderType: "partner" | "serene_passage";
  subject: string;
  message: string;

  attachmentIds?: string[];
  urgent?: boolean;
  resolved?: boolean;

  createdAt: string;
};

export type CollaborationRequest = {
  id: string;
  partnerId: string;

  title: string;
  collaborationType:
    | "destination_wedding"
    | "retreat"
    | "group_travel"
    | "transportation"
    | "dining"
    | "excursion"
    | "wellness"
    | "entertainment"
    | "other";

  destination?: string;
  groupSize?: string;
  datesOrSeason?: string;
  basePartnerAmount?: string;

  description: string;
  internalSereneNotes?: string;

  status:
    | "draft"
    | "submitted"
    | "under_review"
    | "revision_requested"
    | "curated"
    | "approved"
    | "featured"
    | "closed";

  urgentReview?: boolean;
  finalApproval?: boolean;

  createdAt: string;
  updatedAt: string;
};

export const generatePartnerMemberIdExample = ({
  accessType,
  categoryCode,
  countryCode,
  cityCode,
  confidenceCode,
  uniqueNumber,
}: {
  accessType: "INV" | "JWI" | "INQ";
  categoryCode: string;
  countryCode: string;
  cityCode: string;
  confidenceCode: string;
  uniqueNumber: string;
}) => {
  return `SPI-${accessType}-${categoryCode}-${countryCode}-${cityCode}-${confidenceCode}-${uniqueNumber}`;
};

export const partnerMemberIdLegend = {
  SPI: "Serene Passage International",
  INV: "Invited partner",
  JWI: "Joined without invite",
  INQ: "Inquiry-only contact",
  VB: "Verified business",
  VLV: "Vetted local vendor",
  NMI: "Needs more information",
  CTV: "Could not verify",
  PWC: "Proceed with caution",
  PP: "Preferred partner",
};

export const firstSupabaseTables = [
  "partner_invites",
  "partner_profiles",
  "partner_inquiries",
  "partner_assets",
  "partner_messages",
  "collaboration_requests",
];

export const laterSupabaseTables = [
  "partner_auth_profiles",
  "partner_verification_notes",
  "partner_activity_log",
  "partner_ai_usage",
  "partner_brand_permissions",
  "owner_admin_notes",
  "analytics_events",
];