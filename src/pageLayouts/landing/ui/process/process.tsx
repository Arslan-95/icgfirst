'use client';

import React from 'react';
import styles from './process.module.scss';
import {
  BackgroundFigure,
  CollapsiblePanel,
  CollapsiblePanelSection,
  Container,
} from '../shared';
import { STEPS } from './lib';
import { useAdaptive } from '@/shared/breakpoints';

const Process = () => {
  const { isDown } = useAdaptive();
  const isDownThanMd = isDown('md');

  return (
    <div className={styles.process} id="process">
      <Container className={styles.process__container}>
        <BackgroundFigure
          size={546}
          visibleAdaptive={{
            from: 'md',
          }}
          position={{
            top: -45,
            right: -242,
          }}
        />
        <BackgroundFigure
          size={387}
          visibleAdaptive={{
            from: 'md',
          }}
          position={{
            top: -98,
            right: 133,
          }}
        />
        <BackgroundFigure
          size={163.57}
          visibleAdaptive={{
            to: 'sm',
          }}
          position={{
            bottom: -178.57,
            right: -17,
          }}
        />
        <div className={styles.process__content}>
          <h2>Как происходит наше сотрудничество</h2>
          <div className={styles.steps}>
            <CollapsiblePanelSection gap={isDownThanMd ? '12px' : '7px'}>
              {STEPS.map((step) => (
                <CollapsiblePanel key={step.id} {...step} />
              ))}
            </CollapsiblePanelSection>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Process;
