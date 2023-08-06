import React, { PropsWithChildren } from 'react';
import Header from './header/header';

export const Template = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </>
  );
};
