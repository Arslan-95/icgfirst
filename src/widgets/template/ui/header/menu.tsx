import { IconButton } from '@/shared/ui';
import React from 'react';
import menuIcon from '@/shared/ui/assets/menu.svg';
import styles from './menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <IconButton src={menuIcon} />
    </div>
  );
};

export default Menu;
