import { Logo } from './Logo';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Logo> = {
  title: 'Atoms/Logo',
  component: Logo,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {},
};

export const CustomClassName: Story = {
  name: 'Choosing size (with Tailwind)',
  args: {
    className: 'w-64',
  },
};
