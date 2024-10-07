import styled from 'styled-components';

export const TextInput = styled.input`
  display: block;
  width: 100%;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 400;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 4px;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 1px rgba(0, 123, 255, 0.25);
  }
`;
