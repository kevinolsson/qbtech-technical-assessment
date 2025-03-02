import { render, screen, fireEvent, act } from 'test-utils';
import { NumberField } from './NumberField';

describe('NumberField', () => {
  it('should render label correctly', () => {
    render(<NumberField label="Quantity" />);
    expect(screen.getByText('Quantity')).toBeInTheDocument();
  });

  it('should handle value changes', () => {
    const onChange = jest.fn();
    render(<NumberField label="Quantity" onChange={onChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '5' } });
    fireEvent.blur(input);
    expect(onChange).toHaveBeenCalled();
  });

  it('should increment value when increment button is clicked', () => {
    const onIncrement = jest.fn();
    render(
      <NumberField
        label="Quantity"
        defaultValue={5}
        onIncrement={onIncrement}
      />
    );

    const incrementButton = screen.getByRole('button', { name: /Increase Quantity/i });
    fireEvent.click(incrementButton);
    expect(onIncrement).toHaveBeenCalled();
  });

  it('should decrement value when decrement button is clicked', () => {
    const onDecrement = jest.fn();
    render(
      <NumberField
        label="Quantity"
        defaultValue={5}
        onDecrement={onDecrement}
      />
    );

    const decrementButton = screen.getByRole('button', { name: /Decrease Quantity/i });
    fireEvent.click(decrementButton);
    expect(onDecrement).toHaveBeenCalled();
  });

  it('should show error message when invalid', () => {
    render(
      <NumberField
        label="Quantity"
        isInvalid
        errorMessage="Invalid quantity"
      />
    );

    expect(screen.getByText('Invalid quantity')).toBeInTheDocument();
  });


  it('should be keyboard accessible', () => {
    const onChange = jest.fn();
    render(<NumberField label="Quantity" onChange={onChange} />);

    const input = screen.getByRole('textbox');
    act(() => {
      input.focus();
    });
    expect(input).toHaveFocus();

    fireEvent.keyDown(input, { key: 'ArrowUp' });
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    expect(onChange).toHaveBeenCalled();
  });

  it('should handle disabled state', () => {
    render(<NumberField label="Quantity" isDisabled />);

    const input = screen.getByRole('textbox');
    const incrementButton = screen.getByRole('button', { name: /Increase Quantity/i });
    const decrementButton = screen.getByRole('button', { name: /Decrease Quantity/i });

    expect(input).toBeDisabled();
    expect(incrementButton).toBeDisabled();
    expect(decrementButton).toBeDisabled();
  });
});