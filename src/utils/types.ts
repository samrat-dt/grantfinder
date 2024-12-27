export interface Grant {
  id: number;
  name: string;
  eligibility: string;
  deadline: string;
  type: string;
  amount: string;
  status: string;
  applicationLink: string;
  details?: string;
  resources?: Resource[];
}

export interface Resource {
  title: string;
  url: string;
  category?: string;
}

export interface Notification {
  id: number;
  title: string;
  description: string;
  date: string;
  priority: string;
}

export interface StartupProfile {
  registrationDate: string;
  turnover: string;
  industry: string;
  state: string;
  city: string;
  stage: string;
  previousApplications: string;
}