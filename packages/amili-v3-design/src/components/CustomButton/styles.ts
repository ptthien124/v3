import { Button } from 'antd';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

export const CustomButtonWrapper = styled(Button)`
  position: relative;

  .ant-space {
    display: flex;
    justify-content: center;
  }

  svg path {
    fill: white;
  }

  &.ant-btn-default:not(:disabled) {
    &.white svg path {
      fill: var(--primary-pink);
    }

    .ant-space.invisible {
      visibility: hidden;
    }

    .custom-spin.ant-spin {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      svg {
        animation: ${rotate} 1.6s linear infinite;
      }
    }
  }

  &.white {
    .ant-spin {
      color: var(--primary-pink);
    }
  }

  .custom-spin.ant-spin {
    display: flex;
    align-items: center;

    svg {
      width: 16px;
    }
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

  &.ant-btn-lg {
    .prefix,
    .suffix {
      svg {
        height: 18px;
        width: 18px;
      }
    }

    .custom-spin.ant-spin svg {
      width: 20px;
    }
  }

  &.ant-btn-sm {
    .prefix,
    .suffix {
      svg {
        height: 11px;
        width: 11px;
      }
    }

    .custom-spin.ant-spin svg {
      width: 12px;
    }
  }
`;
