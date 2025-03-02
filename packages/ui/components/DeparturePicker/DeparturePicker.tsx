import {
  Button,
  DateInput,
  DateRangePicker,
  DatePicker,
  DateSegment,
  Dialog,
  Group,
  Label,
  Popover,
  type ValidationResult,
  FieldError,
  DateValue,
} from 'react-aria-components';
import { I18nProvider } from 'react-aria-components';
import { RangeCalendar } from '../RangeCalendar/RangeCalendar';
import { Checkbox } from '../Checkbox/Checkbox';
import { IconCalendar } from '@tabler/icons-react';
import { useState } from 'react';
import { Calendar } from '../Calendar/Calendar';
import { CalendarDate, parseDate } from '@internationalized/date';
import { cva } from 'class-variance-authority';

interface DeparturePickerProps {
  hasReturnTrip?: boolean;
  departureDate?: string;
  returnDate?: string;
  onChange?: ({ departureDate, returnDate }: { departureDate: CalendarDate; returnDate?: CalendarDate }) => void;
  onReturnTripChange?: (isReturnTrip: boolean) => void;
  errorMessage?: string | ((validation: ValidationResult) => string);
  isInvalid?: boolean;
}

const DeparturePicker = ({
  hasReturnTrip,
  onChange = () => { },
  onReturnTripChange = () => { },
  errorMessage,
  isInvalid,
  departureDate,
  returnDate,
}: DeparturePickerProps) => {
  const [isRanged, setIsRanged] = useState(hasReturnTrip);

  const inputStyle = cva(
    ['flex flex-row rounded divide-x-1 divide-gray-400', 'border border-gray-400 dark:border-gray-100 dark:text-white'],
    {
      variants: {
        isInvalid: {
          true: 'border-red-600 divide-red-600 dark:border-red-400 dark:divide-red-400',
          false: null,
        },
      },
    },
  );

  const handleRangeChange = (newValue: boolean) => {
    setIsRanged(newValue);
    onReturnTripChange(newValue);
  };

  const content = (
    <div className="flex flex-col gap-2">
      <Label className="font-semibold text-gray-800 dark:text-white text-base">
        {isRanged ? 'Choose departure and return dates' : 'Choose departure date'}
      </Label>
      <Group className={inputStyle({ isInvalid })}>
        <div className="py-1 px-4 flex-1">
          <Checkbox isSelected={isRanged} onChange={handleRangeChange} className="font-normal">
            Return Trip
          </Checkbox>
        </div>
        <div className="py-1 px-4 flex-1">
          <DateInput className="flex flex-row" slot="start">
            {(segment) => <DateSegment className="outline-offset-2" segment={segment} />}
          </DateInput>
        </div>
        {isRanged && (
          <div className="py-1 px-4 flex-1">
            <DateInput className="flex flex-row" slot="end">
              {(segment) => <DateSegment className="outline-offset-2" segment={segment} />}
            </DateInput>
          </div>
        )}
        <div>
          <Button data-testid="calendar-button" className="py-1 px-4 h-full rounded-xl-r bg-white hover:cursor-pointer">
            <IconCalendar className="w-4 h-4 stroke-gray-900" />
          </Button>
        </div>
      </Group>
      <FieldError className="text-red-600 dark:text-red-400 text-sm">{errorMessage}</FieldError>
    </div>
  );

  return isRanged ? (
    <I18nProvider locale="sv-SE">
      <div>
        <DateRangePicker
          defaultValue={{
            start: (departureDate ? parseDate(departureDate) : undefined) as DateValue,
            end: (returnDate ? parseDate(returnDate) : undefined) as DateValue,
          }}
          isInvalid={isInvalid}
          className="space-y-4"
          onChange={(value) => {
            onChange({
              departureDate: value?.start as CalendarDate,
              returnDate: value?.end as CalendarDate,
            });
          }}
        >
          {content}
          <Popover>
            <Dialog className="border bg-white dark:bg-gray-800 border-gray-400 rounded p-4 shadow">
              <RangeCalendar disablePastDates />
            </Dialog>
          </Popover>
        </DateRangePicker>
      </div>
    </I18nProvider>
  ) : (
    <I18nProvider locale="sv-SE">
      <div>
        <DatePicker
          defaultValue={(departureDate ? parseDate(departureDate) : undefined) as DateValue}
          isInvalid={isInvalid}
          className="space-y-4"
          onChange={(value) => {
            onChange({
              departureDate: value as CalendarDate,
              returnDate: undefined,
            });
          }}
        >
          {content}
          <Popover>
            <Dialog className="border bg-white dark:bg-gray-800 border-gray-400 rounded p-4 shadow">
              <Calendar disablePastDates />
            </Dialog>
          </Popover>
        </DatePicker>
      </div>
    </I18nProvider>
  );
};

export { DeparturePicker };
