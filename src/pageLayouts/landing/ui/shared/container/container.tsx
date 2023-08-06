import React, { PropsWithChildren } from 'react';
import styles from './container.module.scss';
import classnames from 'classnames';

const Container = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={classnames(styles.container, className)}>{children}</div>
  );
};

export default Container;
