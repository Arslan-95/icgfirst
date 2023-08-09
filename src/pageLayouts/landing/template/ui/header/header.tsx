'use client';

import React, { PropsWithChildren } from 'react';
import styles from './header.module.scss';
import {
  Container,
  Button,
  TelegramButton,
  WhatsappButton,
} from '../../../ui/shared';
import Menu from './menu';
import { Link as ReactScrollLink } from 'react-scroll';
import { useAdaptive } from '@/shared/breakpoints';

const ScrollLink = ({ to, children }: PropsWithChildren<{ to: string }>) => (
  <ReactScrollLink to={to} duration={500} smooth className={styles.nav__link}>
    {children}
  </ReactScrollLink>
);

const Header = () => {
  const { isUp } = useAdaptive();

  const renderDesktop = () => (
    <Container className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <ScrollLink to="about-us">О нас</ScrollLink>
          </li>
          <li>
            <ScrollLink to="system-capabilities">
              Возможности системы
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="portfolio">Кейсы</ScrollLink>
          </li>
          <li>
            <ScrollLink to="process">Процесс</ScrollLink>
          </li>
          <li>
            <ScrollLink to="benefits">Преимущества</ScrollLink>
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
    <header className={styles.header}>{isUp('sm') && renderDesktop()}</header>
  );
};

export default Header;
