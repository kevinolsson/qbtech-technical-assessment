import { render, screen } from 'test-utils';
import { Alert } from './Alert';

describe('Alert', () => {
  it('should render children correctly', () => {
    render(<Alert>Hello World</Alert>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});