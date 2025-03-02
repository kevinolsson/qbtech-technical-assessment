import { IconMinus, IconPlus } from '@tabler/icons-react';
import { cva } from 'class-variance-authority';
import type { NumberFieldProps as _NumberFieldProps, ValidationResult } from 'react-aria-components';
import { NumberField as _NumberField, Button, FieldError, Group, Input, Label } from 'react-aria-components';

interface NumberFieldProps extends _NumberFieldProps {
  label?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

const NumberField = ({ label, errorMessage, isInvalid, ...props }: NumberFieldProps) => {
  const inputStyle = cva(
    ['flex flex-row rounded divide-x-1 divide-gray-400', 'border border-gray-400 dark:border-gray-100 dark:text-white'],
    {
      variants: {
        isInvalid: {
          true: 'border-red-600 divide-red-600 dark:border-red-400 dark:divide-red-400',
          false: null,
        },
      },
    },
  );

  return (
    <_NumberField {...props} isInvalid={isInvalid}>
      <Label>{label}</Label>
      <Group className={inputStyle({ isInvalid })}>
        <div className="py-1 px-4">
          <Button className="bg-white hover:cursor-pointer" slot="decrement">
            <IconMinus className="w-4 h-4 stroke-gray-900" />
          </Button>
        </div>
        <div className="py-1 px-4 flex-1">
          <Input className="text-center w-full" />
        </div>
        <div className="py-1 px-4">
          <Button slot="increment" className="bg-white hover:cursor-pointer">
            <IconPlus className="w-4 h-4 stroke-gray-900" />
          </Button>
        </div>
      </Group>
      <FieldError className="text-red-600 dark:text-red-400 text-sm">{errorMessage}</FieldError>
    </_NumberField>
  );
};

export { NumberField };
