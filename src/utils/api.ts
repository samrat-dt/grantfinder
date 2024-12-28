import { API_ENDPOINTS, APP_CONFIG } from '@/config/constants';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: APP_CONFIG.CACHE_TTL,
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

export const fetchWithTimeout = async (
  input: RequestInfo | URL,
  init?: RequestInit
) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), APP_CONFIG.REQUEST_TIMEOUT);

  try {
    const response = await fetch(input, {
      ...init,
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } finally {
    clearTimeout(timeoutId);
  }
};

export const api = {
  grants: {
    list: () => fetchWithTimeout(API_ENDPOINTS.GRANTS),
    get: (id: string) => fetchWithTimeout(`${API_ENDPOINTS.GRANTS}/${id}`),
    create: (data: any) => fetchWithTimeout(API_ENDPOINTS.GRANTS, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }),
    update: (id: string, data: any) => fetchWithTimeout(`${API_ENDPOINTS.GRANTS}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }),
  },
  applications: {
    list: () => fetchWithTimeout(API_ENDPOINTS.APPLICATIONS),
    submit: (data: any) => fetchWithTimeout(API_ENDPOINTS.APPLICATIONS, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }),
  },
  notifications: {
    list: () => fetchWithTimeout(API_ENDPOINTS.NOTIFICATIONS),
  },
  user: {
    profile: () => fetchWithTimeout(API_ENDPOINTS.USER),
    update: (data: any) => fetchWithTimeout(API_ENDPOINTS.USER, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }),
  },
};