import { InputProps } from 'antd';
import { CustomWidthHeightProps } from './utils';

export interface CustomInputProps extends Omit<InputProps, 'width'>, CustomWidthHeightProps {}
