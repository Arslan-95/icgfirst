'use client';

import React from 'react';
import styles from './system-capabilities.module.scss';
import {
  CollapsiblePanel,
  CollapsiblePanelSection,
  Container,
} from '../shared';
import { CAPABILITIES } from './lib';
import { useAdaptive } from '@/shared/breakpoints';

const SystemCapabilities = () => {
  const { isUp } = useAdaptive();
  const isUpThanMd = isUp('md');

  return (
    <div className={styles.systemCapabilities}>
      <Container>
        <h2>Возможности для внешно-экономической деятельности</h2>
        <div className={styles.capabilities}>
          <CollapsiblePanelSection gap={isUpThanMd ? '14px' : '12px'}>
            {CAPABILITIES.map((capability) => (
              <CollapsiblePanel key={capability.id} {...capability} />
            ))}
          </CollapsiblePanelSection>
        </div>
      </Container>
    </div>
  );
};

export default SystemCapabilities;