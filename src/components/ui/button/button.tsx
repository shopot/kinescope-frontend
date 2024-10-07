import styled, { css } from 'styled-components';

const VARIANT = {
  danger: css`
    background-color: #d32f2f;
    color: #fff;
    &:hover {
      background-color: #c62828;
    }
    &:active {
      background-color: #d32f2f;
    }
    &:focus {
      background-color: #d32f2f;
    }
  `,
  outlined: css`
    background-color: transparent;
    color: #2196f3;
    border: 1px solid #2196f3;
    &:hover,
    &:focus,
    &:active {
      background-color: rgba(25, 118, 210, 0.04);
      border-color: #1976d2;
    }
  `,
};

const DISABLED = css`
  box-shadow: none;
  background-color: rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.26);
  cursor: not-allowed;
  &:hover,
  &:active,
  &:focus {
    background-color: rgba(0, 0, 0, 0.12);
  }
`;

export const Button = styled.button<{ $variant?: 'danger' | 'outlined' }>`
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 400;
  border-radius: 4px;
  cursor: pointer;
  border: 0px;
  transition:
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #fff;
  background-color: #1976d2;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  &:hover {
    background-color: #1565c0;
  }
  &:active {
    background-color: #1976d2;
  }
  &:focus {
    background-color: #1976d2;
  }
  ${(props) => props.$variant && VARIANT[props.$variant]}
  ${(props) => props.disabled && DISABLED}
`;
