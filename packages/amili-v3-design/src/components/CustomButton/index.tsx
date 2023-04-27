import { Space, Spin } from 'antd';
import { useMemo } from 'react';
import CustomLoader from '../../icons/Loader';
import { CustomButtonProps } from '../../interfaces/button';
import '../../styles.module.scss';
import { createNewWidthHeightStyle } from '../../utils';
import { CustomButtonWrapper } from './styles';
import './styles.scss';

const CustomButton: React.FC<CustomButtonProps> = props => {
  const {
    size,
    style,
    width,
    height,
    prefix,
    suffix,
    disabled,
    children,
    className,
    type = 'dark',
    loading = false,
    ...rest
  } = props;

  const newClassName = useMemo(() => {
    if (className) {
      return type.concat(' ', className);
    }
    return type;
  }, [className, type]);

  const newStyle = useMemo(() => {
    return { ...style, ...createNewWidthHeightStyle({ width, height }) };
  }, [width, height, style]);

  const spaceStyle = useMemo(() => {
    if (size === 'small') {
      return { gap: 4 };
    }
    return {};
  }, [size]);

  const Prefix = () => <div className="prefix">{prefix}</div>;
  const Suffix = () => <div className="suffix">{suffix}</div>;

  return (
    <CustomButtonWrapper
      {...rest}
      style={newStyle}
      className={newClassName}
      disabled={disabled}
      loading={loading}
    >
      <Space className={`${loading ? 'invisible' : ''}`} style={spaceStyle}>
        {prefix && <Prefix />}
        {children}
        {suffix && <Suffix />}
      </Space>

      {loading && !disabled && (
        <Spin
          className="custom-spin"
          spinning={!!loading}
          indicator={<CustomLoader />}
        />
      )}
    </CustomButtonWrapper>
  );
};

export default CustomButton;
