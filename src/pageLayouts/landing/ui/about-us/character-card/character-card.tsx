'use client';

import React from 'react';
import { Typography } from '../../shared';
import image from '../../shared/assets/poroshin-photo.png';
import styles from './character-card.module.scss';
import Image from 'next/image';
import { useAdaptive } from '@/shared/breakpoints';

const CharacterCard = () => {
  const { isDown } = useAdaptive();
  const isDownThanMd = isDown('md');

  return (
    <div className={styles.characterCard}>
      <div className={styles.characterCard__header}>
        <Typography
          size={isDownThanMd ? 'md' : 'xl'}
          component="h3"
          className={styles.title}
        >
          Алексей
          <br />
          Порошин
        </Typography>
        <Image src={image} alt="Алексей Порошин" />
        <Typography size="xs" className={styles.subtitle}>
          Руководитель
          <br />
          АО «ПЕРВАЯ ГРУППА»
        </Typography>
      </div>
      <div className={styles.list__wrapper}>
        <ul className={styles.list}>
          <li className={styles.item}>
            Член Генерального совета «Деловой России»
          </li>
          <li className={styles.item}>
            Член Экспертных советов Государственной думы, Министерства
            промышленности и торговли РФ, Ассоциации банков России и прочих
            госструктур
          </li>
          <li className={styles.item}>
            Эксперт в области экономики и финансов
          </li>
          <li className={styles.item}>
            Занимается исследованием и разработкой стратегий в области
            инвестирования
          </li>
          <li className={styles.item}>
            Соучредитель и управляющий партнер фонда LETA Capital
          </li>
          <li className={styles.item}>
            Занимается вопросами обеспечения технологического суверенитета
            России
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterCard;
