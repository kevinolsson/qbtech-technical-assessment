import { cva } from 'class-variance-authority';
import { CalendarCell as _CalendarCell, type CalendarCellProps as _CalendarCellProps } from 'react-aria-components';

interface CalendarCellProps extends _CalendarCellProps {
  isRanged?: boolean;
}

const CalendarCell = ({ className = '', isRanged, ...forwardProps }: CalendarCellProps) => {
  const calendarCellStyle = cva(
    [
      'text-gray-900 text-center box-content p-1 relative',
      'hover:bg-sky-600 hover:text-white hover:cursor-pointer',
      'dark:text-white dark:hover:bg-gray-700',
    ],
    {
      variants: {
        isOutsideMonth: {
          false: null,
          true: 'hidden',
        },
        isSelected: {
          false: null,
          true: 'bg-brand text-white font-semibold dark:hover:bg-sky-600',
        },
        isSelectionEnd: {
          false: null,
          true: 'rounded-r-full',
        },
        isSelectionStart: {
          false: null,
          true: 'rounded-l-full',
        },
        isUnavailable: {
          false: null,
          true: 'opacity-25',
        },
        isRanged: {
          true: null,
          false: 'rounded-full',
        },
      },
      compoundVariants: [
        {
          isSelected: true,
          isRanged: false,
          class: 'rounded-full',
        },
      ],
    },
  );

  return (
    <_CalendarCell
      className={({ isUnavailable, isSelected, isOutsideMonth, isSelectionStart, isSelectionEnd }) =>
        `${calendarCellStyle({
          isOutsideMonth,
          isSelected,
          isUnavailable,
          isSelectionStart,
          isSelectionEnd,
          isRanged,
        })} ${className}`
      }
      {...forwardProps}
    />
  );
};

export { CalendarCell };
