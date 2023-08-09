import './globals.scss';
import { PropsWithChildren } from 'react';
import { Template } from '@/pageLayouts/landing';
import type { Metadata } from 'next';
import { AppProvider } from '@/shared/app-provider';

export const metadata: Metadata = {
  title: 'Лендинг ICG-First',
  description:
    'Помогаем российскому бизнесу легально проводить оплаты в условиях глобальной изоляции',
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
