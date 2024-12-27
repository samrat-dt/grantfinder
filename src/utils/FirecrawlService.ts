import axios from 'axios';

interface CrawlResult {
  success: boolean;
  status?: string;
  completed?: number;
  total?: number;
  creditsUsed?: number;
  expiresAt?: string;
  data?: any[];
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}

export class FirecrawlService {
  private static API_KEY = '';
  private static BASE_URL = 'https://api.firecrawl.com/v1';
  private static MAX_RETRIES = 3;
  private static RETRY_DELAY = 1000; // ms

  static setApiKey(key: string) {
    this.API_KEY = key;
  }

  private static async retryRequest(fn: () => Promise<any>, retries = this.MAX_RETRIES): Promise<any> {
    try {
      return await fn();
    } catch (error) {
      if (retries > 0 && axios.isAxiosError(error) && error.response?.status >= 500) {
        await new Promise(resolve => setTimeout(resolve, this.RETRY_DELAY));
        return this.retryRequest(fn, retries - 1);
      }
      throw error;
    }
  }

  private static handleError(error: any): CrawlResult {
    console.error('FirecrawlService error:', error);

    if (axios.isAxiosError(error)) {
      const statusCode = error.response?.status;
      const errorMessage = error.response?.data?.message || error.message;

      switch (statusCode) {
        case 401:
          return {
            success: false,
            error: {
              code: 'UNAUTHORIZED',
              message: 'Invalid API key',
            },
          };
        case 429:
          return {
            success: false,
            error: {
              code: 'RATE_LIMITED',
              message: 'Too many requests. Please try again later.',
            },
          };
        case 503:
          return {
            success: false,
            error: {
              code: 'SERVICE_UNAVAILABLE',
              message: 'Service temporarily unavailable. Please try again later.',
            },
          };
        default:
          return {
            success: false,
            error: {
              code: 'UNKNOWN_ERROR',
              message: errorMessage,
            },
          };
      }
    }

    return {
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: error.message || 'An unexpected error occurred',
      },
    };
  }

  static async fetchGrants(): Promise<CrawlResult> {
    try {
      const response = await this.retryRequest(() =>
        axios.get(`${this.BASE_URL}/grants`, {
          headers: {
            Authorization: `Bearer ${this.API_KEY}`,
          },
        })
      );

      return {
        success: true,
        ...response.data,
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  static async crawlWebsite(url: string): Promise<CrawlResult> {
    try {
      const response = await this.retryRequest(() =>
        axios.post(
          `${this.BASE_URL}/crawl`,
          { url },
          {
            headers: {
              Authorization: `Bearer ${this.API_KEY}`,
            },
          }
        )
      );

      return {
        success: true,
        ...response.data,
      };
    } catch (error) {
      return this.handleError(error);
    }
  }
}