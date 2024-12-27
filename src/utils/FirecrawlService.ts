import axios from 'axios';

interface CrawlResult {
  success: boolean;
  status?: string;
  completed?: number;
  total?: number;
  creditsUsed?: number;
  expiresAt?: string;
  data?: any[];
}

export class FirecrawlService {
  private static API_KEY = '';
  private static BASE_URL = 'https://api.firecrawl.com/v1';

  static setApiKey(key: string) {
    this.API_KEY = key;
  }

  static async fetchGrants(): Promise<CrawlResult> {
    try {
      const response = await axios.get(`${this.BASE_URL}/grants`, {
        headers: {
          Authorization: `Bearer ${this.API_KEY}`,
        },
      });
      return {
        success: true,
        ...response.data,
      };
    } catch (error) {
      console.error('Error fetching grants:', error);
      return {
        success: false,
        status: 'error',
      };
    }
  }

  static async crawlWebsite(url: string): Promise<CrawlResult> {
    try {
      const response = await axios.post(
        `${this.BASE_URL}/crawl`,
        { url },
        {
          headers: {
            Authorization: `Bearer ${this.API_KEY}`,
          },
        }
      );
      return {
        success: true,
        ...response.data,
      };
    } catch (error) {
      console.error('Error crawling website:', error);
      return {
        success: false,
        status: 'error',
      };
    }
  }
}