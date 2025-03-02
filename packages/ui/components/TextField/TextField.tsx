import { JSX } from 'react';
import { cva } from 'class-variance-authority';
import type { TextFieldProps as _TextFieldProps, ValidationResult } from 'react-aria-components';
import { FieldError, TextField as _TextField, Label, Input } from 'react-aria-components';

interface TextFieldProps extends _TextFieldProps {
  leftIcon?: JSX.Element;
  label?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

const TextField = ({ leftIcon, label, errorMessage, isInvalid, ...forwardProps }: TextFieldProps) => {
  const inputStyle = cva(
    [
      'flex flex-row gap-1 rounded py-1 px-2',
      'border border-gray-400 dark:border-gray-100 dark:text-white',
      'outline-offset-2 focus-within:outline-2 outline-blue-800',
    ],
    {
      variants: {
        isInvalid: {
          true: 'border-red-600 dark:border-red-400',
          false: null,
        },
      },
    },
  );

  return (
    <_TextField className="flex flex-col gap-2" isInvalid={isInvalid} {...forwardProps}>
      <Label>{label}</Label>
      <div className={inputStyle({ isInvalid })}>
        {leftIcon}
        <Input className="w-full outline-0" />
      </div>
      <FieldError className="text-red-600 dark:text-red-400 text-sm">{errorMessage}</FieldError>
    </_TextField>
  );
};
export { TextField };
