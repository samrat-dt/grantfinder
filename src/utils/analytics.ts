type EventName = 
  | 'grant_view'
  | 'grant_apply'
  | 'search_performed'
  | 'filter_applied'
  | 'registration_started'
  | 'registration_completed'
  | 'notification_clicked';

type EventProperties = Record<string, string | number | boolean>;

class Analytics {
  private static instance: Analytics;
  private initialized: boolean = false;

  private constructor() {}

  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  init() {
    if (this.initialized) return;
    // Initialize analytics here
    this.initialized = true;
  }

  trackEvent(name: EventName, properties?: EventProperties) {
    if (!this.initialized) {
      console.warn('Analytics not initialized');
      return;
    }

    // Track event logic here
    console.log(`[Analytics] ${name}`, properties);
  }

  trackError(error: Error, context?: Record<string, any>) {
    if (!this.initialized) {
      console.warn('Analytics not initialized');
      return;
    }

    // Track error logic here
    console.error('[Analytics] Error:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
      context,
    });
  }
}

export const analytics = Analytics.getInstance();