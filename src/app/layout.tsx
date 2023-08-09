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
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
      <body>
        <AppProvider>
          <Template>{children}</Template>
        </AppProvider>
      </body>
    </html>
  );
}
