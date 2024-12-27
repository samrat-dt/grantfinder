import { Grant, Notification, Resource } from "./types";

export const mockGrants: Grant[] = [
  {
    id: 1,
    name: "Startup India Seed Fund",
    eligibility: "Early stage startups with innovative solutions",
    deadline: "2024-06-30",
    type: "Funding",
    amount: "₹20,00,000",
    status: "Open",
    applicationLink: "https://startupindia.gov.in/content/sih/en/government-schemes/seed-fund-scheme.html",
    details: "The Startup India Seed Fund Scheme aims to provide financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization.",
    resources: [
      {
        title: "Application Guidelines",
        url: "https://startupindia.gov.in/content/dam/invest-india/Templates/public/198117.pdf",
        category: "Documentation"
      },
      {
        title: "Eligibility Criteria",
        url: "https://startupindia.gov.in/content/sih/en/government-schemes/seed-fund-scheme.html#eligibility",
        category: "Documentation"
      }
    ]
  },
  {
    id: 2,
    name: "DPIIT Tax Exemption",
    eligibility: "DPIIT registered startups with less than 10Cr turnover",
    deadline: "2024-12-31",
    type: "Tax Benefit",
    amount: "Up to 100% tax exemption",
    status: "Open",
    applicationLink: "https://dpiit.gov.in/startup-india",
    details: "Under Section 80-IAC of the Income Tax Act, eligible startups can get a 100% tax exemption on profit for 3 consecutive years out of 10 years since incorporation.",
    resources: [
      {
        title: "Tax Exemption Process",
        url: "https://www.startupindia.gov.in/content/sih/en/startupgov/tax-exemption.html"
      }
    ]
  },
  {
    id: 3,
    name: "State Innovation Challenge",
    eligibility: "Tech startups in Karnataka",
    deadline: "2024-05-15",
    type: "Competition",
    amount: "₹5,00,000",
    status: "Closing Soon",
    applicationLink: "https://startupkarnataka.gov.in",
    details: "A competition aimed at fostering innovation in the state.",
    resources: []
  },
  {
    id: 4,
    name: "Women Entrepreneurship Platform",
    eligibility: "Women-led startups",
    deadline: "2024-08-30",
    type: "Funding",
    amount: "₹10,00,000",
    status: "Open",
    applicationLink: "https://wep.gov.in",
    details: "A platform to support women entrepreneurs with funding and resources.",
    resources: []
  },
  {
    id: 5,
    name: "MSME Technology Upgrade",
    eligibility: "Manufacturing startups",
    deadline: "2024-07-15",
    type: "Grant",
    amount: "₹15,00,000",
    status: "Open",
    applicationLink: "https://msme.gov.in",
    details: "Financial assistance for technology upgrades in manufacturing.",
    resources: []
  }
];

export const mockNotifications: Notification[] = [
  {
    id: 1,
    title: "New Grant Available",
    description: "A new grant matching your profile has been added",
    date: "2024-03-01",
    priority: "high",
  },
  {
    id: 2,
    title: "Deadline Reminder",
    description: "Application for Startup India Seed Fund closes in 7 days",
    date: "2024-03-15",
    priority: "medium",
  },
  {
    id: 3,
    title: "Eligibility Update",
    description: "Changes in DPIIT Tax Exemption criteria",
    date: "2024-03-10",
    priority: "low",
  }
];

export const resourceLinks: Resource[] = [
  {
    title: "Guide to Startup India Registration",
    url: "https://www.startupindia.gov.in/content/sih/en/startupgov/startup-recognition-page.html",
    category: "Getting Started"
  },
  {
    title: "Tax Benefits Overview",
    url: "https://www.startupindia.gov.in/content/sih/en/startupgov/tax-exemption.html",
    category: "Finance"
  },
  {
    title: "State-wise Incentive Programs",
    url: "https://www.startupindia.gov.in/content/sih/en/government-schemes/html",
    category: "Regional"
  },
  {
    title: "Application Guidelines",
    url: "https://www.startupindia.gov.in/content/sih/en/startupgov/startup-recognition-page.html",
    category: "Documentation"
  },
  {
    title: "Document Checklist",
    url: "https://www.startupindia.gov.in/content/dam/invest-india/Templates/public/Application_for_Recognition_Checklist.pdf",
    category: "Documentation"
  }
];
