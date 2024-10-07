import { forwardRef, useEffect, useImperativeHandle, useRef, useState, type JSX } from 'react';
import styled from 'styled-components';

import { Button, TextInput } from '@/components/ui';

import { useNestedListDispatch } from '../../hooks';

type ModalContentProps = {
  parentId: string | undefined;
  onClose: () => void;
};

const ModalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow:
    0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14),
    0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  background-color: white;
  border: 1px solid rgb(240, 240, 240);
  border-radius: 4px;
  position: absolute;
  min-width: 320px;
  top: 94px;
  left: calc(50% - 160px);
  padding: 8px 16px;

  .actions {
    display: flex;
    gap: 8px;
  }
`;

export const ModalAddForm = forwardRef(({ parentId, onClose }: ModalContentProps, ref): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const { addItem } = useNestedListDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        setValue('');
        inputRef.current?.focus();
      },
    };
  }, []);

  const handleSubmit = () => {
    if (value.trim() === '') {
      return;
    }

    addItem(value, parentId);

    onClose();
  };

  const isDisabled = value.trim() === '';

  return (
    <ModalWrapper>
      <div>
        <TextInput ref={inputRef} type="text" value={value} onChange={({ target: { value } }) => setValue(value)} />
      </div>
      <div className="actions">
        <Button type="button" onClick={handleSubmit} disabled={isDisabled}>
          Add
        </Button>
        <Button type="button" $variant="outlined" onClick={onClose}>
          x
        </Button>
      </div>
    </ModalWrapper>
  );
});
