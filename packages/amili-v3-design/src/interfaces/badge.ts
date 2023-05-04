import { TagProps } from 'antd';
import { BadgeSize } from 'src/types/badge';

export interface CustomBadgeProps extends Omit<TagProps, 'prefix'> {
  size?: BadgeSize;
  primary?: boolean;
  width?: number | string;
  height?: number | string;
}
