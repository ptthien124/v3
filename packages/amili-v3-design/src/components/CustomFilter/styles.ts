import { Checkbox } from 'antd';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
  box-sizing: border-box;

  height: 32px;
  width: fit-content;
  min-width: 126px;
  border-radius: 4px;
  padding: 4px;
  background: var(--primary-pink);

  display: flex;
  align-items: center;
  justify-content: end;
  gap: 8px;

  color: white;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      var(--primary-pink);
  }

  &.disabled {
    cursor: default;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0.6)
      ),
      var(--primary-pink);
  }

  > span {
    display: flex;
    align-items: center;

    width: 15px;
    margin-right: auto;
    margin-left: 10px;

    svg {
      height: 15px;
    }
    path {
      fill: white;
      stroke-width: 0.5;
    }
  }
`;

export const QuantityWrapper = styled.div`
  box-sizing: border-box;

  color: var(--dark-blue);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;

  height: 24px;
  width: 36px;
  border-radius: 2px;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &.disabled span {
    opacity: 0.6;
  }

  span {
    width: fit-content;
    svg {
      width: 8px;
    }
    path {
      fill: var(--primary-pink);
    }
  }
`;

export const CustomCheckboxOption = styled(Checkbox.Group)`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 100%;
  min-width: fit-content;
  border-radius: 4px;
  padding: 8px 0;

  display: flex;
  flex-direction: column;

  .ant-checkbox-wrapper {
    margin: 0;
    padding: 0 4px;
    color: var(--dark-blue);
  }
`;
