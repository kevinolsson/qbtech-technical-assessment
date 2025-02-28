import { RangeCalendarExample } from './RangeCalendarExample';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RangeCalendarExample> = {
  title: 'RangeCalendarExample',
  component: RangeCalendarExample,
  tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj<typeof RangeCalendarExample>;

export const Default: Story = {
  args: {

  },
};
