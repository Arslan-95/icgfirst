'use client';

import React from 'react';
import styles from './system-capabilities.module.scss';
import {
  BackgroundFigure,
  CollapsiblePanel,
  CollapsiblePanelSection,
  Container,
} from '../shared';
import { CAPABILITIES } from './lib';
import { useAdaptive } from '@/shared/breakpoints';
import creditCardImage from '../shared/assets/credit-card-background.png';
import Image from 'next/image';

const SystemCapabilities = () => {
  const { isDown } = useAdaptive();
  const isDownThanMd = isDown('md');

  return (
    <div className={styles.systemCapabilities}>
      <Container className={styles.systemCapabilities__container}>
        <BackgroundFigure
          size={387}
          position={{
            top: -90,
            right: 321,
          }}
          visibleAdaptive={{
            from: 'md',
          }}
        />
        <BackgroundFigure
          size={546}
          position={{
            top: -30,
            right: -41,
          }}
          visibleAdaptive={{
            from: 'md',
          }}
        />
        <BackgroundFigure
          size={546}
          position={{
            top: 535,
            left: -243,
          }}
          visibleAdaptive={{
            from: 'md',
          }}
        />
        {!isDownThanMd && (
          <Image
            className={styles.creditCardBg}
            src={creditCardImage}
            alt="credit card"
          />
        )}
        <div className={styles.systemCapabilities__content}>
          <h2>Возможности для внешно-экономической деятельности</h2>
          <div className={styles.capabilities}>
            <CollapsiblePanelSection gap={isDownThanMd ? '12px' : '14px'}>
              {CAPABILITIES.map((capability) => (
                <CollapsiblePanel key={capability.id} {...capability} />
              ))}
            </CollapsiblePanelSection>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SystemCapabilities;
