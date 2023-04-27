import { Button, Modal } from 'antd';
import styled from 'styled-components';

export const CustomModalWrapper = styled(Modal)`
  max-width: 488px;

  .ant-modal-content {
    padding: 0;
  }

  .ant-modal-header {
    padding: 28px 0;
    border-bottom: 1px solid var(--modal-border);
  }

  .ant-modal-title {
    text-align: center;
    padding: 0 100px;
  }

  .ant-modal-body {
    padding: 40px;
  }

  .ant-modal-footer {
    padding: 0 40px 40px;
  }

  .prev-btn {
    position: absolute;
    top: 28px;
    z-index: 1010;
    inset-inline-start: 22px;

    color: var(--primary-pink);
    font-weight: 600;
    line-height: 1;
    text-decoration: none;

    background: transparent;
    outline: 0;
    border-radius: 4px;
    padding: 0;
    width: 22px;
    height: 22px;
    border: 0;

    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      color: rgba(0, 0, 0, 0.88);
      background-color: rgba(0, 0, 0, 0.06);
      text-decoration: none;
    }
  }
`;

export const GoBackButton = styled(Button)`
  box-shadow: none;

  &.ant-btn-text:not(:disabled):active {
    background-color: rgba(0, 0, 0, 0.15);
  }

  path {
    fill: var(--primary-pink);
  }
`;

// Informative modal
export const HorizontalInfomativeModal = styled(Modal)`
  max-width: 488px;

  .ant-modal-content {
    padding: 54px 40px 40px;
  }

  .ant-modal-body {
    margin: 12px 0 40px;
  }

  .bellWrapper {
    width: 92px;
    height: 92px;
    border-radius: 50%;
    background-color: var(--light-pink);
    margin-bottom: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 24px;
      height: 30px;

      path {
        fill: var(--primary-pink);
      }
    }
  }
`;

export const VerticalInfomativeModal = styled(HorizontalInfomativeModal)`
  .ant-modal-title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ant-modal-body {
    text-align: center;
  }

  .ant-modal-footer {
    display: flex;
    flex-direction: column-reverse;

    .ant-btn {
      width: 100%;
    }
  }
`;
