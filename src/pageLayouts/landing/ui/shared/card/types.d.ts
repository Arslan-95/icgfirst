import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type CardProps = {
  id: number;
  title: string;
  description: string;
  img: string | StaticImport;
};
