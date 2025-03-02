import { CalendarHeaderCell as _CalendarHeaderCell, type CalendarHeaderCellProps } from 'react-aria-components';

const CalendarHeaderCell = ({ className, children, ...forwardProps }: CalendarHeaderCellProps) => {
  return (
    <_CalendarHeaderCell className={`text-gray-900 dark:text-white ${className}`} {...forwardProps}>
      {children}
    </_CalendarHeaderCell>
  );
};

export { CalendarHeaderCell };
