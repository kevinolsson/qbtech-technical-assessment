"use client";
import React from 'react';
import { Button, CalendarCell, CalendarGrid, CalendarGridBody, CalendarGridHeader, CalendarHeaderCell, Heading, RangeCalendar, Text } from 'react-aria-components';

export const RangeCalendarExample = () => {

  return (
    <RangeCalendar>
      <Button slot="previous" />
      <Heading />
      <Button slot="next" />
      <CalendarGrid>
        <CalendarGridHeader>
          {(day) => <CalendarHeaderCell key={day.toString()}>{day.toString()}</CalendarHeaderCell>}
        </CalendarGridHeader>
        <CalendarGridBody>
          {(date) => <CalendarCell key={date.toString()} date={date} />}
        </CalendarGridBody>
      </CalendarGrid>
      <Text slot="errorMessage" />
    </RangeCalendar>
  );
};
