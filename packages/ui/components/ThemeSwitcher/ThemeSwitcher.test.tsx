import { render, screen, fireEvent } from 'test-utils';
import { ThemeSwitcher } from './ThemeSwitcher';
import { act } from '@testing-library/react';

const mockMatchMedia = (matches: boolean) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
};

describe('ThemeSwitcher', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('dark');
  });

  it('should render sun and moon icons', () => {
    mockMatchMedia(false);
    render(<ThemeSwitcher />);

    expect(screen.getByRole('switch')).toBeInTheDocument();
    expect(screen.getByTestId('icon-sun')).toBeInTheDocument();
    expect(screen.getByTestId('icon-moon')).toBeInTheDocument();
  });

  it('should initialize with system preference (light)', () => {
    mockMatchMedia(false);
    render(<ThemeSwitcher />);

    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('should initialize with system preference (dark)', () => {
    mockMatchMedia(true);
    render(<ThemeSwitcher />);

    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('should toggle theme when clicked', () => {
    mockMatchMedia(false);
    render(<ThemeSwitcher />);

    const switchElement = screen.getByRole('switch');
    expect(document.documentElement.classList.contains('dark')).toBe(false);

    act(() => {
      fireEvent.click(switchElement);
    });
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    act(() => {
      fireEvent.click(switchElement);
    });
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});