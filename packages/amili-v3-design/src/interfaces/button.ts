import { ButtonProps } from 'antd';
import { ReactNode } from 'react';
import { CustomButtonType } from 'src/types/button';
import { CustomWidthHeightProps } from './utils';

export interface CustomButtonProps
  extends CustomWidthHeightProps,
    Omit<ButtonProps, 'type' | 'prefix'> {
  type?: CustomButtonType;
  prefix?: ReactNode;
  suffix?: ReactNode;
}
