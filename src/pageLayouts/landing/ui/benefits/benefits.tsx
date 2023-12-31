'use client';

import React from 'react';
import { CardSection, SolidCard } from '../shared';
import { BENEFITS } from './lib';
import { Container } from '../shared';
import styles from './benefits.module.scss';
import { useAdaptive } from '@/shared/breakpoints';

const Benefits = () => {
  const { isDown } = useAdaptive();

  return (
    <div className={styles.benefits} id="benefits">
      <Container className={styles.benefits__container}>
        <h2>Проверенная база торговых домов по всему миру. А ещё:</h2>
        <CardSection type="solid">
          {BENEFITS.map((card) => (
            <SolidCard curved={isDown('md')} key={card.id} {...card} />
          ))}
        </CardSection>
      </Container>
    </div>
  );
};

export default Benefits;
