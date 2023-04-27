import { CustomButton } from '@amili-v3/amili-v3-design';
import type { Meta, StoryObj } from '@storybook/react';
import { CustomInformativeModal } from './InformativeModal';

const meta = {
  title: 'Example/Modal',
  component: CustomInformativeModal,
  argTypes: {
    layout: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof CustomInformativeModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Informative: Story = {
  args: {
    open: true,
    title: 'Modal',
    layout: 'horizontal',
    children:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    footer: [
      <CustomButton size="large" key="cancel-btn" type="white" width={'100%'}>
        Cancel
      </CustomButton>,
      <CustomButton size="large" key="ok-btn" width={'100%'}>
        OK
      </CustomButton>,
    ],
  },
};

// export const Informative_Vertical: Story = {
//   args: {
//     children:
//       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     open: true,
//     title: "Modal",
//     layout: "vertical",
//     footer: [
//       <CustomButton size="large" key="cancel-btn" type="white" width={"100%"}>
//         Cancel
//       </CustomButton>,
//       <CustomButton size="large" key="ok-btn" width={"100%"}>
//         OK
//       </CustomButton>,
//     ],
//   },
// };
