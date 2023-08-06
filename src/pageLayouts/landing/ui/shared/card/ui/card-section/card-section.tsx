import React, { PropsWithChildren } from 'react';
import classnames from 'classnames';
import styles from './card-section.module.scss';

type CardSectionProps = PropsWithChildren<{
  type?: 'solid' | 'outlined';
}>;

const CardSection = ({ children, type }: CardSectionProps) => {
  return <div className={classnames(styles.cardSection, type)}>{children}</div>;
};

export default CardSection;
