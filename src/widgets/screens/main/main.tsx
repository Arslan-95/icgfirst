'use client';

import React from 'react';
import styles from './main.module.scss';
import { Button, Container, Typography } from '@/shared/ui';
import { useAdaptive } from '@/shared/breakpoints';

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
              size={breakpoints.isUp('md') ? 'xl' : 'md'}
              className={styles.description}
            >
              Помогаем российскому бизнесу легально проводить оплаты в условиях
              глобальной изоляции
            </Typography>
            <Button size="medium" variant="primary" className={styles.button}>
              подробнее о нас
            </Button>
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
