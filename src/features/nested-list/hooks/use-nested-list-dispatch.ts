import { useContext } from 'react';

import { NestedListDispatchContext, type NestedListDispatch } from '../contexts';

export const useNestedListDispatch = (): NestedListDispatch => {
  const ctx = useContext(NestedListDispatchContext);

  if (!ctx) {
    throw new Error('useNestedList must be used within a NestedListProvider');
  }

  return ctx;
};
