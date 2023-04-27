import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import CustomLeftArrow from '@amili-v3/amili-v3-design/src/icons/LeftArrow';
import { Badge } from './Badge';

const meta = {
  title: 'Example/Badge',
  component: Badge,
  argTypes: {
    type: {
      options: ['dark', 'primary', 'white', 'linkage'],
      control: { type: 'radio' },
    },
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
    loading: false,
    disabled: false,
    type: 'dark',
    size: 'middle',
  },
};

const Prefix = () => <CustomLeftArrow />;
const Suffix = () => (
  <div style={{ transform: 'rotate(180deg)' }}>
    <CustomLeftArrow />
  </div>
);

export const WithPrefix: Story = {
  args: {
    children: 'Badge',
    loading: false,
    disabled: false,
    type: 'dark',
    size: 'middle',
    prefix: <Prefix />,
  },
};

export const WithSuffix: Story = {
  args: {
    children: 'Badge',
    loading: false,
    disabled: false,
    type: 'dark',
    size: 'middle',
    prefix: <Prefix />,
    suffix: <Suffix />,
  },
};
