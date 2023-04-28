import { Tag } from 'antd';
import styled from 'styled-components';

export const CustomBadgeWrapper = styled(Tag)`
  height: 32px;
  width: 114px;
  padding: 8px, 12px, 8px, 12px;
  background-color: var(--light-gray);

  border-radius: 22px;
  border-color: var(--dark-blue);

  color: var(--dark-blue);

  display: flex;
  align-items: center;
  justify-content: center;

  &.badge-lg {
    font-size: 16px;
  }
`;
