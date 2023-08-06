import React from 'react';
import { CardSection, SolidCard } from '../shared/card';
import { FEATURES } from './lib';
import { Container } from '../shared';
import { SubmitButton } from '../shared';
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
