import React from 'react';

import icon from '../ui/assets/whatsapp-icon.svg';
import Image from 'next/image';
import styles from './icon-button.module.scss';
import { type StaticImport } from 'next/dist/shared/lib/get-img-props';
import classnames from 'classnames';

export type IconSize = 'medium' | 'large' | 'extra-large';

interface IconButtonProps {
  src: string | StaticImport;
  size?: IconSize;
}

const IconButton = ({ src, size = 'medium' }: IconButtonProps) => {
  return (
    <button className={classnames(styles.iconButton, size)}>
      <Image src={src} alt="img" />
    </button>
  );
};

export default IconButton;
