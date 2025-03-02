import { RangeCalendar as _RangeCalendar, type DateValue } from 'react-aria-components';
import { CalendarContent } from '../CalendarContent/CalendarContent';

interface RangeCalendarProps {
  disablePastDates?: boolean;
}

const RangeCalendar = ({ disablePastDates }: RangeCalendarProps) => {
  const today = new Date();
  const isDateDisabled = (date: DateValue) => {
    if (disablePastDates) {
      const dateObj = new Date(date.toString());
      return dateObj < today;
    }
    return false;
  };

  return (
    <div className="flex flex-row gap-4">
      <_RangeCalendar
        className="flex flex-col gap-4"
        visibleDuration={{ months: 2 }}
        isDateUnavailable={(date) => isDateDisabled(date)}
      >
        <CalendarContent isRanged={true} />
      </_RangeCalendar>
    </div>
  );
};

export { RangeCalendar };
