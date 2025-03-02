import { RangeCalendar as _RangeCalendar, type DateValue } from 'react-aria-components';
import { CalendarContent } from '../CalendarContent/CalendarContent';
import { today } from '@internationalized/date';

interface RangeCalendarProps {
  disablePastDates?: boolean;
}

const RangeCalendar = ({ disablePastDates }: RangeCalendarProps) => {
  const isDateDisabled = (date: DateValue) => {
    if (disablePastDates) {
      const todayDate = today('Europe/Stockholm');
      return date.compare(todayDate) < 0;
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
