import React, { PropsWithChildren } from 'react';
import Header from './header/header';
import Footer from './footer/footer';

export const Template = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
