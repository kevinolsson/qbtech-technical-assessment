import { render, screen } from '@testing-library/react';
import { BookingSummary } from './BookingSummary';
import { redirect } from 'next/navigation';
import { usePassengerFormContext } from '@/contexts/PassengerFormContext/PassengerFormContext';

// Mock modules
jest.mock('next/navigation', () => ({
  redirect: jest.fn()
}));

jest.mock('@/contexts/PassengerFormContext/PassengerFormContext', () => ({
  usePassengerFormContext: jest.fn()
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

jest.mock('ui', () => ({
  Alert: ({ children, variant }: { children: React.ReactNode; variant: string }) => (
    <div data-testid={`alert-${variant}`}>{children}</div>
  ),
}));

describe('BookingSummary', () => {
  const mockFormData = {
    departureDate: '2024-03-15',
    returnDate: '2024-03-20',
    passengers: [
      {
        name: 'John Doe',
        email: 'john@example.com',
      },
      {
        name: 'Jane Doe',
        email: 'jane@example.com',
      },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (usePassengerFormContext as jest.Mock).mockReturnValue({ formData: mockFormData });
  });

  it('should redirect if no form data exists', () => {
    (usePassengerFormContext as jest.Mock).mockReturnValue({ formData: null });

    render(<BookingSummary />);
    expect(redirect).toHaveBeenCalledWith('/');
  });

  it('should display booking confirmation message', () => {
    render(<BookingSummary />);
    expect(screen.getByTestId('alert-success')).toBeInTheDocument();
    expect(screen.getByText('Booking confirmed!')).toBeInTheDocument();
  });

  it('should display departure and return dates', () => {
    render(<BookingSummary />);

    expect(screen.getByText('Departure Date:')).toBeInTheDocument();
    expect(screen.getByText(mockFormData.departureDate)).toBeInTheDocument();
    expect(screen.getByText('Return Date:')).toBeInTheDocument();
    expect(screen.getByText(mockFormData.returnDate)).toBeInTheDocument();
  });

  it('should display passenger information', () => {
    render(<BookingSummary />);

    mockFormData.passengers.forEach((passenger, index) => {
      expect(screen.getByText(`Passenger ${index + 1}:`)).toBeInTheDocument();
      expect(screen.getByText(passenger.name)).toBeInTheDocument();
      expect(screen.getByText(passenger.email)).toBeInTheDocument();
    });
  });

  it('should display back to home link', () => {
    render(<BookingSummary />);

    const link = screen.getByText('Back to home');
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute('href', '/');
  });

  it('should handle one-way trips (no return date)', () => {
    const oneWayTripData = {
      ...mockFormData,
      returnDate: undefined,
    };
    (usePassengerFormContext as jest.Mock).mockReturnValue({ formData: oneWayTripData });
    render(<BookingSummary />);

    expect(screen.getByText('Departure Date:')).toBeInTheDocument();
    expect(screen.queryByText('Return Date:')).not.toBeInTheDocument();
  });

  it('should handle single passenger bookings', () => {
    const singlePassengerData = {
      ...mockFormData,
      passengers: [mockFormData.passengers[0]],
    };
    (usePassengerFormContext as jest.Mock).mockReturnValue({ formData: singlePassengerData });
    render(<BookingSummary />);

    expect(screen.getByText('Passenger 1:')).toBeInTheDocument();
    expect(screen.queryByText('Passenger 2:')).not.toBeInTheDocument();
  });
});