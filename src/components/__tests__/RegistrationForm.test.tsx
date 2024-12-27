import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RegistrationForm } from '../RegistrationForm';
import { vi } from 'vitest';

describe('RegistrationForm', () => {
  const mockOnComplete = vi.fn();

  beforeEach(() => {
    mockOnComplete.mockClear();
  });

  it('renders all form steps correctly', () => {
    render(<RegistrationForm onComplete={mockOnComplete} />);
    
    // Step 1
    expect(screen.getByLabelText(/startup registration date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/annual turnover/i)).toBeInTheDocument();
    
    // Navigate to Step 2
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByText(/industry type/i)).toBeInTheDocument();
    expect(screen.getByText(/state/i)).toBeInTheDocument();
    
    // Navigate to Step 3
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByText(/current stage/i)).toBeInTheDocument();
    expect(screen.getByText(/previous grant applications/i)).toBeInTheDocument();
  });

  it('validates required fields before proceeding', () => {
    render(<RegistrationForm onComplete={mockOnComplete} />);
    
    // Try to proceed without filling required fields
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByLabelText(/startup registration date/i)).toBeRequired();
    expect(screen.getByLabelText(/annual turnover/i)).toBeRequired();
  });

  it('allows navigation between steps', () => {
    render(<RegistrationForm onComplete={mockOnComplete} />);
    
    // Go forward
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByText(/industry type/i)).toBeInTheDocument();
    
    // Go back
    fireEvent.click(screen.getByText('Back'));
    expect(screen.getByLabelText(/startup registration date/i)).toBeInTheDocument();
  });

  it('submits form successfully', async () => {
    render(<RegistrationForm onComplete={mockOnComplete} />);
    
    // Fill Step 1
    fireEvent.change(screen.getByLabelText(/startup registration date/i), {
      target: { value: '2024-01-01' },
    });
    fireEvent.change(screen.getByLabelText(/annual turnover/i), {
      target: { value: '1000000' },
    });
    fireEvent.click(screen.getByText('Next'));
    
    // Fill Step 2
    fireEvent.click(screen.getByText('Next'));
    
    // Fill Step 3 and submit
    fireEvent.click(screen.getByText('Complete Registration'));
    
    expect(mockOnComplete).toHaveBeenCalled();
  });
});