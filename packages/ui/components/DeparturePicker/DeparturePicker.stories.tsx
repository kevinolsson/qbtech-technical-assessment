import { DeparturePicker } from './DeparturePicker';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DeparturePicker> = {
  title: 'Molecules/DeparturePicker',
  component: DeparturePicker,
  tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj<typeof DeparturePicker>;

export const Default: Story = {
  args: {},
};
