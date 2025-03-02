import { Calendar as _Calendar, type DateValue } from 'react-aria-components';
import { CalendarContent } from '../CalendarContent/CalendarContent';

interface CalendarProps {
  disablePastDates?: boolean;
}

const Calendar = ({ disablePastDates }: CalendarProps) => {
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
