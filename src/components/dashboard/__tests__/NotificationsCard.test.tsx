import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NotificationsCard } from '../NotificationsCard';

const mockNotifications = [
  {
    id: 1,
    title: "Test Notification",
    description: "Test Description",
    date: "2024-03-01",
    priority: "high",
  },
  {
    id: 2,
    title: "Another Notification",
    description: "Another Description",
    date: "2024-03-02",
    priority: "medium",
  },
];

describe('NotificationsCard', () => {
  it('renders notifications correctly', () => {
    render(<NotificationsCard notifications={mockNotifications} />);
    expect(screen.getByText('Recent Notifications')).toBeInTheDocument();
    expect(screen.getByText('Test Notification')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('displays correct priority badges', () => {
    render(<NotificationsCard notifications={mockNotifications} />);
    const highPriorityBadge = screen.getByText('high');
    const mediumPriorityBadge = screen.getByText('medium');
    expect(highPriorityBadge).toHaveClass('destructive');
    expect(mediumPriorityBadge).toHaveClass('default');
  });

  it('formats dates correctly', () => {
    render(<NotificationsCard notifications={mockNotifications} />);
    expect(screen.getByText('3/1/2024')).toBeInTheDocument();
    expect(screen.getByText('3/2/2024')).toBeInTheDocument();
  });
});