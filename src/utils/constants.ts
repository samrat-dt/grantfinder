export const APP_NAME = "Grant Route";

export const GRANT_TYPES = [
  "Funding",
  "Tax Benefit",
  "Competition",
  "Grant",
  "Resource"
] as const;

export const GRANT_STATUS = {
  OPEN: "Open",
  CLOSING_SOON: "Closing Soon",
  CLOSED: "Closed"
} as const;

export const NOTIFICATION_PRIORITIES = {
  HIGH: "high",
  MEDIUM: "medium",
  LOW: "low"
} as const;

export const STARTUP_STAGES = [
  "Idea Stage",
  "Prototype Ready",
  "Early Revenue",
  "Growth Stage",
  "Scaling"
] as const;

export const INDIAN_STATES = [
  "Andhra Pradesh",
  "Delhi",
  "Gujarat",
  "Karnataka",
  "Maharashtra",
  "Tamil Nadu",
  "Telangana",
  "Other"
] as const;

export const INDUSTRIES = [
  "Technology",
  "Healthcare",
  "Education",
  "Finance",
  "E-commerce",
  "Manufacturing",
  "Agriculture",
  "Other"
] as const;