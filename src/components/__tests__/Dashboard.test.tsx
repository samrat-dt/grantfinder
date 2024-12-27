import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dashboard } from '../Dashboard';
import { vi } from 'vitest';

describe('Dashboard', () => {
  const mockOnEditProfile = vi.fn();

  beforeEach(() => {
    mockOnEditProfile.mockClear();
  });

  it('renders all dashboard sections', () => {
    render(<Dashboard onEditProfile={mockOnEditProfile} />);
    
    expect(screen.getByText('Grant Route')).toBeInTheDocument();
    expect(screen.getByText('Upcoming Deadlines')).toBeInTheDocument();
    expect(screen.getByText('Recent Notifications')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
  });

  it('filters grants correctly', () => {
    render(<Dashboard onEditProfile={mockOnEditProfile} />);
    
    const searchInput = screen.getByPlaceholderText(/search grants/i);
    fireEvent.change(searchInput, { target: { value: 'Startup India' } });
    
    expect(screen.getByText('Startup India Seed Fund')).toBeInTheDocument();
    expect(screen.queryByText('MSME Technology Upgrade')).not.toBeInTheDocument();
  });

  it('toggles grant details', () => {
    render(<Dashboard onEditProfile={mockOnEditProfile} />);
    
    const viewDetailsButton = screen.getAllByText('View Details')[0];
    fireEvent.click(viewDetailsButton);
    
    expect(screen.getByText(/The Startup India Seed Fund Scheme aims to/i)).toBeInTheDocument();
  });

  it('handles edit profile action', () => {
    render(<Dashboard onEditProfile={mockOnEditProfile} />);
    
    const editProfileButton = screen.getByText('Edit Profile');
    fireEvent.click(editProfileButton);
    
    expect(mockOnEditProfile).toHaveBeenCalled();
  });

  it('filters grants by type', () => {
    render(<Dashboard onEditProfile={mockOnEditProfile} />);
    
    const fundingFilter = screen.getByText('Funding');
    fireEvent.click(fundingFilter);
    
    expect(screen.getByText('Startup India Seed Fund')).toBeInTheDocument();
    expect(screen.getByText('Women Entrepreneurship Platform')).toBeInTheDocument();
    expect(screen.queryByText('DPIIT Tax Exemption')).not.toBeInTheDocument();
  });
});