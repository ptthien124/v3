import { ControlledInput } from '@amili-v3/amili-v3-design';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const goBack = () => {};

const meta = {
  title: 'Example/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const Children = () => {
  return (
    <>
      <ControlledInput width={'100%'} label="Label" />
    </>
  );
};

export const Default: Story = {
  args: {
    modalId: 'modal',
    children: <Children />,
    open: true,
    title: 'Modal',
    goBack,
  },
};
