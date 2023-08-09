'use client';

import React from 'react';
import Image from 'next/image';
import Typography from '../../../typography/typography';
import { CardProps } from '../../types';
import styles from './solid-card.module.scss';
import classnames from 'classnames';
import { useAdaptive } from '@/shared/breakpoints';

const SolidCard = ({
  title,
  description,
  img,
  curved,
}: CardProps & { curved?: boolean }) => {
  const { isDown } = useAdaptive();

  return (
    <div className={classnames(styles.card, { curved })}>
      <Image src={img} alt={title} />
      <div className={styles.card__typographySection}>
        <Typography component="h5" size={isDown('md') ? 'sm' : 'md'}>
          {title}
        </Typography>
        <Typography size="xs">{description}</Typography>
      </div>
    </div>
  );
};

export default SolidCard;
