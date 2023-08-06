import './globals.scss';
import { PropsWithChildren } from 'react';
import { Template } from '@/pageLayouts/landing';
import type { Metadata } from 'next';
import { AppProvider } from '@/shared/app-provider';

export const metadata: Metadata = {
  title: 'Transgran',
  description: 'landing',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Template>{children}</Template>
        </AppProvider>
      </body>
    </html>
  );
}
