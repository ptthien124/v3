import { TagProps } from 'antd';
import { BadgeSize, BadgeType } from 'src/types/badge';

export interface CustomBadgeProps extends Omit<TagProps, 'prefix'> {
  size?: BadgeSize;
  type?: BadgeType;
  primary?: boolean;
  // prefix?: ReactNode;
  // suffix?: ReactNode;
}
