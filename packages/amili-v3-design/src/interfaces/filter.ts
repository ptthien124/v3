import { CheckboxOptionType, DropDownProps } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';

export interface CustomFilterProps extends DropDownProps {
  options: CheckboxOptionType[];
  width?: number | string;
  checkedList?: CheckboxValueType[];
  setCheckedList?: React.Dispatch<React.SetStateAction<CheckboxValueType[]>>;
}
