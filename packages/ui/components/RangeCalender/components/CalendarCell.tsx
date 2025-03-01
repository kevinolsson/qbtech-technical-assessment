import { cva } from 'class-variance-authority';
import { CalendarCell as _CalendarCell, type CalendarCellProps } from 'react-aria-components';

const CalendarCell = ({ className = '', ...forwardProps }: CalendarCellProps) => {
  const calendarCellStyle = cva(
    [
      'text-gray-900 text-center box-content p-1 relative',
      'hover:bg-sky-100 hover:rounded-full hover:cursor-pointer',
      'dark:text-white dark:hover:bg-gray-600',
    ],
    {
      variants: {
        isOutsideMonth: {
          false: null,
          true: 'hidden',
        },
        isSelected: {
          false: null,
          true: ['bg-sky-50 !rounded-none', 'dark:bg-gray-700'],
        },
        isSelectionStart: {
          false: null,
          true: ['calendar-cell--selection-start text-white font-semibold'],
        },
        isSelectionEnd: {
          false: null,
          true: ['calendar-cell--selection-end text-white font-semibold'],
        },
        isUnavailable: {
          false: null,
          true: ['opacity-25'],
        },
      },
    },
  );

  return (
    <_CalendarCell
      className={({ isUnavailable, isSelected, isSelectionStart, isSelectionEnd, isOutsideMonth }) =>
        `${calendarCellStyle({
          isOutsideMonth,
          isSelected,
          isSelectionStart,
          isSelectionEnd,
          isUnavailable,
        })} ${className}`
      }
      {...forwardProps}
    />
  );
};

export { CalendarCell };
