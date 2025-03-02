import React, { useState } from 'react';
import { Checkbox } from './Checkbox';
import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxProps } from 'react-aria-components';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const DefaultStoryRender = ({ children }: { children: CheckboxProps['children'] }) => {
  const [selected, setSelected] = useState(false);
  return (
    <Checkbox isSelected={selected} onChange={setSelected}>
      {children}
    </Checkbox>
  );
};

export const Default: Story = {
  render: ({ children }) => <DefaultStoryRender>{children}</DefaultStoryRender>,
  args: {
    children: 'Select this checkbox',
  },
};
