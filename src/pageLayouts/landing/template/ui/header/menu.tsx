import { IconButton } from '../../../ui/shared';
import React from 'react';
import menuIcon from '../../../ui/shared/assets/menu.svg';
import styles from './menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <IconButton src={menuIcon} />
    </div>
  );
};

export default Menu;
