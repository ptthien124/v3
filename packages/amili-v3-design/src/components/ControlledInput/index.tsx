import { Form } from 'antd';
import { CustomControlledInputProps } from 'src/types/controlledInput';
import '../../styles.module.scss';
import CustomInput from '../CustomInput';
import './styles.scss';

const ControlledInput: React.FC<CustomControlledInputProps> = props => {
  return (
    <Form.Item
      {...props}
      rules={[{ required: true, message: 'Please select your country!' }]}
    >
      <CustomInput allowClear {...props} />
    </Form.Item>
  );
};

export default ControlledInput;
