# API Documentation

## Grant Discovery API
```typescript
interface GrantResponse {
  id: string;
  name: string;
  description: string;
  eligibility: string[];
  deadline: Date;
  amount: number;
  status: 'open' | 'closed' | 'upcoming';
}

// Endpoint: /api/grants
// Method: GET
// Query Parameters:
// - page: number
// - limit: number
// - sector: string
// - location: string
```

## Notification API
```typescript
interface Notification {
  id: string;
  type: 'grant' | 'deadline' | 'update';
  message: string;
  timestamp: Date;
  priority: 'high' | 'medium' | 'low';
}

// Endpoint: /api/notifications
// Method: GET
// Headers:
// - Authorization: Bearer token
```