import { Button as _Button, type ButtonProps as _ButtonProps } from 'react-aria-components';
import { cva } from 'class-variance-authority';
import { IconLoader } from '@tabler/icons-react';
import React from 'react';

interface ButtonProps extends Omit<_ButtonProps, 'children'> {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

const buttonStyle = cva(
  ['whitespace-nowrap py-3 font-semibold px-9 rounded-full outline-offset-2 transition ease-out flex items-center justify-center gap-2'],
  {
    variants: {
      variant: {
        primary: [
          'bg-sky-500 text-white border-transparent',
          'hover:bg-sky-600 dark:hover:bg-sky-400',
        ],
        secondary: [
          'bg-transparent text-gray-800 ring ring-gray-800',
          'hover:ring-gray-900 dark:ring-gray-100 dark:text-white dark:hover:ring-white',
        ],
      },
      disabled: {
        true: [
          'opacity-50 cursor-not-allowed',
        ],
        false: ['hover:cursor-pointer'],
      },
    }
  },
);

const Button = ({
  className = '',
  variant = 'primary',
  children,
  loading = false,
  disabled,
  ...forwardProps
}: ButtonProps) => {
  const isDisabled = loading || disabled;

  return (
    <_Button
      isDisabled={isDisabled}
      className={`${buttonStyle({ variant, disabled: !!isDisabled })} ${className}`}
      {...forwardProps}
    >
      {loading && <IconLoader className="w-5 h-5 animate-spin" />}
      {children}
    </_Button>
  );
};

export { Button };
