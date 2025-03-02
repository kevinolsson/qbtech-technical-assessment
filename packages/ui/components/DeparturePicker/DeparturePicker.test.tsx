import { render, screen, fireEvent, act } from 'test-utils';
import { DeparturePicker } from './DeparturePicker';
import { I18nProvider } from 'react-aria-components';
import { ReactNode } from 'react';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <I18nProvider locale="sv-SE">
      {children}
    </I18nProvider>
  );
};

describe('DeparturePicker', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render single date picker by default', () => {
    render(
      <Wrapper>
        <DeparturePicker onChange={jest.fn()} />
      </Wrapper>
    );
    expect(screen.getByText('Choose departure date')).toBeInTheDocument();
  });

  it('should render range picker when hasReturnTrip is true', () => {
    render(
      <Wrapper>
        <DeparturePicker hasReturnTrip onChange={jest.fn()} />
      </Wrapper>
    );
    expect(screen.getByText('Choose departure and return dates')).toBeInTheDocument();
  });

  it('should show return trip checkbox', () => {
    render(
      <Wrapper>
        <DeparturePicker onChange={jest.fn()} />
      </Wrapper>
    );
    expect(screen.getByText('Return Trip')).toBeInTheDocument();
  });

  it('should show calendar button', () => {
    render(
      <Wrapper>
        <DeparturePicker onChange={jest.fn()} />
      </Wrapper>
    );
    expect(screen.getByTestId('calendar-button')).toBeInTheDocument();
  });

  it('should show error message when invalid', () => {
    render(
      <Wrapper>
        <DeparturePicker
          onChange={jest.fn()}
          isInvalid
          errorMessage="Please select a valid date"
        />
      </Wrapper>
    );
    expect(screen.getByText('Please select a valid date')).toBeInTheDocument();
  });

  it('should call onReturnTripChange when checkbox is clicked', () => {
    const onReturnTripChange = jest.fn();
    render(
      <Wrapper>
        <DeparturePicker
          onChange={jest.fn()}
          onReturnTripChange={onReturnTripChange}
        />
      </Wrapper>
    );

    const checkbox = screen.getByText('Return Trip');
    fireEvent.click(checkbox);
    expect(onReturnTripChange).toHaveBeenCalledWith(true);
  });

  it('should show both date inputs when in range mode', () => {
    render(
      <Wrapper>
        <DeparturePicker hasReturnTrip onChange={jest.fn()} />
      </Wrapper>
    );

    const dateInput = screen.getByRole('group', { name: 'Choose departure and return dates' });
    expect(dateInput).toBeInTheDocument();
  });

  it('should show single date input when not in range mode', () => {
    render(
      <Wrapper>
        <DeparturePicker onChange={jest.fn()} />
      </Wrapper>
    );

    const dateInput = screen.getByRole('group', { name: 'Choose departure date' });
    expect(dateInput).toBeInTheDocument();
  });

  it('should apply invalid styles when isInvalid is true', () => {
    render(
      <Wrapper>
        <DeparturePicker
          onChange={jest.fn()}
          isInvalid
          errorMessage="Invalid date"
        />
      </Wrapper>
    );

    const group = screen.getByRole('group');
    expect(group).toHaveClass('border-red-600');
  });

  it('should show pre-filled departure date', () => {
    render(
      <Wrapper>
        <DeparturePicker
          onChange={jest.fn()}
          departureDate="2024-03-15"
        />
      </Wrapper>
    );

    expect(screen.getByRole('group', { name: 'Choose departure date' })).toBeInTheDocument();
  });

  it('should show calendar when button is clicked', async () => {
    render(
      <Wrapper>
        <DeparturePicker onChange={jest.fn()} />
      </Wrapper>
    );

    const calendarButton = screen.getByTestId('calendar-button');

    await act(async () => {
      fireEvent.click(calendarButton);
    });

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});