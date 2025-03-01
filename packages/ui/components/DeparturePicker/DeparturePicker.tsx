import {
  Button,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DateRangePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Label,
  Popover,
  RangeCalendar,
} from 'react-aria-components';
import { I18nProvider } from 'react-aria-components';

const DeparturePicker = () => {
  return (
    <I18nProvider locale="sv-SE">
      <DateRangePicker>
        <Label>Trip dates</Label>
        <Group className="flex flex-row">
          <DateInput className="contents" slot="start">
            {(segment) => <DateSegment segment={segment} />}
          </DateInput>
          <span aria-hidden="true">–</span>
          <DateInput className="contents" slot="end">
            {(segment) => <DateSegment segment={segment} />}
          </DateInput>
          <Button>▼</Button>
        </Group>
        <Popover>
          <Dialog>
            <RangeCalendar>
              <header>
                <Button slot="previous">◀</Button>
                <Heading />
                <Button slot="next">▶</Button>
              </header>
              <CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
            </RangeCalendar>
          </Dialog>
        </Popover>
      </DateRangePicker>
    </I18nProvider>
  );
};

export { DeparturePicker };
