import { RangeCalendar } from './RangeCalendar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RangeCalendar> = {
  title: 'Atoms/RangeCalendar',
  component: RangeCalendar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RangeCalendar>;

export const Default: Story = {
  args: {},
};

export const defaultDates: Story = {
  args: {},
};
