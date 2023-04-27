import { useMemo } from 'react';
import { InfomativeModalProps } from 'src/interfaces/modal';
import CustomBell from '../../icons/Bell';
import CustomClose from '../../icons/Close';
import CustomButton from '../CustomButton';
import { HorizontalInfomativeModal, VerticalInfomativeModal } from './styles';
import './styles.scss';

const InfomativeModal: React.FC<InfomativeModalProps> = props => {
  const {
    layout = 'horizontal',
    title = 'Modal',
    onCancel,
    children,
    destroyOnClose = true,
    footer: _footer,
  } = props;

  const Wrapper =
    layout === 'horizontal'
      ? HorizontalInfomativeModal
      : VerticalInfomativeModal;

  const footer = useMemo(() => {
    return (
      _footer ?? [
        <CustomButton
          size="large"
          key="ok-btn"
          width={'100%'}
          onClick={e => {
            onCancel?.(e as any);
          }}
        >
          OK
        </CustomButton>,
      ]
    );
  }, [_footer, onCancel]);

  return (
    <Wrapper
      {...props}
      title={
        <>
          <div className="bellWrapper">
            <CustomBell />
          </div>
          {title}
        </>
      }
      footer={footer}
      closeIcon={<CustomClose />}
      destroyOnClose={destroyOnClose}
    >
      {children}
    </Wrapper>
  );
};

export default InfomativeModal;
