import { useCallback, useRef, useState, type JSX } from 'react';
import { createPortal } from 'react-dom';

import { NestedListItem } from './nested-list-item';
import { useNestedList, useNestedListDispatch } from '../../hooks';
import { ModalAddForm } from '../modal-add-form';

export const NestedList = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [parentId, setParentId] = useState<string | undefined>();
  const inputRef = useRef<HTMLInputElement>(null);
  const items = useNestedList();
  const { deleteItem } = useNestedListDispatch();

  const handleOpenModal = useCallback((id: string | undefined) => {
    setParentId(id);
    setIsModalOpen(true);
    inputRef.current?.focus();
  }, []);

  const list = items.map((item) => {
    const hasChildren = !!item.children?.length;

    return (
      <NestedListItem
        key={item.id}
        item={item}
        onOpenModal={handleOpenModal}
        onDeleteItem={deleteItem}
        hasChildren={hasChildren}
      />
    );
  });

  return (
    <>
      <ul>{list}</ul>
      {isModalOpen &&
        createPortal(
          <ModalAddForm ref={inputRef} parentId={parentId} onClose={() => setIsModalOpen(false)} />,
          document.body,
        )}
    </>
  );
};
