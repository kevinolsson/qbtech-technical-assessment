import { IconCheck } from '@tabler/icons-react';
import { cva } from 'class-variance-authority';
import { type CheckboxProps, Checkbox as _Checkbox } from 'react-aria-components';

const Checkbox = ({ children, className, isSelected, ...props }: CheckboxProps) => {
  const checkboxStyle = cva(
    ['border border-gray-400 dark:border-gray-100 rounded-sm justify-center items-center flex w-4 h-4 transition'],
    {
      variants: {
        isSelected: {
          true: 'border border-brand bg-brand',
          false: null,
        },
      },
    },
  );

  return (
    <_Checkbox
      {...props}
      className={`w-fit flex focus-within:outline-2 outline-blue-800 outline-offset-2 gap-1 items-center text-gray-800 dark:text-white ${className}`}
    >
      <>
        <div className={checkboxStyle({ isSelected })}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            {isSelected && <IconCheck className="w-4 h-4 stroke-white" />}
          </svg>
        </div>
        {children}
      </>
    </_Checkbox>
  );
};

export { Checkbox };
