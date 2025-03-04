import { CalendarGrid as _CalendarGrid, CalendarGridProps } from 'react-aria-components';

const CalendarGrid = ({ children, className = '', ...forwardProps }: CalendarGridProps) => {
  return (
    <_CalendarGrid
      className={`table-fixed w-full border-separate border-spacing-y-1 max-w-84 md:max-w-60 ${className}`}
      {...forwardProps}
    >
      {children}
    </_CalendarGrid>
  );
};

export { CalendarGrid };
