import { Space } from 'antd';
import { useMemo } from 'react';
import { CustomBadgeProps } from 'src/interfaces/badge';
import '../../styles.module.scss';
import { CustomBadgeWrapper } from './styles';

const CustomBadge: React.FC<CustomBadgeProps> = props => {
  const { children, className, size = 'middle', ...rest } = props;

  const newClassName = useMemo(() => {
    return (className || '').concat(' ', size).trim();
  }, [size, className]);

  return (
    <CustomBadgeWrapper {...rest} className={newClassName}>
      <Space>{children}</Space>
    </CustomBadgeWrapper>
  );
};

export default CustomBadge;
