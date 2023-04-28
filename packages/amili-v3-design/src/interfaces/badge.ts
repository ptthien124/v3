import { TagProps } from 'antd';
import { BadgeSize } from 'src/types/badge';

export interface CustomBadgeProps extends TagProps {
  size: BadgeSize;
}
