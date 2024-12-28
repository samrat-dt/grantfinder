import { z } from 'zod';
import { GRANT_STATUSES, GRANT_TYPES } from '@/config/constants';

export const grantSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(3).max(100),
  description: z.string().min(10).max(1000),
  type: z.nativeEnum(GRANT_TYPES),
  status: z.nativeEnum(GRANT_STATUSES),
  amount: z.number().min(0),
  deadline: z.string().datetime(),
  eligibility: z.string().min(10).max(500),
  applicationLink: z.string().url(),
  resources: z.array(z.object({
    title: z.string(),
    url: z.string().url()
  }))
});

export const applicationSchema = z.object({
  grantId: z.string().uuid(),
  userId: z.string().uuid(),
  status: z.enum(['draft', 'submitted', 'under_review', 'approved', 'rejected']),
  submissionDate: z.string().datetime().optional(),
  lastUpdated: z.string().datetime()
});

export const userSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  companyName: z.string().min(2).max(100),
  registrationDate: z.string().datetime(),
  industry: z.string(),
  state: z.string(),
  city: z.string(),
  stage: z.string(),
  previousApplications: z.boolean()
});

export type Grant = z.infer<typeof grantSchema>;
export type Application = z.infer<typeof applicationSchema>;
export type User = z.infer<typeof userSchema>;