import { createContext, useCallback, useState, type PropsWithChildren } from 'react';

import jsonData from '../data/simple-nested-list.json';

export type JsonValue = {
  id: string;
  value: string;
  children?: JsonValue[];
};

export interface ItemValue {
  id: string;
  value: string;
  offset: number;
  parent?: ItemValue;
  children?: ItemValue[];
}

const assignFromJson = (jsonData: JsonValue[], parent: ItemValue | undefined = undefined, offset = 0): ItemValue[] => {
  const result: ItemValue[] = [];

  jsonData.forEach((item) => {
    const newItem: ItemValue = {
      id: item.id,
      value: item.value,
      parent,
      children: [],
      offset,
    };

    result.push(newItem);

    if (item.children) {
      const children = assignFromJson(item.children, newItem, offset + 1);

      newItem.children = children.filter((child) => child.parent?.id === newItem.id);

      result.push(...children);
    }
  });

  return result;
};

export type NestedListDispatch = {
  deleteItem: (id: string) => void;
  addItem: (value: string, parentId?: string) => void;
};

export const NestedListContext = createContext<ItemValue[]>(null!);
export const NestedListDispatchContext = createContext<NestedListDispatch>(null!);

export const NestedListProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<ItemValue[]>(assignFromJson(jsonData));

  const deleteItem = useCallback(
    (id: string) => {
      setItems((prevState) => {
        const foundItem = prevState.find((item) => item.id === id);

        if (!foundItem || foundItem.children?.length) {
          return prevState;
        }

        const { parent } = foundItem;

        if (parent) {
          parent.children = parent.children?.filter((item) => item.id !== id);
        }

        const newState = [...prevState.filter((item) => item.id !== id)];

        return newState;
      });
    },
    [setItems],
  );

  const addItem = useCallback(
    (value: string, parentId?: string): void => {
      setItems((prevState) => {
        const parent = prevState.find((item) => item.id === parentId);

        const newItem: ItemValue = {
          id: self.crypto.randomUUID(),
          value,
          parent: undefined,
          children: [],
          offset: 0,
        };

        if (parent) {
          newItem.offset = parent.offset + 1;
          newItem.parent = parent;

          parent.children?.push(newItem);

          const parentIndex = prevState.findIndex((item) => item.id === parentId);

          const newState = [...prevState];
          newState.splice(parentIndex + 1, 0, newItem);

          return newState;
        }

        return [newItem, ...prevState];
      });
    },
    [setItems],
  );

  return (
    <NestedListDispatchContext.Provider value={{ addItem, deleteItem }}>
      <NestedListContext.Provider value={items}>{children}</NestedListContext.Provider>
    </NestedListDispatchContext.Provider>
  );
};
