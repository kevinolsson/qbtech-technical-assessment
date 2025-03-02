import { Calendar as _Calendar, type DateValue } from 'react-aria-components';
import { CalendarContent } from '../CalendarContent/CalendarContent';
import { today } from '@internationalized/date';

interface CalendarProps {
  disablePastDates?: boolean;
}

const Calendar = ({ disablePastDates }: CalendarProps) => {
  const isDateDisabled = (date: DateValue) => {
    if (disablePastDates) {
      const todayDate = today('Europe/Stockholm');
      return date.compare(todayDate) < 0;
    }
    return false;
  };

  return (
    <div className="flex flex-row gap-4">
      <_Calendar
        className="flex flex-col gap-4"
        visibleDuration={{ months: 2 }}
        isDateUnavailable={(date) => isDateDisabled(date)}
      >
        <CalendarContent isRanged={false} />
      </_Calendar>
    </div>
  );
};

export { Calendar };
