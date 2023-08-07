import React, { PropsWithChildren } from 'react';
import styles from './collasible-panel-section.module.scss';

const CollasiblePanelSection = ({
  children,
  gap,
}: PropsWithChildren<{ gap: string }>) => {
  return (
    <div className={styles.collapsiblePanelSection} style={{ gap }}>
      {children}
    </div>
  );
};

export default CollasiblePanelSection;
