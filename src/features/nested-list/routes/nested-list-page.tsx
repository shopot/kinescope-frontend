import { type JSX } from 'react';

import { AddForm, NestedList } from '../components';
import { NestedListProvider } from '../contexts';

export const NestedListPage = (): JSX.Element => {
  return (
    <NestedListProvider>
      <AddForm />
      <NestedList />
    </NestedListProvider>
  );
};
