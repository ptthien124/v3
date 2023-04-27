import { InfomativeModalProps } from '@amili-v3/amili-v3-design';
import { InformativeModal } from '@amili-v3/amili-v3-design/src/components/CustomModal';

export const CustomInformativeModal = (props: InfomativeModalProps) => {
  return (
    <InformativeModal
      {...props}
      react
      amili
      components
      ControlledInput
      CustomInformativeModal
    />
  );
};
