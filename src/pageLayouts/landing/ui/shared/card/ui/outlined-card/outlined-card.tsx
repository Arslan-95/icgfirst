import React from 'react';
import Image from 'next/image';
import { CardProps } from '../..';
import { Typography } from '../../..';
import styles from './outlined-card.module.scss';

const OutlinedCard = ({ title, img, description }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.outlines}>
        <div className={styles.outline__top} />
        <div className={styles.outline__right} />
        <div className={styles.outline__left} />
        <div className={styles.outline__bottom} />
      </div>
      <Image src={img} alt={title} />
      <div className={styles.card__typographySection}>
        <Typography component="h5" className={styles.card__title}>
          {title}
        </Typography>
        <Typography className={styles.card__description}>
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default OutlinedCard;
