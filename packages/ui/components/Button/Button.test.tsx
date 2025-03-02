import { render, screen, fireEvent } from 'test-utils';
import { Button } from './Button';

describe('Button', () => {
  it('should render children correctly', () => {
    render(<Button>Hello World</Button>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('should call onPress handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onPress={handleClick}>Hello World</Button>);

    fireEvent.click(screen.getByText('Hello World'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should show loading state when loading prop is true', () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByText('Loading')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveClass('opacity-50');
  });

  it('should apply disabled styles when disabled', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveClass('opacity-50');
  });

  it('should apply primary variant styles by default', () => {
    render(<Button>Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-sky-500');
  });

  it('should apply secondary variant styles when specified', () => {
    render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-transparent');
  });
});