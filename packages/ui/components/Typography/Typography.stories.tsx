import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Atoms/Typography',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <h1>This is a H1 heading.</h1>
      <h2>This is a H2 heading.</h2>
      <h3>This is a H3 heading.</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </p>
    </div>
  ),
};
