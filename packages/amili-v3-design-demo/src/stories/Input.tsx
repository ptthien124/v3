import {
  ControlledInput,
  CustomControlledInputProps,
} from '@amili-v3/amili-v3-design';

export const Input = ({ ...props }: CustomControlledInputProps) => {
  return <ControlledInput {...props} />;
};
