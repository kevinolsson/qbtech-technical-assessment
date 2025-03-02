import React, { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ className = '', children, ...forwardProps }: CardProps) => {
  return (
    <div
      className={`flex flex-col gap-6 rounded-xl p-4 bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-200 ${className}`}
      {...forwardProps}
    >
      {children}
    </div>
  );
};

export { Card };
