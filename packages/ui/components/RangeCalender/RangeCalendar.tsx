import {
  RangeCalendar as _RangeCalendar,
  Button,
  CalendarGridBody,
  CalendarGridHeader,
  Heading,
  type DateValue,
} from 'react-aria-components';
import { CalendarCell } from './components/CalendarCell';
import { CalendarGrid } from './components/CalendarGrid';
import { CalendarHeaderCell } from './components/CalendarHeaderCell';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { type CalendarDate, parseDate } from '@internationalized/date';
import { useEffect, useState } from 'react';

interface RangeCalendarProps {
  startDate?: string;
  endDate?: string;
  disablePastDates?: boolean;
  onChange?: (newDate: { start: CalendarDate; end: CalendarDate }) => void;
}

const RangeCalendar = ({ startDate, endDate, disablePastDates, onChange }: RangeCalendarProps) => {
  const [value, setValue] = useState({
    start: parseDate(startDate || '2025-03-05'),
    end: parseDate(endDate || '2025-04-05'),
  });
  useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [onChange, value]);

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
        defaultValue={{
          start: parseDate('2020-02-03'),
          end: parseDate('2020-02-12'),
        }}
        value={value}
        onChange={setValue}
        className="flex flex-col gap-4"
        visibleDuration={{ months: 2 }}
        isDateUnavailable={(date) => isDateDisabled(date)}
      >
        <header className="flex flex-row gap-4">
          <Button className="hover:cursor-pointer" slot="previous">
            <IconArrowLeft className="stroke-gray-800 dark:stroke-white" />
          </Button>
          <Heading className="text-base font-semibold flex-1 text-center" />
          <Button className="hover:cursor-pointer" slot="next">
            <IconArrowRight className="stroke-gray-800 dark:stroke-white" />
          </Button>
        </header>
        <div className="flex flex-row gap-8 ">
          <CalendarGrid>
            <CalendarGridHeader>{(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}</CalendarGridHeader>
            <CalendarGridBody>{(date) => <CalendarCell date={date} />}</CalendarGridBody>
          </CalendarGrid>
          <CalendarGrid offset={{ months: 1 }}>
            <CalendarGridHeader>{(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}</CalendarGridHeader>
            <CalendarGridBody>{(date) => <CalendarCell date={date} />}</CalendarGridBody>
          </CalendarGrid>
        </div>
      </_RangeCalendar>
    </div>
  );
};

export { RangeCalendar };
