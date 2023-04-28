import { Space } from 'antd';
import { useMemo } from 'react';
import { CustomBadgeProps } from 'src/interfaces/badge';
import '../../styles.module.scss';
import { CustomBadgeWrapper } from './styles';

const CustomBadge: React.FC<CustomBadgeProps> = props => {
  const {
    // prefix,
    // suffix,
    color,
    children,
    className,
    type = 'dark',
    size = 'middle',
    primary = false,
    ...rest
  } = props;

  const newClassName = useMemo(() => {
    switch (color) {
      case 'dark':
        return (className || '')
          .concat(` dark ${primary && 'primary '}`, size)
          .trim();
      case 'primary':
        return (className || '')
          .concat(` color-primary ${primary && 'primary '}`, size)
          .trim();
      case 'linkage':
        return (className || '')
          .concat(` linkage ${primary && 'primary '}`, size)
          .trim();

      default:
        return (className || '').concat(' ', size).trim();
    }
  }, [size, className, color, primary]);

  const newColor = useMemo(() => {
    if (primary) {
      switch (type) {
        case 'primary':
          return getComputedStyle(document.documentElement).getPropertyValue(
            '--primary-pink',
          );
        case 'linkage':
          return getComputedStyle(document.documentElement).getPropertyValue(
            '--link',
          );
        default:
          return getComputedStyle(document.documentElement).getPropertyValue(
            '--dark-blue',
          );
      }
    }
    return color;
  }, [type, primary, color]);

  // const Prefix = () => <div className="prefix">{prefix}</div>;
  // const Suffix = () => <div className="suffix">{suffix}</div>;

  return (
    <CustomBadgeWrapper {...rest} className={newClassName} color={newColor}>
      <Space size={size === 'small' ? [4, 0] : [8, 0]}>
        {/* {prefix && <Prefix />} */}
        {children}
        {/* {suffix && <Suffix />} */}
      </Space>
    </CustomBadgeWrapper>
  );
};

export default CustomBadge;
