import { Form } from 'antd';
import { useMemo } from 'react';
import CustomClose from '../../icons/Close';
import CustomLeftArrow from '../../icons/LeftArrow';
import { CustomModalProps } from '../../interfaces/modal';
import '../../styles.module.scss';
import CustomButton from '../CustomButton';
import { CustomModalWrapper, GoBackButton } from './styles';
import './styles.scss';

export { default as InformativeModal } from './InfomativeModal';

const CustomModal: React.FC<CustomModalProps> = props => {
  const {
    goBack,
    modalId,
    children,
    onFinish,
    onCancel,
    formLayout = 'vertical',
    title = 'Modal',
    footer: _footer,
    initialValue = {},
    destroyOnClose = true,
  } = props;

  const footer = useMemo(() => {
    return (
      _footer ?? [
        <CustomButton
          key="cancel-btn"
          width="100%"
          size="large"
          type="white"
          onClick={e => {
            onCancel?.(e as any);
          }}
        >
          Cancel
        </CustomButton>,
        <CustomButton
          key="submit-btn"
          width="100%"
          htmlType="submit"
          size="large"
          form={modalId}
        >
          Submit
        </CustomButton>,
      ]
    );
  }, [_footer, modalId, onCancel]);

  return (
    <CustomModalWrapper
      {...props}
      title={
        <>
          {!!goBack && (
            <GoBackButton type="text" className="prev-btn" onClick={goBack}>
              <CustomLeftArrow />
            </GoBackButton>
          )}
          {title}
        </>
      }
      footer={footer}
      closeIcon={<CustomClose />}
      destroyOnClose={destroyOnClose}
    >
      <Form
        id={modalId}
        onFinish={onFinish}
        initialValues={initialValue}
        layout={formLayout}
      >
        {children}
      </Form>
    </CustomModalWrapper>
  );
};

export default CustomModal;
