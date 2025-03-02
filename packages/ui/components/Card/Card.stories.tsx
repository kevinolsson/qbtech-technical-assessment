import { Card } from './Card';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div>
          <h1>Hello World</h1>
          <h2>Subheading</h2>
        </div>
        <div>Card handles spacing.</div>
      </>
    ),
  },
};
