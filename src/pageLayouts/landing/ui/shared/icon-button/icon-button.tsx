import React from 'react';

import icon from '../ui/assets/whatsapp-icon.svg';
import Image from 'next/image';
import styles from './icon-button.module.scss';
import { type StaticImport } from 'next/dist/shared/lib/get-img-props';

interface IconButtonProps {
  src: string | StaticImport;
}

const IconButton = ({ src }: IconButtonProps) => {
  return (
    <button className={styles.iconButton}>
      <Image src={src} alt="img" />
    </button>
  );
};

export default IconButton;
