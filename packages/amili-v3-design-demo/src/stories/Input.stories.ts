import { VerticalInfomativeModal } from './../../../amili-v3-design/src/components/CustomModal/styles';
import { FormLayout } from 'antd/es/form/Form';
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    validateStatus: {
      options: ['none', 'error', 'warning', 'success'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    placeholder: 'Enter Input',
    disabled: false,
    label: 'Label',
  },
};
