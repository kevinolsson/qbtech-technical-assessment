import { DeparturePicker } from './DeparturePicker';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DeparturePicker> = {
  title: 'Molecules/DeparturePicker',
  parameters: {
    layout: 'fullscreen',
  },
  component: DeparturePicker,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DeparturePicker>;

export const Default: Story = {
  args: {
    onChange: (value) => console.log({ value }),
  },
};

export const HasReturnTrip: Story = {
  args: {
    hasReturnTrip: true,
    onChange: (value) => console.log({ value }),
  },
};

export const HasReturnTripEntered: Story = {
  name: 'Departure Date Pre-filled',
  args: {
    hasReturnTrip: true,
    onChange: (value) => console.log({ value }),
    departureDate: '2026-12-25',
  },
};

export const hasError: Story = {
  args: {
    onChange: (value) => console.log({ value }),
    errorMessage: 'Something went wrong!',
    isInvalid: true,
  },
};
