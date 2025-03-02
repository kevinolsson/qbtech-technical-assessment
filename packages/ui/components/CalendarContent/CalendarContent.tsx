import { Button, CalendarGridBody, CalendarGridHeader, Heading } from 'react-aria-components';
import { CalendarCell } from './components/CalendarCell';
import { CalendarGrid } from './components/CalendarGrid';
import { CalendarHeaderCell } from './components/CalendarHeaderCell';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

interface CalendarContent {
  isRanged: boolean;
}

const CalendarContent = ({ isRanged }: CalendarContent) => {
  return (
    <>
      <header className="flex flex-row gap-4">
        <Button className="hover:cursor-pointer" slot="previous">
          <IconArrowLeft className="stroke-gray-800 dark:stroke-white" />
        </Button>
        <Heading className="text-base font-semibold flex-1 text-center" />
        <Button className="hover:cursor-pointer" slot="next">
          <IconArrowRight className="stroke-gray-800 dark:stroke-white" />
        </Button>
      </header>
      <div className="flex flex-row gap-8 items-start">
        <CalendarGrid offset={{ months: 0 }}>
          <CalendarGridHeader>{(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}</CalendarGridHeader>
          <CalendarGridBody>{(date) => <CalendarCell isRanged={isRanged} date={date} />}</CalendarGridBody>
        </CalendarGrid>
        <CalendarGrid offset={{ months: 1 }}>
          <CalendarGridHeader>{(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}</CalendarGridHeader>
          <CalendarGridBody>{(date) => <CalendarCell isRanged={isRanged} date={date} />}</CalendarGridBody>
        </CalendarGrid>
      </div>
    </>
  );
};

export { CalendarContent };
