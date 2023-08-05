import React from 'react';
import { CardSection, SolidCard } from '@/shared/ui/card';
import { FEATURES } from './lib';
import { Container } from '@/shared/ui';
import { SubmitButton } from '@/entities/submit-button';
import styles from './features.module.scss';

const Features = () => {
  return (
    <div className={styles.features}>
      <Container className={styles.features__container}>
        <CardSection type="solid">
          {FEATURES.map((card) => (
            <SolidCard curved key={card.id} {...card} />
          ))}
        </CardSection>
        <SubmitButton />
      </Container>
    </div>
  );
};

export default Features;
