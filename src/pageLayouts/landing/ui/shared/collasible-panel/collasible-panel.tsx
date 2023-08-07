'use client';

import React, { useState } from 'react';
import styles from './collasible-panel.module.scss';
import Typography from '../typography/typography';
import classnames from 'classnames';
import { useAdaptive } from '@/shared/breakpoints';

export interface ICollapsiblePanel {
  title: string;
  description: string;
  id: number;
}

const CollasiblePanel = ({
  title,
  description,
}: Omit<ICollapsiblePanel, 'id'>) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isUp } = useAdaptive();
  const isUpThanMd = isUp('md');

  return (
    <div className={classnames(styles.collapsiblePanel, { isOpen })}>
      <div
        className={styles.collapsiblePanel__panel}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Typography size={isUpThanMd ? 'xl' : 'sm'} component="h4">
          {title}
        </Typography>
        <span className={styles.collapsiblePanel__toggler}>
          {isOpen ? '-' : '+'}
        </span>
      </div>
      {isOpen && (
        <div className={styles.collapsiblePanel__content}>
          <Typography size={isUpThanMd ? 'lg' : 'xs'}>{description}</Typography>
        </div>
      )}
    </div>
  );
};

export default CollasiblePanel;
