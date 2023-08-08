'use client';

import React from 'react';
import styles from './footer.module.scss';
import {
  Container,
  TelegramButton,
  WhatsappButton,
} from '@/pageLayouts/landing/ui/shared';
import { useAdaptive } from '@/shared/breakpoints';

const Footer = () => {
  const { isDown } = useAdaptive();
  const isDownThanMd = isDown('md');

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__container}>
          <div className={styles.footer__contacts}>
            <div className={styles.footer__contacts__item}>
              <a href="tel:+90 534 926 3782" className={styles.footer__contact}>
                +90 534 926 3782
              </a>
              <span className={styles.footer__workTime}>
                ПН-ПТ 9:00 - 18:00
              </span>
            </div>
            <div className={styles.footer__contacts__item}>
              <a
                href="mailto:sarakaevarslan@gmail.com"
                className={styles.footer__contact}
              >
                sarakaevarslan@gmail.com
              </a>
              <span className={styles.footer__workTime}>
                ПН-ПТ 9:00 - 18:00
              </span>
            </div>
            <div className={styles.footer__contacts__item}>
              <div className={styles.footer__socialIcons}>
                <WhatsappButton size={isDownThanMd ? 'large' : 'extra-large'} />
                <TelegramButton size={isDownThanMd ? 'large' : 'extra-large'} />
              </div>
            </div>
          </div>
          <p className={styles.footerText}>
            Политика обработки и защиты персональных данных Согласие на
            обработку персональных данных Согласие на рассылку электронных
            сообщений
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
