import { Tag } from 'antd';
import styled from 'styled-components';

export const CustomBadgeWrapper = styled(Tag)`
  height: 32px;
  width: fit-content;
  padding: 8px 12px;

  border-radius: 22px;

  display: flex;
  align-items: center;
  justify-content: center;

  &.dark {
    background-color: var(--light-gray);
    border-color: var(--dark-blue);

    .ant-space-item {
      color: var(--dark-blue);
    }
  }

  &.primary {
    background-color: var(--light-pink);
    border-color: var(--primary-pink);

    .ant-space-item {
      color: var(--primary-pink);
    }
  }

  &.linkage {
    background-color: var(--light-link);
    border-color: var(--link);

    .ant-space-item {
      color: var(--link);
    }
  }

  &.large {
    height: 44px;

    .ant-space-item {
      font-size: 16px;
    }
  }

  &.middle {
    height: 32px;

    .ant-space-item {
      font-size: 14px;
    }
  }

  &.small {
    height: 28px;

    .ant-space-item {
      font-size: 12px;
    }
  }
`;
