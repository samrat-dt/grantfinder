export const APP_CONFIG = {
  APP_NAME: 'Grant Route',
  VERSION: '1.0.0',
  API_VERSION: 'v1',
  DEFAULT_LOCALE: 'en',
  SUPPORTED_LOCALES: ['en'],
  DEFAULT_THEME: 'light',
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_FILE_TYPES: ['image/jpeg', 'image/png', 'application/pdf'],
  DATE_FORMAT: 'yyyy-MM-dd',
  CURRENCY: 'INR',
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
  CACHE_TTL: 5 * 60 * 1000, // 5 minutes
  REQUEST_TIMEOUT: 30000, // 30 seconds
};

export const GRANT_STATUSES = {
  OPEN: 'Open',
  CLOSING_SOON: 'Closing Soon', 
  CLOSED: 'Closed'
} as const;

export const GRANT_TYPES = {
  SEED: 'Seed Funding',
  RESEARCH: 'Research Grant',
  EXPANSION: 'Business Expansion',
  INNOVATION: 'Innovation Grant',
  EXPORT: 'Export Development'
} as const;

export const ERROR_MESSAGES = {
  GENERIC: 'An unexpected error occurred',
  NETWORK: 'Network error. Please check your connection',
  VALIDATION: 'Please check your input and try again',
  NOT_FOUND: 'The requested resource was not found',
  UNAUTHORIZED: 'You are not authorized to perform this action',
  FORBIDDEN: 'Access denied',
  RATE_LIMITED: 'Too many requests. Please try again later'
} as const;

export const API_ENDPOINTS = {
  GRANTS: '/api/grants',
  APPLICATIONS: '/api/applications',
  NOTIFICATIONS: '/api/notifications',
  USER: '/api/user',
  AUTH: '/api/auth'
} as const;