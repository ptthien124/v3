import { Space } from 'antd';
import { useMemo } from 'react';
import { CustomBadgeProps } from 'src/interfaces/badge';
import '../../styles.module.scss';
import { CustomBadgeWrapper } from './styles';
import { createNewWidthHeightStyle, getCSSVariable } from '../../utils';

const CustomBadge: React.FC<CustomBadgeProps> = props => {
  const {
    style,
    width,
    height,
    children,
    className,
    color = 'dark',
    size = 'middle',
    primary = false,
    ...rest
  } = props;

  const newClassName = useMemo(() => {
    const result = (className || '').concat(' ', size);
    if (!primary) {
      switch (color) {
        case 'dark':
          return result.concat(' ', 'dark').trim();
        case 'primary':
          return result.concat(' ', 'primary').trim();
        case 'linkage':
          return result.concat(' ', 'linkage').trim();
      }
    }
    return result;
  }, [className, primary, color, size]);

  const newColor = useMemo(() => {
    if (primary) {
      switch (color) {
        case 'dark':
          return getCSSVariable('--dark-blue');
        case 'primary':
          return getCSSVariable('--primary-pink');
        case 'linkage':
          return getCSSVariable('--link');
        default:
          return color;
      }
    }
    return color;
  }, [color, primary]);

  const newStyle = useMemo(() => {
    return { ...style, ...createNewWidthHeightStyle({ width, height }) };
  }, [width, height, style]);

  return (
    <CustomBadgeWrapper
      {...rest}
      color={newColor}
      style={newStyle}
      className={newClassName}
    >
      <Space size={size === 'small' ? [4, 0] : [8, 0]}>{children}</Space>
    </CustomBadgeWrapper>
  );
};

export default CustomBadge;
