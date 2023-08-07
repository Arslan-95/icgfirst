'use client';

import React from 'react';
import styles from './header.module.scss';
import {
  Container,
  Button,
  TelegramButton,
  WhatsappButton,
} from '../../../ui/shared';
import Menu from './menu';
import { useAdaptive } from '@/shared/breakpoints';

const Header = () => {
  const { isDown } = useAdaptive();

  const renderDesktop = () => (
    <Container className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <a className={styles.nav__link}>О нас</a>
          </li>
          <li>
            <a className={styles.nav__link}>Возможности системы</a>
          </li>
          <li>
            <a className={styles.nav__link}>Кейсы</a>
          </li>
          <li>
            <a className={styles.nav__link}>Процесс</a>
          </li>
          <li>
            <a className={styles.nav__link}>Преимущества</a>
          </li>
        </ul>
      </nav>
      <div className={styles.social}>
        <WhatsappButton />
        <TelegramButton />
      </div>
      <Button
        size="small"
        style={{
          width: '100%',
          maxWidth: '162px',
        }}
        variant="white"
      >
        Обратный звонок
      </Button>
    </Container>
  );

  const renderAdaptive = () => (
    <Container className={styles.container}>
      <Menu />
    </Container>
  );

  return (
    <header className={styles.header}>
      {isDown('md') ? renderAdaptive() : renderDesktop()}
    </header>
  );
};

export default Header;
