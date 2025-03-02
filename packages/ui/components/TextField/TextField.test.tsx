import { render, screen, fireEvent } from 'test-utils';
import { TextField } from './TextField';
import { IconAt } from '@tabler/icons-react';

describe('TextField', () => {
  it('should render label correctly', () => {
    render(<TextField label="Hello World" />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('should render left icon when provided', () => {
    render(
      <TextField
        label="Email"
        leftIcon={<IconAt data-testid="email-icon" />}
      />
    );
    expect(screen.getByTestId('email-icon')).toBeInTheDocument();
  });

  it('should show error message when invalid', () => {
    render(
      <TextField
        label="Email"
        isInvalid={true}
        errorMessage="Invalid email"
      />
    );
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  it('should call onChange handler when value changes', () => {
    const handleChange = jest.fn();
    render(<TextField label="Email" onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test@example.com' } });

    expect(handleChange).toHaveBeenCalled();
  });

  it('should apply invalid styles when isInvalid is true', () => {
    render(
      <TextField
        label="Email"
        isInvalid={true}
        errorMessage="Invalid email"
      />
    );

    const inputContainer = screen.getByRole('textbox').parentElement;
    expect(inputContainer).toHaveClass('border-red-600');
  });
});