import { useContext } from 'react';

import { type ItemValue, NestedListContext } from '../contexts';

export const useNestedList = (): ItemValue[] => {
  const ctx = useContext(NestedListContext);

  if (!ctx) {
    throw new Error('useNestedList must be used within a NestedListProvider');
  }

  return ctx;
};
