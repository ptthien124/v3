import { Dropdown } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { useCallback, useMemo, useState } from 'react';
import CustomChevronDownOutlined from '../../icons/ChevronDown';
import CustomFilterOutlined from '../../icons/Filter';
import { CustomFilterProps } from '../../interfaces/filter';
import '../../styles.module.scss';
import {
  ContentWrapper,
  CustomCheckboxOption,
  QuantityWrapper,
} from './styles';
import './styles.scss';

const CustomFilter: React.FC<CustomFilterProps> = props => {
  const {
    children,
    options,
    disabled,
    width,
    checkedList,
    setCheckedList,
    placement = 'bottomRight',
    trigger = ['click'],
    ...rest
  } = props;

  const [quantity, setQuantity] = useState<number>(0);

  const [defaultCheckedList, setDefaultCheckedList] = useState<
    CheckboxValueType[]
  >([]);

  const handleChange = useCallback(
    (list: CheckboxValueType[]) => {
      if (setCheckedList) {
        setCheckedList(list);
      } else {
        setDefaultCheckedList(list);
      }
      setQuantity(list.length);
    },
    [setCheckedList],
  );

  const CustomDropdown = useMemo(
    () => (
      <CustomCheckboxOption
        style={{ width }}
        options={options}
        value={checkedList || defaultCheckedList}
        onChange={handleChange}
      />
    ),
    [checkedList, defaultCheckedList, handleChange, options, width],
  );

  return (
    <Dropdown
      {...rest}
      placement={placement}
      disabled={disabled}
      trigger={trigger}
      dropdownRender={() => CustomDropdown}
    >
      <ContentWrapper className={disabled ? 'disabled' : ''}>
        <CustomFilterOutlined />
        {children}
        <QuantityWrapper className={disabled ? 'disabled' : ''}>
          <span>{quantity}</span>
          <CustomChevronDownOutlined />
        </QuantityWrapper>
      </ContentWrapper>
    </Dropdown>
  );
};

export default CustomFilter;
