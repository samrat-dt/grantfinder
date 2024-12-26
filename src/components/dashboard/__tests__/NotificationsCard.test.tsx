import { render, screen } from '@testing-library/react';
import { NotificationsCard } from '../NotificationsCard';

const mockNotifications = [
  {
    id: 1,
    title: "Test Notification",
    description: "Test Description",
    date: "2024-03-01",
    priority: "high",
  },
];

describe('NotificationsCard', () => {
  it('renders notifications correctly', () => {
    render(<NotificationsCard notifications={mockNotifications} />);
    expect(screen.getByText('Recent Notifications')).toBeInTheDocument();
    expect(screen.getByText('Test Notification')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('displays correct priority badge', () => {
    render(<NotificationsCard notifications={mockNotifications} />);
    const badge = screen.getByText('high');
    expect(badge).toHaveClass('destructive');
  });
});