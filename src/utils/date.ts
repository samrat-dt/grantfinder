import { format, isValid, parseISO } from 'date-fns';
import { APP_CONFIG } from '@/config/constants';

export const formatDate = (date: string | Date): string => {
  try {
    const parsedDate = typeof date === 'string' ? parseISO(date) : date;
    if (!isValid(parsedDate)) {
      throw new Error('Invalid date');
    }
    return format(parsedDate, APP_CONFIG.DATE_FORMAT);
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date';
  }
};

export const isDateInPast = (date: string | Date): boolean => {
  try {
    const parsedDate = typeof date === 'string' ? parseISO(date) : date;
    return parsedDate < new Date();
  } catch (error) {
    console.error('Error checking date:', error);
    return false;
  }
};

export const getDaysUntil = (date: string | Date): number => {
  try {
    const parsedDate = typeof date === 'string' ? parseISO(date) : date;
    const now = new Date();
    const diffTime = parsedDate.getTime() - now.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  } catch (error) {
    console.error('Error calculating days until:', error);
    return 0;
  }
};