'use client';

import React, { createContext, PropsWithChildren } from 'react';
import { IContext } from './types';
import { useInitAdaptive } from '@/shared/breakpoints';

export const AppContext = createContext<IContext>({ adaptive: 'xl' });

export const AppProvider = ({ children }: PropsWithChildren) => {
  const { adaptive } = useInitAdaptive();

  return (
    <AppContext.Provider value={{ adaptive }}>{children}</AppContext.Provider>
  );
};
