import { cva } from 'class-variance-authority';
import { type ReactNode } from 'react';

interface AlertProps {
  children: ReactNode;
  variant?: 'info' | 'success';
  className?: string;
}

const alertStyle = cva(
  ['p-4 rounded-lg border w-full'],
  {
    variants: {
      variant: {
        info: [
          'bg-sky-50 border-sky-200',
          'text-sky-800 dark:text-sky-200',
          'dark:bg-sky-900/30 dark:border-sky-800',
        ],
        success: [
          'bg-green-50 border-green-200',
          'text-green-800 dark:text-green-200',
          'dark:bg-green-900/30 dark:border-green-800',
        ]
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  },
);

export const Alert = ({ children, variant, className }: AlertProps) => {
  return (
    <div className={`${alertStyle({ variant })} ${className}`}>
      {children}
    </div>
  );
};