'use client';

import React from 'react';
import styles from './process.module.scss';
import {
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
    <div className={styles.process}>
      <Container>
        <h2>Как происходит наше сотрудничество</h2>
        <div className={styles.steps}>
          <CollapsiblePanelSection gap={isDownThanMd ? '12px' : '7px'}>
            {STEPS.map((step) => (
              <CollapsiblePanel key={step.id} {...step} />
            ))}
          </CollapsiblePanelSection>
        </div>
      </Container>
    </div>
  );
};

export default Process;
