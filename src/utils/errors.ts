import { ERROR_MESSAGES } from '@/config/constants';

export class AppError extends Error {
  constructor(
    message: string = ERROR_MESSAGES.GENERIC,
    public code?: string,
    public status?: number,
    public data?: any
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export class ValidationError extends AppError {
  constructor(message: string = ERROR_MESSAGES.VALIDATION, public fields?: Record<string, string>) {
    super(message, 'VALIDATION_ERROR', 400);
    this.name = 'ValidationError';
  }
}

export class NetworkError extends AppError {
  constructor(message: string = ERROR_MESSAGES.NETWORK) {
    super(message, 'NETWORK_ERROR', 503);
    this.name = 'NetworkError';
  }
}

export class AuthError extends AppError {
  constructor(message: string = ERROR_MESSAGES.UNAUTHORIZED) {
    super(message, 'AUTH_ERROR', 401);
    this.name = 'AuthError';
  }
}

export const handleError = (error: unknown): AppError => {
  if (error instanceof AppError) {
    return error;
  }

  if (error instanceof Error) {
    return new AppError(error.message);
  }

  return new AppError(ERROR_MESSAGES.GENERIC);
};