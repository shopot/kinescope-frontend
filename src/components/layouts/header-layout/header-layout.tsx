import type { JSX } from 'react';

type HeaderLayoutProps = {
  title: string;
};

export const HeaderLayout = ({ title }: HeaderLayoutProps): JSX.Element => <h1>{title}</h1>;
