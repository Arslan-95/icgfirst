import React from 'react';
import Image from 'next/image';
import { Typography } from '@/shared/ui';
import { CardProps } from '../../types';
import styles from './solid-card.module.scss';
import classnames from 'classnames';

const SolidCard = ({
  title,
  description,
  img,
  curved,
}: CardProps & { curved?: boolean }) => {
  return (
    <div className={classnames(styles.card, { curved })}>
      <Image src={img} alt={title} />
      <div className={styles.card__typographySection}>
        <Typography component="h5" size="md">
          {title}
        </Typography>
        <Typography size="xs">{description}</Typography>
      </div>
    </div>
  );
};

export default SolidCard;
