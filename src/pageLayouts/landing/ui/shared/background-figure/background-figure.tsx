'use client';

import React from 'react';
import { BreakpointKeys, useAdaptive } from '@/shared/breakpoints';
import styles from './background-figure.module.scss';

type BackgroundFigureProps = {
  size: string | number;
  position: {
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
    left?: string | number;
  };
  visibleAdaptive: {
    from?: BreakpointKeys;
    to?: BreakpointKeys;
  };
};

const BackgroundFigure = ({
  size,
  position,
  visibleAdaptive,
}: BackgroundFigureProps) => {
  const { isDown, isUp } = useAdaptive();

  if (visibleAdaptive.from && isDown(visibleAdaptive.from)) {
    return null;
  }

  if (visibleAdaptive.to && isUp(visibleAdaptive.to)) {
    return null;
  }

  return (
    <div
      className={styles.backgroundFigure}
      style={{
        width: size,
        height: size,
        ...position,
      }}
    />
  );
};

export default BackgroundFigure;
