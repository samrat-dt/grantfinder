import { render, screen } from '@testing-library/react';
import { DeadlinesCard } from '../DeadlinesCard';

const mockGrants = [
  {
    id: 1,
    name: "Test Grant 1",
    deadline: "2024-06-30",
  },
  {
    id: 2,
    name: "Test Grant 2",
    deadline: "2024-05-15",
  },
];

describe('DeadlinesCard', () => {
  it('renders upcoming deadlines', () => {
    render(<DeadlinesCard grants={mockGrants} />);
    expect(screen.getByText('Upcoming Deadlines')).toBeInTheDocument();
    expect(screen.getByText('Test Grant 1')).toBeInTheDocument();
    expect(screen.getByText('Test Grant 2')).toBeInTheDocument();
  });

  it('sorts grants by deadline', () => {
    render(<DeadlinesCard grants={mockGrants} />);
    const grantElements = screen.getAllByRole('listitem');
    expect(grantElements[0]).toHaveTextContent('Test Grant 2'); // Earlier deadline
    expect(grantElements[1]).toHaveTextContent('Test Grant 1'); // Later deadline
  });
});