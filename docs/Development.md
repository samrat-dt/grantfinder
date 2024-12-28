# Development Guide

## Prerequisites
- Node.js 18+
- npm or yarn
- Git

## Setup
```bash
# Clone repository
git clone https://github.com/your-org/grant-route.git

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## Environment Configuration
```env
NODE_ENV=development
API_URL=http://localhost:3000
CRAWLER_API_KEY=your_key_here
```

## Testing Strategy
- Unit tests for components
- Integration tests for workflows
- E2E tests for critical paths
- Performance testing

## Code Style
- TypeScript for type safety
- Tailwind CSS for styling
- Component-based architecture
- Responsive design patterns