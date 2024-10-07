import type { JSX } from 'react';

import { NestedListPage } from '@/features/nested-list';
import { HeaderLayout, MainLayout } from '@/components/layouts';

export const App = (): JSX.Element => {
  return (
    <MainLayout>
      <HeaderLayout title="Nested List App" />
      <NestedListPage />
    </MainLayout>
  );
};
