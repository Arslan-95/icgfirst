import React from 'react';
import { CardSection, SolidCard } from '../shared/card';
import { FEATURES } from './lib';
import { BackgroundFigure, Container } from '../shared';
import { SubmitButton } from '../shared';
import styles from './features.module.scss';

const Features = () => {
  return (
    <div className={styles.features}>
      <Container className={styles.features__container}>
        <BackgroundFigure
          size={271.55}
          visibleAdaptive={{
            to: 'sm',
          }}
          position={{
            top: 445,
            left: -90,
          }}
        />
        <div className={styles.features__content}>
          <CardSection type="solid">
            {FEATURES.map((card) => (
              <SolidCard curved key={card.id} {...card} />
            ))}
          </CardSection>
          <SubmitButton />
        </div>
      </Container>
    </div>
  );
};

export default Features;
