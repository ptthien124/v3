import { useMemo } from 'react';
import { CustomInputProps } from '../../interfaces/input';
import '../../styles.module.scss';
import { createNewWidthHeightStyle } from '../../utils';
import { CustomInputWrapper } from './styles';
import './styles.scss';

const CustomInput: React.FC<CustomInputProps> = props => {
  const { width, height, style, ...rest } = props;

  const newStyle = useMemo(() => {
    return { ...style, ...createNewWidthHeightStyle({ width, height }) };
  }, [width, height, style]);

  return <CustomInputWrapper {...rest} style={newStyle} />;
};

export default CustomInput;
