import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    onClick: () => {
      alert('Hello World!');
    },
  },
};

export const secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    onClick: () => {
      alert('Hello World!');
    },
  },
};
