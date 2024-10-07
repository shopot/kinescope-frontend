import { memo, type JSX } from 'react';
import styled from 'styled-components';

import { Button } from '@/components/ui';

import { ItemValue } from '../../contexts';

const StyledNestedListItem = styled.li`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
  border-bottom: 1px solid #cccccc;
  min-width: 320px;

  &:hover {
    background-color: #eeeeee;
  }

  @media (min-width: 768px) {
    min-width: 640px;
  }
`;

const StyledButtonsGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

type NestedListItemProps = {
  item: ItemValue;
  hasChildren: boolean;
  onOpenModal: (parentId?: string) => void;
  onDeleteItem: (id: string) => void;
};

export const NestedListItem = memo(
  ({ item, hasChildren, onOpenModal: onOpenDialog, onDeleteItem }: NestedListItemProps): JSX.Element => {
    const { id, value, offset } = item;

    return (
      <StyledNestedListItem key={id} style={{ paddingLeft: `${offset * 16 + 8}px` }}>
        {value}
        <StyledButtonsGroup>
          <Button type="button" onClick={() => onOpenDialog(id)}>
            +
          </Button>
          <Button type="button" $variant="danger" disabled={hasChildren} onClick={() => onDeleteItem(id)}>
            x
          </Button>
        </StyledButtonsGroup>
      </StyledNestedListItem>
    );
  },
);
