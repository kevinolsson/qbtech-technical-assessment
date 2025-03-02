import { IconAt } from '@tabler/icons-react';
import { TextField } from './TextField';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextField> = {
  title: 'Atoms/TextField',
  component: TextField,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextField>;

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
    leftIcon: <IconAt className="stroke-gray-400 w-4 h-auto" />,
  },
};
