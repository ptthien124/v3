import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
  title: 'Example/Badge',
  component: Badge,
  argTypes: {
    size: {
      options: ['large', 'middle', 'small'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
    color: 'dark',
    size: 'middle',
    width: 80,
    primary: false,
  },
};

export const Primary: Story = {
  args: {
    children: 'Badge',
    color: 'dark',
    size: 'middle',
    width: 80,
    primary: true,
  },
};
