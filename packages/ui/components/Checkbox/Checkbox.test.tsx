import { render, screen, fireEvent, act } from 'test-utils';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('should render children correctly', () => {
    render(<Checkbox>Accept terms</Checkbox>);
    expect(screen.getByText('Accept terms')).toBeInTheDocument();
  });

  it('should handle selection state', () => {
    const onChange = jest.fn();
    render(
      <Checkbox onChange={onChange}>
        Accept terms
      </Checkbox>
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    act(() => {
      fireEvent.click(checkbox);
      expect(onChange).toHaveBeenCalledWith(true);
    });
  });

  it('should show check icon when selected', () => {
    render(
      <Checkbox isSelected>
        Accept terms
      </Checkbox>
    );

    expect(screen.getByRole('checkbox')).toBeChecked();
    expect(screen.getByTestId('check-icon')).toBeInTheDocument();
  });

});