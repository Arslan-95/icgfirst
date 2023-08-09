'use client';

import React from 'react';
import styles from './main.module.scss';
import { Button, Container, Typography } from '../shared';
import { useAdaptive } from '@/shared/breakpoints';
import { Link as ScrollLink } from 'react-scroll';

const Main = () => {
  const breakpoints = useAdaptive();

  return (
    <section className={styles.main}>
      <div className={styles.content__wrapper}>
        <Container>
          <div className={styles.content}>
            <h1>
              Получайте платежи
              <br />
              со всего мира за 1–2 дня
            </h1>
            <Typography
              size={breakpoints.isDown('md') ? 'md' : 'xl'}
              className={styles.description}
            >
              Помогаем российскому бизнесу легально проводить оплаты в условиях
              глобальной изоляции
            </Typography>
            <ScrollLink
              className={styles.button}
              duration={500}
              to="about-us"
              smooth
            >
              <Button size="medium" variant="primary" className={styles.button}>
                подробнее о нас
              </Button>
            </ScrollLink>
          </div>
        </Container>
      </div>
      <div className={styles.bg}>
        <div className={styles.bgOverlay} />
      </div>
    </section>
  );
};

export default Main;
