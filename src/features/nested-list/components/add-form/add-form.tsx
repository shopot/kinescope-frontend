import { useState, type JSX } from 'react';
import styled from 'styled-components';

import { Button, TextInput } from '@/components/ui';

import { useNestedListDispatch } from '../../hooks';

const StyledAddForm = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  min-width: 320px;
`;

export const AddForm = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const { addItem } = useNestedListDispatch();

  const isDisabled = value.trim() === '';

  const handleSubmit = () => {
    if (value.trim() === '') {
      return;
    }

    addItem(value);

    setValue('');
  };

  return (
    <StyledAddForm>
      <TextInput type="text" value={value} onChange={({ target: { value } }) => setValue(value)} />
      <Button type="button" disabled={isDisabled} onClick={handleSubmit}>
        Add
      </Button>
    </StyledAddForm>
  );
};
