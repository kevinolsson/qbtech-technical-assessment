import { NumberField } from './NumberField';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NumberField> = {
  title: 'Atoms/NumberField',
  component: NumberField,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NumberField>;

export const Default: Story = {
  args: {
    label: 'Label',
    onChange: (value) => console.log(value),
  },
};

export const WithError: Story = {
  args: {
    label: 'Label',
    onChange: (value) => console.log(value),
    errorMessage: 'Something went wrong!',
    isInvalid: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Label',
    onChange: (value) => console.log(value),
  },
};
