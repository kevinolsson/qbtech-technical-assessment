import React, { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ className = '', children, ...forwardProps }: CardProps) => {
  return (
    <div className={`rounded-xl border-0 bg-white dark:bg-gray-800 shadow-lg ${className}`} {...forwardProps}>
      {children}
    </div>
  );
};

export { Card };
