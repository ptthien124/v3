import { ModalProps } from 'antd';
import { FormLayout } from 'antd/es/form/Form';

export interface CustomModalProps extends ModalProps {
  goBack?: () => void;
  modalId: string;
  onFinish?: (value: Record<string, any>) => void;
  initialValue?: Record<string, any>;
  formLayout?: FormLayout;
}

export interface InfomativeModalProps extends ModalProps {
  layout?: 'horizontal' | 'vertical';
}
