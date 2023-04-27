import { CustomWidthHeightProps } from './interfaces/utils';

export const createNewWidthHeightStyle = (props: CustomWidthHeightProps) => {
  const { width, height } = props;
  const result: CustomWidthHeightProps = {};
  if (width) {
    result.width = width;
  }
  if (height) {
    result.height = width;
  }
  return result;
};
