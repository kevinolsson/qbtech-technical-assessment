import { CalendarGrid as _CalendarGrid, CalendarGridProps } from 'react-aria-components';

const CalendarGrid = ({ children, className = '', ...forwardProps }: CalendarGridProps) => {
  return (
    <_CalendarGrid className={`table-fixed w-full border-collapse max-w-60 ${className}`} {...forwardProps}>
      {children}
    </_CalendarGrid>
  );
};

export { CalendarGrid };
