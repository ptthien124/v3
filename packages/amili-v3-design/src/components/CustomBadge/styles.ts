import { Tag } from 'antd';
import styled from 'styled-components';

export const CustomBadgeWrapper = styled(Tag)`
  height: 32px;
  width: fit-content;
  padding: 8px 12px;

  border-radius: 22px;
  border-color: var(--dark-blue);

  display: flex;
  align-items: center;
  justify-content: center;

  .ant-space-item {
    font-weight: 600;
    font-size: 14px;
  }

  .prefix,
  .suffix {
    display: flex;
    align-items: center;

    svg {
      height: 14px;
      width: 14px;
    }
  }

  &:not(.primary).dark {
    color: var(--dark-blue);
    border-color: var(--dark-blue);
  }

  &:not(.primary).color-primary {
    color: var(--primary-pink);
    border-color: var(--primary-pink);
  }

  &:not(.primary).linkage {
    color: var(--link);
    border-color: var(--link);
  }

  &.large {
    height: 44px;
    padding: 8px 20px;

    .ant-space-item {
      font-size: 16px;
    }

    .prefix,
    .suffix {
      display: flex;
      align-items: center;

      svg {
        height: 18px;
        width: 18px;
      }
    }
  }

  &.small {
    font-size: 12px;
    height: 28px;
    padding: 8px;

    .ant-space-item {
      font-size: 12px;
    }

    .prefix,
    .suffix {
      display: flex;
      align-items: center;

      svg {
        height: 12px;
        width: 12px;
      }
    }
  }
`;
